import React from "react"
import {NavLink} from "react-router-dom";
import './Login.css';


const Login=()=>{
    return(
        <div className="row no-gutters">
        <div className="col-md-6 no-gutters">
            <div className="leftside">
            <div className="box-1">
                <div className="box-1-2">
                <h1>DSC IMSEC</h1>
                <p>Join the community to learn,compete and share resources.</p>
                <h5>Already have an account? <NavLink to="/sign" className="btn-get-started">Sign In</NavLink></h5>
                </div>
            </div>
            </div>
        </div>
        <div className="col-md-6 no-gutters">
            <div className="rightside">
            <div className="box-2">
            <div className="my-5">
        <h1 className="text-center">Sign Up</h1>
    </div>
    <div className="container contact_div">
        <div className="row">
            <div className="col-md-6 col-10 mx-auto">
            <form>
  
  <div class="form-group">
    <label for="exampleFormControlInput1">User Name</label>
    <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Enter Your Name"/>
  </div>
  <div class="form-group">
    <label for="exampleFormControlInput1">Email address</label>
    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
  </div>
  
  <div class="form-group">
    <label for="exampleFormControlInput1">Password</label>
    <input type="password" class="form-control" id="exampleFormControlInput1" placeholder="password"/>
  </div>
  <div class="form-group">
    <label for="exampleFormControlInput1">Confirm Password</label>
    <input type="password" class="form-control" id="exampleFormControlInput1" placeholder="password"/>
  </div>
  <button class="btn btn-primary" type="submit">Sign Up</button>
</form>
            </div>
        </div>

    </div>
            </div>
            </div>
        </div>

        </div>

    )
};

export default Login;