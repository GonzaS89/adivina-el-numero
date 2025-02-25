import React, { useEffect, useState } from 'react'
import { Objetivo } from './objetivo'
import { Container_inputs } from './Container_inputs'


export const Main = () => {

  const [num, setNum] = useState('');
  const [numerosIntentados, setNumerosIntentados] = useState([]);
  const [numerosConcatenados, setNumerosConcatenados] = useState([]);
  const [intentos, setIntentos] = useState([])

  const numUnidos = num => { 
    setNum(num);
  }

  const numUnidosConcat = num => {
    setNumerosConcatenados([...numerosConcatenados, num])
  }
  
  useEffect(() => {
    setNumerosIntentados([...numerosIntentados, num])
    
  },[num])

  const listaIntentados = lista => {
    setIntentos(lista)
  }

  const intentosRealizados = intentos.map(obj => {
    return `${obj.numero}(${obj.coincidencias})`; // Concatenamos los valores del objeto separados por guiones
  }).join(' - '); // Unimos todos los resultados con un guion entre ellos
  

  return (
    <div className='flex flex-col justify-center items-center h-[500px] relative'>
    <Objetivo numIngresados={num} listaIntentados={listaIntentados}/>
    <p>{intentos.map(obj => (obj.coincidencias === 4 && 'Protis'))}</p>
    <p>Numeros intentados: {intentosRealizados}</p>
    <Container_inputs numerosUnidos={numUnidos} numerosUnidosConcatenados={numUnidosConcat}/>
    </div>
 
  )
}
