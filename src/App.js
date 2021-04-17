import React from 'react'
import Header from './components/header'
import Users from './components/users'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import UserForm from './pages/UserForm';

function App() {
  return (
    <div className='App'>
      <Router>
        <Header />

        <Switch>
          <Route path="/create-user">
            <UserForm />
          </Route>
          <Route path="/">
            <Users />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
