import { Link } from 'wouter'

function ListOfEvents({ events }) {

  return (
    <div className='gallery' >
      {
        events.map((event) => (
          <article className='card' key={event.id}>
            <div className="card__img">
              <img src={event.thumbnail} alt={event.nombre} />
            </div>
            <h4 className="card__title">
              <Link to={`/event/${event.id}`} >{event.nombre}</Link>
            </h4>
          </article>
        ))
      }
    </div >
  )
}

function NoRecipesResults() {
  return (
    <p>No se encontraron resultados</p>
  )
}

export function eventsList({ events }) {
  return (
    events?.length > 0
      ? <ListOfEvents events={events} />
      : <NoRecipesResults />
  )
}
