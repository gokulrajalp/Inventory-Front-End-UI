import './App.css';
import Inventory from './component/Inventory/InventoryDashboard1/inventory';
import Delivery from './component/homepage/Delivery/delivery';
import Login from "./component/login/login";
import Register from "./component/register/register";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {AuthProvider} from './component/Authentication/Auth';
import { RequiredAuth } from './component/Authentication/RequiredAuth';
import Customer from './component/Customer/Customer';
import Products from './component/Products/Products';




function App() {


  

  return (

      // routes written inside AuthProvider will be treated as children as declared in auth.js
      <AuthProvider>
    

          <div className="bg-right">

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