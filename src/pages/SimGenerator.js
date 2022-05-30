import { useState } from 'react'
import Config from '../config.json'
import Button from "../components/Button";
import { ReactComponent as SquareLogo } from "../assets/square-logo-tbd.svg";
import AppButton from '../components/AppButton'
import Basics from '../components/Basics';
import { randInd } from '../utils/randomize';

// gamedata imports

  import { cas, basics, gameplay, initial, world, career, carBranch, carDescription, carWorkplace, activity, trait, aspiration, aspCategory, aspDescription } from '../js/gamedata';

const SimGenerator = () => {

  // [ value, function ]
  const [ initial, setInitial ] = useState(randInd(basics.initial));
  const [ world, setWorld ] = useState(randInd(gameplay.worlds));
  // const [ carBranch, setCarBranch ] = useState(randInd(gameplay.careers[0].branches));
  // const [career, setCareer ] = useState(randInd(gameplay.careers[0]));


  function randomizeAll() {
    setInitial(randInd(basics.initial));
    setWorld(randInd(gameplay.worlds));
    // setCareer(randInd(gameplay.careers))
    // setCarBranch(randInd(gameplay.careers[0].branches));
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