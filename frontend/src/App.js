import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import './App.css';

import Header from './components/header.component';
import HomePage from './pages/home.page';
import LoginPage from './pages/login.page';
// import Footer from './components/footer.component';
import PaymentPage from './pages/payment.page';
import Album from './pages/subscribe';
import Pricing from './pages/pricing';
import Schedule from './pages/schedule';

import AuthRoute from './util/AuthRoute'; // it is used to redirect to "/" if logged in

class App extends React.Component {
  
  render() {
    
    return (
      <>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <AuthRoute exact path="/login" component={LoginPage} />
          <AuthRoute exact path="/payment/:packageType" component={PaymentPage} userLoggedIn="true" />
          <Route exact path="/subscribe" component={Album} />
          <Route exact path="/pricing" component={Pricing} />
          <AuthRoute exact path="/schedule" component={Schedule} userLoggedIn="true" />
          <Redirect to="/" /> 
        </Switch>
        {/* <Footer /> */}
      </>
    )
  }
}

export default App;