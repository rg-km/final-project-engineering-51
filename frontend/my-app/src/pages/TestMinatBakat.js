import {
  Box,
  Button,
  Text,
  Heading,
  Flex,
  Progress,
  Radio,
  RadioGroup,
  Stack
} from '@chakra-ui/react';
import * as React from 'react';
import axios from 'axios';
import SoalStore from '../store/SoalStore';
import { useEffect } from 'react';

function TestMinatBakat() {
  const soal = SoalStore((state) => state.soal);
  const getSoal = SoalStore((state) => state.getSoal);
  useEffect(() => {
    getSoal();
  }, [])

  return(
    <>
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

          {/* <Flex alignItems='center' gap={3}>
            <Box>
              <Text>
                Progress
              </Text>
            </Box>
            <Progress colorScheme='yellow' size='sm' w='500px' value={20} />
            <Box>
              <Text>2/10</Text>
            </Box>
          </Flex> */}

          <Flex w='2xl' flexDirection='column'>
            {
              soal.map((e) => (
                <Box key={e.no_soal}>
                  {e.no_soal} {e.desc_soal}
                </Box>
              ))
            }
          </Flex>

          <Box>
            <Button colorScheme="gray.600" backgroundColor='primary.500'>
              SELANJUTNYA
            </Button>
          </Box>
        </Flex>
      </Box>
    </>
  );
}

export default TestMinatBakat;