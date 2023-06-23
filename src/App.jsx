
import { useState } from 'react'
import './App.css'

function App() {
 
  const [contador,setContador] = useState (0)
  const [subtitulo, setSubtitulo] = useState ("Ingresar Texto")

  const incrementar = () =>{
    setContador(contador + 1)
  }

  const descrementar = () =>{
    setContador(contador - 1)
  }

  const handleSubtitulo = e =>{
    setSubtitulo(e.target.value)
  }

  return (
    <>
      <h1>Clase Use Reducer</h1>
      <input
        type='text'
        onChange={handleSubtitulo}
        value={subtitulo}
      />

      <h3>{subtitulo}</h3>
      <hr/>

      <button
        onClick={incrementar}
      >Incrementar</button>

      <button
        onClick={descrementar}
      >Decrementar</button>
      <h4>
        {contador}
      </h4>
    </>
  )
}

export default App
