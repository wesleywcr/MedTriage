import {
  Box,
  chakra,
  Circle,
  Container,
  Heading,
  Stack,
  Text,
  VisuallyHidden
} from '@chakra-ui/react'
import { FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa'

const SocialButton = ({ children, label, href }) => {
  return (
    <chakra.button
      bg="blackAlpha.100"
      rounded={'full'}
      w={8}
      h={8}
      cursor={'pointer'}
      as={'a'}
      href={href}
      display={'inline-flex'}
      alignItems={'center'}
      justifyContent={'center'}
      transition={'background 0.3s ease'}
      _hover={{
        bg: 'blackAlpha.200'
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  )
}

export default function Footer() {
  return (
    <Box bg="yellow.700" color="gray.800" marginTop={40}>
      <Container
        as={Stack}
        maxW={'6xl'}
        py={4}
        direction={{ base: 'column', md: 'row' }}
        spacing={4}
        justify={{ base: 'center', md: 'space-between' }}
        align={{ base: 'center', md: 'center' }}
      >
        <Heading as="h1" textShadow={'1.5px 1.5px 1.5px #e7e7e7'}>
          Med Triage
        </Heading>
        <Text>© 2022 Wesleywcr All rights reserved</Text>
        <Stack direction={'row'} spacing={6}>
          <Circle
            bg={'yellow.400'}
            boxShadow={'dark-lg'}
            _hover={{
              bg: 'gray.50',
              color: 'blue.600'
            }}
          >
            <SocialButton label={'Twitter'} href={'#'}>
              <FaTwitter />
            </SocialButton>
          </Circle>
          <Circle
            bg={'yellow.400'}
            boxShadow={'dark-lg'}
            _hover={{
              bg: 'gray.50',
              color: 'red.600'
            }}
          >
            <SocialButton label={'YouTube'} href={'#'}>
              <FaYoutube />
            </SocialButton>
          </Circle>
          <Circle
            bg={'yellow.400'}
            boxShadow={'dark-lg'}
            _hover={{
              bg: 'gray.50',
              color: 'pink.600'
            }}
          >
            <SocialButton label={'Instagram'} href={'#'}>
              <FaInstagram />
            </SocialButton>
          </Circle>
        </Stack>
      </Container>
    </Box>
  )
}
