// @flow
import React, { useState } from "react";
import styled from "styled-components";
import type { RouterHistory } from "react-router-dom";

import { Button, Input, Flex, Text } from "../elements";
import theme from "../styles/theme";
import type { CreateCheatsheetInput } from "../API";

type Props = {
  history: RouterHistory,
  onCreate: CreateCheatsheetInput => Promise<void>
};

const Container = styled(Flex)`
  background-color: ${theme.background};
  justify-content: center;
  height: 100vh;
  padding: 5rem 0.5rem;
`;

const CreateButton = styled(Button)`
  background-color: ${theme.accentColor};
  color: ${theme.background};
  text-transform: uppercase;
  padding: 0.3rem 0.8rem;
  margin-top: 0.5rem;

  @media (min-width: 900px) {
    margin-left: 0.5rem;
    margin-top: 0;
  }
`;

const Cancel = styled(Button)`
  background-color: ${theme.background};
  color: ${theme.accentColor};
  text-transform: uppercase;
  padding: 0.3rem 0.8rem;
  margin-top: 0.5rem;

  @media (min-width: 900px) {
    margin-left: 0.5rem;
    margin-top: 0;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 80%;
  max-height: 80%;
  background-color: #000;
  padding: 5rem 3rem;
  height: calc(100vh - 10rem);
`;

const Header = styled(Text)`
  color: white;
  letter-spacing: 3px;
  text-transform: uppercase;
  text-align: center;
  margin-bottom: 2rem;
`;

const Field = styled(Flex)`
  flex-direction: column;

  @media (min-width: 900px) {
    flex-direction: row;
  }
`;

function Create(props: Props) {
  const [name, setName] = useState("");
  return (
    <Container align="flex-start" direction="horizontal">
      <Form>
        <Header>Create a new cheatsheet</Header>
        <Field>
          <Input
            placeholder="name"
            value={name}
            onChange={e => setName(e.target.value)}
          />
          <CreateButton onClick={() => props.onCreate({ name })}>
            Create
          </CreateButton>
          <Cancel onClick={() => props.history.push("/")}>Cancel</Cancel>
        </Field>
      </Form>
    </Container>
  );
}

export default Create;
