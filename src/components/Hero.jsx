'use client'

import {
  Button,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
//   Box,
//   useBreakpointValue,
} from '@chakra-ui/react'
// import logo from '../assets/alice-project-logo-128x128-black.png'
// import wonderland from '../assets/nicole-baster-24JJStvqFLs-unsplash.jpg';
import githubegg from '../assets/brecht-corbeel-BvAwzPQRRis-unsplash.jpg'

export default function Hero() {
  return (
    <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }} bgColor='black'>
      <Flex p={8} flex={1} align={'center'} justify={'center'}>
        <Stack spacing={6} w={'full'} maxW={'lg'}>
        
          <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
          {/* <Box boxSize='sm'>
        <Image
          alt={'Wonderland pink neon sign'}
        //   objectFit={'cover'}
          src={
            logo
          }
        />
        </Box> */}

            <Text color={'blue.400'} as={'span'}>
            The Alice in Wonderland Project
            </Text>{' '}
          </Heading>
          <Text fontSize={{ base: 'md', lg: 'lg' }} color={'gray.500'}>
          Go down the rabbit hole together to learn GitHub workflows and contribute to open-source!
          </Text>
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