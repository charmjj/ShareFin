import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { AuthProvider } from './context/auth';
import {loadStripe} from '@stripe/stripe-js';
import {
  Elements
} from '@stripe/react-stripe-js';

import { HunelProvider, HunelCreditCard } from 'reactjs-credit-card';
const hunel = new HunelCreditCard();

const stripePromise = loadStripe('pk_test_6pRNASCoBOKtIshFeQd4XMUh');

ReactDOM.render(
  <AuthProvider>
    <BrowserRouter>
      <Elements stripe={stripePromise} hidePostalCode={true}>
        <HunelProvider config={hunel}>
          <App />
        </HunelProvider>
      </Elements>
    </BrowserRouter>
  </AuthProvider>
  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
