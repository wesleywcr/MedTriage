import {
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
  Button
} from '@chakra-ui/react'
import { useState } from 'react'

export default function NoteContainer() {
  const [value, setValue] = useState('1')
  return (
    <Flex>
      <Box
        bg={'blue.700'}
        rounded={'lg'}
        boxShadow={'lg'}
        p={7}
        marginLeft={'25rem'}
        marginTop={3}
        justifyContent={'center'}
      >
        <FormControl id="name">
          <FormLabel>Nome</FormLabel>
          <Input />
        </FormControl>
        <FormControl id="date">
          <FormLabel>Data Nascimento</FormLabel>
          <Input type="date" />
        </FormControl>
        <FormControl>
          <FormLabel>Frequencia Cardiaca</FormLabel>
          <Input type="text" />
        </FormControl>
        <FormControl>
          <FormLabel>Sintomas</FormLabel>
          <CheckboxGroup
            colorScheme="green"
            defaultValue={['naruto', 'kakashi']}
          >
            <Stack spacing={[1, 5]} direction={['column', 'row']}>
              <Checkbox value="">Dor de cabeça</Checkbox>
              <Checkbox value="">Dor de garganta</Checkbox>
              <Checkbox value="">Corisa</Checkbox>
              <Checkbox value="">Tosse</Checkbox>
              <Checkbox value="">Falta de ar</Checkbox>
            </Stack>
          </CheckboxGroup>
        </FormControl>
        <FormControl>
          <FormLabel>Descrição de possivel causa</FormLabel>
          <Textarea type="text" />
        </FormControl>
        <FormControl>
          <FormLabel>Classificação</FormLabel>
          <RadioGroup onChange={setValue} value={value}>
            <Stack direction="row">
              <Radio value="1">Vermelho</Radio>
              <Radio value="2">Laranja</Radio>
              <Radio value="3">Amarelo</Radio>
              <Radio value="4">Verde</Radio>
              <Radio value="5">Azul</Radio>
            </Stack>
          </RadioGroup>
        </FormControl>
        <Stack mt={8} direction={'row'} spacing={4}>
          <Button
            flex={1}
            fontSize={'sm'}
            rounded={'full'}
            bg={'blue.400'}
            color={'white'}
            boxShadow={
              '0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'
            }
            _hover={{
              bg: 'blue.500'
            }}
            _focus={{
              bg: 'blue.500'
            }}
          >
            REGISTRAR
          </Button>
        </Stack>
      </Box>
    </Flex>
  )
}
