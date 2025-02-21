import React, { useEffect, useState } from 'react'
import { Objetivo } from './objetivo'
import { Container_inputs } from './Container_inputs'


export const Main = () => {

  const [num, setNum] = useState('')

  const numUnidos = num => {
    setNum(num)
  }

  useEffect(() => {
    console.log(num)
  },[num])

  return (
    <div className='flex flex-col justify-center items-center h-[500px] relative'>
    <Objetivo />
    <Container_inputs numerosUnidos={numUnidos}/>
    </div>
 
  )
}
