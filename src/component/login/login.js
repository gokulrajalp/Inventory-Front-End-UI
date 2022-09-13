import React,{useState,useEffect} from "react";
import { ErrorMessage, useFormik } from "formik"
import * as yup from 'yup'
import "./login.css";
import axios from "axios"
import { useHistory } from "react-router-dom";
import { Field, Form,Formik } from "formik";
import { useAuth } from "../Authentication/Auth";
const Login = ({setLoginUser}) => {

  let auth=useAuth(); 

  // to initialize the history object
  const history=useHistory();
  
  // to initialize the field values as null initially ...
  const initialValues={
    email:'',
    password:''
  }

  // handleSubmit =() is called at last when the login button is clicked and we are done with the input part and all modification in the user field
  const handleSubmit=(values)=>{

     auth.login(values);

    // extracting the email and password of the user from 'values' variable mainained by formik
    // const{email,password}=values

    // checking the condition if both email and password exists
    if(auth.user.email && auth.user.password)
    {
        
      // axios is used to connect frontend with backend using api and user is send as data with the api from the frontend to backend 
        axios.post("http://localhost:8000/login",values)
        .then(res=>{
          alert(res.data.message)
          console.log("*******",res.data)
          auth.login(res.data.user);

          setLoginUser(res.data.user)
          if(res.data.user.designation==="inventoryadmin")
          {
            history.push("/inventory")
          }
          else{
            history.push("/delivery")
          } 
        })
        //history.push("/") is used to redirect to homepage after successfull login of the user in login page

        // res.data.user is coming from backend as response
    }
    else{
      alert("Invalid Credentials ...")
    }   
  }

  
  const validationSchema=yup.object({
    
    email:yup.string().required('Email is Required'),
    password:yup.string().required('Please enter the password')

    // validateSchema is a function which is maintained by yup library and is used to validate the input field along with returning the error message as well

  })

  return (

    //Login form  

    <Formik initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}


            // initialValues,validationSchema and onSubmit written here to call these function as and when needed it is also maintained by formik
    >

      <Form>
          <div className="login">

              {/* {console.log(user)} */}
              <h1>Login</h1>
              
              <Field className="Field" type="text" name="email"  placeholder="Enter your Email"></Field>
              <ErrorMessage className='error' name="email"/>

              <Field className="Field" type="password" name="password"   placeholder="Enter your Password" ></Field>
              <ErrorMessage className='error' name="password"/> <br></br><br></br>

              <button className="button" type="submit" >Login</button>
              

               {/* here Field is used in place of input and errorMessage is a predefined feature of formik and yup  */}
               {/* all the function is being handled using formikand yup */}
          </div>
      </Form>
    </Formik>
  )
}

export default Login;





