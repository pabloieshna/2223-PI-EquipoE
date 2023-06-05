import Festival from '../../components/Festival/Festival'
import { useSearchFestivals } from '../../hooks/useSearchFestival'
import './style.css'

export default function BusquedaFestival() {

   const { festivales, getFestivals } = useSearchFestivals()

  const handleSubmit = (e) => {
    e.preventDefault()
    var formData = new FormData(e.target)
    const formValues = Object.fromEntries(formData)
    // console.log(formValues)

    let query = formValues.query
    // setSearch(query)
    getFestivals({ search: query })

    // console.log(e.target)
    //  console.log(query)
    //  console.log(festivales)
  }

  return (
    <main className="page">
      <h1 className='titulo'>Dónde quieres disfrutar</h1>
      <form name='frmsearch' className="searchForm" onSubmit={handleSubmit}>
        <input style={{ width: '25rem' }} name="query" type="text" className="formInput" placeholder='busca una ciudad para ver sus festivales' autoComplete='Off' />
        <input type="submit" className="formSubmit" value="buscar" />
      </form>
    
    <section className='festivalesContainer'>
      {
        festivales.map((festival)=>(
          <Festival key={festival.id} fest={festival}/>
        ))
      }
    </section>
  </main>
  )
}