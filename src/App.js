import { Route } from "react-router-dom";
import { Switch } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./Components/Navbar";
import PriceChart from "./Components/CoinInfo/PriceChart";
import Home from "./Pages/Home";
import CoinInfo from "./Pages/CoinInfo";
import TailwindDemo from "./Components/TailwindDemo/TailwindDemo";

function App() {
  return (
    <BrowserRouter>
    <Navbar/>
      <Switch>
          <Route exact path="/">
            <span><Home/></span>
          </Route>

          <Route exact path="/displayinfo/:id">
              <CoinInfo />
          </Route>

          <Route exact path="/tailwind">
              <TailwindDemo />
          </Route>

      </Switch>
    </BrowserRouter>
  );
}

export default App;
