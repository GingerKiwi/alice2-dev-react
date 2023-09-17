'use client'

import { Box, Container, Stack, Text, useColorModeValue } from '@chakra-ui/react'

export default function SmallWithNavigation() {
  return (
    <Box
      bg={useColorModeValue('purple.400', 'purple.900')}
      color={useColorModeValue('grey.900', 'grey.200')}>
      <Container
        as={Stack}
        maxW={'6xl'}
        py={4}
        direction={{ base: 'column', md: 'row' }}
        spacing={4}
        justify={{ base: 'center', md: 'space-between' }}
        align={{ base: 'center', md: 'center' }}>
        <Stack direction={'row'} spacing={6}>
          <Box as="a" href={'https://github.com/The-Alice-In-Wonderland-Project'}>
            GitHub Home
          </Box>
          <Box as="a" href={'https://github.com/The-Alice-In-Wonderland-Project/alicegame-2023'}>
            GitHub Repo for Hacktoberfest 2023
          </Box>
          <Box as="a" href={'https://forms.gle/NngWuD7txuWhA2Bt5'}>
            Application Form
          </Box>
          <Box as="a" href={'https://www.linkedin.com/company/alice-in-wonderland-project'}>
            LinkedIn
          </Box>
          {/* <Box as="a" href={'#'}>
            Contact
          </Box> */}
        </Stack>
        <Text>© 2023 The Alice in Wonderland Project. All rights reserved</Text>
      </Container>
    </Box>
  )
}
