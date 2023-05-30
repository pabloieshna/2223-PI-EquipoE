import './style.css'
import { Link } from "react-router-dom";
import {
  SiTiktok,
  SiFacebook,
  SiInstagram,
  SiGithub,
  SiTwitter,
} from "react-icons/si";
// import { Logo } from "./Logo";
//COMPONENT
export function Footer() {
  return (
    <section className="footerContainer">
      <ul className="sci">
        <li className='footerElement'>
          <Link
          className='footerElementLink'
                to="https://github.com/pabloieshna/2223-PI-EquipoE"
                target="_blank"
          >
            <SiGithub className="icon" size="30px" />
          </Link>
        </li>
        <li className='footerElement'>
          <Link to="https://www.instagram.com/festivaldemerida"
          target="_blank"
          >
            <SiInstagram size="30px" className="icon" />
          </Link>
        </li>
        <li className='footerElement'>
          <Link to="https://www.facebook.com/FestivalMerida/?locale=es_ES"
          target="_blank"
          >
            <SiFacebook size="30px" className="icon" />
          </Link>
        </li>
        <li className='footerElement'>
          <Link to="https://twitter.com/Festival_Merida"
          target="_blank"
          >
            <SiTwitter size="30px" className="icon" />
          </Link>
        </li>
        <li className='footerElement'>
          <Link to="https://www.tiktok.com/@el_hormiguero/video/7236092583095651610"
          target="_blank"
          >
            <SiTiktok size="30px" className="icon" />
          </Link>
        </li>
      </ul>
      </section>
  );
}
