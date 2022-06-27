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
    WrapItem
}
from '@chakra-ui/react';
import React, { useState, useEffect} from 'react';
import axios from "axios";
import { useNavigate } from 'react-router-dom';

const Header = () =>{
    let navigate = useNavigate();
    let user = JSON.parse(localStorage.getItem('user-info'));
    function logOut(){
        localStorage.removeItem("token");
        navigate("/")
    }

    const[result, setResult] = useState([]);
    // let state = {
    //     result: null
    //   }
    const fetchResult = () => {
        let auth = localStorage.getItem("token");
        
        axios.get(`http://localhost:8080/api/user/profile`,{
        headers:{
            Accept: "/",
            "Content-Type": "application/json",
            "Token" : auth,
        },
        })
        .then((res)=>{
            console.log(res);
            console.log(res.data.user_profile);
            const hasil = res.data.user_profile;
            setResult(hasil);
            // this.setState({
            //   result: res.data.result
            // })
        });
    };

    useEffect(()=> fetchResult(),[]);

    return(
    <>
        <header  z-index="10" as="header" position="fixed">
            <Box boxShadow='2xl' as="header" position="fixed" w="100%" backgroundColor="white">
                <Box display="flex" alignItems="center" justifyContent="space-between" ml={70} mr={70}>
                    <Box>
                        <Text fontWeight="bold" color="#C73661" fontSize='5xl'>KenaliAku</Text>
                    </Box>
                        {
                        localStorage.getItem('token') ?
                        <>
                            <Menu>
                                <MenuButton>
                                    <WrapItem alignItems="center"  display="flex" flexDirection="row" gap={3}>
                                        <Avatar
                                        size='md'
                                        name={result.fullname}
                                        src='https://bit.ly/tioluwani-kolawole'
                                        />{' '}
                                        <Text fontSize="2xl">{result.fullname}</Text>
                                    </WrapItem>
                                </MenuButton>
                                <MenuList >
                                    <MenuItem minH='48px' onClick={logOut}>
                                    <span>Keluar sebagai {result.email} </span>
                                    </MenuItem>
                                </MenuList>
                            </Menu>
                        </> 
                        :
                        <>
                        <Box display="flex" alignItems="center" justifyContent="flex-end">
                            <Box display="flex" alignItems="center">
                            <Link href="#banner" mr={5} colorScheme="gray.600" fontSize="1xl" >Beranda</Link>
                            <Link href="#about" mr={5} colorScheme="gray.600" fontSize="1xl" >Tentang</Link>
                            <Link href="#service" mr={5} colorScheme="gray.600" fontSize="1xl" >Layanan</Link>
                            </Box>
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
                        </Box>
                        </>
                    }
                </Box>
            </Box>
        </header>
    </>
    );
}

export default Header;