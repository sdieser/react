import useWines from '../../hooks/useWines';
import ItemList from './ItemList';
import Loading from '../Loading/Loading';
import { useParams } from 'react-router-dom';
import './ItemListContainer.scss';

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