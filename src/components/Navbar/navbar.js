import './navbar.css'
import logo from '../../assets/logoMarvel.png'
import CartWidget from '../CartWidget/cartWidget'

export const Navbar = () =>  {

    return (
        <header className="header">
            <div className="header_container">
                <img src={logo} className="header_logo" alt='logo'/>

                <nav className="navbar">
                    <p className="navbar_link">Películas</p>
                    <p className="navbar_link">Info</p>
                    <p className="navbar_link">Contactános</p>
                </nav>

                <CartWidget/>
            </div>
        </header>
    )
}