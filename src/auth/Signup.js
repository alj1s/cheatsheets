// @flow
import React, { useState } from "react";
import { Auth } from "aws-amplify";

import { Field, FieldContainer, Page, SubmitButton } from "./components";

const onSignUp = async (credentials, onComplete) => {
  try {
    const data = await Auth.signUp(credentials);
    console.log("signed up", data);
    onComplete();
  } catch (e) {
    console.error("oops", e);
  }
};

type Props = {};

function Signup(props: Props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

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
        <Field
          onChange={e => setEmail(e.target.value)}
          value={email}
          placeholder="email"
          type="email"
          name="email"
        />
        <SubmitButton
          onClick={() =>
            onSignUp({ username, password, attributes: { email } }, () =>
              props.history.push("/confirm")
            )
          }
        >
          Sign up
        </SubmitButton>
      </FieldContainer>
    </Page>
  );
}

export default Signup;
