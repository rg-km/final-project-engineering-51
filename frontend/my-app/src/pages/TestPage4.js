import {
  Box,
  Button,
  Text,
  Heading,
  Flex,
  Progress
} from '@chakra-ui/react';
import * as React from 'react';
import useStore from '../store/Store';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

function TestPage4() {
  const setAnswers = useStore((state) => state.setAnswers);
  const answers = useStore((state) => state.answers);
  const soal = useStore((state) => state.soal);
  const getSoal = useStore((state) => state.getSoal4);
  const progress = useStore((state) => state.progress);
  const setProgress = useStore((state) => state.setProgress);
  const resetProgress = useStore((state) => state.resetProgress);
  const [isDisabled, setIsDisabled] = useState(true);
  useEffect(() => {
    getSoal();
    window.scrollTo(0, 0);
  }, [])
  const str2bool = (value) => {
    if (value && typeof value === "string") {
         if (value === "true") return true;
         if (value === "false") return false;
    }
    return value;
  }
  const handleChange = (event) => {
    setAnswers({no_soal: parseInt(event.target.name), answer: str2bool(event.target.value)});
    setProgress();
    setIsDisabled(progress >= 9 ? false : true);
  }

  return(
    <>
      <Header />
      <Box id='test-minatbakat' bg='#F9F9F9' w='100%' py={16} px={36} color='black'>
        <Flex textAlign='center' alignItems='center' flexDirection='column' gap={12}>
          <Box>
            <Heading as='h1' size='lg' mb={6}>
              Tes Minat Bakat
            </Heading>
            <Text w='2xl'>
              Tes ini digunakan untuk mencari tahu tentang kelebihan dan kelemahan kamu, 
              jurusan studi, serta karir yang cocok dengan minat dan bakatmu 
            </Text>
          </Box>
          <Flex alignItems='center' gap={3}>
            <Box>
              <Text>
                Progress
              </Text>
            </Box>
            <Progress colorScheme='yellow' size='sm' w='500px' position='block' max={10} value={progress} />
            <Box>
              <Text>{progress}/10</Text>
            </Box>
          </Flex>
          <Flex w='2xl' flexDirection='column' alignItems='center' gap={6}>
            {
              soal?.map((e) => (
                <Box key={e.no_soal}
                  w='lg' 
                  backgroundColor='white'
                  p={6}
                  border='solid 1px' 
                  borderRadius={6}
                  borderColor='primary.200'>
                  <Text mb={3}>{e.no_soal}. {e.desc_soal}</Text>
                  <label onChange={handleChange}>
                    <Flex gap={6} justifyContent='center'>
                      <Box>
                        <input type="radio" name={e.no_soal} value={true} style={{marginRight: '6px'}}/>YA
                      </Box>
                      <Box>
                        <input type="radio" name={e.no_soal} value={false} style={{marginRight: '6px'}}/>TIDAK
                      </Box>
                    </Flex>
                  </label>
                </Box>
              ))
            }{console.log("jawaban",answers)}
          </Flex>

          <Box>
            <Link to='/test-page-5'>
              <Button colorScheme="gray.600" 
                backgroundColor='primary.500' 
                isDisabled={isDisabled} 
                onClick={() => resetProgress()}>
                SELANJUTNYA
              </Button>
            </Link>
          </Box>
        </Flex>
      </Box>
    <Footer />
    </>
  );
}

export default TestPage4;