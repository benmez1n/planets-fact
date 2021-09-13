import { Router,Route,Switch } from "react-router";
import Earth from "./Components/Earth";
import Jupiter from "./Components/Jupiter";
import Mars from "./Components/Mars";
import Mercury from "./Components/Mercury";
import Navbar from "./Components/Navbar";
import Neptune from "./Components/Neptune";
import Saturn from "./Components/Saturn";
import Uranus from "./Components/Uranus";
import Venus from "./Components/Venus";
import {createBrowserHistory} from 'history';
const history = createBrowserHistory();
function App() {
  return (
      <Router history={history}>
        <div className="App">
          <Navbar />
          <div className="container">
            <Switch>
              <Route exact path="/">
                <Mercury />
              </Route>
              <Route path="/venus">
                <Venus/>
              </Route>
              <Route path="/earth">
                <Earth/>          
              </Route>
              <Route path="/mars">
                <Mars/>
              </Route>
              <Route path="/jupiter">
                <Jupiter/>
              </Route>
              <Route path="/saturn">
                <Saturn/>
              </Route>
              <Route path="/uranus">
                <Uranus/>
              </Route>
              <Route path="/neptune">
                <Neptune/>
              </Route>           
            </Switch>
          </div>
        </div>
      </Router>
  );
}

export default App;
