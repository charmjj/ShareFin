import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import './App.css';

import Header from './components/header.component';
import HomePage from './pages/home.page';
import LoginPage from './pages/login.page';

class App extends React.Component {
  
  render() {
    
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path='/login' component={LoginPage} />
          {/* <Route path="/facilities" component={Facilities} /> */}
          <Redirect to="/" /> 
        </Switch>
        {/* <Footer /> */}
      </div>
    )
  }
}

export default App;