import {
  Box,
  Image,
  Button,
  Text,
  Heading,
  Flex,
  Divider,
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
      <Box className='test-complete' w='100%' backgroundImage={Bg} backgroundRepeat="no-repeat" py={16} px={36} color='black'>
        <Flex textAlign='center' alignItems='center' flexDirection='column'>
          <Heading as='h1' size='px' mb={4}>
            Kamu merupakan tipe :
          </Heading>
          <Text w='2xl' mb={10}>
            show get result here...
          </Text>
          <Box rounded="10" background="white" py={50} boxShadow='10px 10px 8px #888888' display="flex" flexDirection='column' alignItems="center" justifyContent="space-around" px={50}>
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
        <Box>
        </Box>
      </Box>
      <Footer />
    </>
  )
}

export default TestComplete;