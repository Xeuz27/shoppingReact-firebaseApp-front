import React, { useContext } from "react";
import { Card } from "react-bootstrap";
import { AuthContext } from "../contexts/authContext";
import Header from "./Header";

export const User = () => {
  const { Authstate } = useContext(AuthContext);
  return (
    <>
      <Header />
      <div className="signInContainerLoginPage">
        <div className="columnLoginPage">
          <Card>
            {Authstate ? (
              <>
                {Authstate.map( (item) => (

                    <ul>

                    <li>{Authstate.user}</li>;
                  <li>{Authstate.isLoading}</li>;
                  <li>{Authstate.email}</li>;
                  <li>{Authstate.errorMessage}</li>;
                  <li>{Authstate.successMessage}</li>;
                  <li>{Authstate.uid}</li>;
                  <li>{Authstate.isVerified}</li>;
                  <li>{Authstate.role}</li>;
                    
                    </ul>
                ))}
                  

              </>
            ) : null}
          </Card>
        </div>
      </div>
    </>
  );
};
