import { useState, useEffect } from 'react'
import { getWine } from '../../data/data.js'
import { useParams } from 'react-router-dom'
import ItemDetail from './ItemDetail.jsx'
import ItemDetailLoading from './ItemDetailLoading.jsx'
import './itemDetailContainer.scss'

const ItemDetailContainer = () => {
    const { idWine } = useParams()
    const [wine, setWine] = useState({})
    const [wineLoad, setWineLoad] = useState(true)

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
                wineLoad === true ? <ItemDetailLoading product={wine} /> : <ItemDetail product={wine} />
            }
        </div>
    )
}
export default ItemDetailContainer