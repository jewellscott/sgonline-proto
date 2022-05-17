import { ReactComponent as HotdogLogo } from '../assets/hotdog-logo.svg' 

import AppNavHeader from './AppNavHeader';

const AppHeaderMain = () => {
  return (
    <header className="app-header-main">
        <a href="/">
           <HotdogLogo/>
        </a>
        <AppNavHeader/>
    </header>
  )
}

export default AppHeaderMain