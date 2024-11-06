import { Link } from 'react-router-dom';
import { TiHome } from 'react-icons/ti';
import './notFound.scss'

const NotFound = () => {
    return (
        <div className='notFound'>
            <h1 className='display-1'>404</h1>
            <h2 className='pb-5'>Página no encontrada</h2>
            <Link to='/'><button type='button' className='btn btn-outline-light'><TiHome size={18} /></button></Link>
        </div>
    )
}
export default NotFound