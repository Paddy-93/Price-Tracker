import { Route } from "react-router-dom";
import { Switch } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import Home from "./Pages/Home";

function App() {
  return (
    <BrowserRouter>
      <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
