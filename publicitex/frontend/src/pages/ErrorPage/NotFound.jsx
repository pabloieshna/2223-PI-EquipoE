import './style.css'
import { Link } from 'react-router-dom'

export default function NotFound(){
    return(
        <section className='notFoundContainer'>
            <h1 className='errorMessage'>404</h1>
            <Link to='/' className='btn'>Volver</Link>
        </section>
    )
}