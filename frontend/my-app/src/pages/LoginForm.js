import React, { useState, useEffect} from 'react';
import { useNavigate } from "react-router-dom";
import { useFormik } from 'formik';
import * as Yup from 'yup';
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
import Header from '../components/Header';
import Footer from '../components/Footer';

const VARIANT_COLOR = '#C73661';

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const Navigate = useNavigate();
  const [validOnChange, setValidOnChange] = React.useState(false);

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

const dologin = (values) => {
  console.log('form values', values);
  setTimeout(() => {
      formik.setSubmitting(false);
      formik.resetForm();
  }, 2000);
}
const formik = useFormik({
  initialValues: {
      email: '',
      password: '',
      remember: false,
  },
  validateOnBlur: true,
validateOnChange: true,
validateOnMount: true,
  validationSchema: Yup.object({
      email: Yup.string()
          .required("Email harus diisi")
          .email('Format email tidak cocok'),
      password: Yup.string()
          .required("Password harus diisi")
  }),
  onSubmit: (values) => {
    dologin(values);
  }
});
  return (
    <>
    <Header />
    <br/><br/><br/><br/>
    <Flex direction="column" justifyContent='center' textAlign='center'>
      <Header />
      <br /><br /><br /><br /><br />
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
          <form onSubmit={formik.handleSubmit}>
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
            <FormControl zIndex="-1" isRequired mt={4}>
              <FormLabel>Alamat Email</FormLabel>
              <Input 
              autofocus
                id='email'
                type='email' 
                placeholder=' ' 
                name="email"
                value = {formik.values.email}
                onChange={e => formik.setFieldValue('email', e.target.value)}
                invalid={formik.errors.email}
              />
              {formik.touched.email && formik.errors.email && <div className="error">{formik.errors.email}</div>}
            </FormControl>

            <FormControl zIndex="-1" id="password" isRequired mt={4}>
              <FormLabel>Kata Sandi</FormLabel>
              <InputGroup>
                <Input 
                  name="password"
                  type={showPassword ? 'text' : 'password' } 
                  onChange={e => formik.setFieldValue('password', e.target.value)}
                invalid={formik.errors.password}
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
              {formik.touched.password && formik.errors.password && <div className="error">{formik.errors.password}</div>}
            </FormControl>
                    {console.log(formik)}
            <Stack isInline justifyContent='space-between' mt={4}>
              <Box>
                <Checkbox>Ingat Saya</Checkbox>
              </Box>
              <Box>
                <Link color={`${VARIANT_COLOR}.500`}>Lupa Kata Sandi?</Link>
              </Box>
            </Stack>

            <Button disabled={formik.isSubmitting} onClick={() => {
              if (!validOnChange) {
                setValidOnChange(true);
              }
            }} type='submit' colorScheme='red'  width='full' mt={4}>Masuk</Button>
          </form>
        </Box>
        </Box>
      </Flex>
    </Flex>
    <Footer/>
    </>
  )
}
export default LoginForm;