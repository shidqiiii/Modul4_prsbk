import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";

import Counter from "./learn-useState/Counter";
import Effect from "./learn-useEffect/Index";
import Context from "./learn-useContext/Theme";
import App2 from "./learn-UseMemo/Increment";
import App3 from "./learn-useCallback/Set";

function App() {
  return (
    <Router>
      <div className="App-header">
        <nav className="NavBar">
          <ul className="ul">
            <li className="li">
              <Link to="/">Use State</Link>
            </li>
            <li className="li">
              <Link to="/effect">Use Effect</Link>
            </li>
            <li className="li">
              <Link to="/context">Use Context</Link>
            </li>
            <li className="li">
              <Link to="/memo">Use Memo</Link>
            </li>
            <li className="li">
              <Link to="/callback">Use Callback</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/" exact component={Counter} />
          <Route path="/effect" exact component={Effect} />
          <Route path="/context" exact component={Context} />
          <Route path="/memo" exact component={App2} />
          <Route path="/callback" exact component={App3} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;