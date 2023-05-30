/* eslint-disable react/prop-types */
import './festival.css'
import { Link } from "react-router-dom";
//COMPONENT
export default function FestivalCard({ fest }) {
  return (
      <section className="card">
        <div className="imgBx">
          <img src={fest.thumbnail} alt="Imagen Festival" />
        </div>
        <div className="contentBx">
          <h2>{fest.nombre}</h2>
          <div className="events">
            <h3>Eventos:</h3>
              <Link to={"/events/"+fest.eventos[0].nombre } className="btnEvents">
                {fest.eventos[0].nombre}
              </Link>
          </div>
          <div className="date">
            <h3>Fecha del Festival</h3>
            <span>
              {
                fest.fecha_inicio.fecha_dia + "/" +
                fest.fecha_inicio.fecha_mes + "/" +
                fest.fecha_inicio.fecha_año + " - " +
                fest.fecha_fin.fecha_dia + "/" +
                fest.fecha_fin.fecha_mes + "/" +
                fest.fecha_fin.fecha_año
              }
            </span>
          </div>
          <Link to={`/events/${fest.id}`} className="btn">
              Ver Festival
          </Link>
        </div>
      </section>
  )
}