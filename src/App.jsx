
import { useReducer, useState } from 'react'
import './App.css'
import reducer from './utils/reducer'



function App() {

  



  return (
    <>
      <h1>Clase Use Reducer</h1>
      <input
        type='text'
        onChange={handleSubtitulo}
        value={state.subtitulo}
      />

      <h3>{state.subtitulo}</h3>
      <hr />

      <button
        onClick={incremento}
      >Incrementar</button>

      <button
        onClick={decremento}
      >Decrementar</button>
      <h4>
        {state.contador}
      </h4>
    </>
  )
}

export default App
