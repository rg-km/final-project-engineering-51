import React, { useState } from 'react';
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

const VARIANT_COLOR = 'red';

function LoginForm () {
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");

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
  result=await result.json()
  localStorage.setItem(JSON.stringify(result))

}
  return (
    <Flex minHeight='100vh' width='full' align='center' justifyContent='center'>
      <Box 
        px={4}
        width='full'
        maxWidth='500px'
        borderRadius={8}
        textAlign='center'
        border={['npne', '1px']}
        borderColor={['', 'gray.100']}
        boxShadow="lg"
      >
      <Box my={8} textAlign='left'>
        <form>
          <Box textAlign='center'>
            <Heading as='h4' size='md'>Masuk</Heading>
            <Text>
              Belum punya akun? <Link href='RegisterForm.js' color={`${VARIANT_COLOR}.500`}>Daftar Sekarang</Link>
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
  )
}
export default LoginForm;