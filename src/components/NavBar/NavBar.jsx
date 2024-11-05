import CartWidget from './CartWidget.jsx';
import logo from '../../assets/logo_white.png';
import { Link } from 'react-router-dom'
import './navbar.scss';

const NavBar = () => {
    return (
        <>
            <nav className='nav-bar'>
                <div className='p-3 fixed-top border-bottom border-light bg-custom'>
                    <div className='container'>
                        <div className='d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start'>
                            <Link to='/' className='d-flex align-items-center mb-2 mb-lg-0'>
                                <img className='me-5' src={logo} alt='Logo código vinario' height='26' />
                            </Link>
                            <ul className='nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0'>
                                <li>
                                    <Link to='/' className='nav-link px-2 text-white'>Inicio</Link>
                                </li>
                                <li className='nav-item dropdown'>
                                    <a className='nav-link dropdown-toggle text-white' href='#' role='button' data-bs-toggle='dropdown' aria-expanded='false'>
                                        Variedades
                                    </a>
                                    <ul className='dropdown-menu'>
                                        <li><Link to='/varietal/Malbec' className='dropdown-item'>Malbec</Link></li>
                                        <li><Link to='/varietal/Cabernet Franc' className='dropdown-item'>Cabernet Franc</Link></li>
                                        <li><Link to='/varietal/Cabernet Sauvignon' className='dropdown-item'>Cabernet Sauvignon</Link></li>
                                        <li><Link to='/varietal/Chardonnay' className='dropdown-item'>Chardonnay</Link></li>
                                        <li><hr className='dropdown-divider' /></li>
                                        <li><Link to='/' className='dropdown-item'>Todos</Link></li>
                                    </ul>
                                </li>
                            </ul>

                            <CartWidget />
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}
export default NavBar