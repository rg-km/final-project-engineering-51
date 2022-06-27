import {
  Box,
  Image,
  Button,
  Text,
  Heading,
  Flex,
} from '@chakra-ui/react';
import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Complete from '../assets/finish.png';
import Footer from '../components/Footer';
import Header from '../components/Header';
import ResultPage from './ResultPage';

const TestComplete = () =>{

  // const answers = useStore((state) => state.answers);
  const handleSubmit = (event) => {
    event.preventDefault();
    let auth = localStorage.getItem("token");

    fetch(`http://localhost:8080/api/test/submit`, {
      method: "POST",
      body: JSON.stringify({
        "answers" : [{"no_soal":1, "answer": true},
        {"no_soal":2, "answer": true},
        {"no_soal":3, "answer": true},
        {"no_soal":5, "answer": true},
        {"no_soal":14, "answer": true},
        {"no_soal":6, "answer": true},
        {"no_soal":7, "answer": true},
        {"no_soal":8, "answer": true},
        {"no_soal":9, "answer": true},
        {"no_soal":10, "answer": false},
      
        {"no_soal":11, "answer": true},
        {"no_soal":12, "answer": true},
        {"no_soal":13, "answer": true},
        {"no_soal":4, "answer": false},
        {"no_soal":15, "answer": true},
        {"no_soal":16, "answer": true},
        {"no_soal":17, "answer": true},
        {"no_soal":18, "answer": true},
        {"no_soal":19, "answer": true},
        {"no_soal":20, "answer": false},
      
        {"no_soal":21, "answer": true},
        {"no_soal":22, "answer": true},
        {"no_soal":23, "answer": true},
        {"no_soal":24, "answer": true},
        {"no_soal":25, "answer": true},
        {"no_soal":26, "answer": true},
        {"no_soal":27, "answer": true},
        {"no_soal":28, "answer": true},
        {"no_soal":29, "answer": true},
        {"no_soal":30, "answer": false},
      
        {"no_soal":31, "answer": true},
        {"no_soal":32, "answer": true},
        {"no_soal":33, "answer": true},
        {"no_soal":34, "answer": true},
        {"no_soal":35, "answer": true},
        {"no_soal":36, "answer": true},
        {"no_soal":37, "answer": true},
        {"no_soal":38, "answer": true},
        {"no_soal":39, "answer": true},
        {"no_soal":40, "answer": false},
      
        {"no_soal":41, "answer": true},
        {"no_soal":42, "answer": true},
        {"no_soal":43, "answer": true},
        {"no_soal":44, "answer": true},
        {"no_soal":45, "answer": true},
        {"no_soal":46, "answer": true},
        {"no_soal":47, "answer": true},
        {"no_soal":48, "answer": true},
        {"no_soal":49, "answer": true},
        {"no_soal":50, "answer": true},
      
        {"no_soal":51, "answer": true},
        {"no_soal":52, "answer": true},
        {"no_soal":53, "answer": true},
        {"no_soal":54, "answer": true},
        {"no_soal":55, "answer": true},
        {"no_soal":56, "answer": true},
        {"no_soal":57, "answer": true},
        {"no_soal":58, "answer": true},
        {"no_soal":59, "answer": true},
        {"no_soal":60, "answer": false}
        ]
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
              <Link to={'/result'}>
                <Button type="submit" colorScheme="gray.600" backgroundColor='primary.500'>
                  LIHAT HASIL
                </Button>
              </Link>
            </Box>
          </Flex>
        </form>
      </Box>
      <Footer />
    </>
  )
}

export default TestComplete;