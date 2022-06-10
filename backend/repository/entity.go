package repository

type User struct {
	ID       int64  `db:"id"`
	Fullname string `db:"fullname"`
	Username string `db:"username"`
	Password string `db:"password"`
	Loggedin bool   `db:"loggedin"`
	Token    string
}

