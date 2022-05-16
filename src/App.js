import AppHeaderMain from "./components/AppHeaderMain";
import HomeBanner from "./components/HomeBanner";
import HomeMain from "./components/HomeMain";

function App() {
  return (
    <div className="comtainer">
      <AppHeaderMain/>
      <div class="main-container">
        <HomeBanner/>
        <HomeMain/>
      </div>
    </div>
  )
}

export default App;
