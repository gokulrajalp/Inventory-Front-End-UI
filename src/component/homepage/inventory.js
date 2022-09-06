import React,{useState,useEffect} from "react";
import "./inventory.css";
import { useHistory } from "react-router-dom";

const Inventory=({setLoginUser})=>{
    const history=useHistory();

    useEffect(()=>{
        
            if(localStorage.getItem('myData'))
            {
              history.push("/inventory");
            }
            else
            {
                history.push("/login");
            }
          },[])
    return(
        <div className="inventory-homepage">
            <h1>Hello Homepage</h1>
            <div className="button">Logout</div>
        </div>
    )
}

export default Inventory;

