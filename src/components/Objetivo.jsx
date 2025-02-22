import React, { useEffect, useState } from 'react'

export const Objetivo = ({ numIngresados }) => {

  const [mismaPosicion, setMismaPosicion] = useState(false)

  const palabra = "0968";
  const palabra_array = ["0", "9", "6", "8"]


  useEffect(() => {
      console.log(numIngresados)
  }, [])

  return (
    <div className='flex flex-col absolute top-0'>
      <p className='text-3xl'>Adivina el numero</p>
      <div className='flex gap-3'>
        {palabra_array.map((letra, index) => (
          <div className='flex relative'>
            <p key={index} className={`uppercase text-[100px] font-bold select-none ${mismaPosicion ? 'text-red-500' : 'text-[#242424]'}`}>{letra}</p>
            <p className={`text-slate-400 uppercase text-[100px] font-bold absolute select-none ${mismaPosicion ? 'hidden' : 'flex'}`}>X</p>
          </div>
        ))}
      </div>

    </div>
  )
}