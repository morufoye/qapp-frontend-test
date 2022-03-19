import React, {Fragment, useState} from "react";
import {Link} from "react-router-dom";

// import Components
import AuthLoginForm from "../../components/forms/AuthLoginForm";

// import Module Styles
import styles from "../../styles/auth.module.css";
import AuthOTPForm from "../../components/forms/AuthOTPForm";

const Login = () => {

  return (
    <Fragment>
      <div className={styles.authFormWrapper}>
        <div className='container-fluid'>
          <div className='row'>
            <div className='offset-lg-4 col-lg-4'>
              <div className={styles["authForm"]}>
                <div className={styles["authTop"]}>
                  <h2>Login</h2>
                  <div className={styles["authTabs"]}>
                    <Link className={styles["active"]} to='/'>
                      Phone number
                    </Link>
                    <Link className={styles[""]} to='/'>
                      Email address
                    </Link>
                  </div>
                </div>
                <AuthLoginForm />
              </div>
            </div>
          </div>
        </div>
      </div>

    </Fragment>
  );
};

export default Login;
