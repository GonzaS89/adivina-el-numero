import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0);

  const palabra = "0968";


  return (
    <>
    <div className='flex gap-3'>
    {[...palabra].map((letra,index) => (
      <div className='flex relative'>
        <p key={index} className='text-slate-600 uppercase text-[100px] font-bold text-white'>{letra}</p>
        <p className='text-slate-600 uppercase text-[100px] font-bold absolute'>X</p>
      </div>
     ))}
    </div>
     
    </>
  )
}

export default App
