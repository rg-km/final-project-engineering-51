import React ,{ useState, useEffect } from 'react';
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
import Header from './Header'

const VARIANT_COLOR = '#C73661';

function RegisterForm ()  {
  const [name,setName]=useState("")
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")
  const [cPassword, setCPassword] = useState('');
  const [showErrorMessage, setShowErrorMessage] = useState(false);
  const [cPasswordClass, setCPasswordClass] = useState('form-control');
  const [isCPasswordDirty, setIsCPasswordDirty] = useState(false);

  useEffect(() => {
    if (isCPasswordDirty) {
        if (password === cPassword) {
            setShowErrorMessage(false);
            setCPasswordClass('form-control is-valid')
        } else {
            setShowErrorMessage(true)
            setCPasswordClass('form-control is-invalid')
        }
    }
  }, [cPassword, isCPasswordDirty, password]);

  const handleCPassword = (e) => {
    setCPassword(e.target.value);
    setIsCPasswordDirty(true);
  }

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
    <Flex direction="column" justifyContent='center'>
      <Header/>
      <br /><br /><br />
      <Heading as='h2' size='xl'>
       Selamat Datang di  <Text as="span" color={`${VARIANT_COLOR}`}>KenaliAku</Text>
      </Heading>
      <Flex  minHeight='120vh' width='full' align='center' justifyContent='center'>
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
              <Heading as='h4' size='md'>Daftar</Heading>
              <Text>
                Sudah punya akun? 
                <Link 
                  href='LoginForm.js'
                  color={`${VARIANT_COLOR}.500`}
                  >
                    Masuk
                </Link>
              </Text>
            </Box>

            <FormControl isRequired mt={4}>
              <FormLabel >Nama Lengkap</FormLabel>
              <Input 
                id='name' 
                placeholder=' ' 
                value={name} 
                onChange={(e)=>setName(e.target.value)}
              />
            </FormControl>

            <FormControl isRequired mt={4}>
              <FormLabel>Alamat Email</FormLabel>
              <Input 
                type='email' 
                placeholder=' ' 
                value={email} 
                onChange={(e)=>setEmail(e.target.value)}
              />
            </FormControl>
            
            <FormControl isRequired mt={4}>
              <FormLabel>Kata Sandi</FormLabel>
              <Input 
                id='password' 
                type='password' 
                placeholder=' ' 
                value={password} 
                onChange={(e)=>setPassword(e.target.value)}
              />
              <FormHelperText>Minimal 6 Karakter</FormHelperText>
            </FormControl>

            <FormControl isRequired mt={4}>
              <FormLabel>Konfirmasi Kata Sandi</FormLabel>
              <Input 
                type='password' 
                className={cPasswordClass}
                placeholder=' ' 
                value={cPassword} 
                onChange={handleCPassword}
              />
            </FormControl>
            {showErrorMessage && isCPasswordDirty ? <div> Kata Sandi Tidak Cocok </div> : ''}

            <Button onClick={signUp} colorScheme='red'  width='full' mt={6}>Daftar</Button>
          </form>
        </Box>
        </Box>
      </Flex>
      <div>
        Copyright 2022 • All rights reserved • KenaliAku
      </div>
      <br /><br />
    </Flex>
  )
}
export default  (RegisterForm);