import { FaShoppingCart } from "react-icons/fa";

const CartWidget = () => {
    return (
        <>
            <div className='cartWidget'>
                <FaShoppingCart size={25} color='#f2f2f2' />
                <span className='badge text-bg-secondary ms-3'>1</span>
            </div>
        </>
    )
}
export default CartWidget