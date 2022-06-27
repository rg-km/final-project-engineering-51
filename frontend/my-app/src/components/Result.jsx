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
import React, { useRef, useState, useContext, useEffect} from 'react';
import Complete from '../assets/finish.png';
import Object from '../assets/result1.png';
import Bg from '../assets/result.jpg';
import Header from './Header';
import Footer from './Footer';

export default function Result({
    fullname,
    email,
    R,I,A,S,E,C,
    highest,
    desc,
    s1,s2,s3,s4
}) {

return(
    <>
    <Box backgroundImage={Bg} backgroundRepeat="no-repeat" backgroundSize="100%" py={16} px={36}>
        <Flex textAlign='center' alignItems='center' flexDirection='column'>
        <Heading as='h1' size='1xl' mb={4}>
            {fullname}, kamu merupakan tipe :
        </Heading>
        <Text w='2xl' mb={10}>
            {highest}
        </Text>
        <Box mb={5} rounded="10" background="white" py={50} boxShadow='10px 10px 8px #888888' display="flex" flexDirection='column' alignItems="center" justifyContent="space-around" px={50}>
            <Box px={70} mb={10}>
            <Box display="flex" align="center" flexDirection='row' gap={3}>
                <Box>
                    <Image borderRadius="100%" src={Complete}/>
                    <Text>Realistis:</Text>
                    <Text>{R} %</Text>
                </Box>
                <Box>
                    <Image borderRadius="100%" src={Complete}/>
                    <Text>Investigatif:</Text>
                    <Text>{I} %</Text>
                </Box>
                <Box>
                    <Image borderRadius="100%" src={Complete}/>
                    <Text>Artistik:</Text>
                    <Text>{A} %</Text>
                </Box>
                <Box>
                    <Image borderRadius="100%" src={Complete}/>
                    <Text>Sosial:</Text>
                    <Text>{S} %</Text>
                </Box>
                <Box>
                    <Image borderRadius="100%" src={Complete}/>
                    <Text>Enterprising:</Text>
                    <Text>{E} %</Text>
                </Box>
                <Box>
                    <Image borderRadius="100%" src={Complete} />
                    <Text>Konvensional:</Text>
                    <Text>{C} %</Text>
                </Box>
            </Box>
            </Box>
            <Text mb={10}>
            Berdasarkan hasil tes minat bakat KenaliAku, kamu merupakan seseorang yang berjiwa {highest}. Yuk! Kenali potensi dirimu lebih lanjut...
            </Text>
            <Divider mb={10} color="black" sx={{ bgcolor: "secondary.light", border:"2px" }} />
            <Box>
                <Box display="flex" alignItems="center" justifyContent="space-around">
                    <Image w="40%" src={Object} mr={10}/>
                    <Box>
                    <Box rounded="10" border="1px solid #E84B6A" mb={5} py={5} px={5}>
                        <Heading align="left" mb={5} size="1xl">
                            <Box fontWeight="black">
                            Tipe {highest}
                            </Box>
                        </Heading>
                        <Text align="justify">{desc}</Text>
                    </Box>
                    </Box>
                </Box>
            </Box>  
        </Box>
        </Flex>
    </Box>
    <Box gap={3} py={10} display="flex" alignItems="center" justifyContent="space-around" flexDirection='column'>
        <Heading size="px" mb={4}>Apa Jurusan Yang Cocok Untuk Kamu?</Heading>
        <Text textAlign='center' px={200} mb={2}>Berikut adalah daftar jurusan yang cocok dengan minat bakatmu. Ayo cari tau lebih lanjut dengan menekan tombol nama jurusan yang paling menarik perhatianmu.</Text>
        <Flex display="flex" flexDirection="column" gap={3}>
            <Button colorScheme="gray.600" color="#E84B6A" variant='outline'>{s1}</Button>
            <Button colorScheme="gray.600" color="#E84B6A" variant='outline'>{s2}</Button>
            <Button colorScheme="gray.600" color="#E84B6A" variant='outline'>{s3}</Button>
            <Button colorScheme="gray.600" color="#E84B6A" variant='outline'>{s4}</Button>
        </Flex>
    </Box>
    </>
    )
}