import { useStateValue } from "./StateProvider";
import "./css/App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Checkout from "./components/Checkout";
import Login from "./components/Login";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React, { useEffect } from "react";
import { auth } from "./firebase";
import Payment from "./components/Payment";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Orders from "./components/Orders";

const promise = loadStripe(
  "pk_test_51HxUyIKUScPc6gPFID8iOanDMcgdGmBp5TSuTbgnlZeqABZW8CdPjhoNSJZea7Dgm44njJavxlBmYJjHW4yR1jaz00FZ6531Iw"
);

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    // will  only run once the app component loads...
    auth.onAuthStateChanged((authUser) => {
      // console.log("THe user is >>>", authUser);
      if (authUser) {
        // the user just logged in / the user wa logged in
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/orders" >
            <Header />
            <Orders />
          </Route>

          <Route path="/login" >
            <Login />
          </Route>

          <Route path="/checkout" >
            <Header />
            <Checkout />
          </Route>

          <Route path="/payment">
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>


          <Route path="/" exact>
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
