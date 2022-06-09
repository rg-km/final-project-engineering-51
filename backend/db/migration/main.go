package main

import (
	 "database/sql"
	 _ "github.com/mattn/go-sqlite3"
)

func main() {
	db, err := sql.Open("sqlite3", "backend/db/kenaliaku.db")
	if err != nil {
		panic(err)
	}

	_, err = db.Exec(`
	CREATE TABLE IF NOT EXISTS users (
    id integer not null primary key AUTOINCREMENT,
	fullname varchar(255) not null,
    username varchar(255) not null,
    password varchar(255) not null,
    loggedin boolean not null
);`)

	if err != nil {
		panic(err)
	}
}