import {
    Box,
    Text,
    ButtonGroup,
    Divider,
    IconButton,
    Stack,
} from '@chakra-ui/react';
import { PhoneIcon, AtSignIcon} from '@chakra-ui/icons';
import * as React from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

function Footer(){
    return(
    <>
    <br/><br/>
        <footer>
            <Box background="black">
            <Box ml={70} mr={70}>
            <Stack
            spacing="8"
            direction={{ base: 'column', md: 'row' }}
            justify="space-between"
            py={{ base: '12', md: '10' }}
            >
            <Stack spacing={{ base: '6', md: '8' }} align="start">
                <Text color="white" fontWeight="bold" fontSize='3xl'>KenaliAku</Text>
            </Stack>
            <Stack
                direction={{ base: 'column-reverse', md: 'column', lg: 'row' }}
                spacing={{ base: '12', md: '8' }}
            >
                <Stack direction="row" spacing="10">
                    <Stack spacing="4" minWidth="200" flex="1" >
                        <Text fontSize="sm" fontWeight="semibold" color="white">
                        Kontak Kami
                        </Text>
                        <Stack spacing="3" shouldWrapChildren>
                        <Text color="white" fontSize="sm"><PhoneIcon/> 087748238383</Text>
                        <Text color="white" fontSize="sm"><AtSignIcon/> KenaliAku@gmail.com</Text>
                        </Stack>
                    </Stack>
                    <Stack spacing="4">
                    <Text fontSize="sm" fontWeight="semibold" color="white">Ikuti Kami</Text>
                    <ButtonGroup variant="ghost">
                        <IconButton color="white" as="a" href="#" aria-label="LinkedIn" icon={<FaLinkedin fontSize="1.25rem" />} />
                        <IconButton color="white" as="a" href="#" aria-label="GitHub" icon={<FaGithub fontSize="1.25rem" />} />
                        <IconButton color="white" as="a" href="#" aria-label="Twitter" icon={<FaTwitter fontSize="1.25rem" />} />
                    </ButtonGroup>
                    </Stack>
                </Stack>
            </Stack>
            </Stack>
            </Box>
            <Divider borderColor="red.200"/>
            <Box ml={70} mr={70}>
            <Stack
            pt="4"
            pb="4"
            justify="space-between"
            direction={{ base: 'column-reverse', md: 'row' }}
            align="center"
            >
            <Text fontWeight="bold" fontSize="sm" color="white">
                &copy; {new Date().getFullYear()} • KenaliAku • All rights reserved
            </Text>
            </Stack>
            </Box>
            </Box>
        </footer>
    </>
    );
}

export default Footer;