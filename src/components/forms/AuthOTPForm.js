import React, {Fragment} from "react";
import "../../styles/form.css";
import styles from "../../styles/auth.module.css";

const AuthOTPForm = (props) => {

  const handleTokenResponse = () => {
    props.handleTokenResponse("success")
  }

  return (
    <Fragment>
      <form>
        <div className='formWrapper'>

          <div className={styles["authTop"]}>
            <h2></h2>
            <p className='text-center'>
              Please enter the OTP sent to your Email address and/or Phone Number
            </p>
          </div>

          <div className='form-group row'>
            { props.type === 'register'  &&
                   <>
                <div className='col-lg-12 col-md-12 col-sm-12 px-0'>
                  <input
                      name=''
                      type='text'
                      className='form-control'
                      placeholder='Phone OTP'
                  />
                </div>

              <div className='col-lg-12 col-md-12 col-sm-12 px-0'>
              <input
              name=''
              type='text'
              className='form-control'
              placeholder='Email OTP'
              />
              </div>
                   </>
            }

            {props.type === 'others' &&
                <div className='col-lg-12 col-md-12 col-sm-12 px-0'>
                  <input
                      name=''
                      type='text'
                      className='form-control'
                      placeholder='OTP'
                  />
                </div>
            }

          </div>

          <div className='form-group row'>
            <div className='col-lg-12 col-md-12 col-sm-12 px-0'>
              <button
                  type='button'
                  className='authBtn'
                  onClick={handleTokenResponse}
              >
                Verify
              </button>
            </div>
          </div>
        </div>
      </form>
    </Fragment>
  );
};
export default AuthOTPForm;
