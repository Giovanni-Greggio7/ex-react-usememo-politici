import { useState, useEffect } from 'react'
// import Card from './assets/components/Card'

function App() {
  const [politici, setPolitici] = useState([])

  // async function fetchData() {
  //   const response = await fetch('http://localhost:5001/politicians')
  //   const data = await response.json()
  //   setPolitici(data)
  //   return data
  // }

  function fetchData() {
    fetch('http://localhost:5001/politicians')
      .then(response => response.json())
      .then(data => setPolitici(data))
      .catch(error => console.error(error))
  }

  useEffect(() => {
    fetchData()
  }, [])

  console.log(politici)



  return (
    <>
    <h1>Lista politici</h1>
    <ul>
      {politici.map(p => {
        return (
          <li key={p.id}>
            <h2>{p.name}</h2>
            <img src={p.image} width={'100px'} alt={p.name} />
            <p><strong>{p.position}</strong></p>
            <p>{p.biography}</p></li>
        )
      })}
    </ul>
    </>
    
  )
}

export default App
