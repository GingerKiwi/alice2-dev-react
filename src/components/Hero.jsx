'use client'

import {
  Button,
  Flex,
  Heading,
  Image,
  Link,
  Stack,
  Text,
  Box,
//   useBreakpointValue,
} from '@chakra-ui/react'
import logo from '../assets/alice-project-logo-128x128-black.png'
// import wonderland from '../assets/nicole-baster-24JJStvqFLs-unsplash.jpg';
import githubegg from '../assets/brecht-corbeel-BvAwzPQRRis-unsplash.jpg'

export default function Hero() {
  return (
    <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }} bgColor='black'>
      <Flex p={8} flex={1} align={'center'} justify={'center'}>
        <Stack spacing={6} w={'full'} maxW={'lg'}>
        
          <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
          
        <Image
        boxSize='100px'
          alt={'Wonderland pink neon sign'}
          marginBottom='1rem'
          src={
            logo
          }
        />


            <Text color={'blue.400'} as={'span'}>
            The Alice in Wonderland Project
            </Text>{' '}
          </Heading>
          <Text fontSize={{ base: 'md', lg: 'lg' }} color={'gray.100'}>
          Go down the rabbit hole together to learn GitHub workflows and contribute to open-source!
          </Text>
          <Text color={'white'}>NOTE SEPT 15, 2023: THIS SITE IS IN DEVELOPEMENT OVER THE WEEKEND. LINKS/BUTTONS ARE NOT WORKING YET.</Text>

          <Link color={'blue.200'} href='https://github.com/The-Alice-In-Wonderland-Project' >
  GitHub
</Link>
          <Stack direction={{ base: 'column', md: 'row' }} spacing={4}>
            <Button
              rounded={'full'}
              bg={'blue.400'}
              color={'white'}
              _hover={{
                bg: 'blue.500',
              }}>
              Get Involved!
            </Button>
            <Button rounded={'full'}>How It Works</Button>
            
          </Stack>
        </Stack>
      </Flex>
      <Flex flex={1}>
        <Image
          alt={'Wonderland pink neon sign'}
          objectFit={'cover'}
          src={
            githubegg
          }
        />
      </Flex>
    </Stack>
  )
}