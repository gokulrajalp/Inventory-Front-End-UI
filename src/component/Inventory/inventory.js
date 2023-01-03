import React from "react";
import AddProduct from "./AddProduct/AddProduct";
import "./inventory.css";
import Dashboard from "./InventoryDashboard/Dashboard";
import NavBar from "./NavBar";
import Sidebar from "./Sidebar/Sidebar";
import { useState } from "react";
import Profile from "./Profile/Profile";
import UpdateInventory from "./UploadInventory/UploadInventory";
import CheckAvailability from "./CheckAvailability/CheckAvailability";
import FilterProduct from "./FilterProduct/FilterProduct";
import GenerateReport from "./GenerateReport/GenerateReport";

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
                                {active === "Profile" && <Profile/>}
                                {active === "AddProduct" && <AddProduct/>}
                                {active === "UpdateInventory" && <UpdateInventory/>}
                                {active === "CheckAvailability" && <CheckAvailability/>}
                                {active === "FilterProduct" && <FilterProduct/>}
                                {active === "GenerateReport" && <GenerateReport/>}

                                

                                {/* <AddProduct/> */}

                        </div>

                    </div>
                </div>
            </div>
            

    )
}

export default Inventory;

