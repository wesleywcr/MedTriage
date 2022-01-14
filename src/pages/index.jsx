import Card from '../components/Card/Card'
import Navbar from '../components/Navbar/Navbar'
import NoteContainer from '../components/NoteContainer/NoteContainer'
import { Flex, Grid } from '@chakra-ui/react'
export default function Home() {
  return (
    <>
      <Navbar />

      <Flex marginTop={'2rem'} align={'center'} justify={'center'}>
        <NoteContainer />
      </Flex>
      <Grid
        templateColumns={{ lg: 'repeat(3, 1fr)', base: 'repeat(1, 1fr)' }}
        gap={2}
      >
        <Card />
      </Grid>
    </>
  )
}
