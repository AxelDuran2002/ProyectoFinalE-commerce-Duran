import './navbar.css'
import CartWidget from '../CartWidget/cartWidget'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { LoginContext } from '../../Context/loginContext'

export const Navbar = ({}) =>  {
    const { user, logout } = useContext(LoginContext)

    return (
        <header className="header">
            <div className="header_container">
                <img src={process.env.PUBLIC_URL + '/assets/logoMarvel.png'} className="header_logo" alt='logo'/>

                <nav className="navbar">
                    <Link to='/' className="navbar_link">Inicio</Link>
                    <Link to='/nosotros' className="navbar_link">Nosotros</Link>
                    <Link to='/productos/Primeras Peliculas' className="navbar_link">Primeras Películas</Link>
                    <Link to='/productos/Ultimas Peliculas' className="navbar_link">Últimas Películas</Link>
                </nav>

                <CartWidget/>
            </div>

            <div className='user'>
                <h6>Bienvenido: {user.email}</h6>
                <button className='boton-logout' onClick={logout}>Logout</button>
            </div>
        </header>
    )
}