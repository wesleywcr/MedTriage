import {
  Heading,
  Box,
  Center,
  Text,
  Stack,
  HStack,
  Circle,
  Badge
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
        <Stack
          textAlign={'center'}
          color={'gray.100'}
          px={3}
          fontWeight={900}
          marginTop={2}
        >
          <Text>{` Frequência Cardíaca: bpm`}</Text>
          <Text> {`Pressão Arterial:  `}</Text>
          <Text> {` Temperatura: °C `}</Text>
          <Text> {`Sintomas:  `}</Text>
        </Stack>
        <Stack>
          <Heading fontSize={'2xl'}>Descrição</Heading>
          <Text>{`Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
          Dicta eaque quasi perspiciatis facilis recusandae quaerat numquam 
          fugit ipsam iusto nisi repellat hic accusamus qui obcaecati, 
          enim debitis voluptate. Error, non?`}</Text>
        </Stack>
        <Stack align={'center'} justify={'center'} direction={'row'} mt={6}>
          <Badge
            px={2}
            py={1}
            bg={'red.900'}
            fontWeight={'400'}
            color={'gray.100'}
          >
            {`Vermelho`}
          </Badge>
        </Stack>

        <HStack mt={8} direction={'row'} spacing={4}>
          <Circle size="40px" bg="tomato" color="white">
            <DeleteIcon />
          </Circle>
          <Circle size="40px" bg="blue.500" color="white">
            <EditIcon />
          </Circle>
        </HStack>
      </Box>
    </Center>
  )
}
