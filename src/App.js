import React, { useEffect } from 'react';
import './App.css';
import Header from './Header';
import Home from './Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import LogIn from './LogIn';
import { useStateValue } from './StateProvider';
import { auth } from './firebase';
import CheckOut from './Checkout';
import Payment from './Payment';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import Orders from './Orders'

const promise = loadStripe("pk_test_51HcEQBGscyqK6pDNB6zxEKnM08S4VRAHOJ4AheqFqIsaS88a6Q57iJ2gbv4jhEOEFjfIXejEPTuu0OgPL7FQxDKh00HDQthLEa");


function App() {
  const [{ }, dispatch] = useStateValue();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser
        });
      }
      else {
        dispatch({
          type: "SET_USER",
          user: null
        });
      }

    });

    return () => {
      unsubscribe();
    }
  },//useEffect 2nd args

    [dispatch])

  return (
    <div className="app">
      <Router>
        <div className="app">
          <Switch>
            <Route path="/checkout">
              <Header />
              <CheckOut />
            </Route>

            <Route path="/orders">
              <Header />
              <Orders />
            </Route>

            <Route path="/login">
              <LogIn />
            </Route>

            <Route path="/payment">
              <Header />
              <Elements stripe={promise}>
                <Payment />
              </Elements>
            </Route>

            <Route path="/">
              <Header />
              <Home />
            </Route>

          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
