import { Link } from "wouter";

export default function About(){
  return(
    <section>
      <h2 className="title"> Quienes Somos</h2>
        <div className="card-list">
          <div className="card-image">
              <img src="" alt="Pablo Rodríguez"/>
          </div>
          <div className="card-text"> 
            <h4>Pablo Rodríguez</h4>
            <p>CEO</p>
            <Link to='/'className="btn" style="width:100%">Saber más</Link>
          </div>
        </div>
    </section>
    )
}