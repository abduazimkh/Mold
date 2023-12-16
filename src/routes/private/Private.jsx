import React from "react";
import { useSelector } from "react-redux";
import { Route, Redirect, useLocation } from "react-router-dom";
import AuthContainer from "../container/AuthContainer";

const Private = (props) => {
  const authState = useSelector(state => state.auth);

    const location = useLocation();
  return authState.token ? (
    <AuthContainer>
      <Route {...props} />
    </AuthContainer>
  ) : (
    <Redirect
      to={{
        pathname: "/login",
        state: {
          from: location.pathname,
        },
      }}
    />
  );
};

export default Private;
