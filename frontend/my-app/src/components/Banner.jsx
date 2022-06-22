import {
    Box,
    Image,
    Button,
    Link,
    Text,
    Heading,
    Stack,
} from '@chakra-ui/react';
import Header from './Header';
import Footer from './Footer';
import illustration from '../assets/banner.png';
import * as React from 'react';

function Banner(){
    return(
    <>
        <Header/>
        <Box id="banner" ml={70} mr={70}>
            <Box id="beranda" display="flex" alignItems="center" justifyContent="space-around" py="40">
                <Box w="40%" >
                    <Heading as="h1" size="2xl">
                        <Box fontWeight="black">
                        Yuk, Kenali Minat dan Bakatmu!!
                        </Box>
                    </Heading>
                    <Box mt="6" fontWeight="medium">
                    Kenali dirimu dengan melakukan Tes Minat dan Bakat di KenaliAku. Temukan jurusan studi terbaik untuk #MasaDepanmu
                    </Box>
                    <Box mt="4">
                        <Link to={"/test-opening"}>
                            <Button zIndex="-1" pr={5} fontSize="lg" color="black" variant='outline' background="#FFCD1D">
                                Ikuti Tes Sekarang
                            </Button>
                        </Link>
                    </Box>
                </Box>
                <Box w="30%">
                    <Image src={illustration} alt="illustration" />
                </Box>
            </Box>
        </Box>
        <Box id="about" background="#FFF0F5">
            <Box display="flex" alignItems="center" justifyContent="space-around" py="10" px="400">
                <Box display="flex" flexDirection="column">
                    <Button borderRadius="100%" background="#FFCD1D">R</Button>
                    <Button background="transparent"></Button>
                    <Button borderRadius="100%" background="#FFCD1D">A</Button>
                    <Button background="transparent"></Button>
                    <Button borderRadius="100%" background="#FFCD1D">E</Button>
                    <Button background="transparent"></Button>
                </Box>
                <Box mr={20} display="flex" flexDirection="column">
                    <Button background="transparent"></Button>
                    <Button borderRadius="100%" background="#FFCD1D">I</Button>
                    <Button background="transparent"></Button>
                    <Button borderRadius="100%" background="#FFCD1D">S</Button>
                    <Button background="transparent"></Button>
                    <Button borderRadius="100%" background="#FFCD1D">C</Button>
                </Box>
                <Box>
                    <Heading mb={5} size="1xl">
                        <Box fontWeight="black">
                        Bagaimana Cara Kerja Tes Minat Bakat di Kenali Aku?
                        </Box>
                    </Heading>
                    <Text align="justify">Tes Minat dan Bakat KenaliAku disusun menggunakan teori RIASEC (Realistic, Investigate, Artistic, Social, Enterprising, Conventional) 
                        yang dapat membantu kamu menggali potensi diri dan menemukan jenis karir 
                        atau jurusan studi sesuai dengan kepribadianmu.</Text>
                </Box>
            </Box>
        </Box>
        <Box id="service" ml={70} mr={70}>
            <Text mt="10" align="center" fontWeight="bold" fontSize="3xl">RIASEC</Text>
            <Box display="flex" alignItems="center" justifyContent="space-around" mt="10">
                <Stack
                id="realistis"
                borderWidth="3px"
                borderRadius="lg"
                width="30%"
                boxShadow={'2xl'}
                padding={4}>
                    <Heading align="center" mb={5} size="1xl">Realistis</Heading>
                    <Text align="justify">Menurut teori Holland, seseorang yang memiliki kepribadian realistis dianggap lebih suka bekerja secara manual dan menikmati pengoperasian perangkat (mesin) atau kendaraan. 
                        Banyak profesi pekerjaan yang realistis melibatkan aktivitas di luar ruangan, bekerja dengan hewan, dan mengharuskan seseorang untuk mengotori tangan mereka ketika bekerja.
                        Profesi yang cocok untuk kepribadian realistis ini berbanding terbalik dengan pekerjaan kantor, di mana orang-orang cenderung duduk di dalam ruangan sepanjang hari.
                        Terlebih lagi, menurut teori RIASEC, seseorang dengan kepribadian realistis cenderung memiliki hobi seperti berkebun, memelihara hewan peliharaan, mengotak-atik mobil, dan olahraga di luar ruangan.
                    </Text>
                </Stack>
                <Stack
                borderWidth="3px"
                borderRadius="lg"
                width="30%"
                boxShadow={'2xl'}
                padding={4}>
                    <Heading align="center" mb={5} size="1xl">Investigatif</Heading>
                    <Text align="justify">Holland percaya bahwa orang dengan kepribadian investigatif memiliki rasa ingin tahu yang kuat, suka belajar, dan analitis.
                    Profesi yang bersifat investigatif mengharuskan seseorang untuk menganalisis tugas dengan sangat hati-hati.
                    Hobi dari orang-orang yang berkepribadian investigative, di antaranya bermain sudoku, catur, hingga belajar bahasa asing.
                    Jenis profesi yang cocok untuk kepribadian investigatif dapat ditemukan di dalam dunia pendidikan, perawatan kesehatan, perusahaan inovatif, hingga teknologi informasi.
                    </Text>
                </Stack>
                <Stack
                borderWidth="3px"
                borderRadius="lg"
                width="30%"
                boxShadow={'2xl'}
                padding={4}>
                    <Heading align="center" mb={5} size="1xl">Artistik</Heading>
                    <Text align="justify">Seseorang yang mendapatkan jenis kepribadian artistik di akhir RIASEC test cenderung kreatif dan bersifat otentik. Profesi artistik umumnya melibatkan desain dan ekspresi.
                    Berbagai pekerjaan artistik mengharuskan seseorang untuk melihat dunia dari perspektif baru yang unik, entah itu melalui gambar, bahasa, atau ide-idenya tersendiri.
                    Hobi seseorang dengan kepribadian artistik termasuk melukis, fotografi, menulis, memasak, membuat kerajinan, desain, hingga mengunjungi museum.
                    Seseorang dengan jenis kepribadian artistik dapat menemukan banyak profesi di bidang periklanan, industri musik, teater, hingga perusahaan desain.
                    </Text>
                </Stack>
            </Box>
            <Box display="flex" alignItems="center" justifyContent="space-around" mt="5" mb="10">
                <Stack
                borderWidth="3px"
                borderRadius="lg"
                width="30%"
                boxShadow={'2xl'}
                padding={4}>
                    <Heading align="center" mb={5} size="1xl">Sosial</Heading>
                    <Text align="justify">Jika kamu mendapatkan kepribadian sosial setelah mengikuti tes Holland, itu dapat menandakan bahwa kamu senang membantu atau mengajari orang lain. 
                    Profesi yang cocok untuk jenis kepribadian RIASEC ini umumnya mengharuskan seseorang untuk bekerja sama secara intens dengan orang lain atau mempelajari informasi baru bersama-sama. 
                    Orang-orang berkepribadian sosial umumnya memiliki hobi, seperti berolahraga dalam tim, menjadi sukarelawan, hingga senang makan di luar bersama teman atau keluarga. 
                    Profesi yang cocok untuk kepribadian sosial dapat ditemukan di dalam pemerintahan, pendidikan, perawatan kesehatan, hingga pelayanan sosial.
                    </Text>
                </Stack>
                <Stack
                borderWidth="3px"
                borderRadius="lg"
                width="30%"
                boxShadow={'2xl'}
                padding={4}>
                    <Heading align="center" mb={5} size="1xl">Enterprising</Heading>
                    <Text align="justify">Orang yang giat, suka mengambil inisiatif, berani mengambil risiko, atau memiliki kepemimpinan yang baik adalah karakteristik dari jenis kepribadian enterprising. 
                    Profesi yang cocok untuk kepribadian enterprising umumnya mengharuskan seseorang untuk mengambil banyak keputusan penting, mengarahkan atau meyakinkan orang lain, hingga bertanggung jawab atas tugas-tugas yang ada. 
                    Orang dengan kepribadian enterprising cenderung memiliki hobi, seperti investasi, pelatihan dan pembinaan di klub olahraga, hingga berkutat di dalam dunia politik. 
                    Pekerjaan yang cocok untuk kepribadian enterprising dapat ditemukan di dalam dunia manajemen, pemasaran, perdagangan, administrasi, dan politik.
                    </Text>
                </Stack>
                <Stack
                borderWidth="3px"
                borderRadius="lg"
                width="30%"
                boxShadow={'2xl'}
                padding={4}>
                    <Heading align="center" mb={5} size="1xl">Konvensional</Heading>
                    <Text align="justify">Orang dengan kepribadian konvensional cenderung bersifat perfeksionis dan lebih suka bekerja secara terstruktur serta sesuai dengan kesepakatan yang telah ditetapkan. 
                    Profesi yang cocok untuk kepribadian konvensional umumnya mengharuskan pekerjaan dilakukan sesuai dengan pola atau peraturan yang ditetapkan. Pekerjaan ini cenderung bersifat rutin atau berbasis proses. 
                    Orang-orang dengan kepribadian konvensional dianggap lebih menyukai hobi yang melibatkan pengumpulan barang atau meneliti silsilah keluarga. 
                    Profesi yang cocok untuk kepribadian konvensional dapat ditemukan di dalam dunia perbankan, perusahaan yang terlibat dalam pengelolaan dan pemeliharaan properti, perusahaan administrasi, sektor keuangan, hingga organisasi pemerintah.
                    </Text>
                </Stack>
            </Box>
        </Box>
        <Footer/>
    </>
    );
}

export default Banner;