import { useStateValue } from "./StateProvider";
import "./css/App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Checkout from "./components/Checkout";
import Login from "./components/Login";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React, { useEffect } from "react";
import { auth } from "./firebase";

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    // will  only run once the app component loads...
    auth.onAuthStateChanged((authUser) => {
      console.log("THe user is >>>", authUser);
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
          <Route path="/" exact>
            <Header />
            <Home />
          </Route>
          
          <Route path="/checkout" exact={true}>
            <Header />
            <Checkout />
          </Route>

          <Route to="/login" exact={true}>
            <Login />
          </Route>

        </Switch>
      </div>
    </Router>
  );
}

export default App;
