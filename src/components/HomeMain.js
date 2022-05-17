import React from 'react'
import HomeNavCard from './HomeNavCard'

import { ReactComponent as SimIcon } from '../assets/sim-generator-icon.svg'
import { ReactComponent as BuildIcon } from '../assets/build-randomizer-icon.svg'
import { ReactComponent as SquareIcon } from '../assets/square-logo-tbd.svg'

const HomeMain = () => {
  return (
    <main className="home-main">
      <nav className="home-main-nav">
        <a className ="card-link" href="/sim-generator">
           <HomeNavCard
              hText="Sim Generator"
              sHText="Blah blah blah blah description"
              icon={SimIcon}
           />
        </a>
        <a className ="card-link" href="/build-randomizer">
           <HomeNavCard
              hText="Build Randomizer"
              sHText="Blah blah blah blah description"
              icon={BuildIcon}
           />
        </a>
        <a className ="card-link" href="/">
           <HomeNavCard
              hText="Dummy Tool"
              sHText="Blah blah blah blah description"
              icon={SquareIcon}
           />
        </a>
      </nav>
    </main>
  )
}

export default HomeMain