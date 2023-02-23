import React, { useState, useContext } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Loader from '../../utils/loader';
import { Session } from '../../App';


function Login() {
  // console.log('NAMA', useContext(UserContext.nama))
  const user_context = useContext(Session)
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  const [status, setStatus] = useState('200');
  const [passwordType, setPasswordType] = useState("password");

  //show hide passowrd
  const togglePassword = () => {
    if (passwordType === "password") {
      setPasswordType("text")
      return;
    }
    setPasswordType("password")
  }


  const navigate = useNavigate();
  const login = async (e) => {

    e.preventDefault();
    try {

      const res = await axios.post(process.env.REACT_APP_API_URL + 'user/login', {
        userid: user,
        password: password,
      });
      user_context.name = res.data.values.userID
      user_context.isLogin = res.data.values.isLogin
      setStatus(res.data.status_code)
      localStorage.setItem('user', res.data.values.userID)
      navigate('/home');
    } catch (error) {
      if (error.response) {
        document.getElementById("alert").innerHTML = error.response.data.message
        document.getElementById("alert").classList.add("alert")
        document.getElementById("alert").classList.add("alert-danger")
        setStatus('200')

      }
    }
  };
  return (
    <div className='h-100 d-flex align-items-center justify-content-center'>
      <section>
        <div className="container mt-5 px-4 py-5 px-md-5 text-center text-lg-start">
          {/* <h1
            className="fw-bold ls-tight logo-mobile"
            style={{ color: 'hsl(218, 81%, 95%)' }}
          >
            PERTAMINA <br />
            <span style={{ color: 'hsl(354, 85%, 52%, 1)' }}>PHE TEJ</span>
          </h1> */}
          <div className="row gx-lg-5 align-items-center mb-5">
            <div className="col-lg-12 mb-5 mb-lg-0 intro d-flex justify-content-between" style={{ zIndex: 10 }}>
              <h1
                className=" display-5 fw-bold ls-tight"
                style={{ color: 'hsl(218, 81%, 95%)' }}
              >
                PERTAMINA
              </h1>
              <h1 className="mx-2 display-5 fw-bold ls-tight"><span style={{ color: 'hsl(354, 85%, 52%, 1)' }}>PHE TEJ</span></h1>
            </div>
          </div>
          <div className="row gx-lg-5 align-items-center mb-5">
            <div className="col-lg-12 mb-3 mb-lg-0 position-relative">
              <div className="card bg-glass opacity-75">
                <div className="card-body px-4 py-5 px-md-5">
                  <form className="mb-3" onSubmit={login}>
                    {/* //   <!-- Email input --> */}
                    <div className="form-floating mb-4">
                      {/* <label className="form-label" for="form3Example3">
                        Username
                      </label> */}

                      <input
                        type="text"
                        id="form3Example3"
                        placeholder="Username"
                        className="form-control border border-primary"
                        value={user}
                        onChange={(e) => setUser(e.target.value)}
                      />
                      <label >Username</label>
                    </div>

                    {/* //   <!-- Password input --> */}
                    <div className='input-group mb-4 border border-primary'>
                      <div className="form-floating ">
                        {/* <label className="form-label" for="form3Example4">
                        Password
                      </label> */}


                        <input
                          type={passwordType}
                          id="form3Example4"
                          placeholder="Password"
                          className="form-control border-0"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                        />
                        <label >Password</label>
                      </div>
                      <span className='input-group-text bg-white border-0 togglr-password' onClick={togglePassword}>{passwordType === "password" ? 'Show' : 'Hide'}</span>
                    </div>




                    {/* //   <!-- Checkbox --> */}
                    {/* <div className="form-check d-flex justify-content-start mb-4">
                      <input
                        className="form-check-input me-2"
                        type="checkbox"
                        value=""
                        id="form2Example33"
                        checked
                      />
                      <label className="form-check-label" for="form2Example33">
                        Remember me
                      </label>
                    </div> */}

                    {/* //   <!-- Submit button --> */}
                    <button
                      type="submit"
                      className="btn btn-primary btn-block w-100 rounded-pill"
                      onClick={() => setStatus('')}>
                      {status === '' ? <Loader /> : 'Sign in'}
                    </button>
                  </form>
                  <div className='mb-4' id='alert'>

                  </div>
                  {/* <div className="d-flex justify-content-center align-items-center">
                    <span className="text-black opacity-100">
                      Don't have an account?
                    </span>
                    <button className="btn text-primary opacity-100">
                      Sign up
                    </button>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Login;
