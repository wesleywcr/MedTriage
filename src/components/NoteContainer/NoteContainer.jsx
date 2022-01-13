import {
  Box,
  Flex,
  FormControl,
  FormLabel,
  Input,
  CheckboxGroup,
  Checkbox,
  Stack
} from '@chakra-ui/react'

export default function NoteContainer() {
  return (
    <Flex>
      <Box bg={'blue.700'} rounded={'lg'} boxShadow={'lg'} p={8}>
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
              <Input />
            </Stack>
          </CheckboxGroup>
        </FormControl>
      </Box>
    </Flex>
  )
}
