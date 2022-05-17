import Button from "../components/Button"
import { useEffect, useState } from "react"
import { ReactComponent as SquareLogo } from "../assets/square-logo-tbd.svg"

const SimGenerator = () => {

  // const [items, setItems] = useState('');

  const getRandom = () => {
    fetch('http://localhost:5000/base')
      .then((res) => res.json())
      .then((data) => console.log(data));
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
              onClick={getRandom}
            />
        </nav>
        </aside>
        <section className="tool-main-output">
          <h2>Basics</h2>
          <p>TBSA</p>
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

/* <div>
          <p>
            Sul sul! My initials are {dummyData.initials[randomNum]}{dummyData.initials[randomNum]}, and I live in {dummyData.world[randomNum]}! I work at {dummyData.careers[randomNum].workplace} as a {dummyData.careers[randomNum].branches[randomNum]} in the {dummyData.careers[randomNum].name} career.
          </p>
        </div> */