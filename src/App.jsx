import { useState } from 'react'
import { Buscador } from './components/Buscador'
import {Tarjeta} from './components/TarjetaGif'
import {SeccionGif} from './components/SeccionGif'
import { llamadaApi } from './utils/llamadaApi'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  llamadaApi()

  return (
    <>
      <Buscador/>
      <Tarjeta/>
      <SeccionGif/>
      
    </>
  )
}

export default App
