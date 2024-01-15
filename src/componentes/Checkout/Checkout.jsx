import { useState, useEffect, useContext } from 'react'
import { CarritoContext } from '../../context/CarritoContext'
import { db } from '../../service/config'
import { collection, addDoc } from 'firebase/firestore'

const Checkout = () => {
    const { carrito, vaciarCarrito, total, cantidadTotal } = useContext(CarritoContext)

    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [telefono, setTelefono] = useState("");
    const [email, setEmail] = useState("");
    const [emailConfirmacion, setEmailConfirmacion] = useState("")
    const [ordenId, setOrdenId] = useState("");
    const [error, setError] = useState("");

    const manejadorSubmit = (event) => {
        event.preventDefault();

        if (!nombre || !apellido || !telefono || !email || !emailConfirmacion) {
            setError("Por favor, completa todos los campos");
            return;
        }

        if (email !== emailConfirmacion) {
            setError("Los emails no coinciden");
            return;
        }

        const orden = {
            items: carrito.map(producto => ({
                id: producto.item.id,
                nombre: producto.item.nombre,
                cantidad: producto.cantidad

            })),
            total: total,
            fecha: new Date(),
            nombre,
            apellido,
            telefono,
            email,

        }

        addDoc(collection(db, "ordenes"), orden)
            .then(docRef => {
                setOrdenId(docRef.id);
                vaciarCarrito();
            })
            .catch(error => {
                console.log("Error al crear la orden", error);
                setError("No se pudo crear la orden,")

            })

    }

    return (
        <div>
            <h2> Checkout </h2>

            <form onSubmit={manejadorSubmit}>
                {
                    carrito.map(producto => (
                        <div key={producto.item.id}>
                            <p> {producto.item.nombre} x {producto.cantidad} </p>
                            <p> Precio: $ {producto.item.precio} </p>
                            <hr />
                        </div>
                    ))
                }
                <hr />

                <div>
                    <label htmlFor=" ">Nombre</label>
                    <input type="text" onChange={(e) => setNombre(e.target.value)} />
                </div>

                <div>
                    <label htmlFor=" ">Apellido</label>
                    <input type="text" onChange={(e) => setApellido(e.target.value)} />
                </div>

                <div>
                    <label htmlFor=" ">Telefono</label>
                    <input type="text" onChange={(e) => setTelefono(e.target.value)} />
                </div>

                <div>
                    <label htmlFor=" ">Email</label>
                    <input type="email" onChange={(e) => setEmail(e.target.value)} />
                </div>

                <div>
                    <label htmlFor=" ">Email Confirmación</label>
                    <input type="email" onChange={(e) => setEmailConfirmacion(e.target.value)} />
                </div>

                {
                    error && <p style={{ color: "red" }} > {error} </p>
                }

                <button type="submit">Finalizar compra </button>

                {
                    ordenId && (
                        <strong> Gracias por tu compra. Tu número de orden es : {ordenId} </strong>
                    )
                }

            </form>

        </div>
    )
}

export default Checkout