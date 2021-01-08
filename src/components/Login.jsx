import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";
import "././css/login.css";
import Sign from "../components/signin"

class Login extends Component {
  constructor() {
    super()
    this.state = {
      name: "",
      email: "",
      password: "",
      cpassword: "",
      remember: ""
    }
    this.changeName = this.changeName.bind(this)
    this.changeEmail = this.changeEmail.bind(this)
    this.changePassword = this.changePassword.bind(this)
    this.changeCpassword = this.changeCpassword.bind(this)
    this.changeRemember = this.changeRemember.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }
  changeName(e) {
    document.getElementById('label1').innerHTML = "";
    document.getElementById('label2').innerHTML = "";
    document.getElementById('label3').innerHTML = "";
    document.getElementById('label4').innerHTML = "";
    this.setState({
      name: e.target.value
    })
  }
  changeEmail(e) {
    document.getElementById('label1').innerHTML = "";
    document.getElementById('label2').innerHTML = "";
    document.getElementById('label3').innerHTML = "";
    document.getElementById('label4').innerHTML = "";
    this.setState({
      email: e.target.value
    })
  }
  changePassword(e) {

    document.getElementById('label1').innerHTML = "";
    document.getElementById('label2').innerHTML = "";
    document.getElementById('label3').innerHTML = "";
    document.getElementById('label4').innerHTML = "";
    this.setState({
      password: e.target.value
    })
  }
  changeCpassword(e) {
    document.getElementById('label1').innerHTML = "";
    document.getElementById('label2').innerHTML = "";
    document.getElementById('label3').innerHTML = "";
    document.getElementById('label4').innerHTML = "";
    this.setState({
      cpassword: e.target.value
    })
    // console.log(e.target.value)
  }
  changeRemember(e) {
    this.setState({
      remember: e.target.value
    })
    // console.log(e.target.value)

  }
  async onSubmit(event) {
    event.preventDefault();
    const registered = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      cpassword: this.state.cpassword,
      remember: this.state.remember
    }
    if (registered.name === "") {
      document.getElementById('label1').innerHTML = "Can't be empty"
    }
    else if (registered.email === "") {
      document.getElementById('label2').innerHTML = "Can't be empty"
    }
    else if (registered.password === "") {
      document.getElementById('label3').innerHTML = "Can't be empty"
    }
    else if (registered.cpassword === "") {
      document.getElementById('label4').innerHTML = "Can't be empty"
    }
    else if (registered.password.length < 6) {
      document.getElementById("label3").innerHTML = "Password must be 6 char long";
      this.setState({
        password: "",
        cpassword: ""
      })

    }
    else if (registered.password != registered.cpassword) {
      document.getElementById("label4").innerHTML = "Pass must be same"
      this.setState({
        cpassword: ""
      })
    }
    else if (registered.email !== "") {
      if (!(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(registered.email))) {
        document.getElementById("label2").innerHTML = "Invalid Email";
        this.setState({
          email: "",
          password: "",
          cpassword: ""
        })
      }
      else {
        const res = await axios.post("http://localhost:3001/login", registered);
        if (res.data == "no") {
          document.getElementById("label2").innerHTML = "email already taken";
          this.setState({
            email: "",
            password: "",
            cpassword: ""
          })
        }
        else{
        this.setState({
          name: "",
          email: "",
          password: "",
          cpassword: "",
          remember: ""
        })
      }
    }

    }

  }

  render() {
    return (
      <>
        <div className="container px-4">
          <div className="row gx-5">
            {/* div2 */}

            <div className="col-lg-6 col-md-6 col-sm-6 my-5 bg-dark"  style={{border:"2px solid blue", fontSize:"20px"}}>
              <form onSubmit={this.onSubmit} >
                <div className="p-2 text-primary mx-5"  >
                  <div className="input-group  mt-5 mb-4" >
                    <span className="input-group-text" id="basic-addon1">@</span>
                    <input type="text" className="form-control" placeholder="Username" aria-label="Username" onChange={this.changeName} onClick={this.changeName} value={this.state.name} aria-describedby="basic-addon1" />
                  </div>
                  <label id="label1" style={{ fontSize: "18px" }}></label>
                  <div className="input-group">
                    <input type="text" className="form-control" placeholder="Recipient's username" aria-label="Recipient's username" onClick={this.changeEmail} onChange={this.changeEmail} value={this.state.email} aria-describedby="basic-addon2" />
                    <span className="input-group-text" id="basic-addon2">@example.com</span>

                  </div>
                  <label id="label2" style={{ fontSize: "18px" }}></label>
                  <div className="row mb-2">
                    <label for="inputPassword3" class="col-sm-2 col-form-label">Password</label>
                    <div className="col-12">
                      <input type="password" class="form-control" onChange={this.changePassword} onClick={this.changePassword} value={this.state.password} id="inputPassword3" />

                    </div>
                  </div>
                  <label id="label3" style={{ fontSize: "18px" }}></label>
                  <div className="row mb-2">
                    <label for="confirmPassword3" class="col-sm-5 col-form-label">Confirm Password</label>
                    <div className="col-12">
                      <input type="password" class="form-control" onChange={this.changeCpassword} onClick={this.changeCpassword} value={this.state.cpassword} id="confirmPassword3" />
                    </div>
                  </div>
                  <label id="label4" style={{ fontSize: "18px" }}></label>
                  <div className="col-12 mb-2">
                    {/* <div className="form-check">
                      <input className="form-check-input" type="checkbox" onChange={this.changeRemember} value={this.state.remember} id="inlineFormCheck" />
                      <label className="form-check-label" for="inlineFormCheck">
                        Remember me
      </label>

                    </div> */}
                  </div>
                  <div className="col-12 my-5">
                    <button className="btn btn-primary  mb-4" type="submit">Sign Up</button>
                  </div>
                </div>
              </form>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-6  my-5 bg-dark p-5" style={{ border: "2px solid blue", fontSize: "20px",height:"82vh" }} >
              {/* div1 */}
              <Sign/>
              {/* <div className="p-3  bg-danger text-white h-100">
                <div className="leftside ">
                  <div className="box-1">
                    <div className="box-1-2 d-flex text-align-center justify-content-center flex-column">
                      <h1>DSC IMSEC</h1>
                      <p>Join the community to learn,compete and share resources.Your membership application has been processed,
                      and we are glad to welcome you into the organization.We always welcome new members to the club, and are pleased to have you with us. We want you to feel like a part of the group.</p>
                      <h5>Already have an account? <NavLink to="/sign" className="btn-get-started">Sign In</NavLink></h5>
                    </div>
                  </div>
                </div>
              </div> */}
            </div>

          </div>
        </div>
      </>
    )
  }
}

export default Login;