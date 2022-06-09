package main

import (
	"database/sql"

	"github.com/rg-km/final-project-engineering-51/backend/api"
	"github.com/rg-km/final-project-engineering-51/backend/repository"

	_ "github.com/mattn/go-sqlite3"
)

func main() {
	db, err := sql.Open("sqlite3", "backend/database/assigment/cashier-app/db/cashier-app.db")
	if err != nil {
		panic(err)
	}

	usersRepo := repository.NewUserRepository(db)


	mainAPI := api.NewAPI(*usersRepo)
	mainAPI.Start()
}