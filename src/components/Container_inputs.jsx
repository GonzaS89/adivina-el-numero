import React, { use, useEffect, useState } from 'react'
import { FaCheckCircle } from "react-icons/fa";
import { IngresoNum1 } from './IngresoNum1';
import { IngresoNum2 } from './IngresoNum2';
import { IngresoNum3 } from './IngresoNum3';
import { IngresoNum4 } from './IngresoNum4';

export const Container_inputs = ({numerosUnidos, numerosUnidosConcatenados}) => {

    const [num1,setNum1] = useState('');
    const [num2,setNum2] = useState('');
    const [num3,setNum3] = useState('');
    const [num4,setNum4] = useState('');
    const [inputReset, setInputReset] = useState();
    const [arrayIngresados, setArrayIngresados] = useState([]);

    const obtenerNum1 = num => {
        setNum1(num)
    }
    const obtenerNum2 = num => {
        setNum2(num)
    }
    const obtenerNum3 = num => {
        setNum3(num)
    }
    const obtenerNum4 = num => {
        setNum4(num)
    }

    const enviarDatosAlMain = () => {
        numerosUnidos([num1,num2,num3,num4])
        numerosUnidosConcatenados(`${num1}${num2}${num3}${num4}`);
        setInputReset('')
    }
    

  return (
    <div className='absolute bottom-0 flex flex-col gap-5 items-center'>
<div className='flex gap-2 bottom-0 items-center'>
        <IngresoNum1 numIngresado={obtenerNum1} inputReset={inputReset}/>
        <IngresoNum2 numIngresado={obtenerNum2} inputReset={inputReset}/>
        <IngresoNum3 numIngresado={obtenerNum3} inputReset={inputReset}/>
        <IngresoNum4 numIngresado={obtenerNum4} inputReset={inputReset} arrayIngresados={arrayIngresados}/>
    </div>
    <FaCheckCircle className='text-green-600 text-5xl cursor-pointer'onClick={enviarDatosAlMain}/>
    </div>
    
  )
}
