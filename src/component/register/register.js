import React, { useEffect,useState } from "react"
import { ErrorMessage, useFormik } from "formik"
import * as yup from 'yup'
import "./register.css"
import axios from "axios"

import { useHistory } from "react-router-dom";
import { Field, Form, Formik } from "formik";

const Register = () => {

    const history=useHistory();
    const [ user, setUser] = useState({
        name: "",
        email:"",
        password:"",
        reEnterPassword: "",
        designation:""
    })

    // const handleChange = e => {
    //     console.log("handlechange fired ......********")
    //     const { name, value } = e.target
    //     setUser({
    //         ...user,
    //         [name]: value
    //     })
    // }

    


    const initialValues={
        
            name:'',
            email:'',
            password:'',
            reEnterPassword:''
    }

    const handleSubmit=(values)=>{

        console.log("form values : ",values)

        const { name, email, password, reEnterPassword } = values
        if( name && email && password && (password === reEnterPassword)){
            axios.post("http://localhost:8000/register", values)
            .then( res => {
                alert(res.data.message)
                // setLoginUser1(res.data.user)
                history.push("/login")
            })
        } else {
            alert("invlid input")
        }
    }

    const validationSchema=yup.object({
        name:yup.string().required('Name is Required').max(6,'Should be 4 char'),
        email:yup.string().required('Email is Required'),
        password:yup.string().required('Please enter the password'),
        reEnterPassword:yup.string().required('Please Re-enter the password')
    })

    

    return (

        <Formik initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
            
        
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
                                
                </div>
            </Form>   

        </Formik>
        

    )
}

export default Register