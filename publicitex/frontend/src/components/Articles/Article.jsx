import './style.css'
import { Link } from "react-router-dom"

// eslint-disable-next-line react/prop-types
export default function Article({imgSrc,titleText,text,linkPath,textButton}) { 
    return (
    <article className="content">
        <div className="content-img">
            <img
                className="content-img-imagen"
                src={imgSrc}
                alt="404"
            />
        </div>
        <div className="content-text">
            <h2 className="content-text-tittle"> {titleText} </h2>
            <p>{text}</p>
            <Link to={linkPath} className="btn">
                {textButton}
            </Link>
        </div>
    </article>
    )
  }