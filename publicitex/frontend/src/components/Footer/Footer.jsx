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
    <>   
      <ul className="sci">
        <li>
          <Link
                to="https://github.com/jesusmariaieshna/2223-PI-EquipoD"
                target="_blank"
          >
            <SiGithub className="icon" size="30px" />
          </Link>
        </li>
        <li>
          <Link to="/">
            <SiInstagram size="30px" color="##bbbbcc" />
          </Link>
        </li>
        <li>
          <Link to="/">
            <SiFacebook size="30px" />
          </Link>
        </li>
        <li>
          <Link to="/">
            <SiTwitter size="30px" />
          </Link>
        </li>
        <li>
          <Link to="/">
            <SiTiktok size="30px" />
          </Link>
        </li>
      </ul>
      <div className="logo">
        <div>
          {/* <Logo /> */}
        </div>
      </div>
    </>
  );
}
