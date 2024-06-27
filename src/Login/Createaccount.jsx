import React from "react";
import Loginbg from "../assets/images/Rajclassy logo.png";
import Logo from "../assets/images/Rajclassy.png";
import './Login.css';
import { Link } from 'react-router-dom';

function Createaccount() {
    return (
        <div className="Login">
            <section className="Login-section vh-100">
                <div className="container h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col col-xl-12">
                            <div className="Login-card" style={{ borderRadius: '1rem' }}>
                                <div className="row g-0 pt-2 pb-2">
                                    <div className="col-md-6 col-lg-6 d-none d-md-block">
                                        <div className="Login-img" >
                                            <img src={Loginbg} alt="login form" className="img-fluid" style={{ borderRadius: '1rem 0 0 1rem' }} />
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-lg-6 d-flex align-items-center">
                                        <div className="card-body ps-4 pe-4 text-black">
                                            <form>
                                                <div className="d-flex align-items-center mb-3 pb-1">
                                                    {/* <i className="fas fa-cubes fa-2x me-3" style="color: #ff6219;"></i> */}
                                                    <span className="h1 fw-bold mb-0"><img src={Logo} alt="logo" className="logo-icon" /></span>
                                                </div>

                                                <h3 className=" login-head" style={{ letterSpacing: '1px' }}>Shopping starts here 🚀</h3>

                                                {/* <h5 className="fw-normal mb-3 pb-3" style={{ letterSpacing: '1px' }}>Please sign in to your account and start the adventure</h5> */}

                                                <div className="form-outline mb-4">
                                                    <label className="form-label" htmlFor="form2Example17">Username</label>
                                                    <input type="email" id="form2Example17" className="form-control form-control-lg" placeholder="john.doe" />
                                                </div>

                                                <div className="form-outline mb-4">
                                                    <label className="form-label" htmlFor="form2Example27">Email</label>
                                                    <input type="password" id="form2Example27" className="form-control form-control-lg" placeholder="john.doe@gmail.com" />
                                                </div>

                                                <div className="form-outline mb-4">
                                                    <label className="form-label" htmlFor="form2Example27">Password</label>
                                                    <input type="password" id="form2Example27" className="form-control form-control-lg" placeholder="*******" />
                                                </div>

                                                <div className="form-check d-flex justify-content-start mb-4">
                                                    <input className="form-check-input me-2" type="checkbox" value="" id="form2Example3" defaultChecked />
                                                    <label className="form-check-label" htmlFor="form2Example3">
                                                        I agree to <span style={{ color: '#7367f0', textDecoration: 'none', fontWeight: 'bold' }}> privacy policy & terms </span>
                                                    </label>
                                                </div>

                                                <div className="pt-1 mb-4">
                                                    <Link to="/" className="btn custom-login-btn btn-lg btn-block" type="button">Sign up</Link>
                                                    {/* <button className="btn custom-login-btn btn-lg btn-block" type="button">Sign In</button> */}
                                                </div>
                                                <p style={{ color: '#393f81', textAlign: 'center' }}>Already have an account?
                                                    <Link to="/login" style={{ color: '#7367f0', textDecoration: 'none', fontWeight: 'bold' }}> Sign in instead </Link></p>

                                                {/* <a className="small text-muted" href="#!">Forgot password?</a>
                                                
                                                <a href="#!" className="small text-muted">Terms of use.</a>
                                                <a href="#!" className="small text-muted">Privacy policy</a> */}
                                            </form>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Createaccount;