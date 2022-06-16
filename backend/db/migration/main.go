package main

import (
	"database/sql"

	_ "github.com/mattn/go-sqlite3"
)

func main() {
	db, err := sql.Open("sqlite3", "backend/db/kenaliaku.db")
	if err != nil {
		panic(err)
	}

	_, err = db.Exec(`
	CREATE TABLE IF NOT EXISTS users (
    id integer NOT NULL primary key AUTOINCREMENT,
	fullname varchar(255) NOT NULL,
    email varchar(255) NOT NULL,
    password varchar(255) NOT NULL,
	role varchar(255) NOT NULL,
    loggedin boolean NOT NULL
);

	CREATE TABLE IF NOT EXISTS  kategori(
    id integer NOT NULL primary key AUTOINCREMENT,
	nama varchar(255) NOT NULL,
    desc text NOT NULL
);

	INSERT INTO kategori (nama, desc) VALUES 
("Realistic", 
"Kamu sangat senang memecahkan suatu masalah, terutama hal yang praktis dan masuk akal. Kamu menyukai pekerjaan yang berhubungan dengan tumbuhan, hewan, peralatan, dan mekanik.

Karena itu, kamu lebih menyukai alam bebas dibandingkan berhubungan dengan orang lain. Kamu mandiri, memiliki jiwa keberanian yang tinggi, dan kuat secara fisik, namun di sisi lain kamu sangat berhati-hati dan cenderung pendiam.

Profesi yang cocok untukmu di antaranya Atlet, Operator, Pilot, Koki, Mekanik, Polisi, Perawat, Insinyur, Pelatih, Guru Sains, dan Ilmuwan tentang Ilmu Alam."),

("Investigative", 
"Di antara tipe kepribadian yang lain, kamu yang paling analitis, kompleks, dan senang mengobservasi sesuatu. Kamu ingin mengetahui suatu hal tersebut dapat bekerja dan berfungsi.

Kamu dipandang sebagai orang yang sangat bijaksana dan berwawasan luas karena kebiasaanmu yang suka menanganalisis sesuatu. Kamu tidak suka dibatasi dan sangat senang hal-hal yang baru, terutama ide-ide abstrak yang tidak pernah dibayangkan sebelumnya.

Profesi yang cocok untukmu di antaranya adalah Dokter, Psikolog, Filsuf, Ahli Gizi, Ekonom, Ilmuwan, Progammer, Astronom, Fisikawan, dan Insinyur."),

("Artistic", 
"Kamu orang yang sangat romantis dan sensitif! Kamu tidak suka dibatasi karena kamu memiliki pemikiran yang abstrak, idealis, dan mempunyai banyak ide, namun tetap fleksibel dalam berbagai hal. Kamu juga orang yang ekspresif sehingga kamu bisa mudah bersahabat dengan siapapun, bahkan persahabatanmu bisa sampai langgeng, lho!

Tidak hanya itu, kamu juga disukai banyak orang karena kamu adalah orang yang rajin dan selalu ada ide-ide kreatif yang tidak pernah terbayangkan sebelumnya!

Profesi yang cocok untukmu adalah Desainer, Penulis, Musisi, Arsitek, Wartawan, Penari, Translator, Editor, dan Artis."),

("Social", 
"Kamu orang yang sangat humanis dan senang membantu orang lain. Kamu hangat dan ramah kepada orang lain sehingga tak heran kalau kamu senang melakukan kegiatan-kegiatan sosial yang bertujuan untuk kemajuan masyarakat. Kamu sangat pintar berkomunikasi dan bertanggung jawab, tetapi peduli dan sabar.

Kamu juga disukai oleh teman-temanmu karena kamu peka pada lingkungan sekitarmu. Profesi yang cocok untukmu di antaranya adalah Guru, Terapis, Tour Guide, Perawat, Hakim, Konselor, Psikolog, Sejarawan, Menteri, Pekerja Sosial, dan Ahli Patolog Bicara."),

("Enterprising", 
"Yang menjadi ciri khas-mu adalah kamu sangat suka berdebat! Studi yang kamu suka pastinya tentang politik dan bisnis. Kamu tidak takut mengambil resiko dan selalu optimis dalam segala hal. Bagimu, bekerja adalah suatu petualangan untukmu! Kamu sangat pintar mempersuasif orang lain dan suka mengincar sesuatu yang lebih tinggi, salah satunya menjadi seorang pemimpin.

Namun dibalik itu, kamu tetap ramah pada orang lain. Tak heran kamu populer di antara teman-temanmu karena kepribadianmu yang menarik!

Profesi yang cocok untukmu di antaranya adalah Pengacara, Psikolog Industri dan Organisasi, Manajer, Pialang Saham, Pengusaha, Direktur, Politikus, Public Relations Officer, dan Akuntan."),

("Conventional", 
"Kamu dikenal sebagai orang yang teratur dan praktis. Kamu juga disukai oleh teman-temanmu bahkan atasanmu karena kamu bisa memecahkan masalah yang rumit dengan solusi yang praktis. Kamu orang yang rajin, tekun, dan pekerja keras, sehingga tak heran kamu dihargai dan dihormati orang lain.

Kamu juga orang yang sangat teliti dan pasti, sehingga dalam melakukan kegiatan apapun, kamu harus membuat daftar terlebih dahulu agar semua kegiatanmu dapat terkontrol dengan baik.

Profesi yang cocok untukmu di antaranya adalah Akuntan, Aktuaris, Ahli Statistik, Analis Keuangan, Guru, Operator komputer, Pustakawan, Programer Bisnis, Pengarsip, dan pekerjaan yang berhubungan dengan administrasi.");`)



	if err != nil {
		panic(err)
	}
}