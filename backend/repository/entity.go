package repository

type User struct {
	ID       int64  `db:"id"`
	Fullname string `db:"fullname"`
	Email string `db:"email"`
	Password string `db:"password"`
	Role string `db:"role"`
	Loggedin bool   `db:"loggedin"`
	Token    string
}

