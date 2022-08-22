import { Route } from "react-router-dom";
import { Switch } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./Components/Navbar";
import PriceChart from "./Components/PriceChart";
import Home from "./Pages/Home";

function App() {
  return (
    <BrowserRouter>
    <Navbar/>
      <Switch>
          <Route exact path="/">
            <span><Home/></span>
          </Route>
          <Route exact path="/showchart/:id">
              <PriceChart />
          </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
