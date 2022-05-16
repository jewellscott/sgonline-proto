import { ReactComponent as SquareLogo } from '../square-logo-tbd.svg';
import { ReactComponent as HamburgerLogo } from '../hamburger-logo.svg';

const HomeBanner = () => {
  return (
    <header className="home-banner">
        <div className="graphic-text-logo">
          <SquareLogo/>
          <h1>
            <span class="visually-hidden">simguru.online</span>
            <HamburgerLogo/>        
          </h1>   
        </div>
        <h2>
            Gameplay tools for The Sims 4.
        </h2>
    </header>
  )
}

export default HomeBanner