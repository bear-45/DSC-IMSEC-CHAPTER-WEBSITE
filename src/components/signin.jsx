import React, { Component } from "react";
import '../components/css/Signin.css';
import axios from "axios"

class Login extends Component {
  constructor() {
    super()
    this.state = {
      email: "",
      password: ""
    }
    this.changeEmail = this.changeEmail.bind(this)
    this.changePassword = this.changePassword.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }
  changeEmail(e) {
    document.getElementById('label5').innerHTML = "";
    document.getElementById("label6").innerHTML = "";
    this.setState({
      email: e.target.value
    })
  }
  changePassword(e) {
    document.getElementById("label5").innerHTML = "";
    document.getElementById("label6").innerHTML = "";
    this.setState({
      password: e.target.value
    })
  }
  async onSubmit(event) {
    event.preventDefault();
    const login = {
      email: this.state.email,
      password: this.state.password
    }
    console.log(login)
    if (login.email === "") {
      document.getElementById('label5').innerHTML = "Can't empty";
      this.setState({
        password: ""
      })

    }
    else if (login.password === "") {
      document.getElementById('label6').innerHTML = "Can't empty";
    }
    else {
      let res = await axios.post("http://localhost:3001/sign", login);
      console.log(res.data);
      if (res.data === "yn") {
        this.setState({
          email: "",
          password: ""
        })
        document.getElementById('label5').innerHTML = "User not found";
      }
      else if (res.data === "yes") {
        this.setState({
          email: "",
          password: ""
        })
        window.location.href = "/";

      }
      else {
        this.setState({
          password: ""
        })
        document.getElementById('label6').innerHTML = "Invalid password";

      }
    }

  }

  render() {
    return (
      <>
        {/* <div className="sign " > */}
        <form onSubmit={this.onSubmit} >
          <div className="form text-primary p-5 mt-5 mx-5 " >
            <div className="form-group" >
              <label for="exampleFormControlInput1">Email</label>
              <input type="email" class="form-control" id="exampleFormControlInput1" name="email" onClick={this.changeEmail} onChange={this.changeEmail} value={this.state.email} placeholder="Enter Your Email" />
              <label id="label5" style={{ color: "red" }}></label>
            </div>

            <div className="form-group">
              <label for="exampleFormControlInput1">Password</label>
              <input type="password" class="form-control" id="exampleFormControlInput1" onClick={this.changePassword} onChange={this.changePassword} value={this.state.password} name="password" placeholder="password" />
              <label id="label6" style={{ color: "red" }}></label>
            </div>
            <button className="btn btn-primary" type="submit">Login</button>
          </div>
        </form>
        {/* </div> */}
      </>
    )
  }
}
export default Login;