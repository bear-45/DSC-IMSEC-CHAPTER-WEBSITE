import React from "react";
import {NavLink} from "react-router-dom";

const Login=()=>{
return(
    <div class="container px-4">
  <div class="row gx-5">
    <div class="col">
    {/* div1 */}
     <div class="p-3 border bg-light ">
     <div className="leftside">
            <div className="box-1">
                <div className="box-1-2 ">
                <h1>DSC IMSEC</h1>
                <p>Join the community to learn,compete and share resources.</p>
                <h5>Already have an account? <NavLink to="/sign" className="btn-get-started">Sign In</NavLink></h5>
                </div>
            </div>
        </div>
    </div>
    </div>
    {/* div2 */}
    <div class="col ">
      <div class="p-3 border bg-light bg-bs-purple">
      <div class="input-group mb-3 my-5" >
  <span class="input-group-text" id="basic-addon1">@</span>
  <input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1"/>
</div>

<div class="input-group mb-3 my-5">
  <input type="text" class="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
  <span class="input-group-text" id="basic-addon2">@example.com</span>
</div>
  <div class="row mb-3 my-5">
    <label for="inputPassword3" class="col-sm-2 col-form-label">Password</label>
    <div class="col-sm-10">
      <input type="password" class="form-control" id="inputPassword3"/>
    </div>
  </div>
  <div class="row mb-3 my-5">
    <label for="confirmPassword3" class="col-sm-2 col-form-label">Confirm Password</label>
    <div class="col-sm-10">
      <input type="password" class="form-control" id="confirmPassword3"/>
    </div>
  </div>
  <div class="col-12 my-5">
    <div class="form-check">
      <input class="form-check-input" type="checkbox" id="inlineFormCheck"/>
      <label class="form-check-label" for="inlineFormCheck">
        Remember me
      </label>
    </div>
  </div>
  <div class="col-12 my-5">
    <button class="btn btn-primary my-2" type="submit">Sign Up</button>
  </div>
      </div>
    </div>
  </div>
</div>
)
}

export default Login;