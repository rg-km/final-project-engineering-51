package api

import (
	"encoding/json"
	"net/http"

	"github.com/golang-jwt/jwt/v4"
	"github.com/rg-km/final-project-engineering-51/backend/repository"
)


type ResultErrorResponse struct {
	Error string `json:"error"`
}

type AnswerReq struct {
	Answers [60]repository.Answer `json:"answers"`
}

type Result struct {
	Fullname string `json:"fullname"`
	Email string `json:"email"`
	NilaiR string `json:"nilai_R"`
	NilaiI string `json:"nilai_I"`
	NilaiA string `json:"nilai_A"`
	NilaiS string `json:"nilai_S"`
	NilaiE string `json:"nilai_E"`
	NilaiC string `json:"nilai_C"`
	Kategori string `json:"kategori_tertinggi"`
	Desc string `json:"desc"`
	Saran1 string `json:"saran_1"`
	Saran2 string `json:"saran_2"`
	Saran3 string `json:"saran_3"`
	Saran4 string `json:"saran_4"`
}

type Nilai struct {
	Fullname string `json:"fullname"`
	Email string `json:"email"`
	NilaiR string `json:"nilai_R"`
	NilaiI string `json:"nilai_I"`
	NilaiA string `json:"nilai_A"`
	NilaiS string `json:"nilai_S"`
	NilaiE string `json:"nilai_E"`
	NilaiC string `json:"nilai_C"`
}

type ResultResponse struct {
	ResultResponse Result `json:"result"`
}

type NilaiListSuccessResponse struct {
	Nilai []Nilai `json:"nilai"`
}
 

func (api *API) submit(w http.ResponseWriter, req *http.Request) {
	api.AllowOrigin(w, req)
	encoder := json.NewEncoder(w)
	token, err := req.Cookie("token")
	if err != nil {
		if err == http.ErrNoCookie {
			// return unauthorized ketika token kosong
			w.WriteHeader(http.StatusUnauthorized)
			encoder.Encode(ResultErrorResponse{Error: err.Error()})
			return
		}
		// return bad request ketika field token tidak ada
		w.WriteHeader(http.StatusBadRequest)
		encoder.Encode(ResultErrorResponse{Error: err.Error()})
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
				encoder.Encode(ResultErrorResponse{Error: err.Error()})
				return
			}
			// return bad request ketika field token tidak ada
			w.WriteHeader(http.StatusBadRequest)
			encoder.Encode(ResultErrorResponse{Error: err.Error()})
			return
		}

		//return unauthorized ketika token sudah tidak valid (biasanya karna token expired)
		if !tkn.Valid {
			w.WriteHeader(http.StatusUnauthorized)
			encoder.Encode(ResultErrorResponse{Error: err.Error()})
			return
		}

		var answer AnswerReq
		err = json.NewDecoder(req.Body).Decode(&answer)
		if err != nil {
			w.WriteHeader(http.StatusBadRequest)
			return
		}

		_, err = api.resultRepo.FetchNilaiByEmail(claims.Email)

		if err != nil {
			err = api.resultRepo.Submit(claims.Email,answer.Answers)

			if err != nil {
				w.WriteHeader(http.StatusBadRequest)
				encoder.Encode(ResultErrorResponse{Error: err.Error()})
				return
			}
		}

		err = api.resultRepo.ReSubmit(claims.Email,answer.Answers)

		if err != nil {
			w.WriteHeader(http.StatusBadRequest)
			encoder.Encode(ResultErrorResponse{Error: err.Error()})
			return
		}

		w.WriteHeader(http.StatusOK)
}

func (api *API) getResult(w http.ResponseWriter, req *http.Request) {
	api.AllowOrigin(w, req)
	encoder := json.NewEncoder(w)
	token, err := req.Cookie("token")
	if err != nil {
		if err == http.ErrNoCookie {
			// return unauthorized ketika token kosong
			w.WriteHeader(http.StatusUnauthorized)
			encoder.Encode(ResultErrorResponse{Error: err.Error()})
			return
		}
		// return bad request ketika field token tidak ada
		w.WriteHeader(http.StatusBadRequest)
		encoder.Encode(ResultErrorResponse{Error: err.Error()})
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
				encoder.Encode(ResultErrorResponse{Error: err.Error()})
				return
			}
			// return bad request ketika field token tidak ada
			w.WriteHeader(http.StatusBadRequest)
			encoder.Encode(ResultErrorResponse{Error: err.Error()})
			return
		}

		//return unauthorized ketika token sudah tidak valid (biasanya karna token expired)
		if !tkn.Valid {
			w.WriteHeader(http.StatusUnauthorized)
			encoder.Encode(ResultErrorResponse{Error: err.Error()})
			return
		}

		nilai, err := api.resultRepo.FetchNilaiByEmail(claims.Email)

		if err != nil {
			w.WriteHeader(http.StatusBadRequest)
			encoder.Encode(ResultErrorResponse{Error: err.Error()})
			return
		}

		hasil, err := api.resultRepo.FetchResultByEmail(claims.Email)


		if err != nil {
			w.WriteHeader(http.StatusBadRequest)
			encoder.Encode(ResultErrorResponse{Error: err.Error()})
			return
		}

		response := ResultResponse{}
		response.ResultResponse = Result{
			Fullname: nilai.Fullname,
			Email: nilai.Email,
			NilaiR: nilai.NilaiR,
			NilaiI: nilai.NilaiI,
			NilaiA: nilai.NilaiA,
			NilaiS: nilai.NilaiS,
			NilaiE: nilai.NilaiE,
			NilaiC: nilai.NilaiC,
			Kategori: hasil.Kategori,
			Desc:  hasil.Desc,
			Saran1: hasil.Saran1,
			Saran2: hasil.Saran2,
			Saran3: hasil.Saran3,
			Saran4: hasil.Saran4,
	}

		w.WriteHeader(http.StatusOK)
		encoder.Encode(response)
}

func (api *API) getNilai(w http.ResponseWriter, req *http.Request) {
	api.AllowOrigin(w, req)
	encoder := json.NewEncoder(w)

	response := NilaiListSuccessResponse{}
	response.Nilai = make([]Nilai, 0)

	nilai, err := api.resultRepo.FetchNilai()

	if err != nil {
		w.WriteHeader(http.StatusBadRequest)
			encoder.Encode(ResultErrorResponse{Error: err.Error()})
			return
	}

	for _, score := range nilai {
		response.Nilai = append(response.Nilai, Nilai{
			Fullname: score.Fullname,
			Email: score.Email,
			NilaiR: score.NilaiR,
			NilaiI: score.NilaiI,
			NilaiA: score.NilaiA,
			NilaiS: score.NilaiS,
			NilaiE: score.NilaiE,
			NilaiC: score.NilaiC,
		})
	}

	w.WriteHeader(http.StatusOK)
	encoder.Encode(response)
}

