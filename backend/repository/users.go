package repository

import (
	"database/sql"
	"errors"
)


type UserRepository struct {
	db *sql.DB
}

func NewUserRepository(db *sql.DB) *UserRepository {
	return &UserRepository{db: db}
}

func (u *UserRepository) FetchUserByID(id int64) (*User, error) {
	var user User
	sqlStatement  := `SELECT * FROM users WHERE id = ?`

	row := u.db.QueryRow(sqlStatement, id)
	err := row.Scan(
		&user.ID,
		&user.Username,
		&user.Password,
		&user.Loggedin,
	)

	if err != nil {
		return nil, err
	}

	return &user, nil // TODO: replace this
}

func (u *UserRepository) FetchUsers() ([]User, error) {
	var sqlStatement string
	var users []User

	//TODO: add sql statement here
	//HINT: join table cart_items and products
	sqlStatement = `SELECT * FROM users`

	rows, err := u.db.Query(sqlStatement)
	if err != nil {
		return nil , err
	}
	defer rows.Close()
	for rows.Next() {
		var user User

		err := rows.Scan(
			&user.ID,
			&user.Username,
			&user.Password,
			&user.Loggedin,
		)
		if err != nil {
			return nil, err
		}
		users = append(users, user)
	}

	return users, nil // TODO: replace this
}

func (u *UserRepository) ChangeStatus(status bool, id int64) error {
	sqlStmt := `UPDATE users SET loggedin = ? WHERE id = ?`

	_,err := u.db.Exec(sqlStmt, status, id)

	if err != nil {
		return err
	}

	return nil
}

func (u *UserRepository) Login(username string, password string) (*string, error) {

	users, err := u.FetchUsers()

	if err != nil {
		return nil, err
	}

	for _, user := range users {
		if user.Username == username {
			if user.Password == password {
				u.ChangeStatus(true, user.ID)
				return &user.Username, nil
			} else {
				return nil, errors.New("username atau password anda tidak valid")
			}
		}
	}
	return nil, errors.New("username atau password anda tidak valid") // TODO: replace this
}

func (u *UserRepository) InsertUser(username string, password string, role string, loggedin bool) error {
	sqlStatement := `INSERT INTO users (username, password, loggedin) 
	VALUES (?, ?, ?, ?)`

	_, err := u.db.Exec(sqlStatement, username, password, loggedin)
	if err != nil {
		return err
	}
	return nil // TODO: replace this
}


func (u *UserRepository) FindLoggedInUser() ([]string,error) {
	sqlStmt := `SELECT username FROM users WHERE loggedin = true`

	row, err := u.db.Query(sqlStmt)

	if err != nil {
		return nil, errors.New("tidak ada user yang login")
	}

	defer row.Close()

	var usernames []string
	for row.Next() {
		var username string

		err := row.Scan(&username)

		if err  != nil {
			return nil, err
		}

		usernames = append(usernames, username)
	}

	return usernames, nil
} 

