// @flow
import React, { Component } from "react";
import { render } from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Amplify, { Auth, API, graphqlOperation } from "aws-amplify";

import * as mutations from "./graphql/mutations";
import { Login, Signup, Confirm, Create, Main } from "./pages";
import { AuthenticatedRoute } from "./components";
import { GlobalStyle } from "./styles";
import type { CreateCheatsheetInput } from "./API";

import config from "./aws-exports";

Amplify.configure(config);

const createCheatSheet = async (cheatsheet: CreateCheatsheetInput) =>
  await API.graphql(
    graphqlOperation(mutations.createCheatsheet, { input: cheatsheet })
  );

type Props = {};

type State = {
  authenticationState: AuthenticationState,
  error?: string
};

class AppShell extends Component<Props, State> {
  state = { authenticationState: "unchecked" };

  async componentDidMount() {
    try {
      await Auth.currentAuthenticatedUser();
      this.setState({ authenticationState: "valid" });
    } catch (e) {
      this.setState({ error: e, authenticationState: "invalid" });
    }
  }

  render() {
    if (this.state.authenticationState === "unchecked") return null;
    return (
      <React.Fragment>
        <GlobalStyle />
        <Router>
          <Switch>
            <AuthenticatedRoute
              exact
              authenticated={this.state.authenticationState === "valid"}
              path="/"
              render={props => (
                <Main
                  {...props}
                  onAddNew={() => props.history.push("/create")}
                />
              )}
            />
            <AuthenticatedRoute
              path="/create"
              authenticated={this.state.authenticationState === "valid"}
              render={props => (
                <Create {...props} onCreate={createCheatSheet} />
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
          </Switch>
        </Router>
      </React.Fragment>
    );
  }
}

const appRoot = document.getElementById("app");
if (appRoot) render(<AppShell />, appRoot);
