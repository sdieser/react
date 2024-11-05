import { useState } from 'react'
import ItemCount from '../ItemCount/ItemCount.jsx'
import FinishPurchase from '../FinishPurchase/FinishPurchase.jsx';

const ItemDetail = ({ product, addProduct, hideCount }) => {
    const formatter = new Intl.NumberFormat('es-AR');

    const [currentImage, setCurrentImage] = useState(product.image[0])

    const images = product.image.filter((image) => image !== currentImage)

    return (
        <>
            <div className='itemDetail'>
                <div className='card text-bg-light'>
                    <div className='row g-0'>
                        <div className='col-1 img-alt'>
                            {
                                images.map((image) => (
                                    <img src={image} key={image} className='img-fluid border border-dark-subtle rounded' alt='Foto de botella' onClick={() => setCurrentImage(image)} />
                                ))
                            }
                        </div>
                        <div className='col-4 img-current ms-3'>
                            <img src={currentImage} className='img-fluid' alt='Foto de botella' />
                        </div>
                        <div className='col align-self-center'>
                            <div className='card-body'>
                                <ul className='list-group list-group-flush'>
                                    <li className='list-group-item text-bg-light'>
                                        <h4 className='card-title'>{product.name}</h4>
                                        <h6 className='card-subtitle mb-2 text-body-secondary'><small>{product.varietal}</small></h6>
                                        <p className='card-text text-body-secondary'>{product.detail}</p>
                                    </li>
                                    <li className='list-group-item text-bg-light'>
                                        <p className='card-text'>
                                            <small className='text-body-secondary'>
                                                <span className='fw-semibold'>Origen: </span>{product.origin}
                                            </small>
                                        </p>
                                    </li>
                                    <li className='list-group-item text-bg-light'>
                                        <p className='card-text'>
                                            <small className='text-body-secondary'>
                                                <span className='fw-semibold'>Enólogo: </span>{product.oenologist}
                                            </small>
                                        </p>
                                    </li>
                                    <li className='list-group-item text-bg-light'>
                                        <p className='card-text'>
                                            <small className='text-body-secondary'>
                                                <span className='fw-semibold'>Unidades disponibles: </span>{product.stock}
                                            </small>
                                        </p>
                                    </li>
                                    <li className='list-group-item text-bg-light d-flex justify-content-end'>
                                        {
                                            hideCount === true ? <FinishPurchase /> : <ItemCount stock={product.stock} addProduct={addProduct} />
                                        }
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default ItemDetail