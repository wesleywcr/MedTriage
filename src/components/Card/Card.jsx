import {
  Heading,
  Box,
  Center,
  Text,
  Stack,
  HStack,
  Circle,
  Link,
  Badge,
  useColorModeValue
} from '@chakra-ui/react'
import { DeleteIcon, EditIcon } from '@chakra-ui/icons'
export default function Card() {
  return (
    <Center py={6}>
      <Box
        maxW={'320px'}
        w={'full'}
        bg="gray.900"
        boxShadow={'2xl'}
        rounded={'lg'}
        p={6}
        textAlign={'center'}
      >
        <Heading fontSize={'2xl'} fontFamily={'body'}>
          NOME
        </Heading>

        <Text
          textAlign={'center'}
          color={useColorModeValue('gray.700', 'gray.400')}
          px={3}
        >
          Actress, musician, songwriter and artist. PM for work inquires or{' '}
          <Link href={'#'} color={'blue.400'}>
            #tag
          </Link>{' '}
          me in your posts
        </Text>

        <Stack align={'center'} justify={'center'} direction={'row'} mt={6}>
          <Badge
            px={2}
            py={1}
            bg={useColorModeValue('gray.50', 'gray.800')}
            fontWeight={'400'}
          >
            #art
          </Badge>
          <Badge
            px={2}
            py={1}
            bg={useColorModeValue('gray.50', 'gray.800')}
            fontWeight={'400'}
          >
            #photography
          </Badge>
          <Badge
            px={2}
            py={1}
            bg={useColorModeValue('gray.50', 'gray.800')}
            fontWeight={'400'}
          >
            #music
          </Badge>
        </Stack>

        <HStack mt={8} direction={'row'} spacing={4}>
          <Circle size="40px" bg="tomato" color="white">
            <DeleteIcon />
          </Circle>
          <Circle size="40px" bg="tomato" color="white">
            <EditIcon />
          </Circle>
        </HStack>
      </Box>
    </Center>
  )
}
