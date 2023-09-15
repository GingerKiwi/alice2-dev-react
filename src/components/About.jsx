import { Box, Text, Heading } from '@chakra-ui/react';
import { VStack,} from '@chakra-ui/react'

const About = () => {
    return (
        <VStack spacing='24px'>
            <Box justifyContent='center' alignItems='center'>
                <Heading fontsize={ 100 } alignItems='center' justifyContent='center' marginBottom='2rem'>About</Heading>
                <Text>
                A comprehensive experiential, project based learning curriculum to help new developers learn GitHub workflows and Open Source in a supportive, social environment. The app we build is a text-based vanilla JavaScript game inspired by Tim Burton's Alice in Wonderland movie.

Version 2.0 will be ready for new participants for Hacktoberfest in October, 2023. Founded during Hacktoberfest 2022, and now in redevelopment
                </Text>
            </Box>
            
        </VStack>
      )
}

export default About