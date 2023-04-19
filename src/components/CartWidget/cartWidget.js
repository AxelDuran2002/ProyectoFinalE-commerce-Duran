import { FaCartPlus } from "react-icons/fa"
import { useContext } from 'react'
import { CartContext } from '../../Context/cartContext'
import './cartWidget.css'
import { Link } from 'react-router-dom'

const CartWidget = () => {
    const {totalCantidad, cart} = useContext(CartContext)

    return (
        <Link to="/cart" className={`cart_widget ${cart.length > 0 ? 'cart-widget-active' : ''}`}>
            <FaCartPlus className='cart_icon'/>
            <span>{totalCantidad()}</span>
        </Link>
    )
}

export default CartWidget