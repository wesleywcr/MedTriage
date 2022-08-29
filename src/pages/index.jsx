import Card from '../components/Card/Card'
import Navbar from '../components/Navbar/Navbar'
import NoteContainer from '../components/NoteContainer/NoteContainer'
import { Flex, Grid } from '@chakra-ui/react'
import Footer from 'components/Footer/Footer'
import axios from 'axios'

export default function Home({ note }) {
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
        {note?.map((data) => {
          return (
            <Card
              key={data.id}
              id={data.id}
              name={data.name}
              frequency={data.frequency}
              pressure={data.pressure}
              temperature={data.temperature}
              symptoms={data.symptoms}
              description={data.description}
              classification={data.classification}
            />
          )
        })}
      </Grid>
      <Footer />
    </>
  )
}

export async function getServerSideProps() {
  const response = await axios.get('http://localhost:3333/notes')
  const data = await response.data

  return {
    props: {
      note: data
    }
  }
}
