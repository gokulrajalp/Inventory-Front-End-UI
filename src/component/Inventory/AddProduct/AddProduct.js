import React from 'react'
import { ErrorMessage} from "formik"
import * as yup from 'yup'
import axios from "axios"
import { useHistory } from "react-router-dom";
import { Field, Form, Formik } from "formik";
import "./AddProduct.css"



export default function Profile() {



  const initialValues={
        
    product_title:'',
    product_category:'',
    number_of_products:'',
    product_model_id:'',
    date:'',
    status:'' 
}




 // to handle the the function as it is clicked on submit button ...this happens due to formik without the onclick button...
 const handleSubmit=(values)=>{
  // values is coming with the help of formik when it is clicked on submit button with all the form values as object ..
  console.log("form values : ",values)

  const { product_title, product_category, number_of_products, product_model_id, date, status} = values

  // axios is used to connect frontend with backend using api and user is send as data with the api from the frontend to backend 

  if(  product_title && product_category && number_of_products && product_model_id){
      axios.post("http://localhost:8000/users/admin/register", values)
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
  product_title:yup.string().required('Product Title is Required'),
  product_category:yup.string().required('Product Category is Required'),
  number_of_products:yup.string().required('Please enter the Number of Products'),
  product_model_id:yup.string().required('Please enter the Product Model ID'),
  date:yup.string().required('Please enter the Date'),
  status:yup.string().required('Please enter the status of the product'),
  
})




  return (
    <div>
      
          <h1 className="text-center text-white">Add Product</h1>  




          <Formik initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
            
        // initialValues,validationSchema and onSubmit written here to call these function as and when needed it is also maintained by formik

        >
            <Form className="d-flex align-item-center justify-content-center">
                <div className="register">
                       
                        
                                <Field className="Field" type="text" name="product_title" placeholder="product_title" ></Field>
                                <ErrorMessage className='error' name="product_title"/>
                                
                                <Field className="Field" type="text" name="product_category" placeholder="product_category" ></Field>
                                <ErrorMessage className='error' name="product_category"/>

                                <Field className="Field" type="text" name="number_of_products" placeholder="number_of_products" ></Field>
                                <ErrorMessage className='error' name="number_of_products"/>

                                <Field className="Field" type="text" name="product_model_id" placeholder="product_model_id" ></Field>
                                <ErrorMessage className='error' name="product_model_id"/>
                                
                                
                                
                                <Field className="Field" type="date" name="date"></Field>
                                <ErrorMessage className='error' name="date"/>
                                
                                
                                
                                <Field className="Field" name="status" placeholder="Status (Normal/Damaged)" ></Field>
                                <ErrorMessage className='error' name="status"/> <br></br><br></br>
                                 
                              
        
                                <button className="button" type="submit"  >ADD</button>
                                



                {/* here Field is used in place of input and errorMessage is a predefined feature of formik and yup  */}
               {/* all the function is being handled using formikand yup */}
             
                </div>
            </Form>   

        </Formik>



          </div>
  )
}
