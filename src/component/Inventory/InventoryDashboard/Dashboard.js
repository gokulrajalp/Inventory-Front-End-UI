const Dashboard = () =>{
    return(
        <div className="col-lg-8 col-md-9 m-4" >


                                <div className="inventory-info row" >
                                    <div className="shadow col-md-3 mx-4 my-5 ">
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

                                    <div className="shadow col-md-3 mx-4 my-5">
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

                                    <div className="shadow col-md-3 mx-4 my-5">
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

                                    <div className="shadow col-md-3 mx-4 my-5">
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
    )

}

export default Dashboard