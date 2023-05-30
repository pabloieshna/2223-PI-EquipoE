import './style.css'
import { Link } from "react-router-dom";
import { HiOutlineMenu } from "react-icons/hi";
import Logo from '../Logo/Logo';
export default function Navbar(){
    return(
        <header className="header">
            <HiOutlineMenu className="menu-deplegable" size="100px" />
            <Logo />
            <nav className="nav-container">
                    <Link to='/festivals' className="button">Festivales</Link>
                    {/* <Link to="/login" className="button">Login</Link> */}
                    <Link to="/contacto" className="button">Contacto</Link>
            </nav>
        </header>
    )
}