import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import './App.css';

import Header from './components/header.component';
import HomePage from './pages/home.page';
import LoginPage from './pages/login.page';
import SubPage from './pages/subscribe';
import Pricing from './pages/pricing';
import Schedule from './pages/schedule';

class App extends React.Component {
  
  render() {
    
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path='/login' component={LoginPage} />
          <Route exact path="/subscribe" component={SubPage} />
          <Route exact path="/pricing" component={Pricing} />
          <Route exact path="/schedule" component={Schedule} />
          {/* <Route path="/facilities" component={Facilities} /> */}
          <Redirect to="/" /> 
        </Switch>
        {/* <Footer /> */}
      </div>
    )
  }
}

export default App;