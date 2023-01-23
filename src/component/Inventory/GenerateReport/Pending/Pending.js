import React from 'react'
import axios from "axios"


export default function Pending() {




const handleSubmit=()=>{
    alert("Report Downloded");
  // values is coming with the help of formik when it is clicked on submit button with all the form values as object ..
 

  // axios is used to connect frontend with backend using api and user is send as data with the api from the frontend to backend 

  
    //   axios.post("http://localhost:8000/inventory/pending")
    //   .then( res => {
    //       alert(res.data.message)
        
    //   })

      

}










  return (
    <div>
     


          <h1 className="text-center text-dark">Pending Orders</h1>  

         
            <form className="d-flex align-item-center justify-content-center p-5" onSubmit={handleSubmit}>
                <div className="register">
                       
                             
                              
                              
        
                                <button className="button" type="submit" >Generate</button>
                                


             
                </div>
            </form>   

    






          </div>
  )
}
