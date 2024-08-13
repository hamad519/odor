import React from 'react';
import { Link } from 'react-router-dom';

function RegisterForm() {
    return (
        <>
            <section className="login-area pt-130 pb-130">
                <div className="container">
                    <div className="login__item">
                        <div className="row g-4">
                            <div className="col-xxl-8">
                                <div className="login__image">
                                    <img src="src/assets/images/register/res-image1.jpg" alt="Register" />
                                    <div className="btn-wrp">
                                        <Link to="/login">Sign In</Link>
                                        <Link className="active" to="/register">Create Account</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xxl-4">
                                <div className="login__content">
                                    <h2 className="text-white mb-65">Create Account</h2>
                                    <div className="form-area login__form">
                                        <form action="#0">
                                            <input type="text" placeholder="User Name" />
                                            <input className="mt-30" type="email" placeholder="Email" />
                                            <input className="mt-30" type="password" placeholder="Enter Password" />
                                            <input className="mt-30" type="password" placeholder="Enter Confirm Password" />
                                            <button className="mt-30">Create Account</button>
                                            <div className="radio-btn mt-30">
                                                <span></span>
                                                <p>I accept your terms & conditions</p>
                                            </div>
                                        </form>
                                        <span className="or pt-30 pb-40">OR</span>
                                    </div>
                                    <div className="login__with">
                                        <Link to="#0"><img src="src/assets/images/icon/google.svg" alt="Google" /> Continue with Google</Link>
                                        <Link className="mt-15" to="#0"><img src="src/assets/images/icon/facebook.svg" alt="Facebook" /> Continue with Facebook</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default RegisterForm;
