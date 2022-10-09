import React, {useState } from "react"
import { ErrorMessage} from "formik"
import * as yup from 'yup'
import axios from "axios"
import { useHistory } from "react-router-dom";
import { Field, Form, Formik } from "formik";
import "./Customer.css"

const Customer = () => {

    // to initialize the history object
    const history=useHistory();

    

    // to initialize the field values as null initially ...
    const initialValues={
        
            name:'',
            email:'',
            password:'',
            reEnterPassword:'',
            phone:'',
            state:''
    }


    // to handle the the function as it is clicked on submit button ...this happens due to formik without the onclick button...
    const handleSubmit=(values)=>{
        // values is coming with the help of formik when it is clicked on submit button with all the form values as object ..
        console.log("form values : ",values)

        // extracting name,email,password,reEnterPassword from values object....
        const { name, email, password, reEnterPassword ,phone,state} = values

        // axios is used to connect frontend with backend using api and user is send as data with the api from the frontend to backend 

        if(name && email && password && (password === reEnterPassword) && state && phone){
            
            axios.post("http://localhost:8000/customer", values)
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
        name:yup.string().required('Name is Required').max(6,'Should be 6 char'),
        email:yup.string().required('Email is Required'),
        password:yup.string().required('Please enter the password'),
        reEnterPassword:yup.string().required('Please Re-enter the password'),
        state:yup.string().required("State is required!"),
        phone:yup.string()
                .required("This field is Required")
                .matches(
                    /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/,
                    "Phone number is not valid"
                )
    }) 

    return (

        <Formik initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
            
        // initialValues,validationSchema and onSubmit written here to call these function as and when needed it is also maintained by formik

        >
            <Form>
                <div className="register">
                        {/* {console.log("User", user)} */}
                        <h1>Register</h1>
                        
                                <Field className="Field" type="text" name="name" placeholder="Your Name" ></Field>
                                <ErrorMessage className='error' name="name"/>
                                
                                <Field className="Field" type="text" name="email" placeholder="Your Email" ></Field>
                                <ErrorMessage className='error' name="email"/>

                                <Field className="Field" type="password" name="password" placeholder="Your Password" ></Field>
                                <ErrorMessage className='error' name="password"/>

                                <Field className="Field" type="password" name="reEnterPassword" placeholder="Re-enter Password" ></Field>
                                <ErrorMessage className='error' name="reEnterPassword"/> 
                                 
                                <Field className="Field" type="tel" name="phone" placeholder="Mobile Number"></Field>
                                <ErrorMessage className='error' name="phone"/>

                                <Field as="select"
                                    className="Field"
                                    name="state"
                                    
                                    // onChange={handleChange}
                                    // onBlur={handleBlur}
                                    style={{ display: "block" }}>

                                    <option value="" label="Select a state">Select a state{" "}</option>

                                    <option value="Delhi" label="Delhi">{" "}Delhi</option>

                                    <option value="Punjab" label="Punjab">Punjab</option>
                                    
                                    <option value="Jharkhand" label="Jharkhand">Jharkhand</option>
                                </Field>
                                <ErrorMessage className='error' name="state"/><br></br><br></br>
                                

                               
                                <button className="button" type="submit"  >Register </button>
                                

                                


                {/* here Field is used in place of input and errorMessage is a predefined feature of formik and yup  */}
               {/* all the function is being handled using formikand yup */}
             
                </div>
            </Form>   

        </Formik>
        

    )
}

export default Customer