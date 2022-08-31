import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
//import Footer from "./components/Footer";
import Checkout from "./components/Checkout";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/Login";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />

        <Switch>

        <Route path="/login">
            <Login />
          </Route>

          <Route path="/checkout">
            <Checkout />
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
