import React, { useState } from "react";

const Login = () => {
    const[login,setlogin]= useState({
        email:"",
        password:""
    });
    const{email,password}=login;
    const onInputChange = e => {
        setlogin({...login,[e.target.name]:e.target.value})
    };
    const onSubmit= async e =>{
        if(!email.includes("mnit.ac.in"))
        {
            e.preventDefault();
            alert("Only MNIT students can log in");
            
        }
        else if(!email.includes("@"))
        {
            alert("Email is invalid");
        }
        else if( email && password)
        {
            e.preventDefault();
            alert(" Welcome!You are successfully logged in");
        }

    };
    return(
        <div>
                   <div class="form">
                <h1 class="title"> Login </h1>
                <form onSubmit={e => onSubmit(e)} >
                    <p class="label"> Email </p>
                    <input type="text" class="input" name="email" value={email} onChange={e => onInputChange(e)} />
                    <p class="label"> Password </p>
                    <input type="password" class="input" name="password" value={password} onChange={e => onInputChange(e)} />
                    <br />
                    <br />
                    <br />
                    <input type="submit" class="submit" autoComplete="off" value="Login" />
                    
                </form>

            </div>
        </div>
    )
}
export default Login;