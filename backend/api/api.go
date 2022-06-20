package api

import (
	"fmt"
	"net/http"

	"github.com/rg-km/final-project-engineering-51/backend/repository"
)

type API struct {
	usersRepo repository.UserRepository
	soalRepo repository.SoalRepository
	resultRepo repository.ResultRepository
	mux             *http.ServeMux
}

func NewAPI(usersRepo repository.UserRepository, soalRepo repository.SoalRepository, resultRepo repository.ResultRepository) API {
	mux := http.NewServeMux()
	api := API{
		usersRepo,
		soalRepo,
		resultRepo,
		mux,
	}
	// User API
	mux.Handle("/api/user/login", api.POST(http.HandlerFunc(api.login)))
	mux.Handle("/api/user/logout", api.POST(http.HandlerFunc(api.logout)))
	mux.Handle("/api/user/register", api.POST(http.HandlerFunc(api.register)))
	mux.Handle("/api/user/profile", api.GET(api.AuthMiddleWare(http.HandlerFunc(api.userProfile))))

	// API with AuthMiddleware:
	// Test Minat Bakat API :
	mux.Handle("/api/test/soal", api.GET(api.AuthMiddleWare(http.HandlerFunc(api.getSoal))))
	mux.Handle("/api/test/submit", api.POST(api.AuthMiddleWare(http.HandlerFunc(api.submit))))
	mux.Handle("/api/test/result", api.GET(api.AuthMiddleWare(http.HandlerFunc(api.getResult))))

	// // API with AuthMiddleware and AdminMiddleware
	// Admin API
	mux.Handle("/api/admin/users", api.GET(api.AuthMiddleWare(api.AdminMiddleware(http.HandlerFunc(api.userList)))))
	mux.Handle("/api/admin/nilai", api.GET(api.AuthMiddleWare(api.AdminMiddleware(http.HandlerFunc(api.getNilai)))))

	return api
}

func (api *API) Handler() *http.ServeMux {
	return api.mux
}

func (api *API) Start() {
	fmt.Println("starting web server at http://localhost:8080/")
	http.ListenAndServe(":8080", api.Handler())
}