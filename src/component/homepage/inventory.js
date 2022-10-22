import React,{useState} from "react";
import "./inventory.css";

import { useAuth } from "../Authentication/Auth";

const Inventory=()=>{
    
    let auth=useAuth();

    // handleLogout is used to call logout object of useAuth annd hence it logouts from the page..
    const handleLogout=()=>{
        auth.logout();
    }

    console.log("****auth user data",auth.user);
    return(
        // <div className="inventory-homepage">
        //     <h1>Hello {auth.user.name} (Inventory Admin) </h1>
            
        //     <button className="button" onClick={handleLogout}>Logout</button>

            
        // </div>

        

            <div className="container-fluid bg-dark px-0 py-0">
                {/* <nav className="navbar sticky-top navbar-dark bg-secondary justify-content-between">
                            <a className="navbar-brand">Navbar</a>
                                
                            <button className="btn btn-outline-warning my-2 my-sm-0 bg-dark text-light" onClick={handleLogout}>Logout</button>
                            
                    </nav> */}


                    <nav className="nav-menu d-none d-lg-block">
                        <ul>
                            <li className="active"><a href="#">Home</a></li>
                            <li><a href="#">About</a></li>
                            <li><a href="#">Services</a></li>
                            <li><a href="#">Portfolio</a></li>
                            <li><a href="#">Contact</a></li>

                        </ul>
                    </nav>

                    <a href="#" className="get-started-btn scrollto">Get Started</a>

                <div className="row">
                     
                    <div className="col-md-12 col-11 mx-auto">
                        
                        

                        <div className="row mt-3">
                            <div className="col-lg-3 col-md-4 d-md-block">

                                <div className="card bg-common card-left m-4" style={{height:"35rem"}}>
                                    <div className="card-body">
                                        <nav className="nav d-block"> 
                                            <a className="nav-link active text-center" aria-current="page" href="#">
                                                <i className="fa-solid fa-user mr-1 text-center mb-3" style={{fontSize:"10rem"}}></i><h5>Profile</h5>
                                            </a>

                                            <a className="nav-link fs-5 mb-2" href="#">
                                                <i className="fa-solid fa-pen-nib mr-1 m-1"></i> Add Product
                                            </a>

                                            <a className="nav-link fs-5 mb-2" href="#">
                                                <i className="fa-solid fa-pen-nib mr-1 m-1"></i> Update Inventory
                                            </a>



                                            <a className="nav-link fs-5 mb-2" href="#">
                                                <i className="fa-solid fa-pen-nib mr-1 m-1"></i> Check Availability
                                            </a>

                                            <a className="nav-link fs-5 mb-2" href="#">
                                                <i className="fa-solid fa-filter mr-1 m-1"></i> Filter Product
                                            </a>

                                            <a className="nav-link fs-5 mb-2" href="#">
                                                
                                              <i className="fa-solid fa-file mr-1 m-2"></i>Generate Report
                                            </a>

                                            
                                        </nav>
                                    </div>
                                     
                                </div>

                            </div>

                            {/* right side div starts */}

                            <div className="col-lg-8 col-md-9 m-4" style={{paddingLeft:"10rem"}} >


                                <div className="row">
                                    <div className="col-md-3 mx-4 my-5">
                                        <div className="card text-center">
                                            <div className="card-header bg-primary text-white">
                                                <div className="row align-items-center">
                                                    <div className="col">
                                                        <i className="fa fa-list fa-4x"></i>
                                                    </div>
                                                    <div className="col">
                                                        <h3 className="display-3">250</h3>
                                                        <h6>Pending Orders</h6>
                                                
                                                        
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="card-footer">
                                                <h5>
                                                    <a href="#" className="text-primary text-decoration-none fs-6">View Details <i className="fa fa-arrow-alt-circle-right"></i> </a>
                                                </h5>
                                            </div>
                                        </div>
                                    </div>



                                    {/* 2nd card */}

                                    <div className="col-md-3 mx-4 my-5">
                                        <div className="card text-center">
                                            <div className="card-header bg-success text-white">
                                                <div className="row align-items-center">
                                                    <div className="col">
                                                        <i className="fa fa-truck fa-4x"></i>
                                                        
                                                    </div>
                                                    <div className="col">
                                                        <h3 className="display-3">50</h3>
                                                        <h6>Pending Delivery</h6>
                                                
                                                        
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="card-footer">
                                                <h5>
                                                    <a href="#" className="text-success text-decoration-none fs-6">View Details <i className="fa fa-arrow-alt-circle-right"></i> </a>
                                                </h5>
                                            </div>
                                        </div>
                                    </div>


                                    {/* 3rd */}

                                    <div className="col-md-3 mx-4 my-5">
                                        <div className="card text-center">
                                            <div className="card-header bg-warning text-white">
                                                <div className="row align-items-center">
                                                    <div className="col">
                                                        <i className="fa fa-person-walking-arrow-loop-left fa-4x"></i>
                                                        
                                                    </div>
                                                    <div className="col">
                                                        <h3 className="display-3">20</h3>
                                                        <h6>Order Returned</h6>
                                                
                                                        
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="card-footer">
                                                <h5>
                                                    <a href="#" className="text-warning text-decoration-none fs-6">View Details <i className="fa fa-arrow-alt-circle-right"></i> </a>
                                                </h5>
                                            </div>
                                        </div>
                                    </div>

                                    {/* 4th card */}

                                    <div className="col-md-3 mx-4 my-5">
                                        <div className="card text-center">
                                            <div className="card-header bg-danger text-white">
                                                <div className="row align-items-center">
                                                    <div className="col">
                                                        <i className="fa fa-layer-group fa-4x"></i>
                                                        
                                                    </div>
                                                    <div className="col">
                                                        <h3 className="display-3">2340</h3>
                                                        <h6>Products Available</h6>
                                                
                                                        
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="card-footer">
                                                <h5>
                                                    <a href="#" className="text-danger text-decoration-none fs-6">View Details <i className="fa fa-arrow-alt-circle-right"></i> </a>
                                                </h5>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

    )
}

export default Inventory;

