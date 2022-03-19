import React, {Fragment} from "react";

// import Components
import AuthRegisterForm from "../../components/forms/AuthRegisterForm";

// import Module Styles
import styles from "../../styles/auth.module.css";

const Register = () => {
  return (
    <Fragment>
      <div className={styles.authFormWrapper}>
        <div className='container-fluid'>
          <div className='row'>
            <div className='offset-lg-4 col-lg-4'>
              <div className={styles["authForm"]}>
                <div className={styles["authTop"]}>
                  <h2>Sign Up</h2>
                  <p className='text-center'>
                    Lorem ipsum is placeholder text commonly used in the
                    graphic, print, and publishing industries for previewing
                    layouts and visual mockups
                  </p>
                  {/* <div className={styles["authTabs"]}>
                    <Link className={styles["active"]} to='/'>
                      Phone number
                    </Link>
                    <Link className={styles[""]} to='/'>
                      Email address
                    </Link>
                  </div> */}
                </div>
                <AuthRegisterForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Register;
