import React, { useContext, useReducer } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import { AuthReducer, initialAuthState } from "../reducers/authReducer";
import { AuthContext } from "../contexts/authContext";

import { firebaseContext } from "../contexts/firebaseContext";
import { Roles } from "../constants/roles";
import Login from "../pages/Login";
import Home from "../pages/Home";
import SignUp from "../pages/SignUp";
import CheckOrder from "../pages/CheckOrder";
import Services from "../pages/Services";
import Locker from "../pages/Locker";
import { ResetPassword } from "../pages/ResetPassword";
import Administrator from "../pages/Administrator";
import { User } from "../pages/User";
// import AddUser from "../components/addUser";
import AddOrder from "../components/addOrder";
import UsersTable from "../components/UsersTable";

export const AppRouter = () => {
  const { auth } = useContext(firebaseContext);
  const [Authstate, dispatch] = useReducer(AuthReducer, initialAuthState);

  return (
    <AuthContext.Provider
      value={{ auth: auth, Authstate: Authstate, dispatch }}
    >
      <Routes>
        {(Authstate.role === Roles.user || Authstate.role === Roles.admin) &&
        Authstate.email ? (
          <>
            <Route path="/profile" element={<User />} />
          </>
        ) : null}

        {/* available only to admin */}
        {!!Authstate.email &&
        Authstate.role === Roles.admin &&
        Authstate.isVerified ? (
          <>
            <Route path="/administrator" element={<Administrator />} />
            {/* <Route
              path="/administrator/user"
              element={<Administrator Children={<AddUser />}></Administrator>}
            /> */}
            <Route
              path="/administrator/getusers"
              element={
                <Administrator Children={<UsersTable />}></Administrator>
              }
            />
            <Route
              path="/administrator/order"
              element={<Administrator Children={<AddOrder />}></Administrator>}
            />
          </>
        ) : null}

        {/* available only to guest user */}
        {Authstate.role === Roles.guest ? (
          <>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/password-forget" element={<ResetPassword />} />
          </>
        ) : null}

        <Route path="/home" element={<Home />} />

        <Route path="services" element={<Services />} />
        <Route path="locker" element={<Locker />} />

        <Route path="/order" element={<CheckOrder />} />
        <Route path="/order/:idOrder" element={<CheckOrder />} />

        <Route path="/*" element={<Navigate to="/home" />} />
      </Routes>
    </AuthContext.Provider>
  );
};

export default AppRouter;
