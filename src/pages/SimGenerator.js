import { useState } from 'react'
import Config from '../config.json'
import Button from "../components/Button";
import { ReactComponent as SquareLogo } from "../assets/square-logo-tbd.svg";
import AppButton from '../components/AppButton'
import Basics from '../components/Basics';
import { randomElement } from '../utils/randomize';

const SimGenerator = () => {

  let randomize = (a, b) => {
    return Math.random() - 0.5;
  }

  const cas = Config.packs[0].data[0].cas;
  const basics = Config.packs[0].data[0].cas.basics[0];
  const gameplay = Config.packs[0].data[0].gameplay;

  // [ value, function ]
  const [ initial, setInitial ] = useState(randomElement(basics.initial));

  const [ world, setWorld ] = useState(randomElement(gameplay.worlds));

  function randomizeAll() {
    setInitial(randomElement(basics.initial));
    setWorld(randomElement(gameplay.worlds));
  }

  // let randomIndex = (array) => {
  //   return parseInt(Math.random() * array.length);
  // }


  // let randomize = (arr) => {
  //   arr.sort(function(a, b) {
  //     return 0.5 - Math.random()
  //   })
  // };

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
              onClick={randomizeAll}
            />
        </nav>
        </aside>
        <section className="tool-main-output">
          <h2 className="app-h2">Basics</h2>
            <Basics initial={ initial } world= { world } />
          <h2 className="app-h2">Appearance</h2>
          <p>TBA</p>
          <h2 className="app-h2">Favorites</h2>
          <p>TBA</p>
        </section>
      </div>
      
    </main>
  )
}

export default SimGenerator