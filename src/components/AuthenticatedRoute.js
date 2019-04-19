// @flow
import React from "react";
import { Route, Redirect } from "react-router-dom";

function AuthenticatedRoute({ authenticated, render, ...rest }: any) {
  return (
    <Route
      {...rest}
      render={props =>
        authenticated ? render(props) : <Redirect to="/login" />
      }
    />
  );
}

export default AuthenticatedRoute;
