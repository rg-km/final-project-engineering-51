import React ,{ useState } from 'react';
import { useNavigate } from 'react-router-dom';
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
  Button,
  InputGroup,
  InputRightElement,
} from '@chakra-ui/react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import Header from '../components/Header';
import Footer from '../components/Footer';


const VARIANT_COLOR = '#C73661';

const RegisterForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [cPassword] = useState('');
  const Navigate = useNavigate();
  const [validOnChange, setValidOnChange] = React.useState(false);

  async function doregister(values){
    console.log('doregister');
    let item={name: values.name, email : values.email, password : values.password}
    let result= await fetch("http://localhost:8080/api/user/register",{
      method:"POST",
      body:JSON.stringify(item),
      headers:{
        "Content-Type":"application/json",
        "Accept":"application/json"
      },
    })
    result=await result.json()
    localStorage.setItem("user-info",JSON.stringify(result))
    Navigate("/")
    setTimeout(() => {
        formik.setSubmitting(false);
        formik.resetForm();
    }, 2000);
}
const formik = useFormik({
    initialValues: {
        name: '',
        email: '',
        password: '',
        cPassword: '',
    },
    validationSchema: Yup.object({
        name: Yup.string()
            .required(),
        email: Yup.string()
            .required()
            .email('Format email tidak cocok'),
        password: Yup.string()
            .required()
            .min(6, 'Minimal 6 Karakter')
            .matches(/[a-z]/g, 'Harus terdapat minimal 1 lowercase')
            .matches(/[A-Z]/g, 'Harus terdapat minimal 1 uppercase')
            .matches(/[0-9]/g, 'Harus terdapat minimal 1 number')
            .matches(/^\S*$/, 'Tidak boleh mengandung spasi'),
        cPassword: Yup.string()
            .required()
            .oneOf([Yup.ref('password')], 'Kata Sandi Tidak Cocok'),
    }),
    onSubmit: (values) => {
      doregister(values);
    }
  });
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
          <form onSubmit={formik.handleSubmit}>
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
                name='name' 
                placeholder=' ' 
                value = {formik.values.name}
                onChange={e => formik.setFieldValue('name', e.target.value)}
                invalid={formik.errors.name}
              />
              {formik.touched.name && formik.errors.name && <div className="error">{formik.errors.name}</div>}
            </FormControl>

            <FormControl isRequired mt={4}>
              <FormLabel>Alamat Email</FormLabel>
              <Input 
                name='email'
                type='email' 
                placeholder=' ' 
                value = {formik.values.email}
                onChange={e => formik.setFieldValue('email', e.target.value)}
                invalid={formik.errors.email}
              />
              {formik.touched.email && formik.errors.email && <div className="error">{formik.errors.email}</div>}
            </FormControl>

            <FormControl id="password" isRequired mt={4}>
              <FormLabel>Kata Sandi</FormLabel>
              <InputGroup>
                <Input 
                  name='password'
                  type={showPassword ? 'text' : 'password' } 
                  value = {formik.values.password}
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

            <FormControl isRequired mt={4}>
              <FormLabel>Konfirmasi Kata Sandi</FormLabel>
              <InputGroup>
                <Input 
                  name='cPassword'
                  type={showPassword ? 'text' : 'password' } 
                  value={cPassword}
                  {...formik.getFieldProps('cPassword')}
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
              {formik.touched.cPassword && formik.errors.cPassword && <div className="error">{formik.errors.cPassword}</div>}
            </FormControl>

            <Button  disabled={formik.isSubmitting} 
              onClick={() => {
                if (!validOnChange) {
                  setValidOnChange(true);
                }
              }} 
              type='submit' 
              colorScheme='red'  
              width='full' 
              mt={4}
            >
              Daftar
            </Button>
          </form>
        </Box>
        </Box>
      </Flex>
    </Flex>
    <Footer/>
    </>
  )
}
export default  (RegisterForm);