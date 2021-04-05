import "./index.css";
import React from "react";
import Home from "../Home";
import Hospitals from "../Hospitals";
// import Certificate from "../Certificate";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Siddhivinayak from "../Siddhivinayak";
import Vaidya from "../Vaidya";
import Shwaas from "../shwaas";
import ReactGA from 'react-ga';
import { createBrowserHistory } from 'history';

// const history = createMemoryHistory();
const isBrowser = typeof window !== "undefined";

let history

if (typeof document !== 'undefined') {
   history = createBrowserHistory();
}

function initializeAnalytics(){
  if(!isBrowser) return;
  ReactGA.initialize("G-VY6V29MQZJ")
  ReactGA.pageview(window.location.pathname + window.location.search);
}
console.log(process.env);
console.log(process.env.REACT_APP_GOOGLE_CLIENT_EMAIL);
function App() {
  initializeAnalytics();
  return (
    <Router >
      <div className="app">
        <Switch>
          {/* <Route path="/certificate">
            <Certificate />
          </Route> */}
          <Route path="/shwaas">
            <Shwaas />
          </Route>
          <Route path="/vaidya">
            <Vaidya />
          </Route>
          <Route path="/siddhivinayak">
            <Siddhivinayak />
          </Route>

          <Route path="/hospitals">
            <Hospitals />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
