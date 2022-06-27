import {
  Flex,
  Box,
  Heading,
  Text,
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
import React ,{ useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from "axios";
const VARIANT_COLOR = '#C73661';

export default function RegisterForm ()  {
  const [Fullname,setFullname]=useState("")
  const [Email,setEmail]=useState("")
  const [Password,setPassword]=useState("")
  const [cPassword, setCPassword] = useState('');
  const Navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showcPassword, setShowCPassword] = useState(false);
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (Password !== cPassword) {
      alert("Kata Sandi Tidak Cocok");
    }else if(Password.length < 6){
      alert("Password harus lebih dari 6 karakter")
    }
    else {
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
                  to='/login'
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
                placeholder=' ' 
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
                placeholder=' '
                onChange={(e)=>setEmail(e.target.value)}
              />
            </FormControl>
            
            <FormControl isRequired mt={4}>
              <FormLabel>Kata Sandi</FormLabel>
              <InputGroup>
                <Input 
                  type={showPassword ? 'text' : 'password' } 
                  value={Password}
                  onChange={(e)=>setPassword(e.target.value)} 
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
              <FormHelperText>Minimal 6 Karakter</FormHelperText>
            </FormControl>

            <FormControl isRequired mt={4}>
              <FormLabel>Konfirmasi Kata Sandi</FormLabel>
              <InputGroup>
                <Input 
                  type={showcPassword ? 'text' : 'password' } 
                  value={cPassword}
                  className={cPassword}
                  onChange={(e) => { setCPassword(e.target.value) }}
                />
                <InputRightElement h={'full'}>
                  <Button
                    variant={'ghost'}
                    onClick={() =>
                      setShowCPassword((showcPassword) => !showcPassword)
                    }>
                    {showcPassword ? <ViewIcon /> : <ViewOffIcon />}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </FormControl>
            
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