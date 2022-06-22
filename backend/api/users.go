package api

import (
	"encoding/json"
	"net/http"
	"github.com/golang-jwt/jwt/v4"
)

type UsersListErrorResponse struct {
	Error string `json:"error"`
}

type User struct {
	Fullname 	string `json:"fullname"`
	Email 		string `json:"email"`
	Role 		string `json:"role"`
	Loggedin 	bool   `json:"loggedin"`
}

type UserProfile struct {
	Fullname 	string `json:"fullname"`
	Email 		string `json:"email"`
	Role 		string `json:"role"`
}

type UserProfileResponse struct {
	UserProfile UserProfile `json:"user_profile"`
}

type UsersListSuccessResponse struct {
	Users []User `json:"users"`
}

func (api *API) userList(w http.ResponseWriter, req *http.Request) {
	api.AllowOrigin(w, req)
	encoder := json.NewEncoder(w)

	response := UsersListSuccessResponse{}
	response.Users = make([]User, 0)

	users, err := api.usersRepo.FetchUsers()

	if err != nil {
		w.WriteHeader(http.StatusBadRequest)
			encoder.Encode(UsersListErrorResponse{Error: err.Error()})
			return
	}

	for _, user := range users {
		response.Users = append(response.Users, User{
			Fullname:  user.Fullname,
			Email:    user.Email,
			Role: user.Role,
			Loggedin: user.Loggedin,
		})
	}

	w.WriteHeader(http.StatusOK)
	encoder.Encode(response)
}

func (api *API) userProfile(w http.ResponseWriter, req *http.Request) {
	api.AllowOrigin(w, req)
	encoder := json.NewEncoder(w)
	token, err := req.Cookie("token")
	if err != nil {
		if err == http.ErrNoCookie {
			// return unauthorized ketika token kosong
			w.WriteHeader(http.StatusUnauthorized)
			encoder.Encode(AuthErrorResponse{Error: err.Error()})
			return
		}
		// return bad request ketika field token tidak ada
		w.WriteHeader(http.StatusBadRequest)
		encoder.Encode(AuthErrorResponse{Error: err.Error()})
		return
	}
	
	if token.Value == "" {
		w.WriteHeader(http.StatusUnauthorized)
		return
	}
	
	tknStr := token.Value

		claims := &Claims{}

		secretKey := getSecretKey()
		//parse JWT token ke dalam claim
		tkn, err := jwt.ParseWithClaims(tknStr, claims, func(token *jwt.Token) (interface{}, error) {
			return []byte(secretKey), nil
		})

		if err != nil {
			if err == jwt.ErrSignatureInvalid {
				// return unauthorized ketika signature invalid
				w.WriteHeader(http.StatusUnauthorized)
				encoder.Encode(AuthErrorResponse{Error: err.Error()})
				return
			}
			// return bad request ketika field token tidak ada
			w.WriteHeader(http.StatusBadRequest)
			encoder.Encode(AuthErrorResponse{Error: err.Error()})
			return
		}

		//return unauthorized ketika token sudah tidak valid (biasanya karna token expired)
		if !tkn.Valid {
			w.WriteHeader(http.StatusUnauthorized)
			encoder.Encode(AuthErrorResponse{Error: err.Error()})
			return
		}

		user, err := api.usersRepo.FetchUserByEmail(claims.Email)

		if err != nil {
			w.WriteHeader(http.StatusUnauthorized)
			encoder.Encode(AuthErrorResponse{Error: err.Error()})
			return
		}

		response := UserProfileResponse{}
		response.UserProfile = UserProfile{
				Fullname: user.Fullname,
				Email: user.Email,
				Role: user.Role,
		}
	
		w.WriteHeader(http.StatusOK)
		encoder.Encode(response)
}