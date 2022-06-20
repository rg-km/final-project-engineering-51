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

type Soal struct {
	No int64 `db:"no_soal"`
	Desc string `db:"desc_soal"`
}

type Nilai struct {
	ID int64 `db:"id"`
	Fullname string `db:"fullname"`
	Email string `db:"email"`
	NilaiR string `db:"nilai_R"`
	NilaiI string `db:"nilai_I"`
	NilaiA string `db:"nilai_A"`
	NilaiS string `db:"nilai_S"`
	NilaiE string `db:"nilai_E"`
	NilaiC string `db:"nilai_C"`
}

type Result struct {
	ID int64 `db:"id"`
	Fullname string `db:"fullname"`
	Email string `db:"email"`
	Kategori string `db:"kategori_tertinggi"`
	Saran1 string `db:"saran_1"`
	Saran2 string `db:"saran_2"`
	Saran3 string `db:"saran_3"`
	Saran4 string `db:"saran_4"`
}

