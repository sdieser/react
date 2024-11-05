import { Link } from 'react-router-dom';
import { TiHome } from 'react-icons/ti';

const OrderSuccess = ({ orderId }) => {
    return (
        <>
            <div className='orderSucess'>
                <div className='card shadow'>
                    <div className='card-body'>
                        <h1 className='display-4'>¡Gracias por tu compra!</h1>
                        <p className='lead'>
                            Número de orden: {orderId}
                        </p>
                        <Link to='/'><button type='button' className='btn btn-outline-dark'><TiHome size={18} /></button></Link>
                    </div>
                </div>
            </div>
        </>
    )
}
export default OrderSuccess