import {
    Box,
    Image,
    Button,
    Text,
    Container,
    Heading,
    Grid,
    Badge,
    FormControl,
    Input,
} from '@chakra-ui/react';
import illustration from '../assets/illustration.png';

function Banner(){
    return(
    <>
        <header>
            <Box boxShadow='2xl' >
                <Box display="flex" alignItems="center" justifyContent="space-between" ml={200} mr={200}>
                    <Box>
                        <Text fontWeight="bold" color="#C73661" fontSize='5xl'>KenaliAku</Text>
                    </Box>
                    <Box display="flex">
                        <Text pr={5} fontSize='2xl'>Beranda</Text>
                        <Text pr={5} fontSize='2xl'>Layanan</Text>
                        <Text pr={5} fontSize='2xl'>Tentang Kami</Text>
                        <Button mr={5} colorScheme="gray.600" fontSize="1xl" color="#E84B6A" variant='outline'>
                            Daftar
                        </Button>
                        <Button colorScheme="gray.600" fontSize="1xl" backgroundColor="#E84B6A">
                            Masuk
                        </Button>
                    </Box>
                </Box>
            </Box>
        </header>
        <Box>
            {/* main punch text */}
            <Container maxW="container.xl">
            <Box display="flex" alignItems="center" py="20">
                <Box mr="6">
                <Heading as="h1" size="2xl">
                    <Box fontWeight="black">
                    Yuk, Kenali Minat dan Bakatmu!!
                    </Box>
                </Heading>
                <Box mt="6" fontWeight="medium">
                Kenali dirimu dengan melakukan Tes Minat dan Bakat di KenaliAku. Temukan jurusan studi terbaik untuk #MasaDepanmu
                </Box>
                    <Button pr={5} fontSize="lg" color="#E84B6A" variant='outline'>
                        Ikuti Tes Sekarang
                    </Button>
                </Box>
                <Box w="100%">
                <Image w="100%" src={illustration} alt="illustration" />
                </Box>
            </Box>
            </Container>
        </Box>
    </>
    );
}

export default Banner;