import React, { Component} from 'react';
import { Switch, Route, Link, BrowserRouter } from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Home from "./components/Home"; 
import Hello from "./components/Hello";
import './App.css';

class App extends Component {
  render() {
      return (
          <div className="site">
              <main>
                  <h1>Ahhh after 10,000 years I'm free. Time to conquer the Earth!</h1>
                 
                  <BrowserRouter>
                  <nav>
                    <Link className={"nav-link"} to={"/"}>Home</Link>
                    <Link className={"nav-link"} to={"/login/"}>Login</Link>
                    <Link className={"nav-link"} to={"/signup/"}>Signup</Link>
                    <Link className={"nav-link"} to={"/hello/"}>Hello</Link>
                  </nav>
                    <Switch>
                        <Route exact path={"/hello/"} component={Hello}/>
                        <Route exact path={"/login/"} component={Login}/>
                        <Route exact path={"/signup/"} component={Signup}/>
                        <Route exact path={"/"} component={Home}/>
                  </Switch>
                  </BrowserRouter>
                  
             </main>
          </div>
      );
  }
}

export default App;
