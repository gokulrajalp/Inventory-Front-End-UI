import { useAuth } from "../Authentication/Auth";
import { Link } from "react-router-dom";


const NavBar =() =>{
  let auth=useAuth();

// handleLogout is used to call logout object of useAuth annd hence it logouts from the page..
const handleLogout=()=>{
  auth.logout();
}


    return(
      <nav class="navbar navbar-expand-lg">
      {/* <div class="container-fluid"> */}
        <Link to="/inventory" class="navbar-brand  text-light" href="#">Inventory Dashboard</Link>
        <button class="navbar-toggler btn-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          {/* <span class="navbar-toggler-icon"></span> */}
          <i class="fa-solid fa-bars white-icon"></i>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav" style={{marginLeft:"6rem"}}>

                                <li className="nav-item active">
                                    <Link to="/inventory" className="nav-link text-light">Home <span className="sr-only">(current)</span></Link>
                                </li>

                                <li className="nav-item active">
                                    <Link to="/profile" className="nav-link text-light">Profile <span className="sr-only">(current)</span></Link>
                                </li>

                                <li className="nav-item">
                                    <Link to="/addproduct" className="nav-link text-light">Add Product</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/updateproduct" className="nav-link text-light">Update Inventory</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/inventory/availability" className="nav-link text-light">Check Availability</Link>
                                </li>
                                <li className="nav-item">
                                    <Link  to="/filter" className="nav-link text-light">Filter Product</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/generate" className="nav-link text-light">Generate Report </Link>
                                </li>
                                
                                </ul>

        <button className="btn btn-outline-warning my-2 my-sm-0 bg-dark text-light" onClick={handleLogout}>Logout</button>
          
        </div>

      {/* </div> */}
    </nav>
    )
}

export default NavBar