import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './styles.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Titulo from './components/Titulo'
import Contador from './components/Contador'
import NavBar from './components/NavBar'
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './components/ItemListContainer';



function App() {

  const productos = [
    {id:1, nombre:"producto A", precio: 10},
    {id:2, nombre:"producto b", precio: 20},
    {id:3, nombre:"producto c", precio: 30}

  ];





 /*
  //spread -----------------------------------------
  const numeros1 = [1, 2, 3, 4, 5];
  const numeros2 = [6, 7, 8 ,9, 10];


  const numeroTotal = [...numeros1, ...numeros2];//tres puntos sirven para fusionar
  const otroArreglo = [...numeros1,23]

  console.log(otroArreglo);

  const persona = {
    nombre: "Matias",
    apellido: "Lopez",
  }

  const personaConProfesion = {
    ...persona,
    profesion: "Administrativo"
  }

  console.log(personaConProfesion)


  //destructuracion---------------------------------------------
  const {nombre,apellido,profesion} = personaConProfesion;
  console.log(nombre);
  console.log(apellido);
  console.log(profesion);

  const[num1,num2, ...numeros] = numeros1;
  console.log(num1)

  //map-------------------------------------------------------

  const arregloMapeado = numeros1.map (num => "soy el numero" + num ); //"=>"por cada numero me devuelva el "soy el numero"
  console.log(arregloMapeado)
  
  //Filter----------------------------------------------------

  const mayorA2 = numeros1.filter(num => num >2);
  console.log(mayorA2)
*/
 
const styles = {
  border: "1px solid black",
  fontSize: 30,
  color: "red"
}

  return (
    <>
     {/*<Titulo nombre="titulo 1" cantidad= {25} numero={0}/>  
     <Titulo nombre="titulo 2" cantidad= {32} numero={1}/>
     <Titulo numero={2 }/>
     <Titulo numero={3}/>
      <Titulo numero={4}/ >*/}
      
      <NavBar/>
      <ItemListContainer productos = {productos} greeting= "mensaje de bienvenida"/>
    </>
  )
}

export default App
