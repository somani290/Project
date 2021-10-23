import {useForm } from "react-hook-form"
import React,{useState,useEffect} from "react";
import { useHistory } from "react-router";
import axios from "axios";
import { Link, NavLink } from "react-router-dom";






const Register = () => {
    let history=useHistory();
    const [register,setRegister]=useState({
        name: "",
        hostel:"",
        room:"",
        branch:"",
        mail:"",
        pass:"",
        pass2:""
    });
const {name,hostel,room,branch,mail,pass,pass2}=register;
const onInputChange = e => {
        setRegister({ ...register,[e.target.name]: e.target.value})

    };

const onSubmit= async e => {
       if(name && pass && hostel && room && branch && mail && pass && pass2 && mail.includes("@mnit.ac.in") && pass==pass2){
        e.preventDefault();
        await axios.post("http://localhost:3003/registers ",register);
        // alert("You have registered");

       }
      
       
       else if( pass!=pass2)
       {
           e.preventDefault();
           alert("Passwords do not match");
           
       }
       else if( ! mail.includes("@mnit.ac.in"))
       {
           e.preventDefault();
           alert("Only MNIT Email Id is acceptable");
       }
       else{
        e.preventDefault();
        alert("Empty form can't be submitted");
    }
      
       
       
       
    };
    
    
    
    return(

        <div>
            <div class="form">
                <h1 class="title"> Register </h1>
                <h4> Create your account, it's free and only takes a minute</h4>
            <form onSubmit={e => onSubmit(e)} 
               >
                   <p class="label"> Full Name </p>
                   <input type="text" name="name" class="input" size="80" value={name} onChange={e => onInputChange(e)} placeholder="Name"  />
                   {/* <p> { errors[name]?.message}</p> */}
                   


                   <p class="label"> Hostel </p>
                   <input type="text" name="hostel" class="input" size="80" value={hostel} onChange={e => onInputChange(e)} placeholder="Hostel" />
                   <p class="label"> Room </p>
                   <input type="number" name="room" class="input" size="80" value={room} onChange={e => onInputChange(e)} placeholder=" Room Number"  />
                   <p class="label"> Branch </p>
                   <input type="text" name="branch" class="input" size="80" value={branch} onChange={e => onInputChange(e)} placeholder="Branch"  />
                   <p class="label"> College Mail ID </p>
                   <input type="text" name="mail" class="input" size="80" value={mail} onChange={e => onInputChange(e)} placeholder="Email"  />
                   <p class="label"> Password </p>
                   <input type="password" autoComplete="off" name="pass" class="input" size="80" value={pass} onChange={e => onInputChange(e)} placeholder=" Password" />
                   <p class="label"> Conform Password </p>
                   <input type="password" autoComplete="off" name="pass2" class="input" size="80" value={pass2} onChange={e => onInputChange(e)} placeholder="Confirm Password" />
                   <br />
                   <br />
                   <br />
                   <br />

                   <input type="submit" class="submit" value="Register Now" />

                   </form>

            </div>
            <div>
                <h4 class="end"> Already have an account ?  <NavLink class="link" to="/login">Sign in   </NavLink> </h4>
            </div>
        </div>
        

        
    )
}
export default Register;