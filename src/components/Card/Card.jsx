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
import { useDrag, useDrop } from 'react-dnd'
import axios from 'axios'

import { useRouter } from 'next/router'
import { useRef } from 'react'
// import BoardContext from '../../context/context'

export default function Card(props, id, index, moveCard) {
  const ref = useRef(null)
  // const { move } = useContext(BoardContext)
  const [, drop] = useDrop({
    accept: 'CARD',
    collect(monitor) {
      return {
        handlerId: monitor.getHandlerId()
      }
    },
    hover(item, monitor) {
      if (!ref.current) {
        return
      }
      const dragIndex = item.index
      const hoverIndex = index

      if (dragIndex === hoverIndex) {
        return
      }

      const hoverBoundingRect = ref.current?.getBoundingClientRect()

      const hoverMiddleY =
        (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2

      const clientOffset = monitor.getClientOffset()

      const hoverClientY = clientOffset.y - hoverBoundingRect.top

      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return
      }

      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return
      }

      moveCard(dragIndex, hoverIndex)

      item.index = hoverIndex
    }
  })
  const [{ isDragging }, drag] = useDrag({
    type: 'CARD',
    item: () => {
      return { id, index }
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging()
    })
  })
  const opacity = isDragging ? 0 : 1
  console.log(opacity)
  drag(drop(ref))

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
        ref={ref}
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
