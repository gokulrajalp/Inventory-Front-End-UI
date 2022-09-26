import React,{useState} from "react";
import "./inventory.css";
import { useHistory } from "react-router-dom";
import { useAuth } from "../Authentication/Auth";

const Inventory=()=>{
    const history=useHistory();
    let auth=useAuth();

    // handleLogout is used to call logout object of useAuth annd hence it logouts from the page..
    const handleLogout=()=>{
        auth.logout();
    }

    console.log("****auth user data",auth.user);
    return(
        <div className="inventory-homepage">
            <h1>Hello {auth.user.name} (Inventory Admin) </h1>
            
            <button className="button" onClick={handleLogout}>Logout</button>
        </div>
    )
}

export default Inventory;

