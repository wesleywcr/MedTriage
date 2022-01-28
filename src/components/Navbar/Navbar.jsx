import {
  Box,
  Flex,
  HStack,
  Heading,
  Link,
  IconButton,
  useDisclosure,
  Stack,
  Spacer
} from '@chakra-ui/react'

import { CloseIcon, HamburgerIcon } from '@chakra-ui/icons'

const Links = ['Usuário', 'Configurações', 'Time']

const NavLink = ({ children }) => (
  <Link
    width={'9rem'}
    px={'10px'}
    py={1}
    rounded={'md'}
    _hover={{
      textDecoration: 'none',
      bg: 'gray.800',
      color: 'yellow.700'
    }}
    href={'#'}
  >
    {children}
  </Link>
)

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
      <Box bg={'gray.700'}>
        <Flex h={16} alignItems={'center'} justifyContent={'ce'}>
          <IconButton
            bg={'gray.700'}
            size={'md'}
            alignContent={'flex-end'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <Spacer />
          <HStack spacing={8} alignItems={'center'}>
            <Box>
              <Heading
                as="h1"
                color={'yellow.700'}
                textShadow={'1.5px 1.5px 1.5px #000'}
              >
                Med Triage
              </Heading>
            </Box>
          </HStack>
          <Spacer />
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  )
}
