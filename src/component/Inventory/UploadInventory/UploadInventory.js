import React from 'react'
import NavBar from "../NavBar";

export default function UpdateInventory() {



function sent(){
  document.querySelector('#pending').classList.remove('d-none');
  document.querySelector('#sent').classList.add('d-none');

}







  return (
    <div>
      
          <h1 className="text-center text-white">Update Inventory</h1> 

      
          <div class="container">
  



          <table class="table table-bordered table-sm border-light table-responsive-sm">
  <thead class="table-dark">
    <tr>
      <th scope="col">S.No</th>
      <th scope="col">Order_ID</th>
      <th scope="col">Details</th>
      <th scope="col">Address</th>
      <th scope="col">Status</th>
    </tr>
  </thead>
  <tbody class="text-white">
    <tr>
      <th scope="row">1</th>
      <td>Fetch from database</td>
      <td>Fetch from database</td>
      <td>Fetch from database</td>
      <td><button type="button" class="btn btn-success" id="sent" onClick={sent}>Sent</button><button type="button" id="pending" class="btn btn-warning d-none">Pending to deliver...</button></td>
    </tr>
  </tbody>
</table>




</div>


          
          </div>
        
  )
}
