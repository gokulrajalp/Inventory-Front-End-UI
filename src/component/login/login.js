import React,{useState} from "react";
import "./login.css";
import axios from "axios"
import { useHistory } from "react-router-dom";


const Login = ({setLoginUser}) => {

  //Declare the history object  
  const history=useHistory();
  // user variable is maintained as to store the user and setUser will update any change in the user object
  
  const[user,setUser]=useState({
    email:"",
    password:""
  })

  // handlechange func. will be called every time whenever there is any change in the input field in the UI
  const handleChange = e =>{

    // e.target came up with the change reflected and {name,value} means we are extracting the value from e.target and upating the user witht the change
    
    const {name,value} = e.target
    setUser({
      ...user,
      [name]:value
    })  
  }


  // login =() is called at last when the login button is clicked and we are done with the input part and all modification in the user field

  const login=()=>{

      // extracting the email and password of the user from 'user' variable
      const{email,password}=user

      // checking the condition if both email and password exists
      
      if(email && password)
      {
        // axios is used to connect frontend with backend using api and user is send as data with the api from the frontend to backend 
          axios.post("http://localhost:8000/login",user)
          .then(res=>{
            alert(res.data.message)
            setLoginUser(res.data.user) 
            history.push("/")
          })
          //history.push("/") is used to redirect to homepage after successfull login of the user in login page

          // res.data.user is coming from backend as res.send
      }
      else{
        alert("Invalid Credentials ...")
      }   
  }

  return (

    //Login form  
    // here user.email or user.password is  const[user,setUser]=useState({email:"",password:""}) the recent modified value of user variable we have declared above as set state

    <div className="login">

        {console.log(user)}
        <h1>Login</h1>
        <input type="text" name="email" value={user.email} onChange={handleChange} placeholder="Enter your Email"></input>
        <input type="password" name="password" value={user.password} onChange={handleChange}  placeholder="Enter your Password" ></input>
        <div className="button" onClick={login}>Login</div>
        
    </div>
  )
};

export default Login;
