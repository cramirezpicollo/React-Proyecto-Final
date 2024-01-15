import { useState } from 'react';
import React from 'react'
import "./Contador.css"

const Contador = ({ inicial, stock, funcionAgregar }) => {

  const [contador, setContador] = useState(inicial);

  const sumarContador = () => {
    if (contador < stock) {
      setContador(contador + 1);
    }
  }

  const restarContador = () => {
    if (contador > inicial) {
      setContador(contador - 1);
    }
  }

  return (
    <>
      <div className='btnContador'>
        <button onClick={restarContador}> - </button>
        <p>{contador}</p>
        <button onClick={sumarContador}> + </button>
      </div>
      <button onClick={() => funcionAgregar(contador)}>Agregar al Carrito</button>

    </>
  )
}

export default Contador
