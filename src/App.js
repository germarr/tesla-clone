import './App.css';
import Header from "./components/Header"
import Item from "./components/Item"
import Accesories from "./assets/img/Desktop-Accessories.jpeg"
import ModelY from "./assets/img/Desktop-ModelY.jpeg"
import ModelS from "./assets/img/ms-homepage-desktop.jpeg"
import Model3 from "./assets/img/m3-homepage-desktop.jpeg"
import ModelX from "./assets/img/mx-homepage-desktop.jpeg"
import SolarPanels from "./assets/img/Desktop-SolarPanels.jpeg"
import SolarRoof from "./assets/img/Desktop-SolarRoof.jpeg"

function App() {
  return (
    <div className="App">
      <Header/>
      <div className="app__itemsContainer">
        <Item 
          title="Lowest Cost Solar Panels in America"
          desc = "Money-bak guarantee"
          descLink =""
          backgroundImg={SolarPanels}
          leftBtnTxt = "ORDER NOW"
          leftBtnLink=""
          rightBtnTxt="LEARN MORE"
          rightBtnLink=""
          first
        />
        <Item 
          title="Model S"
          desc = "$60,420"
          descLink =""
          backgroundImg={ModelS}
          leftBtnTxt = "CUSTOM ORDER"
          leftBtnLink=""
          rightBtnTxt="LEARN MORE"
          rightBtnLink=""
          twoButtons="true"
        />
        <Item 
          title="Model 3"
          desc = "Money-back guarantee"
          descLink =""
          backgroundImg={Model3}
          leftBtnTxt = "CUSTOM ORDER"
          leftBtnLink=""
          rightBtnTxt="LEARN MORE"
          rightBtnLink=""
          twoButtons="true"
        />
        <Item 
          title="Model X"
          desc = "Money-back guarantee"
          descLink =""
          backgroundImg={ModelX}
          leftBtnTxt = "CUSTOM ORDER"
          leftBtnLink=""
          rightBtnTxt="LEARN MORE"
          rightBtnLink=""
          twoButtons="true"
        />
        <Item 
          title="Model Y"
          desc = "Money-back guarantee"
          descLink =""
          backgroundImg={ModelY}
          leftBtnTxt = "CUSTOM ORDER"
          leftBtnLink=""
          rightBtnTxt="LEARN MORE"
          rightBtnLink=""
          twoButtons="true"
        />
      </div>
    </div>
  );
}

export default App;
