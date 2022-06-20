import {
    Box,
    Button,
    Text,
}
from '@chakra-ui/react';
import * as React from 'react';
import { Link } from 'react-router-dom'

function Header(){
    return(
    <>
        <header>
            <Box boxShadow='2xl' >
                <Box display="flex" alignItems="center" justifyContent="space-between" ml={70} mr={70}>
                    <Box>
                        <Text fontWeight="bold" color="#C73661" fontSize='5xl'>KenaliAku</Text>
                    </Box>
                    <Box display="flex" alignItems="center">
                        <Link mr={5} colorScheme="gray.600" fontSize="1xl" >Beranda</Link>
                        <Link mr={5} colorScheme="gray.600" fontSize="1xl" >Tentang</Link>
                        <Link mr={5} colorScheme="gray.600" fontSize="1xl" >Layanan</Link>
                        <Button mr={5} colorScheme="gray.600" fontSize="1xl" color="#E84B6A" variant='outline'>
                            <Link to='/register'>Daftar</Link> | {" "}
                        </Button>
                        <Button colorScheme="gray.600" fontSize="1xl" backgroundColor="#E84B6A">
                            <Link to='/login'>Masuk</Link> | {" "}
                        </Button>
                    </Box>
                </Box>
            </Box>
        </header>
    </>
    );
}

export default Header;