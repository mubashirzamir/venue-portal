import Register from './Component/Register'
import Login from './Component/Login'
import GetUser from './Component/GetUser'


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {

  return (
    <div className="App">
      <Router>

        <ul>
          <li><Link to="/Register">Register </Link></li>
          <li><Link to="/Login">Login </Link></li>
          <li><Link to="/GetUser">Get Users </Link></li>
        </ul>

        <Switch>
          <Route path="/Register">
            <Register />
          </Route>

          <Route path="/Login">
            <Login />
          </Route>

          <Route path="/GetUser">
            <GetUser />
          </Route>

        </Switch>



      </Router>

    </div>
  );
}

export default App;
