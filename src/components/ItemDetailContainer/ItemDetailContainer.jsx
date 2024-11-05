import { useState, useContext } from 'react'
import { useParams } from 'react-router-dom'
import { CartContext } from '../../context/CartContext.jsx'
import useWine from '../../hooks/useWine.jsx'
import ItemDetail from './ItemDetail.jsx'
import ItemDetailLoading from './ItemDetailLoading.jsx'
import './itemDetailContainer.scss'

const ItemDetailContainer = () => {
    const { idWine } = useParams()
    const { addWineCart } = useContext(CartContext)
    const [hideCount, setHideCount] = useState(false)
    const addProduct = (count) => {
        const wineCart = { ...wine, quantity: count }
        addWineCart(wineCart)
        setHideCount(true)
    }

    const { wine, wineLoad } = useWine(idWine)

    return (
        <div className='itemDetailContainer'>
            {
                wineLoad === true ? <ItemDetailLoading product={wine} /> : <ItemDetail product={wine} addProduct={addProduct} hideCount={hideCount} />
            }
        </div>
    )
}
export default ItemDetailContainer