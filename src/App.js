import React, { createContext, useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import Home from './components/Home/Home';
import Donation from './components/Donation/Donation';
import AddEvent from './components/AddEvent/AddEvent';
import Blog from './components/Blog/Blog';
import Register from './components/Register/Register';
import Login from './components/Login/Login';
import { VolunteerContext } from './components/Volunteer/VolunteerContext';
import RegisterUser from './components/RegisterUser/RegisterUser';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

export const UserContext = createContext();

const App = () => {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
    <VolunteerContext>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="/donation">
            <Donation/>
          </Route>
          <PrivateRoute path="/events">
            <AddEvent/>
          </PrivateRoute>
          <Route path="/blog">
            <Blog/>
          </Route>
          <PrivateRoute path="/register">
            <Register/>
          </PrivateRoute>
          <Route path="/login">
            <Login/>
          </Route>
          <PrivateRoute path="/users">
            <RegisterUser/>
          </PrivateRoute>
        </Switch>
      </Router>
    </VolunteerContext>
    </UserContext.Provider>
  );
}

export default App;
