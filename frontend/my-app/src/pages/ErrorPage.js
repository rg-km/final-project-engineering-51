import React from 'react'
import { useNavigate } from 'react-router-dom';
import { Box, Heading, Text, Button } from '@chakra-ui/react';

export default function ErrorPage() {
  let navigate = useNavigate();
  return (
    <Box textAlign="center" py={10} px={6}>
      <Heading
        display="inline-block"
        as="h2"
        size="2xl"
        bgGradient="linear(to-r, red.400, red.600)"
        backgroundClip="text">
        404 | Not Found
      </Heading>
      <Text fontSize="18px" mt={3} mb={2}>
        Halaman Tidak Ditemukan
      </Text>
      <Text color={'black.500'} mb={6}>
        Maaf Halaman yang Anda Minta Tidak Tersedia
      </Text>

      <Button
        colorScheme="red"
        color="white"
        variant="solid"
        onClick={()=>navigate('/')}
      >
        Go to Home
      </Button>
    </Box>
  )
}
