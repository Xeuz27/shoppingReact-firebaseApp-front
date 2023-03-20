import React, { useContext } from "react";
import { useReducer } from "react";
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
import { User } from "../components/User";

export const AppRouter = () => {
  const { auth } = useContext(firebaseContext);
  const [Authstate, dispatch] = useReducer(AuthReducer, initialAuthState);
  console.log(Authstate,'from approuter authstate')

  return (
    <AuthContext.Provider
      value={{ auth: auth, Authstate: Authstate, dispatch }}
    >
      <Routes>

        {Authstate.role === Roles.user ? 
        <>
        <Route path="password-forget" element={<ResetPassword />} />
        <Route path="/profile" element={<User />} />
        </>
         : null}

        {!!Authstate.email &&
        Authstate.role === Roles.admin &&
        Authstate.isVerified ? (
          <Route path="/administrator" element={<Administrator />} />
        ) : null}
        {/* guest or public routes */}
        {Authstate.role === Roles.guest ? (
          <>
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<SignUp />} />
            <Route path="password-forget" element={<ResetPassword />} />
          </>
        ) : (
          <></>
        )}
        <Route path="/home" element={<Home />} />

        <Route path="services" element={<Services />} />
        <Route path="locker" element={<Locker />} />

        <Route path="/order" element={<CheckOrder />} />
        <Route path="/order/:idOrder" element={<CheckOrder />} />

        {/* <Route path="/*" element={<Navigate to='/public/home' />} />  */}

        {/* (
          <Route path="/user/*" element={<UserRoutes />} />
        ) : (
          <Route path="/public/*" element={<GuestRoutes />} />
        )}
        <Route path="/public/home" element={<Home />} /> */}

        <Route path="/*" element={<Navigate to="/home" />} />
      </Routes>
    </AuthContext.Provider>
  );
};

export default AppRouter;

/* {Authstate.role === Roles.user ? (
  <AuthContext.Provider>
          <Route path="/user/:uid*" element={<UserRoutes Authstate={Authstate} />} />
          </>
        ) : null} */

/* <Route activeKey="/" path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />

      <Route path="/services" element={<Services />} />
      <Route path="/administrator" element={<Administrator />} />
      <Route
        path="*"
        element={
          <h1>
            404 <br /> Not Found
          </h1>
        }
      /> */

/* <Routes>
    {status === "authenticated" ? (
      <Route path="/*" element={<JournalRoutes />} />
    ) : (
      <Route path="/auth/*" element={<AuthRoutes />} />
    )}
    <Route path="/*" element={<Navigate to="/auth/login" />} />
    </Routes> */
