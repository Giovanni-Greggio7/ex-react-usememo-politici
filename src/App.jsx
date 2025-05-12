import { useState, useEffect, useMemo } from 'react'
import Card from './assets/components/Card'

function App() {

  const [politici, setPolitici] = useState([])
  const [search, setSearch] = useState('')

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

  const filteredPolitici = useMemo(() => {
    const lowerSearch = search.toLowerCase()
    return politici.filter(e => e.name.toLowerCase().includes(lowerSearch) ||
      e.biography.toLowerCase().includes(lowerSearch)
    )
  }, [politici, search])

  return (
    <>
      <input type='text'
        placeholder='Chi stai cercando'
        value={search}
        onChange={(e) => setSearch(e.target.value)} />
      <h1>Lista politici</h1>
      {filteredPolitici.map(politici =>
        <Card key={politici.id} {...politici} />
      )}

    </>

  )
}

export default App
