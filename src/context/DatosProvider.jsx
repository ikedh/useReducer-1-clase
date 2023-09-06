import { useState, useReducer } from "react"
import { allContext } from "./allContext"
import { initialState } from "../utils/initialState"
import reducer from "../utils/reducer"


const DatosProvider = ({children}) => {


    const [state,dispatch] = useReducer(reducer, initialState)

    const incrementar = () => {
      dispatch({type:'INCREMENT'})
    }
  
    const descrementar = () => {
      dispatch({type:'DECREMENT'})
    }
  
    const handleSubtitulo = e => {
      dispatch({
        type:'ESCRIBIR',
        subtitulo: e.target.value
      })
    }

  return (
    
    <allContext.Provider
      value={{
        incrementar
      }}
    >
        {children}
    </allContext.Provider>
    
  )
}

export default DatosProvider