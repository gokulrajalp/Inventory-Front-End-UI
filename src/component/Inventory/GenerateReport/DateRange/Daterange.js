import React from 'react'
import { Field, Form, Formik, ErrorMessage} from "formik";
import axios from "axios"
import * as yup from 'yup'


export default function Daterange() {



  const initialValues={

    from_date:'',
    end_date:''
}




const handleSubmit=(values)=>{
  // values is coming with the help of formik when it is clicked on submit button with all the form values as object ..
  console.log("form values : ",values)

  const { from_date, end_date } = values

  // axios is used to connect frontend with backend using api and user is send as data with the api from the frontend to backend 

  if(from_date && end_date){
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
  from_date:yup.string().required('Please enter the Product Model ID'),
  end_date:yup.string().required('Please enter the Product Model ID')
  
})







  return (
    <div>
     


          <h1 className="text-center text-dark">Date Range (Products)</h1>  

          <Formik initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
            
        // initialValues,validationSchema and onSubmit written here to call these function as and when needed it is also maintained by formik

        >
            <Form className="d-flex align-item-center justify-content-center p-5">
                <div className="register">
                       
                                <Field className="Field" type="text" name="from_date" placeholder="From Date" ></Field>
                                <ErrorMessage className='error' name="from_date"/>


                                <Field className="Field" type="text" name="end_date" placeholder="End Date" ></Field>
                                <ErrorMessage className='error' name="end_date"/>
                                
                                
                                <br></br><br></br>
                              
                              
        
                                <button className="button" type="submit" >Generate</button>
                                


             
                </div>
            </Form>   

        </Formik>






          </div>
  )
}
