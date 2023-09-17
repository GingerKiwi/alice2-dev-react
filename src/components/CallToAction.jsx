import {
    Box,
    Flex,
    Link,
    chakra,
    Stack,
  } from '@chakra-ui/react'

const CallToAction = () => {
  return (
    <Flex
    bg='black'
    // bg="#edf3f8"
    _dark={{
      bg: "#3e3e3e",
    }}
    p={50}
    w="full"
    alignItems="center"
    justifyContent="center"
  >
    <Box
      bg="black"
      _dark={{
        bg: "gray.800",
      }}
    >
      <Box
        maxW="7xl"
        w={{
          md: "3xl",
          lg: "4xl",
        }}
        mx="auto"
        py={{
          base: 12,
          lg: 16,
        }}
        px={{
          base: 4,
          lg: 8,
        }}
        display={{
          lg: "flex",
        }}
        alignItems={{
          lg: "center",
        }}
        justifyContent={{
          lg: "space-between",
        }}
      >
        <chakra.h2
          fontSize={{
            base: "3xl",
            sm: "4xl",
          }}
          fontWeight="extrabold"
          letterSpacing="tight"
          lineHeight="shorter"
          color="purple.400"
          _dark={{
            color: "purple.100",
          }}
        >
          <chakra.span display="block">Ready to go down the rabbit hole?</chakra.span>
          <chakra.span
            display="block"
            color="brand.600"
            _dark={{
              color: "gray.500",
            }}
          >
            Apply today in time for Hacktoberfest 2023!
          </chakra.span>
        </chakra.h2>
        <Stack
          direction={{
            base: "column",
            sm: "row",
          }}
          mt={{
            base: 8,
            lg: 0,
          }}
          flexShrink={{
            lg: 0,
          }}
        >
          <Link
          as="a" href={'https://forms.gle/NngWuD7txuWhA2Bt5'}
            w={["full","auto"]}
            display="inline-flex"
            alignItems="center"
            justifyContent="center"
            px={5}
            py={3}
            border="solid transparent"
            fontWeight="bold"
            rounded="md"
            shadow="md"
            _light={{
              color: "white",
            }}
            bg="blue.400"
            _dark={{
              bg: "brand.500",
            }}
            _hover={{
              bg: "purple.400",
              _dark: {
                bg: "brand.600",
              },
            }}
          >
           Alice in Wonderland Project <br></br>2023 Application Form
          </Link>
          {/* <Link
          as="a" href={'https://forms.gle/NngWuD7txuWhA2Bt5'}
            w={["full", "auto"]}
            display="inline-flex"
            alignItems="center"
            justifyContent="center"
            px={5}
            py={3}
            border="solid transparent"
            fontWeight="bold"
            rounded="md"
            shadow="md"
            color="brand.600"
            bg="white"
            _hover={{
              bg: "brand.50",
            }}
          >
            Team Leads
          </Link> */}
        </Stack>
      </Box>
    </Box>
  </Flex>
  
  )
}

export default CallToAction