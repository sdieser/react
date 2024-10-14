const ItemDetail = ({ product }) => {
    return (
        <>
            <div className='itemDetail'>
                <div className="card mb-3 text-bg-light">
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img src={product.image} className="img-fluid" alt='Foto de botella' />
                        </div>
                        <div className="col-md-8 align-self-center">
                            <div className="card-body">
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item text-bg-light">
                                        <h4 className="card-title">{product.name}</h4>
                                        <h6 className="card-subtitle mb-2 text-body-secondary"><small>{product.varietal}</small></h6>
                                        <p className="card-text text-body-secondary">{product.detail}</p>
                                    </li>
                                    <li className="list-group-item text-bg-light">
                                        <p className="card-text">
                                            <small className="text-body-secondary">
                                                <span className='fw-semibold'>Origen: </span>{product.origin}
                                            </small>
                                        </p>
                                    </li>
                                    <li className="list-group-item text-bg-light">
                                        <p className="card-text">
                                            <small className="text-body-secondary">
                                                <span className='fw-semibold'>Enólogo: </span>{product.oenologist}
                                            </small>
                                        </p>
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