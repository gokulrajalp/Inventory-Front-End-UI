import './App.css';
import Inventory from './component/Homepage/inventory';
import Delivery from './component/Homepage/Delivery/delivery';
import Login from "./component/Login/login";
import Register from "./component/Register/register";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {AuthProvider} from './component/Authentication/Auth';
import { RequiredAuth } from './component/Authentication/RequiredAuth';
import Customer from './component/Customer/Customer';
import Products from './component/Products/Products';




function App() {


  

  return (

      // routes written inside AuthProvider will be treated as children as declared in auth.js
      <AuthProvider>
    

          <div className="App">

          <Router>
            <Switch>

              <Route exact path='/'>
                
                {
                  <Login />
                }
                
              </Route>

              <Route path='/login'>

                {
                  <Login /> 
                }

              </Route>

              <Route path='/register'>
                <Register />
              </Route>

              <Route path='/inventory'>
                {
                   <RequiredAuth> <Inventory/> </RequiredAuth>  
                }
              </Route>


              <Route path='/delivery'>
                {
                   <RequiredAuth> <Delivery/> </RequiredAuth>  
                }
              </Route>

              <Route path='/customer'>
                {
                    <Customer/> 
                }
              </Route>

              <Route path='/product'>
                {
                    <Products/> 
                }
              </Route>

            </Switch>
          </Router>
      

      </div>

    </AuthProvider>
  );
}

export default App;