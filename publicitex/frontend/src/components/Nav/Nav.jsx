import './style.css'
import { Link } from "wouter";
export default function Navbar(){
    return(
        <nav className="nav-container">
            <div className="logo-container">
                <Link to='/hola' >
                <img className="logo" src="logo" alt="logo" />
                </Link>
            </div>
            <div className="menu">
                <Link to='/' className="button">Festivales</Link>
                <Link to="/" className="button">Login</Link>
                <Link to="/" className="button">Contacto</Link>
            </div>
        </nav>
    )
}