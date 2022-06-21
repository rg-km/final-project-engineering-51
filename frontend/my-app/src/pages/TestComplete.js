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
            Hore! Kamu berhasil menyelesaikan seluruh tes
          </Heading>
          <Image src={Complete} alt='Complete' />
          <Text w='2xl'>
            Sekarang kamu dapat melihat hasil dan penjelasan lebih lanjut mengenai minat 
            dan bakatkamu dengan menekan tombol dibawah ini.
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