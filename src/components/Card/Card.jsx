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
export default function Card(props) {
  let colorClassification =
    props.classification === 5
      ? 'red.900'
      : props.classification === 4
      ? 'orange.900'
      : props.classification === 3
      ? 'yellow.500'
      : props.classification === 2
      ? 'green.800'
      : 'blue.500'

  let stringClassification =
    props.classification === 5
      ? 'VERMELHO'
      : props.classification === 4
      ? 'LARANJA'
      : props.classification === 3
      ? 'AMARELO'
      : props.classification === 2
      ? 'VERDE'
      : 'AZUL'

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
          {props.name}
        </Heading>
        <Stack
          textAlign={'center'}
          color={'gray.100'}
          px={3}
          fontWeight={900}
          marginTop={2}
        >
          <Text>{` Frequência Cardíaca :${props.frequency} bpm`}</Text>
          <Text> {`Pressão Arterial: ${props.pressure} `}</Text>
          <Text> {` Temperatura: ${props.temperature}°C `}</Text>
          <Text> {`Sintomas: ${props.symptoms} `}</Text>
        </Stack>
        <Stack>
          <Heading fontSize={'2xl'}>Descrição</Heading>
          <Text>{`${props.description}`}</Text>
        </Stack>
        <Stack align={'center'} justify={'center'} direction={'row'} mt={6}>
          <Badge
            px={2}
            py={1}
            bg={colorClassification}
            fontWeight={'400'}
            color={'gray.100'}
          >
            {stringClassification}
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
