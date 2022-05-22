import { useState } from 'react'
import Button from "../components/Button";
import { ReactComponent as SquareLogo } from "../assets/square-logo-tbd.svg";

const SimGenerator = () => {

  const [sims, setSims] = useState([]);

  const fetchSims = async () => {
    const res = await fetch('http://localhost:5000/packs');
    const json = await res.json();

    console.log(json);
    return json;
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
              onClick={fetchSims}
            />
        </nav>
        </aside>
        <section className="tool-main-output">
          <h2>Basics</h2>
          <p>
          </p>
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