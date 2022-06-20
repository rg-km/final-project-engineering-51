package api

import (
	"encoding/json"
	"net/http"
	"strconv"
)

type SoalListErrorResponse struct {
	Error string `json:"error"`
}

type Soal struct {
	No 	int64 `json:"no_soal"`
	Desc 	string `json:"desc_soal"`
}

type SoalListSuccessResponse struct {
	Soal []Soal `json:"soal"`
}

func (api *API) getSoal(w http.ResponseWriter, req *http.Request) {
	api.AllowOrigin(w, req)
	encoder := json.NewEncoder(w)
	page := req.URL.Query().Get("page")
	pageInt, err := strconv.Atoi(page)
	if err != nil {
		w.WriteHeader(http.StatusBadRequest)
		encoder.Encode(SoalListErrorResponse{Error: err.Error()})
		return
	}
	if pageInt > 6 {
		w.WriteHeader(http.StatusBadRequest)
		encoder.Encode(SoalListErrorResponse{Error: "page tidak ditemukan"})
		return
	}

	response := SoalListSuccessResponse{}
	response.Soal = make([]Soal, 0)

	soals, err := api.soalRepo.FetchSoalByPage(pageInt)

	if err != nil {
		w.WriteHeader(http.StatusBadRequest)
			encoder.Encode(SoalListErrorResponse{Error: err.Error()})
			return
	}

	for _, soal := range soals {
		response.Soal = append(response.Soal, Soal{
			No:  soal.No,
			Desc:    soal.Desc,
		})
	}

	w.WriteHeader(http.StatusOK)
	encoder.Encode(response)
}