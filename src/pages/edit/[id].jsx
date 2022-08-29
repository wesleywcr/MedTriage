import {
  Box,
  Button,
  Checkbox,
  CheckboxGroup,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Radio,
  RadioGroup,
  Stack,
  Textarea,
  useDisclosure
} from '@chakra-ui/react'
import { useEffect, useRef, useState } from 'react'
import { BiSend } from 'react-icons/bi'

import axios from 'axios'
import { useRouter } from 'next/router'

export default function Edit({ note }) {
  console.log('Data', note)

  const { onOpen } = useDisclosure()
  const btnRef = useRef()

  const router = useRouter()
  const { id } = router.query

  const [valueClassification, setValueClassification] = useState()

  const [inputName, setInputName] = useState('')
  const [inputFrequency, setInputFrequency] = useState('')
  const [inputPressure, setInputPressure] = useState('')
  const [inputTemperature, setInputTemperature] = useState('')
  const [checkSymptoms, setCheckSymptoms] = useState([])
  const [inputDescription, setInputDescription] = useState('')

  useEffect(() => {
    setInputName(note.name)
    setInputTemperature(note.temperature)
    setInputFrequency(note.frequency)
    setInputPressure(note.pressure)
    setInputDescription(note.description)
    setCheckSymptoms(note.symptoms)
    setValueClassification(note.classification)
  }, [
    note.symptoms,
    note.description,
    note.frequency,
    note.name,
    note.pressure,
    note.temperature,
    note.classification
  ])

  async function editNote() {
    await axios.put(`http://localhost:3333/notes/${id}`, {
      name: inputName,
      temperature: inputTemperature,
      frequency: inputFrequency,
      pressure: inputPressure,
      symptoms: checkSymptoms,
      description: inputDescription,
      classification: valueClassification
    })

    router.back()
  }

  return (
    <>
      <Drawer
        isOpen={onOpen}
        placement="bottom"
        onClose={() => router.back()}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent bg={'gray.800'}>
          <DrawerCloseButton color={'gray.100'} />
          <DrawerHeader color={'gray.100'} textAlign={'center'}>
            Triagem Médica
          </DrawerHeader>

          <DrawerBody>
            <Flex minH={'100vh'} justify={'center'}>
              <Box
                bg={'gray.900'}
                rounded={'lg'}
                boxShadow={'lg'}
                p={7}
                width={'100vw'}
                maxWidth={{ lg: '50%', md: '60%', base: '92%' }}
              >
                <Stack spacing={4}>
                  <FormControl id="name">
                    <FormLabel>Nome</FormLabel>

                    <Input
                      name={'name'}
                      value={inputName}
                      onChange={(event) => {
                        setInputName(event.target.value)
                      }}
                    />
                  </FormControl>
                  <FormControl id="temp">
                    <FormLabel>Temperatura:</FormLabel>
                    <Input
                      value={inputTemperature}
                      onChange={(event) => {
                        setInputTemperature(event.target.value)
                      }}
                      type="number"
                    />
                  </FormControl>
                  <FormControl>
                    <FormLabel>Frequência Cardíaca</FormLabel>
                    <Input
                      value={inputFrequency}
                      onChange={(event) => {
                        setInputFrequency(event.target.value)
                      }}
                      type="number"
                    />
                  </FormControl>
                  <FormControl id="pressão">
                    <FormLabel>Pressão:</FormLabel>
                    <Input
                      value={inputPressure}
                      onChange={(event) => {
                        setInputPressure(event.target.value)
                      }}
                      type="text"
                    />
                  </FormControl>
                  <Stack
                    direction={{ base: 'column', sm: 'row' }}
                    align={'start'}
                    justify={'space-between'}
                  >
                    <FormControl>
                      <FormLabel>Sintomas: </FormLabel>

                      <CheckboxGroup
                        colorScheme="yellow"
                        defaultValue={note.symptoms}
                        onChange={setCheckSymptoms}
                      >
                        {console.log('sintomas', note.symptoms)}
                        <Stack
                          value={checkSymptoms}
                          spacing={[1, 2]}
                          direction={['column', 'row']}
                        >
                          <Checkbox value="Dor de cabeça">
                            Dor de cabeça
                          </Checkbox>
                          <Checkbox value="Dor de garganta">
                            Dor de garganta
                          </Checkbox>
                          <Checkbox value="Corisa">Corisa</Checkbox>
                          <Checkbox value="Tosse">Tosse</Checkbox>
                          <Checkbox value="Falta de ar">Falta de ar</Checkbox>
                        </Stack>
                      </CheckboxGroup>
                    </FormControl>
                  </Stack>
                  <FormControl>
                    <FormLabel>Descrição de possivel causa: </FormLabel>
                    <Textarea
                      value={inputDescription}
                      onChange={(event) => {
                        setInputDescription(event.target.value)
                      }}
                      type="text"
                    />
                  </FormControl>
                  <FormControl>
                    <FormLabel>Classificação: </FormLabel>
                    <RadioGroup
                      defaultValue={note.classification}
                      onChange={setValueClassification}
                    >
                      <Stack direction={{ lg: 'row', base: 'column' }}>
                        <Radio value="1" colorScheme={'red'}>
                          Vermelho
                        </Radio>
                        <Radio value="2" colorScheme={'orange'}>
                          Laranja
                        </Radio>
                        <Radio value="3" colorScheme={'yellow'}>
                          Amarelo
                        </Radio>
                        <Radio value="4" colorScheme={'green'}>
                          Verde
                        </Radio>
                        <Radio value="5" colorScheme={'blue'}>
                          Azul
                        </Radio>
                      </Stack>
                    </RadioGroup>
                  </FormControl>
                </Stack>
                <Stack mt={8} direction={'row'} spacing={4}>
                  <Button
                    flex={1}
                    rightIcon={<BiSend />}
                    fontSize={{ base: '15px', md: '17px', lg: '20px' }}
                    rounded={'full'}
                    bg={'yellow.400'}
                    color={'gray.900'}
                    boxShadow={
                      '0px 1px 25px -5px rgb(247 244 3 / 48%), 0 10px 10px -5px rgb(247 244 3 / 43%)'
                    }
                    _hover={{
                      bg: 'yellow.500'
                    }}
                    _focus={{
                      bg: 'yellow.500'
                    }}
                    onClick={editNote}
                  >
                    EDITAR
                  </Button>
                </Stack>
              </Box>
            </Flex>
          </DrawerBody>

          <DrawerFooter></DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  )
}

export async function getServerSideProps({ params }) {
  const response = await axios.get(`http://localhost:3333/notes/${params.id}`)
  const data = await response.data

  return {
    props: {
      note: data
    }
  }
}
