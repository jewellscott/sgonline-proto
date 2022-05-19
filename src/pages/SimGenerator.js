import { useState, useEffect } from 'react'
import Button from "../components/Button";
import { ReactComponent as SquareLogo } from "../assets/square-logo-tbd.svg";

// import { configData } from '../config.json'

const SimGenerator = () => {

  // let getRandom = () => {
  //   console.log({configData});
  // }

  const [items, setItems] = useState('');

  useEffect(() => {
    const getData = async () => {
      const dataFromConfig = await fetchData();
    }
    getData();
  }, [])

  // fetch data

  const fetchData = async () => {
    const res = await fetch('http://localhost:5000/base');
    const data = await res.json();

    return data;
  }

  return (
    <main className="tool-main container-1140">        
      <h1 className="tool-title">Sim Generator</h1>
      <div className="tool-main-container">
        <aside className="sidebar">
          <SquareLogo/>
          <nav className="sidebar-nav">
            <Button
              label="Save"
              // onClick={onClick}
            />
            <Button
              label="Preferences"
              // onClick={onClick}
            />
            <Button 
              label="Randomize All"
              // onClick={onClick}
            />
        </nav>
        </aside>
        <section className="tool-main-output">
          <h2>Basics</h2>
          {/* <p>{data.cas.basics.initial[1]}</p> */}
          <h2>Appearance</h2>
          <p>TBA</p>
          <h2>Favorites</h2>
          <p>TBA</p>
        </section>
      </div>
      
    </main>
  )
}

export default SimGenerator