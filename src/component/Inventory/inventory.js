import React from "react";
import AddProduct from "./AddProduct/AddProduct";
import "./inventory.css";
import Dashboard from "./InventoryDashboard/Dashboard";
import NavBar from "./NavBar";
import Sidebar from "./Sidebar/Sidebar";
import { useState } from "react";
import Profile from "./Profile/Profile";
const Inventory=()=>{
    
const [active, setActive] = useState("Dashboard");

    return(
        
            <div className="container-fluid  px-0 py-0">
                
                <NavBar onClick={value => setActive(value)} />
                
    
                <div className="row">
                     
                    <div className="col-md-12 col-9 mx-auto ">
                        
                        <div className="row mt-3 justify-content-center">
                                {/* <Sidebar/> */}
                                
                                {active === "Dashboard" && <Dashboard/>}
                                {active === "AddProduct" && <AddProduct/>}
                                {active === "Profile" && <Profile/>}

                                {/* <AddProduct/> */}

                        </div>

                    </div>
                </div>
            </div>
            

    )
}

export default Inventory;

