import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Login from './Components/login.component';
import SignUp from './Components/signup.component';
import VitaminesCard from './Components/Cards/VitaminesCard';
import MinerauxCard from './Components/Cards/MinerauxCard';
import SpecialitesCard from './Components/Cards/SpecialitesCard';
import PlantesCard from './Components/Cards/PlantesCard';

function App() {
  return (
    <Router>
      <div className="App">
        <div className="auth-wrapper">
          <div className="auth-inner">
            <Switch>
              <Route exact path="/" component={Login} />
              <Route path="/login" component={Login} />
              <Route path="/register" component={SignUp} />
              <Route path="/mineraux" component={MinerauxCard} />
              <Route path="/vitamines" component={VitaminesCard} />
              <Route path="/specialites" component={SpecialitesCard} />
              <Route path="/plantes" component={PlantesCard} />
            </Switch>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
