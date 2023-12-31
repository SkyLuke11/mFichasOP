import { useEffect, useState } from 'react';
import { useAuth } from '../../hooks/auth';
import { api } from '../../services/api';
import { Ficha } from './components/Ficha';
import {Body, Button, Container} from './styles'

// import { io } from 'socket.io-client';
// const socket = io('http://localhost:8080')

export function Fichas() {

  // useEffect(() => {
  
    // function executeUpdateCombate({token, combate}) {
    //   console.log(token, combate)
    // }
    // socket.on(`combate_${token}`, executeUpdateCombate);

  // }, [])

  const [isLoading, setIsLoading] = useState(true)

  const {token} = useAuth()

  const [fichas, setFichas] = useState([])

  useEffect(() => {

    async function fetchData() {

      try {

        const response = await api.post("/", {query: 'fichas_all_get', sessid: token})
        
        setFichas(response.data.fichas)

      } finally {
        setTimeout(() => {
          setIsLoading(false)
        }, 1000);
      }

    }
    
    fetchData()
  }, [])

  return (
    <Container isLoading={isLoading}>

      <Body isLoading={isLoading}>
        <Button to={'/criar-ficha'}>Criar Ficha</Button>
        {fichas.map((ficha) => <Ficha key={ficha.token} data={ficha}/>)}
      </Body>

    </Container>
  );
}