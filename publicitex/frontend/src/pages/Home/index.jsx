import './style.css'
import Article from "../../components/Articles/Article";

export default function LandingPage() {
  //Imagenes
  const imgUno = "../../../public/corchea.png";
  const imgDos = "../../../public/máscara.png";
  const imgTres = "https://i.ibb.co/jvRLVRN/ensalada.png";
  const textArticle =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit." +
    "Perspiciatis tenetur temporibus eius, ipsum fugiat sequi commodi" +
    "unde molestias voluptatibus ullam incidunt possimus rerum atque." +
    "Rerum exercitationem dolorem hic unde doloremque!";

  return (
      <section className="landingpage">
        <Article
          linkPath={"/events"}
          imgSrc={imgUno}
          text={textArticle}
          textButton={"Ver Eventos"}
          titleText={"Eventos de España"}
        />
        <Article
          linkPath={"/events/top"}
          imgSrc={imgDos}
          text={textArticle}
          textButton={"Top 10 Eventos"}
          titleText="Explora tus gustos"
        />
        <Article
          linkPath={"/buscador"}
          imgSrc={imgTres}
          text={textArticle}
          textButton={"Buscar"}
          titleText="Encuentra lo que buscas"
        />
      </section>  
  )
}

