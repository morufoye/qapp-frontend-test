import React, {Fragment, useState} from "react";

// import Components
import AuthResetPasswordForm from "../../components/forms/AuthResetPasswordForm";
import AuthNewPasswordForm from "../../components/forms/AuthNewPasswordForm";
import AuthOTPForm from "../../components/forms/AuthOTPForm";

// import Module Styles
import styles from "../../styles/auth.module.css";

const ResetPassword = () => {
  const [showToken, setShowToken] = useState(false);

  return (
    <Fragment>
      <div className={styles.authFormWrapper}>
        <div className='container-fluid'>
          <div className='row'>
            <div className='offset-lg-4 col-lg-4'>
              <div className={styles["authForm"]}>
                <div className={styles["authTop"]}>
                  <h2>Reset Password</h2>
                  <p className='text-center'>
                    Enter the email or phone number associated with your account
                    to reset your password
                  </p>
                </div>
                {/*<AuthOTPForm />*/}
                 <AuthResetPasswordForm />
                {/* <AuthNewPasswordForm /> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default ResetPassword;
