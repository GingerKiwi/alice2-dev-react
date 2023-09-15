import { Heading, Image, Text } from '@chakra-ui/react';
import logo from '../assets/alice-project-logo-128x128-black.png'

const Header = () => {
  return (
    <>
    <Image src={logo} alt='square logo of a white rabbit on black background' width={ 100 } marginBottom='1rem' />
    <Heading color='white' marginBottom='1rem'>
        The Alice in Wonderland Project
    </Heading>
    <Text fontsize= { 25 } textAlign='center' marginBottom={25}>
    Go down the rabbit hole together to learn GitHub workflows and contribute to open-source! 
    </Text>
    </>
  )
}

export default Header