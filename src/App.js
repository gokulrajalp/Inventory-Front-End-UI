import './App.css';
import Inventory from './component/Inventory/inventory';
// import Delivery from './component/homepage/Delivery/delivery';
import Login from "./component/login/login";
import Register from "./component/register/register";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {AuthProvider} from './component/Authentication/Auth';
import { RequiredAuth } from './component/Authentication/RequiredAuth';
import Customer from './component/Customer/Customer';
import AddProducts from './component/Inventory/AddProduct/AddProduct';
import UpdateProducts from './component/Inventory/Update/Update';
import CheckAvailability from './component/Inventory/CheckAvailability/CheckAvailability';
import FilterProduct from './component/Inventory/FilterProduct/FilterProduct';
import GenerateReport from './component/Inventory/GenerateReport/GenerateReport';
import Profile from './component/Inventory/Profile/Profile';
// import Sidebar from './component/Delivery/Sidebar';
import DeliveryDashboard from './component/Delivery/DeliveryDashboard/DeliveryDashboard'




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

              <Route path='/profile'>
                {
                    <RequiredAuth><Profile/></RequiredAuth> 
                }
              </Route>

              <Route path='/addproduct'>
                {
                    <RequiredAuth><AddProducts/></RequiredAuth> 
                }
              </Route>

              <Route path='/updateproduct'>
                {
                    <RequiredAuth><UpdateProducts/></RequiredAuth> 
                }
              </Route>

              <Route path='/availability'>
                {
                    <RequiredAuth><CheckAvailability/></RequiredAuth> 
                }
              </Route>

              <Route path='/filter'>
                {
                    <RequiredAuth><FilterProduct/></RequiredAuth> 
                }
              </Route>

              <Route path='/generate'>
                {
                    <RequiredAuth><GenerateReport/></RequiredAuth> 
                }
              </Route>







              {/* <Route path='/delivery'>
                {
                   <RequiredAuth> <Delivery/> </RequiredAuth>  
                }
              </Route> */}

              <Route path='/customer'>
                {
                    <Customer/> 
                }
              </Route>

              <Route path='/delivery'>
                {
                    <RequiredAuth><DeliveryDashboard/></RequiredAuth>
                }
              </Route>
              
              
            </Switch>
          </Router>
      

      </div>

    </AuthProvider>
  );
}

export default App;