import React from "react";
import NavBar from "../NavBar";
import Sidebar from "../Sidebar/Sidebar";

export default function AddProduct() {

  return (
    <div className="container-fluid  px-0 py-0">
      <NavBar />

        <div className="row">
            <div className="col-md-12 col-9 mx-auto">
            <div className="row mt-3">
                <Sidebar />
                  <div className="col-lg-3 col-md-9 m-3" >
                        <form>
                            <div className="form-group">
                              <label for="exampleInputEmail1">Email address</label>
                              <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                              <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                            </div>
                            <div className="form-group">
                              <label for="exampleInputPassword1">Password</label>
                              <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                            </div>
                            <div className="form-check">
                              <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                              <label className="form-check-label" for="exampleCheck1">Check me out</label>
                            </div>
                            <button type="submit" className="btn btn-primary">Submit</button>
                      </form>
                  </div>
            </div>
            </div>
        </div>
    </div>
  );
}
