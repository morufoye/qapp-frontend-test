import React, {Fragment, useState} from "react";

// import Components
import AuthResetPasswordForm from "../../components/forms/AuthResetPasswordForm";
import AuthNewPasswordForm from "../../components/forms/AuthNewPasswordForm";
import AuthOTPForm from "../../components/forms/AuthOTPForm";

// import Module Styles
import styles from "../../styles/auth.module.css";

const ResetPassword = () => {
  const [showToken, setShowToken] = useState(false);
  const [showEmailInputer, setShowEmailInputer] = useState(true);
  const[showAuthResetPasswordForm, setShowAuthResetPasswordForm] = useState(false)
  const[showAuthNewPasswordForm, setShowAuthNewPasswordForm] = useState(false)

  const showTokenInputer = () => {
    setShowEmailInputer(false)
    setShowToken(true)
  }

  const handleTokenResponse = (response) => {
    if (response === "success") {
      setShowToken(false)
      setShowAuthNewPasswordForm(true)
    }
  }

  return (
    <Fragment>
      <div className={styles.authFormWrapper}>
        <div className='container-fluid'>
          <div className='row'>
            <div className='offset-lg-4 col-lg-4'>
              <div className={styles["authForm"]}>

                { showEmailInputer &&
                    <>
                  <div className={styles["authTop"]}>
                  <h2>Reset Password</h2>
                  <p className='text-center'>
                    Enter the email or phone number889  associated with your account
                    to reset your password
                  </p>
                </div>
                 <AuthResetPasswordForm  showTokenInputer={showTokenInputer}/>
                    </>
                }

                {   showToken &&
              <div className={styles["authTop"]}>
                <AuthOTPForm  handleTokenResponse={handleTokenResponse} type="others"/>
              </div>
                }

                {  showAuthNewPasswordForm && <AuthNewPasswordForm/>}

              </div>
              </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
{/*<AuthOTPForm />*/}
export default ResetPassword;
