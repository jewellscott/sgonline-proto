import { ReactComponent as HotdogLogo } from '../hotdog-logo.svg';
import AppNavHeader from './AppNavHeader';

const AppHeaderMain = () => {
  return (
    <header className="app-header-main">
        <HotdogLogo/>
        <AppNavHeader/>
    </header>
  )
}

export default AppHeaderMain