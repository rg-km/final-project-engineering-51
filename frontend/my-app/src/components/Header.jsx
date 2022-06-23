import {
    Box,
    Button,
    Link,
    Text,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Avatar,
}
from '@chakra-ui/react';
import * as React from 'react';
import { useNavigate } from 'react-router-dom';

function Header(){
    let navigate = useNavigate();
    let user = JSON.parse(localStorage.getItem('user-info'));
    const Navigate = useNavigate();
    function logOut(){
        localStorage.clear();
        Navigate("/")
    }

    return(
    <>
        <header zIndex="1" as="header" position="fixed">
            <Box boxShadow='2xl' as="header" position="fixed" w="100%" backgroundColor="white">
                <Box display="flex" alignItems="center" justifyContent="space-between" ml={70} mr={70}>
                    <Box>
                        <Text fontWeight="bold" color="#C73661" fontSize='5xl'>KenaliAku</Text>
                    </Box>
                    <Box display="flex" alignItems="center">
                        <Link href="#banner" mr={5} colorScheme="gray.600" fontSize="1xl" >Beranda</Link>
                        <Link href="#about" mr={5} colorScheme="gray.600" fontSize="1xl" >Tentang</Link>
                        <Link href="#service" mr={5} colorScheme="gray.600" fontSize="1xl" >Layanan</Link>
                        {
                        localStorage.getItem('user-info') ?
                        <>
                            <Menu>
                            <MenuButton as={Button} title={user && user.name}>
                                Keluar
                            </MenuButton>
                            <MenuList >
                                <MenuItem minH='48px' onClick={logOut}>
                                <Avatar bg='red.500' />
                                <span>Keluar</span>
                                </MenuItem>
                            </MenuList>
                            </Menu>
                        </> 
                        :
                        <>
                            <Button 
                            mr={5} 
                            colorScheme="gray.600" 
                            fontSize="1xl" 
                            color="#E84B6A" 
                            variant='outline'
                            onClick={()=>navigate('/register')}
                            >
                            Daftar
                            </Button>
                            <Button 
                                colorScheme="gray.600" 
                                fontSize="1xl" 
                                backgroundColor="#E84B6A"
                                onClick={()=>navigate('/login')}
                            >
                                Masuk
                            </Button>
                        </>
                    }
                        
                        
                    </Box>
                </Box>
            </Box>
        </header>
    </>
    );
}

export default Header;