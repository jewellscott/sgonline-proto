
import HomeBanner from "../components/HomeBanner";
import HomeMain from "../components/HomeMain";

function Home() {
  return (
    <div className="comtainer">
      <div className="container-960">
        <HomeBanner/>
        <HomeMain/>
      </div>
    </div>
  )
}

export default Home