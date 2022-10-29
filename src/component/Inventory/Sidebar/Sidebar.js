import React from 'react'
import { Link } from "react-router-dom";

export default function Sidebar() {

return (


<div className="dashboard col-lg-3 col-md-4 d-lg-block d-none">

<div className="card bg-dark card-left m-4 " style={{height:"32rem"}}>
<div className="card-body ">
<nav className="nav d-block"> 
<Link to="/profile" className="nav-link active text-center text-light" aria-current="page" >
<i className="fa-solid fa-user mr-1 text-center mb-3 text-secondary" style={{fontSize:"10rem"}}></i><h5>Profile</h5>
</Link>

<Link to="/addproduct" className="nav-link fs-5 mb-2 text-secondary">
<i className="fa-solid fa-cart-plus mr-1 m-1 "></i> Add Product
</Link>

<Link to="/updateproduct" className="nav-link fs-5 mb-2 text-secondary">
<i className="fa-solid fa-pen-nib mr-1 m-1"></i> Update Inventory
</Link>



<Link to="/availability" className="nav-link fs-5 mb-2 text-secondary" >
<i className="fa-solid fa-list-check mr-1 m-1"></i> Check Availability

</Link>

<Link to="/filter" className="nav-link fs-5 mb-2 text-secondary" >
<i className="fa-solid fa-filter mr-1 m-1"></i> Filter Product
</Link>

<Link to="/generate" className="nav-link fs-5 mb-2 text-secondary" >

<i className="fa-solid fa-file mr-1 m-2"></i>Generate Report
</Link>


</nav>
</div>

</div>

</div>

)
}
