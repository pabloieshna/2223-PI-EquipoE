import './style.css'

import { Link } from "react-router-dom"


export default function Logo(){
    return(
        <Link to='/' className='logo-container' >
            <img className="logo" src="../../../public/megafono.png" alt="logo" />
            <h3 className='logo-text'>Publicitex</h3>
        </Link>
    )
}