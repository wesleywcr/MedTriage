/* eslint-disable prettier/prettier */
import Card from '../components/Card/Card'
import Navbar from '../components/Navbar/Navbar'
import NoteContainer from '../components/NoteContainer/NoteContainer'
import { Flex, Grid } from '@chakra-ui/react'
import Footer from 'components/Footer/Footer'
import { useState,useCallback} from 'react'

import update from 'immutability-helper';

export default function Home({note}) {
  const [cards, setCards] = useState([])

  const moveCard = useCallback((dragIndex, hoverIndex) => {
    const dragCard = cards[dragIndex];
    setCards(update(cards, {
        $splice: [
            [dragIndex, 1],
            [hoverIndex, 0, dragCard],
        ],
    }));
}, [cards]);
  return (
    < >
    
      <Navbar />

      <Flex marginTop={'2rem'} align={'center'} justify={'center'}>
        <NoteContainer />
      </Flex>
      <Grid
        templateColumns={{ lg: 'repeat(3, 1fr)', base: 'repeat(1, 1fr)' }}
        gap={2}
      >
      
     
         {note?.map((data,index) => {
          return(
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
              moveCard={moveCard}
              index={index}
              
            />
           )
          })} 
      
      
      </Grid>
      <Footer />
    </>
  )
}

export async function getServerSideProps() {

  const response = await fetch('http://localhost:3333/notes')
  const data = await response.json()

  return {
    props: {
      note: data
    }

  }
}
