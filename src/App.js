import './App.css';
import Homepage from './component/homepage/homepage';
import Login from "./component/login/login";
import Register from "./component/register/register";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import{useState} from 'react';


function App() {

  // this user will come from login.js after setting up the user in setLoginUser in login.js and this user will then be used verify the condition written below (user && user._id ?<Homepage />:<Login />)
  const[user,setLoginUser]=useState({})

  return (

    <div className="App">

      <Router>
        <Switch>

          <Route exact path='/'>
            
            {
              user && user._id ?<Homepage />:<Login />
            }
            
          </Route>

          <Route path='/login'>

            <Login setLoginUser={setLoginUser}/>

          </Route>

          <Route path='/register'>
            <Register />
          </Route>

        </Switch>
      </Router>
      

    </div>
  );
}

export default App;