import './navbar.css'
import CartWidget from '../CartWidget/cartWidget'
import { Link } from 'react-router-dom'

export const Navbar = () =>  {

    return (
        <header className="header">
            <div className="header_container">
            <img src={process.env.PUBLIC_URL + '/assets/logoMarvel.png'} className="header_logo" alt='logo'/>

                <nav className="navbar">
                    <Link to='/' className="navbar_link">Inicio</Link>
                    <Link to='/nosotros' className="navbar_link">Nosotros</Link>
                    <Link to='/contactanos' className="navbar_link">Contactános</Link>
                    <Link to='/productos/Primeras Peliculas' className="navbar_link">Primeras Películas</Link>
                    <Link to='/productos/Ultimas Peliculas' className="navbar_link">Últimas Películas</Link>
                </nav>

                <CartWidget/>
            </div>
        </header>
    )
}