import { Box, Text, Heading } from '@chakra-ui/react';
import { VStack,} from '@chakra-ui/react'

const About = () => {
    return (
        <VStack spacing='24px'>
            <Box justifyContent='center' alignItems='center'>
                <Heading fontSize={ 25 } alignItems='center' justifyContent='center' marginBottom='2rem'>About</Heading>
                <Text color='blue.100' fontSize='1.25rem' marginBottom='1rem'>
                The Alice in Wonderland Project seeks to do the seemingly impossible - give new devs real world experience being part of a remote software development team before they have a software development job.</Text>
                
                <Text color='blue.100'>The Alice in Wonderland Project is an experiential, project based learning open source project to help new developers learn GitHub workflows and being part of an Open Source team. It also provides opportunities for devs with software work experience (e.g. 6 months all the way to senior dev) to level up their leadership skills by being maintainers that act as "team leads" onboarding new devs, reviewing PRs, providing code reviews, and doing some mentorship. Team leads work in pairs to help balance out their work/life/Hacktoberfest balance. Teams are kept to a maximum of 6 new devs and two team leads thoughout Hacktoberfest so everyone has a personalized experience.

As the focus is on learning GitHub and how to work as part of a software dev team, the app is a simple and fun html/css/vanilla javascript text-based game with a Tim Burton’s Alice in Wonderland theme. It doesn't make sense to try to learn a complex tool using a complex codebase. That's like using one black box to learn how to use the other black box.

Diversity and Accessibility (A11y) is key! We strongly encourage applications from groups that are under represented in tech. Participants will gain a good understanding of coding with an accessibility first mindset - and as part of the developer experience (DevEx).</Text>
            </Box>
            
        </VStack>
      )
}

export default About