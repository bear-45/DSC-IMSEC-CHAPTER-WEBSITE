import React from "react";
import './Signin.css';



const Login=()=>{
    return (
        <div class="sign">
    <form>
  <div class="form-group">
    <label for="exampleFormControlInput1">User Name</label>
    <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Enter Your Name"/>
  </div>
  
  <div class="form-group">
    <label for="exampleFormControlInput1">Password</label>
    <input type="password" class="form-control" id="exampleFormControlInput1" placeholder="password"/>
  </div>
  <button class="btn btn-primary" type="submit">Login</button>
</form>
        </div>
    )
}
export default Login;