import './App.css';
import Inventory from './component/homepage/inventory';
import Login from "./component/login/login";
import Register from "./component/register/register";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import{useState} from 'react';
// import { useHistory } from "react-router-dom";


function App() {

  
  
  // this user will come from login.js after setting up the user in setLoginUser in login.js and this user will then be used verify the condition written below (user && user._id ?<Homepage />:<Login />)
  const[user,setLoginUser]=useState({})

  
  console.log("****final_user___",user);
  return (

    <div className="App">

      <Router>
        <Switch>

          <Route exact path='/'>
            
            {
              <Login setLoginUser={setLoginUser}/>
            }
            
          </Route>

          <Route path='/login'>

            {
              <Login setLoginUser={setLoginUser}/>
            }

          </Route>

          <Route path='/register'>
            <Register />
          </Route>

          <Route path='/inventory'>
            {
                <Inventory setLoginUser={setLoginUser}/>
            }
          </Route>

        </Switch>
      </Router>
      

    </div>
  );
}

export default App;