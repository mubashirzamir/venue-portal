import Register from './Component/Register'
import Login from './Component/Login'
import GetUser from './Component/GetUser'
import Home from './Component/Home'
import About from './Component/About'
import Navbar from './Component/Layout/Navbar'
import NotFound from './Component/Layout/NotFound'
import AddVenue from './Component/Venues/AddVenue'
import EditVenue from './Component/Venues/EditVenue'
import ViewVenue from './Component/Venues/ViewVenue'

import "../node_modules/bootstrap/dist/css/bootstrap.css"

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

        <Navbar />


        <Switch>

          <Route exact path="/">
            <Home />
          </Route>

          <Route exact path="/About">
            <About />
          </Route>

          <Route exact path="/Register">
            <Register />
          </Route>

          <Route exact path="/Login">
            <Login />
          </Route>

          <Route exact path="/GetUser">
            <GetUser />
          </Route>

          <Route exact path="/venue/add">
            <AddVenue />
          </Route>

          <Route exact path="/venue/:venue_id">
            <ViewVenue />
          </Route>

          <Route exact path="/venue/edit/:venue_id">
            <EditVenue />
          </Route>

          <Route>
            <NotFound />
          </Route>

        </Switch>



      </Router>

    </div>
  );
}

export default App;
