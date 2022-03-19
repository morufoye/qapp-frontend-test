import React, {Fragment, useState} from "react";
import {Link} from "react-router-dom";
import "../../styles/form.css";
import AuthResetPasswordForm from "./AuthResetPasswordForm";
import AuthOTPForm from "./AuthOTPForm";

const AuthRegisterForm = () => {

  const[showAuthResetPasswordForm, setShowAuthResetPasswordForm] = useState(false)

  const showGetOTPForm = () => {
    setShowAuthResetPasswordForm(true)
  }

  return (
    <Fragment>
      { !showAuthResetPasswordForm &&
      <form>
        <div className='formWrapper'>
          <div className='row px-0'>
            <div className='col-lg-6 col-md-6 col-sm-12'>
              <input
                name=''
                type='text'
                className='form-control'
                placeholder='First Name'
              />
            </div>

            <div className='col-lg-6 col-md-6 col-sm-12'>
              <input
                name=''
                type='text'
                className='form-control'
                placeholder='Last Name'
              />
            </div>
          </div>

          <div className='row px-0'>
            <div className='col-lg-3 col-md-4 col-sm-12 '>
              <input
                name=''
                type='text'
                className='form-control no-border-right'
                placeholder='234'
                disabled
              />
            </div>
            <div className='col-lg-9 col-md-8 col-sm-12'>
              <input
                name=''
                type='text'
                className='form-control no-border-left'
                placeholder='Phone Number'
              />
            </div>
          </div>

          <div className='row px-0'>
            <div className='col-lg-12 col-md-12 col-sm-12'>
              <input
                name=''
                type='text'
                className='form-control'
                placeholder='Email Address'
              />
            </div>
          </div>

          <div className='row px-0'>
            <div className='col-lg-6 col-md-12 col-sm-12'>
              <input
                name=''
                type='password'
                className='form-control'
                placeholder='Password'
              />
            </div>

            <div className='col-lg-6 col-md-12 col-sm-12'>
              <input
                name=''
                type='password'
                className='form-control'
                placeholder='Confirm Password'
              />
            </div>
          </div>

          <div className='row px-0'>
            <div className='col-lg-12 col-md-12 col-sm-12'>
              <input
                name=''
                type='text'
                className='form-control'
                placeholder='Referral Code (Optional)'
              />
            </div>
          </div>

          <div className='row'>
            <div className='col-lg-12 col-md-12 col-sm-12'>
              <button
                  type='button'
                  className='authBtn'
                  onClick={showGetOTPForm}
              >
                Sign Up
              </button>
            </div>
            <div className='col-lg-12 col-md-6 col-sm-12'>
              {/*<p className='authTextFooter'>*/}
              {/*  Don’t have an account?{" "}*/}
              {/*  <Link className='theme' to='/'>*/}
              {/*    {" "}*/}
              {/*    Sign Up*/}
              {/*  </Link>*/}
              {/*</p>*/}
            </div>
          </div>
        </div>
      </form>
      }



      {
        showAuthResetPasswordForm && <AuthOTPForm type="register"/>
      }
    </Fragment>
  );
};
export default AuthRegisterForm;
