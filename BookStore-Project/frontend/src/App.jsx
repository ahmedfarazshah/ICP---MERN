import { useEffect } from "react"
import axios from "axios"


function App(){

  useEffect(()=>{
    axios.get("https://localhost:5000/books").then(response => console.log(response)).catch(e=>console.log(e))
  },[])  



  return( 
    <>
    <h1>check the console</h1>
    </>
  )
}

export default App