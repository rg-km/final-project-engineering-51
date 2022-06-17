import React ,{useState} from 'react';
import {
  Flex,
  Box,
  Heading,
  Text,
  Link,
  FormControl,
  FormLabel,
  FormHelperText,
  Input,
  Button
} from '@chakra-ui/react';

const VARIANT_COLOR = 'red';

function RegisterForm ()  {
  const [name,setName]=useState("")
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")

  async function signUp(){
    let item={name,email,password}
    console.warn(item)

    let result= await fetch("http://localhost:8080/api/user/register",{
      method:"POST",
      body:JSON.stringify(item),
      headers:{
        "Content-Type":"application/json",
        "Accept":"application/json"
      },
    })
    result=await result.json()
    console.warn("result",result)
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
            <Heading as='h4' size='md'>Daftar</Heading>
            <Text>
              Sudah punya akun? <Link href='LoginForm.js'color={`${VARIANT_COLOR}.500`}>Masuk</Link>
            </Text>
          </Box>

          <FormControl isRequired mt={4}>
            <FormLabel >Nama Lengkap</FormLabel>
            <Input id='name' placeholder=' ' value={name} onChange={(e)=>setName(e.target.value)}/>
          </FormControl>

          <FormControl isRequired mt={4}>
            <FormLabel>Alamat Email</FormLabel>
            <Input type='email' placeholder=' ' value={email} onChange={(e)=>setEmail(e.target.value)}/>
          </FormControl>
          
          <FormControl isRequired mt={4}>
            <FormLabel>Kata Sandi</FormLabel>
            <Input id='password' type='password' placeholder=' ' value={password} onChange={(e)=>setPassword(e.target.value)}/>
            <FormHelperText>Minimal 6 Karakter</FormHelperText>
          </FormControl>

          <FormControl isRequired mt={4}>
            <FormLabel>Konfirmasi Kata Sandi</FormLabel>
            <Input type='password' placeholder=' ' value={password} onChange={(e)=>setPassword(e.target.value)}/>
          </FormControl>

          <Button onClick={signUp} colorScheme='red'  width='full' mt={6}>Daftar</Button>
        </form>
      </Box>
      </Box>
    </Flex>
  )
}
export default  RegisterForm;