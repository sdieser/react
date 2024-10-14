import { Link } from "react-router-dom"

const Item = ({ wine }) => {
    return (
        <>
            <img src={wine.image} className='card-img-top wineBottle' alt='Wine Bottle' />
            <img src={wine.logo} className='card-img-top' alt='Wine Logo' />
            <div className='card-body'>
                <h5 className='card-title'>{wine.name}</h5>
                <h6 className='card-subtitle mb-2 text-body-secondary'>{wine.varietal}</h6>
                <p className='card-text'>$ {wine.price}</p>
                <Link to={`/detail/${wine.id}`} >
                    <button type="button" className="btn btn-outline-dark">Ver detalle</button>
                </Link>
            </div>
        </>
    )
}
export default Item