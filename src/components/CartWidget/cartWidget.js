import { FaCartPlus } from "react-icons/fa"
import './cartWidget.css'

const CartWidget = () => {

    return (
        <div className="cart_widget">
            <FaCartPlus className="cart_icon"/>
            <span>0</span>
        </div>
    )
}

export default CartWidget