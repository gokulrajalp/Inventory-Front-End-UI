import React from 'react'
import NavBar from "../NavBar";
import Damaged from './Damaged/Damaged';
import Daterange from './DateRange/Daterange';
import Pending from './Pending/Pending';

export default function GenerateReport() {
  return (
    <div>

          <h1 className="text-center text-white">Generate Report</h1>  



          <div className='container'>


            <ul class="nav nav-tabs" id="myTab" role="tablist">

  <li class="nav-item" role="presentation">
    <button class="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home-tab-pane" type="button" role="tab" aria-controls="home-tab-pane" aria-selected="true">Date Range</button>
  </li>

  <li class="nav-item" role="presentation">
    <button class="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile-tab-pane" type="button" role="tab" aria-controls="profile-tab-pane" aria-selected="false">Pending Orders</button>
  </li>

  <li class="nav-item" role="presentation">
    <button class="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact-tab-pane" type="button" role="tab" aria-controls="contact-tab-pane" aria-selected="false">Damaged Products</button>
  </li>
 
</ul>


<div class="tab-content" id="myTabContent">

  <div class="tab-pane fade show active bg-light" id="home-tab-pane" role="tabpanel" aria-labelledby="home-tab" tabindex="0">


 < Daterange/>

  </div>

  <div class="tab-pane fade bg-light" id="profile-tab-pane" role="tabpanel" aria-labelledby="profile-tab" tabindex="0">

 <Pending/>

  </div>

  <div class="tab-pane fade bg-light" id="contact-tab-pane" role="tabpanel" aria-labelledby="contact-tab" tabindex="0">
 <Damaged/>
  

  </div>



</div>

          </div>

          </div>
  )
}
