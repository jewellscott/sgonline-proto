// import { useState } from 'react'
import Config from '../config.json'
import Button from "../components/Button";
import { ReactComponent as SquareLogo } from "../assets/square-logo-tbd.svg";
import AppButton from '../components/AppButton'

const SimGenerator = () => {

  const cas = Config.packs[0].data[0].cas;
  const basics = Config.packs[0].data[0].cas.basics[0];
  const gameplay = Config.packs[0].data[0].gameplay;

  // let randomIndex = (array) => {
  //   return parseInt(Math.random() * array.length);
  // }


  // let randomize = (arr) => {
  //   arr.sort(function(a, b) {
  //     return 0.5 - Math.random()
  //   })
  // };

  let randomize = (a, b) => {
    return Math.random() - 0.5;
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
              // onClick={fetchSims}
            />
        </nav>
        </aside>
        <section className="tool-main-output">
          <h2 className="app-h2">Basics</h2>
          <p>
            Sul sul! My initials are <AppButton label={ basics.initial.sort(randomize)[0] } /><AppButton label={ basics.initial.sort(randomize)[0] } /> and I live in <AppButton label={ gameplay.worlds.sort(randomize)[0] } />!
          </p>
          <br/>
          <p>
            I work at { gameplay.careers.sort(randomize)[0].workplace } as a <AppButton label={ gameplay.careers[0].branches.sort(randomize)[0] } /> in the <AppButton label={ gameplay.careers[0].name } /> career. 
            
            In my free time, I enjoy <AppButton label={ gameplay.preferences.acivities.sort(randomize)[0] } /> and <AppButton label={ gameplay.preferences.acivities[1] } />, but I dislike <AppButton label={ gameplay.preferences.acivities[2] } />. 
            
            My friends say I display <AppButton label={ basics.traits.sort(randomize)[0] } />, <AppButton label={ basics.traits[1] } />, and <AppButton label={ basics.traits[3] } /> traits. 
            
            My aspiration in life is all about <AppButton label= { basics.aspirations.sort(randomize)[0].category } />– <AppButton label={ basics.aspirations[0].name } />! { basics.aspirations[0].description }!

          </p>
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