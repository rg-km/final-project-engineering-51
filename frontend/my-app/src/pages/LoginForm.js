import {
  Flex,
  Box,
  Heading,
  Text,
  Link,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Checkbox,
  Button,
  InputGroup,
  InputRightElement,
} from '@chakra-ui/react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import React, { useRef, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useNavigate } from "react-router-dom";

export const LoginForm = () =>{
  const navigate = useNavigate();
  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();

    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;
    let auth = localStorage.getItem("token");
    
    fetch(`http://localhost:8080/api/user/login`, {
      method: "POST",
      body: JSON.stringify({
        email: enteredEmail,
        password: enteredPassword,
        returnSecureToken: true,
      }),
      headers: {
        Accept: "/",
        "Content-Type": "application/json",
        "Token": auth,
      },
    })
      .then((response) => {
        if(response.status === 200){
            console.log("SUCCESSS")
            navigate("/test-opening");
            return response.json(); 
        }else if(response.status === 401){
            console.log("SOMETHING WENT WRONG")
            this.setState({ requestFailed: true })
        }
      })
      .then((data) => {
        console.log(data.token);
        localStorage.setItem("token", data.token);
      })
      .catch((err) => {
        alert("Data yang anda masukkan salah");
      })
  };

  return (
    <>
    <Header />
    <br/><br/><br/><br/>
    <Flex direction="column" justifyContent='center' textAlign='center'>
      <Heading as='h2' size='xl'>
      Selamat Datang di  <Text as="span" color="#C73661">KenaliAku</Text>
      </Heading>
      <Flex minHeight='90vh' width='full' align='center' justifyContent='center'>
        <Box 
          px={4}
          width='full'
          maxWidth='500px'
          borderRadius={8}
          textAlign='center'
          border={['none', '1px']}
          borderColor={['', 'gray.100']}
          boxShadow="lg"
        >
        <Box my={8} textAlign='left'>
          <form onSubmit={handleSubmit}>
            <Box textAlign='center'>
              <Heading as='h4' size='md'>Masuk</Heading>
              <Text>
                Belum punya akun?
                <Link 
                href='RegisterForm.js' 
                color='red'
                fontWeight="bold"
                >
                     Daftar Sekarang
                </Link>
              </Text>
            </Box>
            <FormControl isRequired mt={4}>
              <FormLabel>Alamat Email</FormLabel>
              <Input type='email' placeholder=' ' ref={emailInputRef}/>
            </FormControl>

            <FormControl isRequired mt={4}>
              <FormLabel>Kata Sandi</FormLabel>
              <InputGroup>
                <Input 
                  type={showPassword ? 'text' : 'password' } 
                  ref={passwordInputRef} 
                />
                <InputRightElement h={'full'}>
                  <Button
                    variant={'ghost'}
                    onClick={() =>
                      setShowPassword((showPassword) => !showPassword)
                    }>
                    {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </FormControl>

            
            <Stack isInline justifyContent='space-between' mt={4}>
              <Box>
                <Checkbox>Ingat Saya</Checkbox>
              </Box>
              <Box>
                <Link color="#C73661.500">Lupa Kata Sandi?</Link>
              </Box>
            </Stack>

            <Button type="submit" colorScheme='red'  width='full' mt={4}>Masuk</Button>
          </form>
        </Box>
        </Box>
      </Flex>
    </Flex>
    <Footer/>
    </>
  );
};
export default LoginForm;