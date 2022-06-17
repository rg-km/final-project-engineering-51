package repository

import (
	"database/sql"

)


type SoalRepository struct {
	db *sql.DB
}

func NewSoalRepository(db *sql.DB) *SoalRepository {
	return &SoalRepository{db: db}
}

func(s *SoalRepository) FetchSoalByPage(page int)([]Soal, error) {
	jumlahDataPerPage := 10
	awalData := (jumlahDataPerPage * page) - jumlahDataPerPage

	sqlStatement := `SELECT 
	s.no_soal,
	s.desc_soal
	FROM soal s 
	INNER JOIN kategori k ON s.kategori_id = k.id
	LIMIT ?, ?`

	rows, err := s.db.Query(sqlStatement, awalData, jumlahDataPerPage)
	if err != nil {
		return nil , err
	}
	defer rows.Close()
	var soals []Soal

	for rows.Next() {
		var soal Soal
		err := rows.Scan(
			&soal.No,
			&soal.Desc,
		)
		if err != nil {
			return nil, err
		}
		soals = append(soals, soal)
	}

	return soals, nil
}