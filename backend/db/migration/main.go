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

	CREATE TABLE IF NOT EXISTS  soal(
    id integer NOT NULL primary key AUTOINCREMENT,
	no_soal integer NOT NULL,
	kategori_id integer NOT NULL,
	desc_soal text NOT NULL,
	FOREIGN KEY (kategori_id) REFERENCES kategori(id)
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

Profesi yang cocok untukmu di antaranya adalah Akuntan, Aktuaris, Ahli Statistik, Analis Keuangan, Guru, Operator komputer, Pustakawan, Programer Bisnis, Pengarsip, dan pekerjaan yang berhubungan dengan administrasi.");

	INSERT INTO soal (no_soal, kategori_id, desc_soal) VALUES
(1, 1, "Saya tidak suka hal yang kompleks"),
(2, 1, "Saya suka membangun sesuatu"),
(3, 1, "Saya suka merawat hewan")
(4, 1, "Saya suka menyatukan sesuatu atau merakit sesuatu"),
(5, 1, "Saya suka memasak"),
(6, 1, "Saya orang yang prktis (suka yang simple)"),
(7, 1, "Saya suka bekera di luar ruangan (Outdoor)"),
(8, 1, "Saya orang yang jujur"),
(9, 1, "Saya suka bersosialisasi"),
(10, 1, "Saya suka dengan tugas-tugas yang kongkrit"),
(11, 2, "Saya suka mengerjakan puzzle"),
(12, 2, "Saya suka melakukan eksperimen"),
(13, 2, "Saya suka dengan sesuatu yang berhubungan dengan sains"),
(14, 2, "Says senang mencoba mencari tahu bagaimana segaka sesuatu itu berjalan"),
(15, 2, "Saya suka menganalisis berbagai hal (masalah/situasi) dan mengevaluasi"),
(16, 2, "Saya suka bekerja dengan angka atau bagan (matematis)"),
(17, 2, "Saya pandai matematika"),
(18, 2, "Saya orangnya disiplin"),
(19, 2, "Saya orangnya sistematis"),
(20, 2, "Saya suka menjabarkan sesuaru secar teratur dan logis"),
(21, 3, "Saya lebih suka bekerja secara mandiri"),
(22, 3, "Saya suka membaca tentang seni dan music"),
(23, 3, "Saya suka menulis (dengan kreatif)"),
(24, 3, "Saya adalah orang yang kreatif"),
(25, 3, "Saya suka memaikan alat musik atau bernyanyi"),
(26, 3, "Saya suka aklting dalam drama"),
(27, 3, "Saya suka menggambar"),
(28, 3, "Saya suka berfikir abstrak"),
(29, 3, "Saya orangnya imajinatif"),
(30, 3, "Saya tidak suka keteraturan"),
(31, 4, "Saya suka bekerja dealam tim"),
(32, 4, "Saya suka mengajar atau melatih orang lain"),
(33, 4, "Saya suka mencoba mambantu orang yang memcahkan masalah mereka"),
(34, 4, "Saya tertarik menyembuhkan orang"),
(35, 4, "Saya senang belajar tentang budaya"),
(36, 4, "Saya suka berdiskusi tentang suatu masalah"),
(37, 4, "Saya suka membantu orang"),
(38, 4, "Saya orangnya bersahabat dan mudah bergaul"),
(39, 4, "Saya orangnya bertanggungjawab"),
(40, 4, "Saya orangnya dengan rasa toleransi yang tinggi"),
(41, 5, "Saya adalah orang yang ambisius, saya menetapkan tujuan saya sendiri"),
(42, 5, "Saya suka mencoba mempengaruhi atau membujuk orang"),
(43, 5, "Saya suka berjualan"),
(44, 5, "Saya cepat mengambil tanggung jawab baru"),
(45, 5, "Saya ingin memulai bisnis saya sendiri"),
(46, 5, "Saya suka memimpin"),
(47, 5, "Saya sika berpidato"),
(48, 5, "Saya orangnya mudah beradaptasi"),
(49, 5, "Saya orangnya suka mengambil resiko dan spontan"),
(50, 5, "Saya orangnya percaya diri, tegas, dan juga mampu mengutarakan sesuatu yang ada di hati dan pikiran saya tetapi tetap terkontrol"),
(51, 6, "Saya suka mengatur sesuatu (file, mea/kantor)"),
(52, 6, "Saya ingin memiliki instruksi yang jelas untuk diikuti"),
(53, 6, "Saya tidak keberatan bekerja 8 jam sehari di kantor"),
(54, 6, "Saya memperhatikan sesuatu secara detail"),
(55, 6, "Saya suka melakukan pengarsipan atau pengetikan"),
(56, 6, "Saya pandai menyimpan catatan pekerjann saya"),
(57, 6, "Saya ingin bekera di kantor"),
(58, 6, "Saya orangnya tidak kreatif"),
(59, 6, "Saya suka dengan kedisiplinan dan ketepatan"),
(60, 6, "Saya mempunyai kemampuan klerikal dan numeric yang baik");`)

	if err != nil {
		panic(err)
	}
}
