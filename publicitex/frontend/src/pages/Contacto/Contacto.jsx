import './style.css'
import useMessage from '../../hooks/useMessage'

export default function Contacto(){
  // const [body, setBody] = useMessage()

  const handleSubmit = (e) =>{
    e.preventDefault()
    var formData = new FormData(e.target)
    const formValues = Object.fromEntries(formData)
    console.log(formValues)
    // let usuario = formValues.usuario
    // let message = formValues.mensaje
    // const body = [{user: usuario}, {mensaje: message}]

  }
  return(
    <main className="contactoContainer">
      <div className='contactoContentContainer'>
        <h1 className="contactoTittle">Contacta con nosotros</h1>
        <form action="post" className="contactoForm" onSubmit={handleSubmit}>
          <section className='contactoSection'>
            <label className="contactolbl">Introduce tu usuario</label>
            <input type="text" name='usuario' placeholder="Pepito Perez" className='contactoInput'/>
          </section>
          <section className='contactoSection'>
            <label className="contactolbl">Introduce tu mensaje</label>
            <input type="text" name='mensaje' placeholder="Me gusta mucho la página" className='contactoInput'/>
          </section>
          <section className='contactoBtnContainer'>
            <input type='submit' className='contactoBtn' value='Enviar'/>
          </section>
        </form>
      </div>
    </main>      
  )
}