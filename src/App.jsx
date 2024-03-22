
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Ingre from './Ingredients'
import Error from './Error'
import pb from "./assets/Paneer-Biriyani.jpg"
import './App.css'

function App() {
const ing=["Basmati Rice","Oil","Tomato","Onion","Potato","Carrot","Panneer"]

  return (
    <>
   
    <h3> Biriyani Ingredients </h3>
    <Error ingredients={ing}/>
    <Ingre ingredients={ing}/><br/>
    <img src={pb} alt="Paneer Biriyani" width={300} height={400}/>
    
    </>
  )
}

export default App
