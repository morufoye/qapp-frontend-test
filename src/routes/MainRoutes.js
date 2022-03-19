import React, {Fragment} from "react";
import {Route, Routes} from "react-router-dom";
import Homepage from "../sitemaps/main/Homepage";

import {Login, Register, ResetPassword} from "../sitemaps/auth";

const MainRoutes = () => {
  return (
    <Fragment>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/auth/login' element={<Login />} />
        <Route path='/auth/register' element={<Register />} />
        <Route path='/auth/resetpassword/new' element={<ResetPassword />} />
      </Routes>
    </Fragment>
  );
};
export default MainRoutes;
