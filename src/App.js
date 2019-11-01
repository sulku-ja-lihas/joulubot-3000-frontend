import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./Home";

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Switch>
            <Route path="/jotain">
              <div>Jotain</div>
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
