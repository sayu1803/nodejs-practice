import { useEffect, useState } from 'react'

import './App.css'
import axios from 'axios'

function App() {
  const[jokes,setJokes]=useState([])

  useEffect(()=>{
    axios.get('/api/jokes')
    .then((response) => {
      setJokes(response.data);
    })
    .catch((error)=>{
      console.log("Error", error)
    })
  })

  return (
    <>
      <h1> Chai and FS</h1>
      
      
      <p>JOKES: {jokes.length}</p>


      {
        jokes.map((joke,index)=>(
          <div key={joke.id}>
            <h3>{joke.title}</h3>
            <p>{joke.joke}</p>
          </div>
        ))
      }
    </>
  )
}

export default App
