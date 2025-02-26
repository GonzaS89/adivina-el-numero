import React, { useState, useEffect } from 'react'

export const IngresoNum4 = ({ numIngresado, inputReset, arrayIngresados }) => {

  const [inputValue, setInputValue] = useState('');
  const [repetidos, setRepetidos] = useState(false);

  const ingresarNum = e => {
    numIngresado(e.target.value);
    setInputValue(e.target.vaarrayIngresados)
  }

  const encontrarRepetidos = () => {
    arrayIngresados.length > 1 &&
    arrayIngresados.map( num => (num === inputValue ? console.log('es igual') : console.log('no es igual')))
  }

  useEffect(() => {
    inputReset && setInputValue('')
  }, [inputReset])

  useEffect(() => {
    encontrarRepetidos();
  }, [arrayIngresados])

  return (
    <div>
      <input type="text" className={`appearance-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none bg-[#242424] ${repetidos ? 'text-red-500' : 'text-red-white'} h-28 w-20 border-b-2 placeholder:text-center text-center text-7xl`} maxLength="1" onChange={ingresarNum} />
    </div>
  )
}
