import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios';

function App() {
  const [jokes, setJokes] = useState<any>([])

  useEffect(() => {
    axios.get('/api/jokes')
    .then((response) => {
      setJokes(response.data);
    })
    .catch((error) => {
      console.log(error);
    })
    return () => {
    }
  }, [])
  
  return (
    <>
      <h1>Chai aur Code</h1>
      <p>JOKES: {jokes.length}</p>
      {
        jokes.map((joke:any) => {
          return (<div key={joke.id}>
            <h3>{joke.title}</h3>
            <p>{joke.content}</p>
          </div>)
        })
      }
    </>
  )
}

export default App
