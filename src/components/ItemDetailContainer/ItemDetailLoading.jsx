import wineLoading from '/img/wineLoad.jpg'

const ItemDetailLoading = ({ product }) => {
    return (
        <>
            <div className='itemDetailLoading'>
                <div className='card text-bg-light' aria-hidden='true'>
                    <div className='row g-0'>
                        <div className='col-1 img-alt'>
                            <img src={wineLoading} className='img-fluid border border-dark-subtle rounded' alt='Foto de botella' />
                            <img src={wineLoading} className='img-fluid border border-dark-subtle rounded' alt='Foto de botella' />
                            <img src={wineLoading} className='img-fluid border border-dark-subtle rounded' alt='Foto de botella' />
                        </div>
                        <div className='col-4 img-current ms-3'>
                            <img src={wineLoading} className='img-fluid' alt='Foto de botella' />
                        </div>
                        <div className='col align-self-center'>
                            <div className='card-body'>
                                <ul className='list-group list-group-flush'>
                                    <li className='list-group-item text-bg-light'>
                                        <h4 className='card-title placeholder-glow'><span className='placeholder col-4'></span></h4>
                                        <h6 className='card-subtitle mb-2 text-body-secondary placeholder-glow'>
                                            <small>
                                                <span className='placeholder col-2'></span>
                                            </small>
                                        </h6>
                                        <p className='card-text text-body-secondary placeholder-glow'>
                                            <span className='placeholder col-12'></span>
                                            <span className='placeholder col-12'></span>
                                            <span className='placeholder col-12'></span>
                                        </p>
                                    </li>
                                    <li className='list-group-item text-bg-light'>
                                        <p className='card-text placeholder-glow'>
                                            <small className='text-body-secondary'>
                                                <span className='placeholder col-4'></span>
                                            </small>
                                        </p>
                                    </li>
                                    <li className='list-group-item text-bg-light'>
                                        <p className='card-text placeholder-glow'>
                                            <small className='text-body-secondary'>
                                                <span className='placeholder col-4'></span>
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
export default ItemDetailLoading