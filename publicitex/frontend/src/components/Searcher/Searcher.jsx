
import './style.css'
export default function Searcher() {
    return(
      <main>
    <div className="cementerio">
      <div>
        <h2 className="title">Elige donde te quieres divertir</h2>
        <div className="cementerio-main">
          <div className="cementerio-text">
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut harum excepturi eveniet doloremque provident pariatur, beatae ratione quod quam dolorem sed nobis ullam consequuntur vitae tempore obcaecati eaque ex omnis?</p>
            <div className="busqueda">
              <form action="../buscador/index.php" method="post" className="form-busqueda">
                <input type="text" className="text-busqueda" placeholder="Nombre de la ciudad, lugar ..." name="cementerio" />
                <input type="submit"className="submit-busqueda" value="Buscar" /> 
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
    )
}
    
