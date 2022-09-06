import React, { useEffect,useState } from "react"
import "./register.css"
import axios from "axios"
import { useHistory } from "react-router-dom";
const Register = () => {

    useEffect(()=>{
        if(localStorage.getItem('myData'))
        {
          history.push("/inventory");
        }
        else
        {
            history.push("/login");
        }
      },[])
    const history=useHistory();
    const [ user, setUser] = useState({
        name: "",
        email:"",
        password:"",
        reEnterPassword: "",
        designation:""
    })

    const handleChange = e => {
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })
    }

    const register = () => {
        const { name, email, password, reEnterPassword } = user
        if( name && email && password && (password === reEnterPassword)){
            axios.post("http://localhost:8000/register", user)
            .then( res => {
                alert(res.data.message)
                // setLoginUser1(res.data.user)
                history.push("/login")
            })
        } else {
            alert("invlid input")
        }
        
    }

    return (
        <div className="register">
            {console.log("User", user)}
            <h1>Register</h1>
           
                    <input type="text" name="name" value={user.name} placeholder="Your Name" onChange={ handleChange }></input>
                    <input type="text" name="email" value={user.email} placeholder="Your Email" onChange={ handleChange }></input>
                    <input type="password" name="password" value={user.password} placeholder="Your Password" onChange={ handleChange }></input>
                    <input type="password" name="reEnterPassword" value={user.reEnterPassword} placeholder="Re-enter Password" onChange={ handleChange }></input>
                    
                    <label>Inventory Admin :</label>
                    <input type="radio" name="designation" value="inventoryadmin" onChange={ handleChange }></input>
                    <label>Delivery Admin :</label>
                    <input type="radio" name="designation" value="deliveryadmin" onChange={ handleChange }></input>


                    <div className="button" onClick={register} >Register</div>
                    <div>or</div>
                    <div className="button" onClick={() => history.push("/login")}>Login</div>
        </div>

    )
}

export default Register