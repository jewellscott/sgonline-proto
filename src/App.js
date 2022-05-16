import AppHeaderMain from "./components/AppHeaderMain";
import HomeBanner from "./components/HomeBanner";
import HomeMain from "./components/HomeMain";
import SimGenerator from "./components/SimGenerator";

function App() {
  return (
    <div className="comtainer">
      <AppHeaderMain/>
      <div className="main-container">
        <HomeBanner/>
        <HomeMain/>
        <SimGenerator/>
      </div>
    </div>
  )
}

export default App;
