'use client'

import {
  Flex,
  Heading,
  Image,
  Link,
  Stack,
  Text,
//   GridItem,
//   Grid,
//   ExternalLinkIcon,
} from '@chakra-ui/react'
import logo from '../assets/alice-project-logo-128x128-black.png'
// import wonderland from '../assets/nicole-baster-24JJStvqFLs-unsplash.jpg';
import githubegg from '../assets/brecht-corbeel-BvAwzPQRRis-unsplash.jpg'
import hacktoberfest from '../assets/hf10_vert_fcl_rgb.png'

export default function Hero() {
  return (
    <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }} bgColor='black'>
      <Flex p={8} flex={1} align={'center'} justify={'center'}>
        <Stack spacing={6} w={'full'} maxW={'lg'}>
        
        

        
            <Image
                    boxSize='100px'
                    alt={'White rabbit logo'}
                    marginBottom='1rem'
                    src={
                        logo
                    }
                    />
        
        
        <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
            <Text color={'purple.400'} as={'span'} fontSize='4.5rem'>
            The <br></br>Alice in Wonderland Project
            </Text>{' '}
        </Heading>

            <Text fontSize='1.25rem' color={'blue.100'}>
            Go down the rabbit hole together to learn GitHub workflows and contribute to open-source!
            </Text>
          {/* <Text color={'white'}>NOTE SEPT 15, 2023: THIS SITE IS IN DEVELOPEMENT OVER THE WEEKEND. LINKS/BUTTONS ARE NOT WORKING YET.</Text> */}

          {/* <Link color={'blue.200'} href='https://github.com/The-Alice-In-Wonderland-Project' >
  GitHub
</Link> */}
          <Stack direction={{ base: 'column', md: 'row' }} spacing={4}>
          <Image
        boxSize='100px'
          alt={'Hacktoberfest 2023 logo'}
          marginBottom='1rem'
          colEnd={6}
          src={
            hacktoberfest
          }
        />
            <Link 
                href='https://forms.gle/pJGLhb8mEKGPY1U29' 
                // isExternal
                fontSize='2rem'
                // as={'span'}
                position={'relative'}
                color={'blue.400'}
                >
                APPLY TODAY! 
                {/* <ExternalLinkIcon mx='2px' /> */}
            </Link>
            {/* <Button rounded={'full'}>How It Works
            </Button> */}
            
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