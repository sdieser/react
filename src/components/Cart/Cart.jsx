import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom';
import { FaTrash } from 'react-icons/fa';
import { TiHome } from 'react-icons/ti';
import './cart.scss'

const Cart = () => {
    const formatter = new Intl.NumberFormat('es-AR');
    const { cart, priceTotal, deleteWineCart, deleteCart } = useContext(CartContext)

    if (cart.length === 0) {
        return (
            <>
                <div className='cartContainer'>
                    <div className='alert alert-light mt-3 mb-3 text-center' role='alert' id='total'>
                        El carrito esta vacio
                    </div>
                    <Link to='/'><button type='button' className='btn btn-outline-light'><TiHome size={18} /></button></Link>
                </div>
            </>
        )
    } else {
        return (
            <>
                <div className='cartContainer'>
                    <div className='card'>
                        <div className='card-body'>
                            <ul className='list-group list-group-flush '>
                                {
                                    cart.map((wine) => (
                                        <li className='list-group-item' key={wine.id}>
                                            <img src={wine.image[0]} className='imgCart border border-dark-subtle rounded' alt='Wine Bottle' />
                                            <div className='ms-3 me-auto'>
                                                <div className='fw-bold title'>{wine.name}</div>
                                                <div className='varietal'>{wine.varietal}</div>
                                                <div className='price'>$ {formatter.format(wine.price)}</div>
                                            </div>
                                            <span className='badge text-bg-secondary rounded-pill me-4'>{wine.quantity}</span>
                                            <div className='d-flex flex-column'>
                                                <button onClick={() => deleteWineCart(wine.id)} className='btn btn-outline-danger'><FaTrash />
                                                </button>
                                            </div>
                                        </li>
                                    ))
                                }
                            </ul>
                            <div className='alert alert-dark mt-3 mb-3 text-center fw-bold' role='alert' id='total'>
                                Total: $ {formatter.format(priceTotal())}
                            </div>
                            <div className='d-grid d-md-flex justify-content-center gap-2'>
                                <Link to='/checkout'>
                                    <button className='btn btn-success' type='button'>Comprar</button>
                                </Link>
                                <button onClick={() => deleteCart()} className='btn btn-outline-danger' type='button'>Vaciar</button>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
export default Cart