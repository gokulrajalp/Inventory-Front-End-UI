import React from "react"
import { ErrorMessage} from "formik"
import * as yup from 'yup'
import axios from "axios"
import { Field, Form, Formik } from "formik";
import "./Products.css"

const Products = () => {  

    // to initialize the field values as null initially ...
    const initialValues={
        
            name:'',
            price:'',
            product:''
    }


    // to handle the the function as it is clicked on submit button ...this happens due to formik without the onclick button...
    const handleSubmit=(values)=>{
        // values is coming with the help of formik when it is clicked on submit button with all the form values as object ..
        console.log("form values : ",values)

        // extracting name,email,password,reEnterPassword from values object....
        const { name,price,product} = values

        // axios is used to connect frontend with backend using api and user is send as data with the api from the frontend to backend 

        if(name && product && price){
            
            axios.post("http://localhost:8000/products", values)
            .then( res => {
                alert(res.data.message)
                
            })

            //history.push("/") is used to redirect to homepage after successfull login of the user in login page

            // res.data.message is coming from backend as response 
        } else {
            alert("invlid input")
        }
    }


    // validateSchema is a function which is maintained by yup library and is used to validate the input field along with returning the error message as well
    const validationSchema=yup.object({
        name:yup.string().required('Product Name is Required').max(6,'Should be 6 char'),
        product:yup.string().required("Product is required!"),
        price:yup.string().required("Product Price is required!")
                
    }) 

    return (

        <Formik initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
            
        // initialValues,validationSchema and onSubmit written here to call these function as and when needed it is also maintained by formik

        >
            <Form>
                <div className="product">
                        {/* {console.log("User", user)} */}
                        <h1>Product Entry</h1>

                                <Field as="select"
                                            className="Field"
                                            name="product"
                                            // onChange={handleChange}
                                            // onBlur={handleBlur}
                                            style={{ display: "block" }}>

                                            <option value="" label="Select a Category">Select product category{" "}</option>

                                            <option value="Mobile" label="Mobile">{" "}Mobile</option>

                                            <option value="Smart Watch" label="Smart Watch">Smart Watch</option>
                                            
                                            <option value="PC" label="PC">PC</option>

                                            <option value="Laptop" label="Laptop">Laptop</option>

                                            <option value="Monitor" label="Monitor">Monitor</option>
                                            
                                            <option value="Television" label="Television">Television</option>
                                </Field>
                                <ErrorMessage className='error' name="product"/>
                        
                                <Field className="Field" type="text" name="name" placeholder="Product Name" ></Field>
                                <ErrorMessage className='error' name="name"/>
                                 

                                <Field className="Field" type="number" name="price" placeholder="Price"></Field>
                                <ErrorMessage className='error' name="price"/>

                            
                                <button className="button" type="submit"  >Submit </button>
                                

                                


                {/* here Field is used in place of input and errorMessage is a predefined feature of formik and yup  */}
               {/* all the function is being handled using formikand yup */}
             
                </div>
            </Form>   

        </Formik>
        

    )
}

export default Products