import React,{useState} from "react";
import "./delivery.css";
import { useHistory } from "react-router-dom";
import { useAuth } from "../../Authentication/Auth";

const Delivery=()=>{
    const history=useHistory();
    let auth=useAuth();

    // handleLogout is used to call logout object of useAuth annd hence it logouts from the page..

    const handleLogout=()=>{
        auth.logout();
    }

    console.log("**auth user data",auth.user);
    return(
        <div className="delivery-homepage">
            <h1>Hello {auth.user.name} (Delivery Admin) </h1>
            <h2></h2>
            <button className="button" onClick={handleLogout}>Logout</button>
        </div>
    )
}

export default Delivery;