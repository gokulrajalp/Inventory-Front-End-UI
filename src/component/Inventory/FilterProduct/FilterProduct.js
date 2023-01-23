import React from 'react'
import NavBar from "../NavBar";

export default function FilterProduct() {



function change(){
  document.querySelector('#details').classList.remove('d-none');
}





  return (
    <div>

          <h1 className="text-center text-white">Filter Product</h1>  

          <div className='d-flex align-item-center justify-content-center p-5'>

          <select class="form-select w-50" aria-label="Default select example" onChange={change}>
  <option selected>select Category</option>
  <option value="1">Fetch from DB</option>
  <option value="2">Fetch from DB</option>
  <option value="3">Fetch from DB</option>
</select>

</div>







<div className=' container d-flex align-item-center justify-content-center d-none' id='details'>
        <div class="card w-50">
  <div class="card-header">
    Product Details
  </div>
  <div class="card-body">
    <h5 class="card-title">Product Title: ' '</h5>
    <h5 class="card-title">Product Category: ' '</h5>
    <h5 class="card-title">Number of Products Available: ' '</h5>
    <h5 class="card-title">Product Model ID: ' '</h5>
    <h5 class="card-title">Status: ' '</h5>
  </div>
</div>

</div>







          </div>
  )
}
