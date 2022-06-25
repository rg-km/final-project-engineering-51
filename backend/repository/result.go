package repository

import (
	"database/sql"
	"errors"
	//"fmt"
)


type ResultRepository struct {
	db *sql.DB
}

func NewResultRepository(db *sql.DB) *ResultRepository {
	return &ResultRepository{db: db}
}

func(r *ResultRepository) FetchKategoriByNoSoal(NoSoal int64) (*string, error){

	sqlStatement := `SELECT k.nama FROM soal s INNER JOIN kategori k ON s.kategori_id = k.id WHERE s.no_soal = ?`

	row := r.db.QueryRow(sqlStatement, NoSoal)

		var kategori string
		err := row.Scan(
			&kategori,
		)
		if err != nil {
			return nil, err
		}

	return &kategori, nil
} 

func maxKategori(nilai map[string]int64) string {
	var maxVal int64
	var maxKey string

	for k, v := range nilai{
		maxVal = v
		maxKey = k
		break
	}

	for k, v := range nilai{
		if v > maxVal {
			maxVal = v
			maxKey = k
		}
	}

	return maxKey
}

func (r *ResultRepository) Submit(email string, answer [60]Answer) (error) {
	kategoriMap := make(map[string]int64)
	if len(answer) > 60 {
		return errors.New("jumlah data jawaban lebih dari 60")
	} 
	if len(answer) < 60 {
		return errors.New("jumlah data jawaban kurang dari 60")
	} 

	for _, ans := range answer {
		
		if ans.Answer{
			kategori, err := r.FetchKategoriByNoSoal(ans.No)
			if err != nil{
			return err
		}
		kategoriMap[*kategori]++
		}
		
	}

	maxKategori := maxKategori(kategoriMap)

	tx, err := r.db.Begin()
	if err != nil {
		return err
	}
	
	sqlStatement := `INSERT INTO nilai 
	(user_id, nilai_R, nilai_I, nilai_A, nilai_S, nilai_E, nilai_C)
	VALUES ((SELECT id FROM users WHERE email = ?),?,?,?,?,?,?)`

	_,err = tx.Exec(sqlStatement, email,
		kategoriMap["Realistic"] * 10,
		kategoriMap["Investigative"] * 10,
		kategoriMap["Artistic"] * 10,
		kategoriMap["Social"] * 10,
		kategoriMap["Enterprising"] * 10,
		kategoriMap["Conventional"] * 10,
	)

	if err != nil {
		tx.Rollback()
		return  err
	}

	sqlStmt := `INSERT INTO hasil (user_id, saran_id) VALUES 
	((SELECT id FROM users WHERE email = ?), (SELECT id FROM kategori WHERE nama = ?))`

	_, err = tx.Exec(sqlStmt, email, maxKategori)

	if err != nil {
		tx.Rollback()
		return err
	}

	tx.Commit()
	return nil
}

func (r *ResultRepository) ReSubmit(email string, answer [60]Answer) (error) {
	kategoriMap := make(map[string]int64)
	if len(answer) > 60 {
		return errors.New("jumlah data jawaban lebih dari 60")
	} 
	if len(answer) < 60 {
		return errors.New("jumlah data jawaban kurang dari 60")
	} 

	for _, ans := range answer {
		if ans.Answer{
			kategori, err := r.FetchKategoriByNoSoal(ans.No)
			if err != nil{
			return err
		}
		kategoriMap[*kategori]++
		}
	}

	maxKategori := maxKategori(kategoriMap)

	tx, err := r.db.Begin()
	if err != nil {
		return err
	}
	
	sqlStmt := `UPDATE nilai SET 
	nilai_R = ?,
	nilai_I = ?,
	nilai_A = ?,
	nilai_S = ?,
	nilai_E = ?,
	nilai_C = ?
	WHERE user_id = (SELECT id FROM users WHERE email = ?)`

	_,err = tx.Exec(sqlStmt,
		kategoriMap["Realistic"] * 10,
		kategoriMap["Investigative"] * 10,
		kategoriMap["Artistic"] * 10,
		kategoriMap["Social"] * 10,
		kategoriMap["Enterprising"] * 10,
		kategoriMap["Conventional"] * 10,
		email,
	)

	if err != nil {
		tx.Rollback()
		return  err
	}

	sqlStatement := `UPDATE hasil SET 
	saran_id = (SELECT id FROM kategori WHERE nama = ?)
	WHERE user_id = (SELECT id FROM users WHERE email = ?)`

	_, err = tx.Exec(sqlStatement, maxKategori, email)

	if err != nil {
		tx.Rollback()
		return err
	}

	tx.Commit()
	return nil
}

func (r *ResultRepository) FetchNilaiByEmail(email string) (*Nilai, error) {
	sqlStatement := `SELECT
	n.id,
	u.fullname,
	u.email,
	n.nilai_R,
	n.nilai_I,
	n.nilai_A,
	n.nilai_S,
	n.nilai_E,
	n.nilai_C
	FROM nilai n
	INNER JOIN users u ON n.user_id = u.id
	WHERE u.email = ?
	`
	var nilai Nilai
	row := r.db.QueryRow(sqlStatement, email)

	err := row.Scan(
		&nilai.ID,
		&nilai.Fullname,
		&nilai.Email,
		&nilai.NilaiR,
		&nilai.NilaiI,
		&nilai.NilaiA,
		&nilai.NilaiS,
		&nilai.NilaiE,
		&nilai.NilaiC,
	)

	if err != nil {
		return nil, errors.New("anda belum melakukan test")
	}

	return &nilai, nil
}

func (r *ResultRepository) FetchNilai() ([]Nilai, error) {
	sqlStatement := `SELECT
	n.id,
	u.fullname,
	u.email,
	n.nilai_R,
	n.nilai_I,
	n.nilai_A,
	n.nilai_S,
	n.nilai_E,
	n.nilai_C
	FROM nilai n
	INNER JOIN users u ON n.user_id = u.id
	`
	var scores []Nilai
	rows, err := r.db.Query(sqlStatement)
	if err != nil {
		return nil, err
	}

	defer rows.Close()

	for rows.Next() {
		var nilai Nilai
		err := rows.Scan(
			&nilai.ID,
			&nilai.Fullname,
			&nilai.Email,
			&nilai.NilaiR,
			&nilai.NilaiI,
			&nilai.NilaiA,
			&nilai.NilaiS,
			&nilai.NilaiE,
			&nilai.NilaiC,
		)

		if err != nil {
			return nil, errors.New("anda belum melakukan test")
		}

		scores = append(scores, nilai)
	}


	return scores, nil
}

func (r *ResultRepository) FetchResultByEmail(email string) (*Result, error) {
	sqlStatement := `SELECT
	h.id,
	u.fullname,
	u.email,
	(SELECT nama FROM kategori WHERE id = s.kategori_id) as kategori_tertinggi,
	(SELECT desc FROM kategori WHERE id = s.kategori_id),
	s.saran_1,
	s.saran_2,
	s.saran_3,
	s.saran_4
	FROM hasil h
	INNER JOIN users u ON h.user_id = u.id
	INNER JOIN saranjurusan s ON h.saran_id = s.id
	WHERE u.email = ?
	`
	var hasil Result
	row := r.db.QueryRow(sqlStatement, email)

	err := row.Scan(
		&hasil.ID,
		&hasil.Fullname,
		&hasil.Email,
		&hasil.Kategori,
		&hasil.Desc,
		&hasil.Saran1,
		&hasil.Saran2,
		&hasil.Saran3,
		&hasil.Saran4,
	)

	if err != nil {
		return nil, errors.New("anda belum melakukan test")
	}

	return &hasil, nil
}



