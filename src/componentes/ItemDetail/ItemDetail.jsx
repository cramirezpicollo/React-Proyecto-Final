import React from 'react'
import { useState } from 'react';
import Contador from '../Contador/Contador';
import { Link } from 'react-router-dom';
import './ItemDetail.css';
import {CarritoContext } from '../../context/CarritoContext';
import {useContext } from 'react';

const ItemDetail = ({ id, nombre, stock, precio, img }) => {
  const [agregarCantidad, setAgregarCantidad] = useState(0);

  const {agregarAlCarrito} = useContext (CarritoContext);

  const manejadorCantidad = (cantidad) => {
    setAgregarCantidad(cantidad);
    const item = {id, nombre, precio};
    agregarAlCarrito (item, cantidad);
  }

  return (
    <div className='contenedorItem'>
      <h2>{nombre}</h2>
      <p>${precio}</p>
      <img src={img} alt={nombre} />
      <p>Porque amamos la Navidad, regalate un pijamita </p>

      {agregarCantidad > 0 ? (<Link to="/cart" >Terminar Compra</Link>) : (<Contador inicial={1} stock={stock} funcionAgregar={manejadorCantidad} />)
      }

    </div>
  )
}

export default ItemDetail
