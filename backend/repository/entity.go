package repository

type User struct {
	ID       int64  `db:"id"`
	Username string `db:"username"`
	Password string `db:"password"`
	Fullname string `db:"fullname"`
	Loggedin bool   `db:"loggedin"`
	Token    string
}

