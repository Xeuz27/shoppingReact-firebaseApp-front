import "./index.css";
import React from "react";

import { HashRouter } from "react-router-dom";

import { AppRouter } from "./Routers/AppRouter";

import { firebaseContext } from "./contexts/firebaseContext";
import { auth } from "./firebaseConfig/firebase";

export default function PorTuCompraUsaAPP() {
  return (
    <HashRouter>
      <firebaseContext.Provider value={{auth: auth}}>
        <AppRouter />
      </firebaseContext.Provider>
    </HashRouter>
  );
}
