import { useState, useEffect } from 'react'

import Button from "./Button";

const SimGenerator = () => {

  const [items, setItems] = useState([]);

  useEffect (() => {
      const getItems = async () => {
          const itemsFromServer = await fetchItems()
          setItems(itemsFromServer)
      }

      getItems();
  }, [])

  // fetch data

  const fetchItems = async () =>  {
    const res = await fetch('http://localhost:5000/base')
    const data = await res.json() 

    return data
}

  const getRandom = () => {
      fetch();
  }

  return (
    <main className="tool-main">
        Text.
        <Button label="Randomize All"></Button>
        
    </main>
  )
}

export default SimGenerator