import './style.css'
import Article from "../../components/Articles/Article";
import {textUno, textDos, textTres, imgUno, imgDos, imgTres} from './articlePublics';

export default function LandingPage() {

  return (
      <section className="landingpage">
        <Article
          linkPath={"/events"}
          imgSrc={imgUno}
          text={textUno}
          textButton={"Ver Eventos"}
          titleText={"Eventos Musicales"}
        />
        <Article
          linkPath={"/events/top"}
          imgSrc={imgDos}
          text={textDos}
          textButton={"Top 10 Eventos"}
          titleText="Explora tus gustos"
        />
        <Article
          linkPath={"/festival/buscar"}
          imgSrc={imgTres}
          text={textTres}
          textButton={"Buscar"}
          titleText="Encuentra lo que buscas"
        />
      </section>  
  )
}

