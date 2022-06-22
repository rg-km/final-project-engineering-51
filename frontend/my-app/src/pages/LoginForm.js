import React, { useState, useEffect} from 'react';
import { useNavigate } from "react-router-dom";
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
  Button
} from '@chakra-ui/react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const VARIANT_COLOR = '#C73661';

function LoginForm () {
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const Navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem('user-info')){
      Navigate("/")
    }
  },[Navigate])

async function login(){
  console.warn(email,password)
  let item={email,password}
  let result = await fetch("http://localhost:8080/api/user/login",{
    method:"POST",
    body:JSON.stringify(item),
    headers:{
      "Content-Type":"application/json",
      "Accept":"application/json"
    },
  });
  result = await result.json()
  localStorage.setItem("user-info",JSON.stringify(result))
  Navigate("/")
}
  return (
    <Flex direction="column" justifyContent='center' textAlign='center'>
      <Header />
      <br /><br /><br />
      <Heading as='h2' size='xl'>
      Selamat Datang di  <Text as="span" color={`${VARIANT_COLOR}`}>KenaliAku</Text>
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
          <form>
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
              <Input type='email' placeholder=' ' onChange={(e)=>setEmail(e.target.value)}/>
            </FormControl>

            <FormControl isRequired mt={4}>
              <FormLabel>Kata Sandi</FormLabel>
              <Input type='password' placeholder=' ' onChange={(e)=>setPassword(e.target.value)} />
            </FormControl>

            <Stack isInline justifyContent='space-between' mt={4}>
              <Box>
                <Checkbox>Ingat Saya</Checkbox>
              </Box>
              <Box>
                <Link color={`${VARIANT_COLOR}.500`}>Lupa Kata Sandi?</Link>
              </Box>
            </Stack>

            <Button onClick={login} colorScheme='red'  width='full' mt={4}>Masuk</Button>
          </form>
        </Box>
        </Box>
      </Flex>
      <Footer/>
    </Flex>
  )
}
export default LoginForm;