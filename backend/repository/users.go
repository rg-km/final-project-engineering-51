package repository

import (
	"database/sql"
	"errors"
	"log"

	"golang.org/x/crypto/bcrypt"
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
		&user.Fullname,
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
			&user.Fullname,
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

func (u *UserRepository) ChangeStatus(status bool, username string) error {
	sqlStmt := `UPDATE users SET loggedin = ? WHERE username = ?`

	_,err := u.db.Exec(sqlStmt, status, username)

	if err != nil {
		return err
	}

	return nil
}

func compareHashPassword(hashpass, pass string) bool {
	byteHash := []byte(hashpass)
	err := bcrypt.CompareHashAndPassword(byteHash,[]byte(pass))
	if err != nil {
		log.Println(err)
		return false
	}

	return true
}

func (u *UserRepository) Login(username string, password string) (*string, error) {

	users, err := u.FetchUsers()

	if err != nil {
		return nil, err
	}

	for _, user := range users {
		if user.Username == username {
			if compareHashPassword(user.Password, password) {
				u.ChangeStatus(true, user.Username)
				return &user.Username, nil
			} else {
				return nil, errors.New("username atau password anda tidak valid")
			}
		}
	}
	return nil, errors.New("username atau password anda tidak valid") // TODO: replace this
}

func hashPassword(password []byte) string {
	
	hash, err := bcrypt.GenerateFromPassword(password, bcrypt.MinCost)
	if err != nil {
		panic("Failed to hash password")
	}
	return string(hash)
}

func(u *UserRepository) IsDuplicateUsername(username string)bool {
	users, _ := u.FetchUsers()

	for _,user := range users {
		if user.Username == username {
			return true
		}
	}

	return false
}

func(u *UserRepository) IsDuplicatePass(password string)bool {
	users, _ := u.FetchUsers()

	for _,user := range users {
		if compareHashPassword(user.Password, password) {
			return true
		}
	}

	return false
}

func (u *UserRepository) InsertUser(fullname string, username string, password string) (*string, error) {
	hashPassword := hashPassword([]byte(password))
	sqlStatement := `INSERT INTO users (fullname, username, password, loggedin) 
	VALUES (?, ?, ?, false)`

	_, err := u.db.Exec(sqlStatement, fullname, username, hashPassword)
	if err != nil {
		return nil, err
	}
	return &username ,nil // TODO: replace this
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

