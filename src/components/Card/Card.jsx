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
import axios from 'axios'

import { useRouter } from 'next/router'

export default function Card(props) {
  //refresh
  const router = useRouter()
  const refreshData = () => {
    router.replace(router.asPath)
  }

  async function deleteNote() {
    const res = await axios.delete(`http://localhost:3333/notes/${props.id}`)
    if (res.status < 300) {
      refreshData()
    }
  }

  let colorClassification =
    props.classification === '1'
      ? 'red.900'
      : props.classification === '2'
      ? 'orange.900'
      : props.classification === '3'
      ? 'yellow.500'
      : props.classification === '4'
      ? 'green.800'
      : 'blue.500'

  let stringClassification =
    props.classification === '1'
      ? 'VERMELHO'
      : props.classification === '2'
      ? 'LARANJA'
      : props.classification === '3'
      ? 'AMARELO'
      : props.classification === '4'
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
          <Text>{` Frequência Cardíaca :`}</Text>
          <Text
            fontSize={'md'}
            fontWeight={400}
          >{`${props.frequency} bpm`}</Text>
          <Text> {`Pressão Arterial: ${props.pressure} `}</Text>

          <Text> {` Temperatura: ${props.temperature}°C `}</Text>
          <Text> {`Sintomas: ${props.symptoms} `}</Text>
        </Stack>
        <Stack>
          <Heading fontSize={'2xl'}>Descrição</Heading>
          <Text fontSize={'md'} fontWeight={400}>{`${props.description}`}</Text>
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
          <Circle size="40px" bg="tomato" color="white" onClick={deleteNote}>
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
