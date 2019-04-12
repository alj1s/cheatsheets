// @flow
import React, { useState } from "react";
import { Auth } from "aws-amplify";

import { Field, FieldContainer, Page, SubmitButton } from "./components";

const onConfirm = async (username, code, onComplete) => {
  try {
    const data = await Auth.confirmSignUp(username, code);
    console.log("confirmed", data);
    onComplete();
  } catch (e) {
    console.error("oops", e);
  }
};

type Props = {};

function Confirm(props: Props) {
  const [username, setUsername] = useState("");
  const [confirmationCode, setConfirmationCode] = useState("");

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
          onChange={e => setConfirmationCode(e.target.value)}
          value={confirmationCode}
          placeholder="confirmation code"
          name="confirmationCode"
        />
        <SubmitButton
          onClick={() =>
            onConfirm(username, confirmationCode, () => props.history.push("/"))
          }
        >
          Confirm
        </SubmitButton>
      </FieldContainer>
    </Page>
  );
}

export default Confirm;
