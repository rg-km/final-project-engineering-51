# KenaliAku

## Deskripsi
KenaliAku merupakan sebuah web penyedia layanan tes minat dan bakat. Tes minat dan bakat ini menggunakan metode penilaian RIASEC, dan bertujuan untuk memberi saran jurusan kuliah yang sesuai.

Beberapa fitur yang terdapat pada web ini antara lain : 
- Menampilkan profile pengguna 
- Terdapat 60 soal untuk tes minat dan bakat
- Menampilkan hasil dari tes
- Terdapat 4 saran jurusan kuliah berdasarkan hasil tes minat dan bakat

![KenaliAku](https://user-images.githubusercontent.com/100753971/175831716-56e0fd0b-4636-489a-9089-8944a5629723.jpg)

#
## Cara Penggunaan
1. Clone terlebih dahulu respository ini.
2. Run file db, (go run backend/db/migration/main.go).
3. Run file API, (go run backend/main.go).
4. Buka laman localhost.
5. Registrasi profile pada halaman register.
6. Masuk ke halaman login, dan masukan username beserta password.
7. Pilih mulai tes minat dan bakat.
8. Isi seluruh pertanyaan dan submit jawabannya.
9. Hasil tes akan keluar beserta 3 saran jurusan kuliah.
##


Available APIs:
- `POST` : `/api/user/register`
- `POST` : `/api/user/login`
- `GET` : `/api/user/profile`
- `GET` : `/api/test/soal?page=<page_number>)`
- `POST` : `/api/test/submit`
- `GET` : `/api/test/result`

Dokumentasi API tersedia pada link berikut :
https://documenter.getpostman.com/view/15521104/UzBpLRkt
