import React from 'react'
import HomeNavCard from './HomeNavCard'

import { ReactComponent as SimIcon } from '../sim-generator-icon.svg'
import { ReactComponent as BuildIcon } from '../build-randomizer-icon.svg'
import { ReactComponent as SquareIcon } from '../square-logo-tbd.svg'

const HomeMain = () => {
  return (
    <main className="home-main">
      <nav className="home-main-nav">
        <HomeNavCard
        hText="Sim Generator"
        sHText="Blah blah blah blah description"
        icon={SimIcon}
      />
      <HomeNavCard
        hText="Build Randomizer"
        sHText="Blah blah blah blah description"
        icon={BuildIcon}
      />
      <HomeNavCard
        hText="Dummy Tool"
        sHText="Blah blah blah blah description"
        icon={SquareIcon}
      />
      </nav>
    </main>
  )
}

export default HomeMain