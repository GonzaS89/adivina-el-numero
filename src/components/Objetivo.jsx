import React from 'react'

export const Objetivo = () => {

    const palabra = "0968";
    
  return (
    <div className='flex flex-col absolute top-0'>
        <p className='text-3xl'>Adivina el numero</p>
        <div className='flex gap-3'>
        {[...palabra].map((letra,index) => (
      <div className='flex relative'>
        <p key={index} className={`uppercase text-[100px] font-bold select-none ${letra === '9' ? 'text-red-500' : 'text-[#242424]'}`}>{letra}</p>
        <p className={`text-slate-400 uppercase text-[100px] font-bold absolute select-none ${letra === '9' ? 'hidden' : 'flex'}`}>X</p>
      </div>
     ))}
        </div>
   
    </div>
  )
}