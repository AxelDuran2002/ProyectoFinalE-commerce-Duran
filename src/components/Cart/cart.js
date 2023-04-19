import { CartContext } from "../../Context/cartContext"
import { useContext } from "react"
import { Link } from "react-router-dom"
import { BsFillTrash3Fill } from 'react-icons/bs'
import './cart.css'


const Cart = () => {
    const { cart, vaciarCarrito, removerItem, totalCarrito } = useContext(CartContext)

    if (cart.length === 0) {
        return (
            <div className="container my-5">
                <h2>No hay productos agregados</h2>
                <hr/>
                <Link className="btnPrimary2 btn-primary2" to="/">Volver</Link>
            </div>
        )
    }

    return (
        <div className="container my-5">
            <h2>Tu compra</h2>
            <hr/>

            {
                cart.map((item) => ( 
                    <div key={item.id}>
                        <h4>{item.name}</h4>
                        <img className='imagenes' src={item.img}/>
                        <div>
                            <small>Cantidad: {item.cantidad} - Precio del producto: {item.price}</small>
                        </div>
                        <p>Precio total: {item.price * item.cantidad}</p>
                        <button onClick={() => removerItem(item.id)} className="btnDanger1 btn-danger1"><BsFillTrash3Fill/></button>
                        <hr/>
                    </div>
                ))
            }

            <h3>TOTAL: {totalCarrito()}</h3>
            <button onClick={vaciarCarrito} className="btnDanger2 btn-danger2">Vaciar carrito</button>
            <Link to="/checkout" className="btnSuccess2 btn-success2">Finalizar compra</Link>
        </div>
    )
}

export default Cart