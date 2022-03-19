import React, {Fragment, useState} from "react";
import "../../styles/form.css";
import AuthOTPForm from "./AuthOTPForm";
import AuthNewPasswordForm from "./AuthNewPasswordForm";

const AuthResetPasswordForm = (props) => {

  const[showAuthResetPasswordForm, setShowAuthResetPasswordForm] = useState(false)
  const[showAuthNewPasswordForm, setShowAuthNewPasswordForm] = useState(false)
  const[showInitial, setShowInitial] = useState(true)


  const showGetOTPForm = () => {
   props.showTokenInputer()
  }

  const handleTokenResponse = (response) => {
    if (response === "success") {
      setShowInitial(false)
      setShowAuthResetPasswordForm(false)
      setShowAuthNewPasswordForm(true)
    }
  }

  return (
    <Fragment>
      <form>
        <div className='formWrapper'>
          <div className='form-group row'>
            <div className='col-lg-12 col-md-12 col-sm-12 px-0'>
              <input
                name=''
                type='text'
                className='form-control'
                placeholder='Phone or Email Address'
              />
            </div>
          </div>

          <div className='form-group row'>
            <div className='col-lg-12 col-md-12 col-sm-12 px-0'>
              <button
                  type='button'
                  className='authBtn'
                  onClick={showGetOTPForm}
              >
                Get OTP
              </button>
            </div>
          </div>
        </div>
      </form>
    </Fragment>
  );
};
export default AuthResetPasswordForm;
