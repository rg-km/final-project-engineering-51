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
  Button,
  InputGroup,
  InputRightElement,
} from '@chakra-ui/react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import Header from '../components/Header';
import Footer from '../components/Footer';
import React ,{ useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from "axios";
const VARIANT_COLOR = '#C73661';

export default function RegisterForm ()  {
  const [Fullname,setFullname]=useState("")
  const [Email,setEmail]=useState("")
  const [Password,setPassword]=useState("")
  const [cPassword, setCPassword] = useState('');
  const [showErrorMessage, setShowErrorMessage] = useState(false);
  const [cPasswordClass, setCPasswordClass] = useState('form-control');
  const [isCPasswordDirty, setIsCPasswordDirty] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const Navigate = useNavigate();
  
  useEffect(() => {
    if (isCPasswordDirty) {
        if (Password === cPassword) {
            setShowErrorMessage(false);
            setCPasswordClass('form-control is-valid')
        } else {
            setShowErrorMessage(true)
            setCPasswordClass('form-control is-invalid')
        }
    }
  }, [cPassword, isCPasswordDirty, Password]);

  const handleCPassword = (e) => {
    setCPassword(e.target.value);
    setIsCPasswordDirty(true);
  }
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let res = await axios.post(`http://localhost:8080/api/user/register`,
        {
          Fullname: Fullname,
          Email: Email,
          Password: Password,
          Role: "student",
        },
        {
          headers: {
            Accept: "/",
            "Content-Type": "application/json",
          },
        }
      );
      console.log(res);
      if (res.data.error) {
        alert(res.data.error);
      }else if(res.status === 200){
        alert("yeay! kamu berhasil daftar. silahkan login...");
        Navigate("/login");
      }
    } catch (error) {
      alert(
        "Username / Email Sudah terdaftar"
      );
    }
  };

  return (
    <>
    <Header />
    <br/><br/><br/><br/>
    <Flex direction="column" justifyContent='center' textAlign='center'>
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
          <form onSubmit={handleSubmit}>
            <Box textAlign='center'>
              <Heading as='h4' size='md'>Daftar</Heading>
              <Text>
                Sudah punya akun?  
                <Link 
                  href='LoginForm.js'
                  color='red'
                  fontWeight="bold"
                  >
                  Masuk
                </Link>
              </Text>
            </Box>

            <FormControl isRequired mt={4}>
              <FormLabel >Nama Lengkap</FormLabel>
              <Input 
                type='text'
                id='Fullname'
                name='Fullname'
                value={Fullname}
                placeholder='masukkan nama panjang anda' 
                onChange={(e)=>setFullname(e.target.value)}
              />
            </FormControl>

            <FormControl isRequired mt={4}>
              <FormLabel>Alamat Email</FormLabel>
              <Input 
                type='email'
                id='Email' 
                name='Email'
                value={Email}
                placeholder='masukkan email anda'
                onChange={(e)=>setEmail(e.target.value)}
              />
            </FormControl>
            
            <FormControl isRequired mt={4}>
              <FormLabel>Kata Sandi</FormLabel>
              <Input 
                id='password' 
                type='password' 
                name='password'
                value={Password}
                placeholder='masukkan password'
                onChange={(e)=>setPassword(e.target.value)}
              />
            </FormControl>
            
              //<InputGroup>
                //<Input 
                  //type={showPassword ? 'text' : 'password' } 
                  //value={Password}
                  //onChange={(e)=>setPassword(e.target.value)} 
                ///>
                //<InputRightElement h={'full'}>
                  //<Button
                    //variant={'ghost'}
                    //onClick={() =>
                      //setShowPassword((showPassword) => !showPassword)
                    //}>
                    //{showPassword ? <ViewIcon /> : <ViewOffIcon />}
                  //</Button>
                //</InputRightElement>
              //</InputGroup>
             // <FormHelperText>Minimal 6 Karakter</FormHelperText>

            <FormControl isRequired mt={4}>
              <FormLabel>Konfirmasi Kata Sandi</FormLabel>
              <Input 
                type='password'
                id='cPassword' 
                name='cPassword'
                className={cPasswordClass}
                placeholder='masukkan password konfirmasi' 
                value={cPassword} 
                onChange={(e) => { setCPassword(e.target.value) }}
              />
              
              //<InputGroup>
                //<Input 
                  //type={showPassword ? 'text' : 'password' } 
                  //value={cPassword}
                  //className={cPassword}
                  //onChange={(e) => { setCPassword(e.target.value) }}
                ///>
                //<InputRightElement h={'full'}>
                  //<Button
                    //variant={'ghost'}
                    //onClick={() =>
                      //setShowPassword((showPassword) => !showPassword)
                    //}>
                    //{showPassword ? <ViewIcon /> : <ViewOffIcon />}
                  //</Button>
                //</InputRightElement>
              //</InputGroup>
              
            </FormControl>
            {showErrorMessage && isCPasswordDirty ? <div><a style={{color:"red"}}>Kata Sandi Tidak Cocok </a></div> : ''}

            <Button type='submit' colorScheme='red'  width='full' mt={6}>Daftar</Button>
          </form>
        </Box>
        </Box>
      </Flex>
    </Flex>
    <Footer/>
    </>
  )
}