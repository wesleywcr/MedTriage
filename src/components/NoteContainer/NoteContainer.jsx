import {
  useDisclosure,
  Box,
  Flex,
  FormControl,
  FormLabel,
  Input,
  CheckboxGroup,
  Checkbox,
  Stack,
  Textarea,
  RadioGroup,
  Radio,
  Button,
  Drawer,
  DrawerOverlay,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  DrawerContent,
  DrawerFooter,
  Circle
} from '@chakra-ui/react'
import { BiSend } from 'react-icons/bi'
import { useState, useRef } from 'react'
import { AddIcon } from '@chakra-ui/icons'
import axios from 'axios'
import { useRouter } from 'next/router'

export default function NoteContainer() {
  const [value, setValue] = useState()
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = useRef()

  const [inputName, setInputName] = useState('')
  const [inputFrequency, setInputFrequency] = useState('')
  const [inputPressure, setInputPressure] = useState('')
  const [inputTemperature, setInputTemperature] = useState('')
  const [checkSymptoms, setCheckSymptoms] = useState('')
  const [inputDescription, setInputDescription] = useState('')

  //refresh
  const router = useRouter()
  const refreshData = () => {
    router.replace(router.asPath)
  }

  async function createNote() {
    const { data } = await axios.post('http://localhost:3333/notes', {
      name: inputName,
      temperature: inputTemperature,
      frequency: inputFrequency,
      pressure: inputPressure,
      symptoms: checkSymptoms,
      description: inputDescription,
      classification: value
    })

    setInputName('')
    setInputTemperature('')
    setInputFrequency('')
    setInputPressure('')
    setInputDescription('')
    setCheckSymptoms('')
    setValue()

    if (data.status < 300) {
      refreshData()
    }
    onClose()
  }
  return (
    <>
      <Circle
        ref={btnRef}
        bg={'yellow.500'}
        size="50px"
        onClick={onOpen}
        _hover={{
          bg: 'yellow.200',
          color: 'gray.900'
        }}
      >
        <AddIcon />
      </Circle>
      <Drawer
        isOpen={isOpen}
        placement="bottom"
        onClose={onClose}
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
                        onChange={setCheckSymptoms}
                      >
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
                    <RadioGroup onChange={setValue} value={value}>
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
                    onClick={createNote}
                  >
                    REGISTRAR
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
