import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
const Register = () => {
  const [Name, setName] = useState('');
  const [Email, setEmail] = useState('');
  const [Phone, setPhone] = useState('');
  const [Password, setPassword] = useState('');
  let navigate = useNavigate();

  const Register = () => {
    axios.post('/reg', {
      userName : Name,
      userEmail : Email,
      userPhone : Phone,
      userPassword : Password
    }).then((response) => {
      console.log(response.data.message);
      if(response.data.error){
        alert(response.data.error);
      } else{
       // localStorage.setItem("userToken", response.data);
        navigate("/")
      }
    })
  }

  return (

    <div>
      <form>
      <section className="vh-100" style={{backgroundColor: '#eee'}}>
        <div className="container h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-lg-12 col-xl-11">
              <div className="card text-black" style={{borderRadius: '25px'}}>
                <div className="card-body p-md-5">
                  <div className="row justify-content-center">
                    <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                      <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>
                      <form className="mx-1 mx-md-4">
                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-user fa-lg me-3 fa-fw" />
                          <div className="form-outline flex-fill mb-0">
                            <input onChange={(e) => {setName(e.target.value)}} type="text" id="form3Example1c" className="form-control" />
                            <label className="form-label" htmlFor="form3Example1c">Your Name</label>
                          </div>
                        </div>
                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-envelope fa-lg me-3 fa-fw" />
                          <div className="form-outline flex-fill mb-0">
                            <input onChange={(e) => {setEmail(e.target.value)}} type="email" id="form3Example3c" className="form-control" />
                            <label className="form-label" htmlFor="form3Example3c">Your Email</label>
                          </div>
                        </div>
                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-lock fa-lg me-3 fa-fw" />
                          <div className="form-outline flex-fill mb-0">
                            <input onChange={(e) => {setPhone(e.target.value)}} type="tel" id="form3Example4c" className="form-control" />
                            <label className="form-label" htmlFor="form3Example4c">Mobile</label>
                          </div>
                        </div>
                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-key fa-lg me-3 fa-fw" />
                          <div className="form-outline flex-fill mb-0">
                            <input onChange={(e) => {setPassword(e.target.value)}} type="password" id="form3Example4cd" className="form-control" />
                            <label className="form-label" htmlFor="form3Example4cd">Password</label>
                          </div>
                        </div>
                        
                        <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                          <button onClick={Register} type="button" className="btn btn-primary btn-lg">Register</button>
                        </div>
                      </form>
                    </div>
                    <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                      <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp" className="img-fluid" alt="Sample image" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      </form>
    </div>
  )
}

export default Register
