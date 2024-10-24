import { useState, useEffect, useContext } from 'react'
import { getWine } from '../../data/data.js'
import { useParams } from 'react-router-dom'
import { CartContext } from '../../context/CartContext.jsx'
import ItemDetail from './ItemDetail.jsx'
import ItemDetailLoading from './ItemDetailLoading.jsx'
import './itemDetailContainer.scss'

const ItemDetailContainer = () => {
    const { idWine } = useParams()
    const { addWineCart } = useContext(CartContext)
    const [wine, setWine] = useState({})
    const [wineLoad, setWineLoad] = useState(true)
    const [hideCount, setHideCount] = useState(false)
    const addProduct = (count) => {
        const wineCart = { ...wine, quantity: count }
        addWineCart(wineCart)
        setHideCount(true)
    }

    useEffect(() => {
        setWineLoad(true)
        getWine(idWine)
            .then((data) => setWine(data))
            .catch((error) => console.error(error))
            .finally(() => setWineLoad(false))
    }, [])

    return (
        <div className='itemDetailContainer'>
            {
                wineLoad === true ? <ItemDetailLoading product={wine} /> : <ItemDetail product={wine} addProduct={addProduct} hideCount={hideCount} />
            }
        </div>
    )
}
export default ItemDetailContainer