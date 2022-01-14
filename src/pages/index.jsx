import Card from '../components/Card/Card'
import Navbar from '../components/Navbar/Navbar'
import NoteContainer from '../components/NoteContainer/NoteContainer'
import { Flex } from '@chakra-ui/react'
export default function Home() {
  return (
    <>
      <Navbar />
      <NoteContainer />
      <Flex minH={'100vh'} align={'center'} justify={'center'}></Flex>
      <Card />
    </>
  )
}
