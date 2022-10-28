import React,{useState} from "react";
import "./inventory.css";
import { useAuth } from "../Authentication/Auth";
import Dashboard from "./InventoryDashboard/Dashboard";
import NavBar from "./NavBar";


const Inventory=()=>{
    
    let auth=useAuth();

    // handleLogout is used to call logout object of useAuth annd hence it logouts from the page..
    // const handleLogout=()=>{
    //     auth.logout();
    // }

    console.log("****auth user data",auth.user);
    return(
        // <div className="inventory-homepage">
        //     <h1>Hello {auth.user.name} (Inventory Admin) </h1>
            
        //     <button className="button" onClick={handleLogout}>Logout</button>

            
        // </div>

        

            <div className="container-fluid  px-0 py-0">
                <NavBar/>
                {/* <nav className="navbar sticky-top navbar-dark bg-dark justify-content-between px-4"> */}
                {/* <nav class="navbar sticky-top navbar-expand-lg navbar-dark bg-dark px-4">
                            <a className="navbar-brand">Inventory Dashboard</a>

                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarNav">
                                <ul className="navbar-nav" style={{marginLeft:"6rem"}}>
                                <li className="nav-item active">
                                    <a className="nav-link" href="#">Profile <span className="sr-only">(current)</span></a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Add Product</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Update Inventory</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Check Availability</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Filter Product</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Generate Report </a>
                                </li>
                                
                                </ul>
                            </div>   
                            {/* <NavBar/> */}
                            {/* <button className="btn btn-outline-warning my-2 my-sm-0 bg-dark text-light" onClick={handleLogout}>Logout</button>
                            
                    </nav> */}


                    

                <div className="row">
                     
                    <div className="col-md-12 col-11 mx-auto">
                        
                        

                        <div className="row mt-3">
                            <div className="dashboard col-lg-3 col-md-4 d-lg-block d-none">

                                <div className="card bg-dark card-left m-4 " style={{height:"32rem"}}>
                                    <div className="card-body ">
                                        <nav className="nav d-block"> 
                                            <a className="nav-link active text-center text-light" aria-current="page" href="#">
                                                <i className="fa-solid fa-user mr-1 text-center mb-3 text-secondary" style={{fontSize:"10rem"}}></i><h5>Profile</h5>
                                            </a>

                                            <a className="nav-link fs-5 mb-2 text-secondary" href="#">
                                                <i className="fa-solid fa-cart-plus mr-1 m-1 "></i> Add Product
                                            </a>

                                            <a className="nav-link fs-5 mb-2 text-secondary" href="#">
                                                <i className="fa-solid fa-pen-nib mr-1 m-1"></i> Update Inventory
                                            </a>



                                            <a className="nav-link fs-5 mb-2 text-secondary" href="#">
                                                <i className="fa-solid fa-list-check mr-1 m-1"></i> Check Availability
              
                                            </a>

                                            <a className="nav-link fs-5 mb-2 text-secondary" href="#">
                                                <i className="fa-solid fa-filter mr-1 m-1"></i> Filter Product
                                            </a>

                                            <a className="nav-link fs-5 mb-2 text-secondary" href="#">
                                                
                                              <i className="fa-solid fa-file mr-1 m-2"></i>Generate Report
                                            </a>

                                            
                                        </nav>
                                    </div>
                                     
                                </div>

                            </div>

                            {/* right side div starts */}

                            
                            <Dashboard/>


                        </div>
                    </div>
                </div>
            </div>

    )
}

export default Inventory;

