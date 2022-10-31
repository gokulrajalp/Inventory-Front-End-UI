import React from "react";
import "./inventory.css";
import Dashboard from "./InventoryDashboard/Dashboard";
import NavBar from "./NavBar";
import Sidebar from "./Sidebar/Sidebar";

const Inventory=()=>{
    
    return(
        
            <div className="container-fluid  px-0 py-0">
                
                <NavBar/>
                
    
                <div className="row">
                     
                    <div className="col-md-12 col-9 mx-auto ">
                        
                        <div className="row mt-3 justify-content-center">
                                <Sidebar/>
                                <Dashboard/>
                        </div>

                    </div>
                </div>
            </div>
            

    )
}

export default Inventory;

