import useWines from '../../hooks/useWines.jsx';
import ItemList from './ItemList.jsx';
import Loading from '../Loading/Loading.jsx';
import { useParams } from 'react-router-dom';
import './itemListContainer.scss';

const ItemListContainer = () => {
    const { idVarietal } = useParams()
    const { wines, loading } = useWines(idVarietal)

    return (
        <>
            <div className='itemListContainer'>
                {
                    loading === true ? <Loading /> : <ItemList wines={wines} />
                }
            </div>
        </>
    )
}
export default ItemListContainer