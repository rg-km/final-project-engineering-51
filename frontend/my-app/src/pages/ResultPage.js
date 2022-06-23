import {
  Box,
  Image,
  Button,
  Text,
  Heading,
  Flex,
  Divider,
  HStack,
  Tooltip,
  border,
} from '@chakra-ui/react';
import * as React from 'react';
import Complete from '../assets/finish.png';
import Bg from '../assets/result.jpg';
import Object from '../assets/result1.png';
import Footer from '../components/Footer';
import Header from '../components/Header';

function TestComplete() {
  return(
    <>
      <Header />
      <br/><br/> 
      <Box backgroundImage={Bg} backgroundRepeat="no-repeat" backgroundSize="100%" py={16} px={36}>
        <Flex textAlign='center' alignItems='center' flexDirection='column'>
          <Heading as='h1' size='px' mb={4}>
            Kamu merupakan tipe :
          </Heading>
          <Text w='2xl' mb={10}>
            show get result here...
          </Text>
          <Box mb={10} rounded="10" background="white" py={50} boxShadow='10px 10px 8px #888888' display="flex" flexDirection='column' alignItems="center" justifyContent="space-around" px={50}>
            <Box px={70} mb={10}>
              <Box display="flex" align="center" flexDirection='row' gap={3}>
                  <Box>
                    <Image borderRadius="100%" src={Complete}/>
                    <Text>100%</Text>
                  </Box>
                  <Box>
                    <Image borderRadius="100%" src={Complete}/>
                    <Text>100%</Text>
                  </Box>
                  <Box>
                    <Image borderRadius="100%" src={Complete}/>
                    <Text>70%</Text>
                  </Box>
                  <Box>
                    <Image borderRadius="100%" src={Complete}/>
                    <Text>100%</Text>
                  </Box>
                  <Box>
                    <Image borderRadius="100%" src={Complete}/>
                    <Text>80%</Text>
                  </Box>
                  <Box>
                    <Image borderRadius="100%" src={Complete} />
                    <Text>100%</Text>
                  </Box>
              </Box>
            </Box>
            <Text mb={10}>
            Berdasarkan hasil tes minat bakat KenaliAku, kamu merupakan seseorang yang berjiwa sosial. Yuk! Kenali potensi dirimu lebih lanjut...
            </Text>
            <Divider mb={10} color="black" sx={{ bgcolor: "secondary.light", border:"2px" }} />
            <Box>
                <Box display="flex" alignItems="center" justifyContent="space-around">
                    <Image w="40%" src={Object} mr={10}/>
                    <Box>
                      <Box rounded="10" border="1px solid #E84B6A" mb={5} py={5} px={5}>
                          <Heading align="left" mb={5} size="1xl">
                              <Box fontWeight="black">
                              Tipe Sosial
                              </Box>
                          </Heading>
                          <Text align="justify">Kamu adalah eseorang yang memiliki minat di bidang Sosial, 
                          senang melakukan aktivitas yang memberi kesempatan untuk berbagi informasi dan inspirasi kepada orang lain.
                          </Text>
                      </Box>
                      <Box rounded="10" border="1px solid #E84B6A" mb={5} py={5} px={5}>
                          <Heading align="left" mb={5} size="1xl">
                              <Box fontWeight="black">
                              Tipe Sosial
                              </Box>
                          </Heading>
                          <Text align="justify">Kamu adalah eseorang yang memiliki minat di bidang Sosial, 
                          senang melakukan aktivitas yang memberi kesempatan untuk berbagi informasi dan inspirasi kepada orang lain.
                          </Text>
                      </Box>
                    </Box>
                </Box>
            </Box>
          </Box>
        </Flex>
      </Box>
      <Box gap={3} py={10} display="flex" background="#FFC9E1" alignItems="center" justifyContent="space-around" flexDirection='column'>
        <Heading size="px" mb={8}>Apa Jurusan Yang Cocok Untuk Kamu?</Heading>
        <Text mb={2}>Berikut adalah daftar jurusan yang cocok dengan minat bakatmu. Ayo cari tau lebih lanjut dengan menekan tombol nama jurusan yang paling menarik perhatianmu.</Text>
        <Flex display="flex" flexDirection="column" gap={3}>
            <Button colorScheme="gray.600" color="#E84B6A" variant='outline'>1. Sosiologi</Button>
            <Button colorScheme="gray.600" color="#E84B6A" variant='outline'>2. Psikologi</Button>
            <Button colorScheme="gray.600" color="#E84B6A" variant='outline'>3. Ilmu-Komunikasi</Button>
            <Button colorScheme="gray.600" color="#E84B6A" variant='outline'>4. Hubungan-Masyarakat</Button>
        </Flex>
      </Box>
      <Footer />
    </>
  )
}

export default TestComplete;