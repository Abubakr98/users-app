import React, { useEffect } from 'react'
import Header from './components/header'
import Users from './components/users'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { useDispatch } from 'react-redux';
import { fetchUsers } from './redux/actions';
import CreateUser from './pages/CreateUser';
import UpdateUser from './pages/UpdateUser';

function App() {

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  return (
    <div className='App'>
      <Router>
        <Header />
        <Switch>
          <Route path="/create-user">
            <CreateUser />
          </Route>
          <Route path="/update-user/:id">
            <UpdateUser />
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
