import { useState } from 'react'
import Config from '../config.json'
import Button from "../components/Button";
import { ReactComponent as SquareLogo } from "../assets/square-logo-tbd.svg";
import AppButton from '../components/AppButton'
import Basics from '../components/Basics';
import { randInd } from '../utils/randomize';
import { randList } from '../utils/randomize';

// gamedata imports

  import { cas, basics, gameplay } from '../js/gamedata';

const SimGenerator = () => {

  // [ value, function ]

  // const [ initial, setInitial ] = useState(randInd(basics.initial));
  const [ initials, setInitials ] = useState(randList(basics.initial, 2));
  const [ world, setWorld ] = useState(randInd(gameplay.worlds));

  const [ career, setCareer ] = useState(randInd(gameplay.careers));
  const [ carName, setCarName ] = useState(career.name);
  const [ carBranch, setCarBranch ] = useState(randInd(career.branches));
  const [ carWorkplace, setCarWorkplace ] = useState(career.workplace);
  
  // const [ activity, setActivity ] = useState(randInd(gameplay.preferences.acivities));

  const [ activities, setActivities ] = useState(randList(gameplay.preferences.acivities, 3));

  // const [ trait, setTrait ] = useState(randInd(basics.traits));
  const [ traits, setTraits ] = useState(randList(basics.traits, 3));


  const [ aspiration, setAspiration ] = useState(randInd(basics.aspirations));
  const [ aspName, setAspName ] = useState(aspiration.name)
  const [ aspCategory, setAspCategory ] = useState(aspiration.category);
  const [ aspDescription, setAspDescription ] = useState(aspiration.description);


  function randomizeAll() {
    // setInitial(randInd(basics.initial));
    setInitials(randList(basics.initial, 2))
    setWorld(randInd(gameplay.worlds));

    setCareer(randInd(gameplay.careers))
    setCarName(career.name);
    setCarBranch(randInd(career.branches));
    setCarWorkplace(career.workplace);

    // setActivity(randInd(gameplay.preferences.acivities));
    setActivities(randList(gameplay.preferences.acivities, 3));

    // setTrait(randInd(basics.traits));
    setTraits(randList(basics.traits, 3));


    setAspiration(randInd(basics.aspirations));
    setAspName(aspiration.name);
    setAspCategory(aspiration.category);
    setAspDescription(aspiration.description);
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
            <Basics 
              initials={ initials } 
              world= { world } 
              career={ career }
              carName= { carName }
              carBranch={ carBranch } 
              carWorkplace = { carWorkplace }
              activities = { activities } 
              traits = { traits }
              aspiration = { aspiration }
              aspName = { aspName }
              aspCategory = { aspCategory } 
              aspDescription = { aspDescription }
            />
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