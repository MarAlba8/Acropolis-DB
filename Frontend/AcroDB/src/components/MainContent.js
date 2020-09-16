import React from "react";
import { Switch, Route, BrowserRouter} from "react-router-dom";
import Home from "./Home";
import Login from "./Login";


const MainContent = () => (
    <div>
        <BrowserRouter>
          <nav>
            {/*<Link className={"nav-link"} to={"/signup/"}>Signup</Link>*/}
          </nav>
            <Switch>
                <Route exact path={"/home"} component={Home}/>
                <Route exact path={"/login/"} component={Login}/>
                {/*<Route exact path={"/signup/"} component={Signup}/>*/}
                <Route exact path={"/"} component={Login}/>
          </Switch>
        </BrowserRouter>
    </div>
);

export default MainContent;








