import React, {Fragment, useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import "../../styles/form.css";
import AuthOTPForm from "./AuthOTPForm";

const AuthLoginForm = (props) => {


 const showTokenForm = () => {
   props.showTokenForm()
 }

  return (
    <Fragment>

      <form>
        <div className='formWrapper'>
          <div className='form-group row'>
            <div className='col-lg-3 col-md-4 col-sm-12 px-0'>
              <div className='me-1'>
                <input
                  name=''
                  type='text'
                  className='form-control no-border-right'
                  placeholder='234'
                  disabled
                />
              </div>
            </div>
            <div className='col-lg-9 col-md-8 col-sm-12 px-0'>
              <input
                name=''
                type='text'
                className='form-control no-border-left'
                placeholder='Phone Number'
              />
            </div>
          </div>

          <div className='form-group row'>
            <div className='col-lg-12 col-md-12 col-sm-12 px-0'>
              <input
                name=''
                type='password'
                className='form-control'
                placeholder='Password'
              />
            </div>
            <div className='col-lg-12 col-md-12 col-sm-12 px-0'>
              <Link className='forgetPassword' to='/auth/resetpassword/new'>
                Forgot Password?
              </Link>
            </div>
          </div>

          <div className='form-group row'>
            <div className='col-lg-12 col-md-12 col-sm-12 px-0'>
              <button
                  type='button'
                  className='authBtn'
                  onClick={showTokenForm}
              >
                Sign In
              </button>
            </div>
            <div className='col-lg-12 col-md-6 col-sm-12 px-0'>
              <p className='authTextFooter'>
                Don’t have an account?{" "}
                <Link className='theme' to='/auth/register'>
                  {" "}
                  Sign Up
                </Link>
              </p>
            </div>
          </div>
        </div>
      </form>
    </Fragment>
  );
};
export default AuthLoginForm;
