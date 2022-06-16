package main

import (
	"database/sql"
	//"fmt"

	"github.com/rg-km/final-project-engineering-51/backend/api"
	"github.com/rg-km/final-project-engineering-51/backend/repository"

	_ "github.com/mattn/go-sqlite3"
)

func main() {
	db, err := sql.Open("sqlite3", "backend/db/kenaliaku.db")
	if err != nil {
		panic(err)
	}

	usersRepo := repository.NewUserRepository(db)


	mainAPI := api.NewAPI(*usersRepo)
	mainAPI.Start()
}