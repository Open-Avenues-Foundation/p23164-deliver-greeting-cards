import Navbar from "./Navbar";
import Home from "./Home";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
    <div className="App">
      <Navbar />
      <div className="content">
        <Home />
        <Switch>
          <Route exact path="/test">
          </Route>
        </Switch>
      </div>
    </div>
    </Router>
  );
}

export default App;
