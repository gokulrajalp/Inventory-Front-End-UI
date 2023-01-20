import React from 'react'
import { Field, Form, Formik, ErrorMessage} from "formik";
import axios from "axios"
import * as yup from 'yup'


export default function CheckAvailability() {



  const initialValues={

    product_model_id:''
}




const handleSubmit=(values)=>{
  document.querySelector('#details').classList.remove('d-none');
  // values is coming with the help of formik when it is clicked on submit button with all the form values as object ..
  console.log("form values : ",values)

  const { product_model_id } = values

  // axios is used to connect frontend with backend using api and user is send as data with the api from the frontend to backend 

  if(product_model_id){
      axios.post("http://localhost:8000/inventory/checkavailability", values)
      .then( res => {
          alert(res.data.message)
        
      })

      

      // res.data.message is coming from backend as response 
  } else {
      alert("invlid input")
  }
}


// validateSchema is a function which is maintained by yup library and is used to validate the input field along with returning the error message as well
const validationSchema=yup.object({
  product_model_id:yup.string().required('Please enter the Product Model ID')
  
})







  return (
    <div>
     


          <h1 className="text-center text-white">CheckAvailability</h1>  

          <Formik initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
            
        // initialValues,validationSchema and onSubmit written here to call these function as and when needed it is also maintained by formik

        >
            <Form className="d-flex align-item-center justify-content-center p-5">
                <div className="register">
                       
                                <Field className="Field" type="text" name="product_model_id" placeholder="product_model_id" ></Field>
                                <ErrorMessage className='error' name="product_model_id"/>
                                
                                
                                <br></br><br></br>
                              
                              
        
                                <button className="button" type="submit"  >check</button>
                                


             
                </div>
            </Form>   

        </Formik>





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
