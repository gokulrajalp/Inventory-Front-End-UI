import { useAuth } from "../Authentication/Auth";



const NavBar =() =>{
  let auth=useAuth();

// handleLogout is used to call logout object of useAuth annd hence it logouts from the page..
const handleLogout=()=>{
  auth.logout();
}


    return(
      <nav class="navbar navbar-expand-lg">
      {/* <div class="container-fluid"> */}
        <a class="navbar-brand  text-light" href="#">Inventory Dashboard</a>
        <button class="navbar-toggler btn-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          {/* <span class="navbar-toggler-icon"></span> */}
          <i class="fa-solid fa-bars white-icon"></i>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav" style={{marginLeft:"6rem"}}>
                                <li className="nav-item active">
                                    <a className="nav-link text-light" href="#">Profile <span className="sr-only">(current)</span></a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-light" href="#">Add Product</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-light" href="#">Update Inventory</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-light" href="#">Check Availability</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-light" href="#">Filter Product</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-light" href="#">Generate Report </a>
                                </li>
                                
                                </ul>

        <button className="btn btn-outline-warning my-2 my-sm-0 bg-dark text-light" onClick={handleLogout}>Logout</button>
          
        </div>

      {/* </div> */}
    </nav>
    )
}

export default NavBar