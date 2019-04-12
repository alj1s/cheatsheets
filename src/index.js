// @flow
import React, { Component } from "react";
import { render } from "react-dom";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import Amplify, { Auth, API, graphqlOperation } from "aws-amplify";

import "typeface-roboto";

import * as mutations from "./graphql/mutations";
import Main from "./Main";
import { Login, Signup, Confirm } from "./auth";
import { Create } from "./components";

import config from "./aws-exports";

Amplify.configure(config);

const createCheatSheet = async cheatsheet =>
  await API.graphql(
    graphqlOperation(mutations.createCheatsheet, { input: cheatsheet })
  );

const GlobalStyle = createGlobalStyle`
* {
 box-sizing: border-box;
 }

 body {
   font-size: 18px;
   font-family: 'Roboto', sans-serif;
   margin: 0;
   padding: 0;
 }
`;

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

type Props = {};

type AuthenticationState = "unchecked" | "valid" | "invalid";
type State = {
  authenticated: AuthenticationState,
  error?: string
};

class AppShell extends Component<Props, State> {
  state = { authenticationState: "unchecked" };

  async componentDidMount() {
    try {
      const user = await Auth.currentAuthenticatedUser();
      console.log("user", JSON.stringify(user, null, 2));
      this.setState({ authenticationState: "valid" });
    } catch (e) {
      this.setState({ error: e, authenticationState: "invalid" });
    }
  }

  render() {
    if (this.state.authenticationState === "unchecked") return null;
    return (
      <Router>
        <div>
          <GlobalStyle />
          <AuthenticatedRoute
            exact
            authenticated={this.state.authenticationState === "valid"}
            path="/"
            render={props => (
              <Main {...props} onAddNew={() => props.history.push("/create")} />
            )}
          />
          <Route
            path="/login"
            render={props => (
              <Login
                {...props}
                onLogin={() => {
                  this.setState({ authenticationState: "valid" });
                  props.history.push("/");
                }}
              />
            )}
          />
          <Route path="/signup" component={Signup} />
          <Route path="/confirm" component={Confirm} />
          <AuthenticatedRoute
            path="/create"
            authenticated={this.state.authenticationState === "valid"}
            render={props => <Create {...props} onCreate={createCheatSheet} />}
          />
        </div>
      </Router>
    );
  }
}

const appRoot = document.getElementById("app");
if (appRoot) render(<AppShell />, appRoot);
