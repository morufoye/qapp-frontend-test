import React, {Fragment} from "react";
import "../../styles/form.css";

const AuthNewPasswordForm = () => {
  return (
    <Fragment>
      <form>
        <div className='formWrapper'>
          <div className='form-group row'>
            <div className='col-lg-12 col-md-12 col-sm-12 px-0'>
              <input
                name=''
                type='password'
                className='form-control'
                placeholder='New Password'
              />
            </div>
          </div>

          <div className='form-group row'>
            <div className='col-lg-12 col-md-12 col-sm-12 px-0'>
              <input
                name=''
                type='password'
                className='form-control'
                placeholder='Confirm New Password'
              />
            </div>
          </div>

          <div className='form-group row'>
            <div className='col-lg-12 col-md-12 col-sm-12 px-0'>
              <button type='button' className='authBtn'>
                Submit
              </button>
            </div>
          </div>
        </div>
      </form>
    </Fragment>
  );
};
export default AuthNewPasswordForm;
