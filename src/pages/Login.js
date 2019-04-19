// @flow
import React, { useState } from "react";
import styled from "styled-components";
import { Auth } from "aws-amplify";
import { Link } from "react-router-dom";

import theme from "../styles/theme";
import { Field, FieldContainer, Page, SubmitButton } from "../auth/components";

const SignUp = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${theme.accentColor};
  border: 1px solid ${theme.accentColor};
  padding: 0.5rem 0.75rem;
  text-decoration: none;
  text-transform: uppercase;
  width: 100%;
`;

const onLogin = async (username, password, onComplete) => {
  try {
    const data = await Auth.signIn(username, password);
    console.log("logged in", data);
    onComplete();
  } catch (e) {
    console.error("oops", e);
  }
};

type Props = {
  onLogin: Function
};

function Login(props: Props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <Page>
      <FieldContainer>
        <Field
          onChange={e => setUsername(e.target.value)}
          value={username}
          placeholder="username"
          name="username"
        />
        <Field
          onChange={e => setPassword(e.target.value)}
          value={password}
          placeholder="password"
          type="password"
          name="password"
        />
        <SubmitButton
          onClick={() => onLogin(username, password, () => props.onLogin())}
        >
          Log in
        </SubmitButton>
        <SignUp to="signup">Create account</SignUp>
      </FieldContainer>
    </Page>
  );
}

export default Login;
