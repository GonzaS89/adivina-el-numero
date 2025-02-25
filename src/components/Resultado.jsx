import React, { use, useEffect, useState } from 'react'

export const Resultado = ({ numIngresados, listaIntentados }) => {


  const palabra = "0968";
  const palabra_array = ["0", "9", "6", "8"]

  const [indicesCoincidentes, setIndicesCoincidentes] = useState([]);
  const [arrayNumerosIntentados, setArrayNumerosIntentados] = useState([]);


  function calcularCoincidencias() {
    if (!Array.isArray(numIngresados) || numIngresados.length === 0) {
      setIndicesCoincidentes([]); // Si el array está vacío o es inválido, limpiamos el estado
      return [];
    }
   
    const indices = numIngresados.reduce((acc, elemento, index) => {
      if (elemento === palabra_array[index]) {
        acc.push(index);
      }
      return acc;
    }, []);
    setIndicesCoincidentes(indices);
    listaIntentados(arrayNumerosIntentados);
  }

  class Numero {
    constructor(numero, coincidencias) {
      this.numero = numero
      this.coincidencias = coincidencias
    }
  }

  const comprobarSiElArrayEstaVacio = () => {
    if (Array.isArray(numIngresados)) {
      const numIngresadosString = numIngresados.join(''); // Usa join solo si es un array
      return numIngresadosString
    } 
  }

  const numeroIngresado = new Numero(comprobarSiElArrayEstaVacio(),indicesCoincidentes.length)


  useEffect(() => {
    calcularCoincidencias();
    
   
  },[numIngresados]);

  useEffect(() => {
    numIngresados !== '' && setArrayNumerosIntentados([...arrayNumerosIntentados,numeroIngresado])
  },[indicesCoincidentes])

  useEffect(() => {
    listaIntentados(arrayNumerosIntentados)
  },[arrayNumerosIntentados])


  return (
    <div className='flex flex-col absolute top-0'>
      <p className='text-3xl'>Adivina el numero</p>
      <div className='flex gap-3'>
        {palabra_array.map((letra, index) => (
          <div className='flex relative' key={index}>
            <p  className={`uppercase text-[100px] font-bold select-none ${indicesCoincidentes.length === palabra_array.length ? 'text-red-500' : 'text-[#242424]'}`}>{letra}</p>
            <p className={`text-slate-400 uppercase text-[100px] font-bold absolute select-none ${indicesCoincidentes.length === palabra_array.length ? 'hidden' : 'flex'}`}>X</p>
          </div>
        ))}
      </div>

    </div>
  )
}