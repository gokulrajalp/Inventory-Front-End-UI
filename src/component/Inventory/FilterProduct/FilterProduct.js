import React from 'react'
import NavBar from "../NavBar";

export default function FilterProduct() {
  return (
    <div>

          <h1 className="text-center text-white">Filter Product</h1>  

          <div className='d-flex align-item-center justify-content-center'>

          <select class="form-select w-50" aria-label="Default select example">
  <option selected>select Category</option>
  <option value="1">Fetch from DB</option>
  <option value="2">Fetch from DB</option>
  <option value="3">Fetch from DB</option>
</select>

</div>

          </div>
  )
}
