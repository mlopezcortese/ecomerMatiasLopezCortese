import React from 'react' //rafc trae todo el componente en funcion flecha 
import Boton from './Boton'

const Titulo = ({nombre ="titulo por defecto", cantidad = 0, numero}) => { //props(nombre) permite q la info pueda ser dinamica 


  return (
    <div> 
        <p>Nombre del libro: {nombre}</p>
        <p>Cantidad de Hojas: {cantidad}</p>
        <Boton numero= {numero }/>
    </div>
  )
}

export default Titulo

