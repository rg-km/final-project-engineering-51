import {
    Box,
    Image,
    Button,
    Text,
    Table,Thead, Tbody, Tr, Th, Td,
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
        <Box ml={70} mr={70}>
            <Box id="beranda" display="flex" alignItems="center" justifyContent="space-around" py="20">
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
                        <Button pr={5} fontSize="lg" color="black" variant='outline' background="#FFCD1D">
                            Ikuti Tes Sekarang
                        </Button>
                    </Box>
                </Box>
                <Box w="30%">
                    <Image src={illustration} alt="illustration" />
                </Box>
            </Box>
            <Stack
            borderWidth="3px"
            borderRadius="lg"
            width="100%"
            height={{ sm: '476px', md: '20rem' }}
            direction={{ base: 'column', md: 'row' }}
            boxShadow={'2xl'}
            padding={4}>
                <Box display="flex" alignItems="center" justifyContent="space-around" py="20" px="20">
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
                        <Text>Tes Minat dan Bakat KenaliAku disusun menggunakan teori RIASEC (Realistic, Investigate, Artistic, Social, Enterprising, Conventional) 
                            yang dapat membantu kamu menggali potensi diri dan menemukan jenis karir 
                            atau jurusan studi sesuai dengan kepribadianmu.</Text>
                    </Box>
                </Box>
            </Stack>
        </Box>
        <Footer/>
    </>
    );
}

export default Banner;