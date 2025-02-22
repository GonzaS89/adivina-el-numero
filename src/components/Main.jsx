import React, { useEffect, useState } from 'react'
import { Objetivo } from './objetivo'
import { Container_inputs } from './Container_inputs'


export const Main = () => {

  const [num, setNum] = useState('');
  const [numerosIntentados, setNumerosIntentados] = useState([]);
  const [numerosConcatenados, setNumerosConcatenados] = useState([]);

  const numUnidos = num => { 
    setNum(num);
  }

  const numUnidosConcat = num => {
    setNumerosConcatenados([...numerosConcatenados, num])
  }
  
  useEffect(() => {
    setNumerosIntentados([...numerosIntentados, num])
  },[num])

  

  return (
    <div className='flex flex-col justify-center items-center h-[500px] relative'>
    <Objetivo numIngresados={num}/>
    <p>Numeros intentados: {numerosConcatenados.join("-")}</p>
    <Container_inputs numerosUnidos={numUnidos} numerosUnidosConcatenados={numUnidosConcat}/>
    </div>
 
  )
}
