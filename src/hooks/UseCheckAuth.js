import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useContext } from "react";
import { firebaseContext } from "../contexts/firebaseContext";
// import { auth } from "./config";
import { AuthContext } from "../contexts/authContext";
import { AuthActions } from "../constants/actions";

// import * as Roles from '../constants/roles'
export const useCheckAuth = () => {
  const { auth } = useContext(firebaseContext);
  const { dispatch } = useContext(AuthContext);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (!user) return dispatch({ type: AuthActions.logOut });
      //  const { uid, email, displayName, photoURL } = user;
      dispatch({ type: AuthActions.logIn, user: user });
    });
    return unsubscribe;
  }, [auth, dispatch]);

};
