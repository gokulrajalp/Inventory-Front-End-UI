import React, {useState } from "react"
import { ErrorMessage} from "formik"
import * as yup from 'yup'
import axios from "axios"
import { useHistory } from "react-router-dom";
import { Field, Form, Formik } from "formik";
import "./register.css"

const Register = () => {

    // to initialize the history object
    const history=useHistory();

    // to initialize the field values as null initially ...
    const initialValues={
        
            name:'',
            email:'',
            password:'',
            reEnterPassword:''
    }


    // to handle the the function as it is clicked on submit button ...this happens due to formik without the onclick button...
    const handleSubmit=(values)=>{
        // values is coming with the help of formik when it is clicked on submit button with all the form values as object ..
        console.log("form values : ",values)

        // extracting name,email,password,reEnterPassword from values object....
        const { name, email, password, reEnterPassword } = values

        // axios is used to connect frontend with backend using api and user is send as data with the api from the frontend to backend 

        if( name && email && password && (password === reEnterPassword)){
            axios.post("http://localhost:8000/register", values)
            .then( res => {
                alert(res.data.message)
                // setLoginUser1(res.data.user)
                history.push("/login")
            })

            //history.push("/") is used to redirect to homepage after successfull login of the user in login page

            // res.data.message is coming from backend as response 
        } else {
            alert("invlid input")//Re-enter the password
        }
    }


    // validateSchema is a function which is maintained by yup library and is used to validate the input field along with returning the error message as well
    const validationSchema=yup.object({
        name:yup.string().required('Name is Required'),
        email:yup.string().required('Email is Required'),
        password:yup.string().required('Please enter the password').min(6,'Should be 6 char'),
        reEnterPassword:yup.string().required('Please Re-enter the password').min(6,'Should be 6 char')
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
                                <ErrorMessage className='error' name="reEnterPassword"/> <br></br><br></br>
                                 
                                <label>Inventory Admin :</label>
                                <Field className="Field" type="radio" name="designation" value="inventoryadmin" ></Field>
                                <label>Delivery Admin :</label>
                                <Field className="Field" type="radio" name="designation" value="deliveryadmin" ></Field>
            
                                <button className="button" type="submit"  >Register </button>
                                <div>or</div>

                                <button className="button" type="cancel" onClick={() => history.push("/login")}>Login</button>


                {/* here Field is used in place of input and errorMessage is a predefined feature of formik and yup  */}
               {/* all the function is being handled using formikand yup */}
             
                </div>
            </Form>   

        </Formik>
        

    )
}

export default Register