import React, {useState,useEffect} from 'react'

export const IngresoNum2 = ({numIngresado}) => {

  const ingresarNum = e => {
      numIngresado(e.target.value);
  
  }

return (
  <div>
      <input type="text" className='appearance-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none bg-[#242424] text-white h-28 w-20 border-b-2 placeholder:text-center text-center text-7xl
      'maxLength="1" onChange={ingresarNum}/>
  </div>
)
}
