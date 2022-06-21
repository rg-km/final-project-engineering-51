import {
  Box,
  Image,
  Button,
  Text,
  Heading,
  Flex,
} from '@chakra-ui/react';
import * as React from 'react';
import Complete from '../assets/finish.png';

function TestComplete() {
  return(
    <>
      <Box className='test-complete' bg='#F9F9F9' w='100%' py={16} px={36} color='black'>
        <Flex textAlign='center' alignItems='center' flexDirection='column' gap={12}>
          <Heading as='h1' size='lg'>
            Pengenalan Tes Minat Bakat
          </Heading>
          <Image src={Complete} alt='Complete' />
          <Text w='2xl'>
            Tes ini digunakan untuk mencari tahu tentang kelebihan dan kelemahan kamu, 
            jurusan studi, serta karir yang cocok dengan minat dan bakatmu 
          </Text>
          <Box>
            <Button colorScheme="gray.600" backgroundColor='primary.500'>
              LIHAT HASIL
            </Button>
          </Box>
        </Flex>
      </Box>
    </>
  )
}

export default TestComplete;