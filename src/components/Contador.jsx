import React, {useState} from 'react'



const Contador = () => {

    const [contador,setContador] = useState(0)
    const sumar = ()=> {
        setContador(contador +1)
    }

    const restar = ()=> {
        setContador(contador - 1)
    }

    const multiplicar = ()=> {
        setContador(contador * 2)
    }

  return (
    <div>
      <p>Numero: {contador}</p>
      <button onClick={sumar}> Sumar </button>
      <button onClick={restar}> Restar </button>
      <button onClick={multiplicar}> Multicar</button> 
    </div>
  )
}

export default Contador
