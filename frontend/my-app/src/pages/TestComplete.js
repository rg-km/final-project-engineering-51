import {
  Box,
  Image,
  Button,
  Text,
  Heading,
  Flex,
} from '@chakra-ui/react';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Complete from '../assets/finish.png';
import Footer from '../components/Footer';
import Header from '../components/Header';
import ResultPage from './ResultPage';
import useStore from '../store/Store';

const TestComplete = () =>{
  const navigate = useNavigate();

  const answers = useStore((state) => state.answers);
  console.log(answers);

  const handleSubmit = (event) => {
    event.preventDefault();
    let auth = localStorage.getItem("token");

    fetch(`http://localhost:8080/api/test/submit`, {
      method: "POST",
      body: JSON.stringify({answers}),
      headers: {
        Accept: "/",
        "Content-Type": "application/json",
        "Token": auth,
      },
    })
      .then((response) => {
        if(response.status === 200){
            console.log("SUCCESSS")
            navigate("/result")
            return response.json(); 
        }else if(response.status === 401){
            console.log("SOMETHING WENT WRONG")
            this.setState({ requestFailed: true })
        }
      })
      .then((data) => {
        console.log(data.token);
      })
  };

  return(
    <>
      <Header />
      <br/>
      <Box className='test-complete' w='100%' py={16} px={36} color='black'>
        <form onSubmit={handleSubmit}>
          <Flex textAlign='center' alignItems='center' flexDirection='column' gap={12}>
            <Heading as='h1' size='lg'>
              Hore! Kamu berhasil menyelesaikan seluruh tes
            </Heading>
            <Image w="40%" src={Complete} alt='Complete' />
            <Text w='2xl'>
              Sekarang kamu dapat melihat hasil dan penjelasan lebih lanjut mengenai minat 
              dan bakat kamu dengan menekan tombol dibawah ini.
            </Text>
            <Box>
              {/* <Link to={'/result'}> */}
                <Button type="submit" colorScheme="gray.600" backgroundColor='primary.500'>
                  LIHAT HASIL
                </Button>
              {/* </Link> */}
            </Box>
          </Flex>
        </form>
      </Box>
      <Footer />
    </>
  )
}

export default TestComplete;