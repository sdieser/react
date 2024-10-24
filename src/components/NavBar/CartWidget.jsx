import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";

const CartWidget = () => {
    const { cartTotal } = useContext(CartContext)

    const total = cartTotal()

    return (
        <>
            <div className='cartWidget'>
                <Link to='/cart'><FaShoppingCart size={25} color='#f2f2f2' /></Link>
                <span className='badge text-bg-secondary ms-3'>{total >= 1 && total}</span>
            </div>
        </>
    )
}
export default CartWidget