import React from 'react'
import { useContext } from 'react'
import { CarritoContext } from '../../context/CarritoContext'
import { Link } from 'react-router-dom'
import './CartWidget.css'

const CartWidget = () => {
  const { cantidadTotal } = useContext(CarritoContext)
  const imgCarrito = "https://img.freepik.com/vector-gratis/icono-carrito-compras-ilustracion-aislada_18591-82226.jpg?w=740&t=st=1701029578~exp=1701030178~hmac=2edf2ed0b08b820b0306cb29089e6ad51c6453ffdad5d88c7450cc764103d224"

  return (
    <div>
      <Link to="/Cart">
        <img className='imgCarrito' src={imgCarrito} alt="Carrito de Compras" />
        {
          cantidadTotal > 0 && <strong> {cantidadTotal} </strong>
        }

      </Link>

    </div>
  )
}

export default CartWidget
