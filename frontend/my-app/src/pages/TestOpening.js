import {
  Box,
  Image,
  Button,
  Text,
  Heading,
  Flex,
} from '@chakra-ui/react';
import Petunjuk1 from '../assets/petunjuk-1.png';
import Petunjuk2 from '../assets/petunjuk-2.png';
import Petunjuk3 from '../assets/petunjuk-3.png';

function TestOpening() {
  const property = [
    {
      imageUrl: Petunjuk1,
      imageAlt: 'petunjuk-1',
      text: 'Tes ini terdiri dari xx pertanyaan, umumnya memakan waktu selama 10 menit.'
    },
    {
      imageUrl: Petunjuk2,
      imageAlt: 'petunjuk-2',
      text: 'Jika pernyataan di dalam soal sesuai dengan diri kamu, pilih “YA”. Jika tidak sesuai dengan kamu, pilih “TIDAK”'
    },
    {
      imageUrl: Petunjuk3,
      imageAlt: 'petunjuk-3',
      text: 'Tidak ada jawaban benar maupun salah, pilihlah jawaban yang sesuai dengan diri kamu.'
    }
  ];
  
  return(
    <>
      <Box id='test-opening' bg='#F9F9F9' w='100%' py={16} px={36} color='black'>
        <Flex textAlign='center' alignItems='center' flexDirection='column' gap={12}>
          <Box>
            <Heading as='h1' size='lg' mb={6}>
              Pengenalan Tes Minat Bakat
            </Heading>
            <Text w='2xl'>
              Tes ini digunakan untuk mencari tahu tentang kelebihan dan kelemahan kamu, 
              jurusan studi, serta karir yang cocok dengan minat dan bakatmu 
            </Text>
          </Box>
          <Flex className='guide-container' gap={9}>
            {
              property.map((el) => (
                <Box w='100%'>
                  <Image
                    w='100%'
                    objectFit='cover'
                    border='solid 1px'
                    borderColor='primary.200'
                    borderRadius='lg'
                    src={el.imageUrl} 
                    alt={el.imageAlt}
                  />
                  <Text mt={3}>
                    {el.text}
                  </Text>
                </Box>
              ))
            }
          </Flex>
          <Box>
            <Button colorScheme="gray.600" backgroundColor='primary.500'>
              MULAI TES SEKARANG
            </Button>
          </Box>
        </Flex>
      </Box>
    </>
  );
}

export default TestOpening;