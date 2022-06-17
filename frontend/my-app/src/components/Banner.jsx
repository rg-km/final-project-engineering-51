import {
    Box,
    Image,
    Button,
    Text,
    Input,
    Container,
    Heading,
    ButtonGroup,
    Divider,
    IconButton,
    Stack,
}
from '@chakra-ui/react';
import { PhoneIcon, ChevronRightIcon, AtSignIcon} from '@chakra-ui/icons';
import illustration from '../assets/illustration.png';
import * as React from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

function Banner(){
    return(
    <>
        <header>
            <Box boxShadow='2xl' >
                <Box display="flex" alignItems="center" justifyContent="space-between" ml={70} mr={70}>
                    <Box>
                        <Text fontWeight="bold" color="#C73661" fontSize='5xl'>KenaliAku</Text>
                    </Box>
                    <Box display="flex">
                        <Button mr={5} colorScheme="gray.600" fontSize="1xl" variant='link'>Beranda</Button>
                        <Button mr={5} colorScheme="gray.600" fontSize="1xl" variant='link'>Layanan</Button>
                        <Button mr={5} colorScheme="gray.600" fontSize="1xl" variant='link'>Tentang Kami</Button>
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
            <Container maxWidth="container.xl">
                <Box display="flex" alignItems="center" py="20" flexDirection="row">
                    <Box mr="6">
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
                        <Box w="100%">
                        <Image w="100%" src={illustration} alt="illustration" />
                    </Box>
                </Box>
            </Container>
        </Box>
        <footer>
            <Box background="#FFF0F5">
            <Box ml={70} mr={70}>
            <Stack
            spacing="8"
            direction={{ base: 'column', md: 'row' }}
            justify="space-between"
            py={{ base: '12', md: '10' }}
            >
            <Stack spacing={{ base: '6', md: '8' }} align="start">
                <Text fontWeight="bold" fontSize='3xl'>KenaliAku</Text>
            </Stack>
            <Stack
                direction={{ base: 'column-reverse', md: 'column', lg: 'row' }}
                spacing={{ base: '12', md: '8' }}
            >
                <Stack direction="row" spacing="10">
                    <Stack spacing="4" minWidth="200" flex="1" >
                        <Text fontSize="sm" fontWeight="semibold" color="subtle">
                        Kontak Kami
                        </Text>
                        <Stack spacing="3" shouldWrapChildren>
                        <Text fontSize="sm"><PhoneIcon/> 087748238383</Text>
                        <Text fontSize="sm"><AtSignIcon/> KenaliAku@gmail.com</Text>
                        </Stack>
                    </Stack>
                    <Stack spacing="4" minW="36" flex="1">
                        <Text fontSize="sm" fontWeight="semibold" color="subtle">
                        Menu
                        </Text>
                        <Stack spacing="3" shouldWrapChildren>
                        <Button variant="link" color="black" fontSize="sm"><ChevronRightIcon/> layanan</Button>
                        <Button variant="link" color="black" fontSize="sm"><ChevronRightIcon/> Tentang</Button>
                        </Stack>
                    </Stack>
                    <Stack spacing="4">
                    <Text fontSize="sm" fontWeight="semibold" color="subtle">Ikuti Kami</Text>
                    <ButtonGroup variant="ghost">
                        <IconButton as="a" href="#" aria-label="LinkedIn" icon={<FaLinkedin fontSize="1.25rem" />} />
                        <IconButton as="a" href="#" aria-label="GitHub" icon={<FaGithub fontSize="1.25rem" />} />
                        <IconButton as="a" href="#" aria-label="Twitter" icon={<FaTwitter fontSize="1.25rem" />} />
                    </ButtonGroup>
                    </Stack>
                </Stack>
            </Stack>
            </Stack>
            </Box>
            <Divider borderColor="red.200"/>
            <Box ml={70} mr={70}>
            <Stack
            pt="4"
            pb="4"
            justify="space-between"
            direction={{ base: 'column-reverse', md: 'row' }}
            align="center"
            >
            <Text fontWeight="bold" fontSize="sm" color="subtle">
                &copy; {new Date().getFullYear()} Kenali Aku. All rights reserved.
            </Text>
            </Stack>
            </Box>
            </Box>
        </footer>
    </>
    );
}

export default Banner;