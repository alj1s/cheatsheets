// @flow
import React, { useState } from "react";
import styled from "styled-components";

import { Button, Input, Flex } from "../elements";

type Props = {
  onCreate: CheatSheet => Promise<void>
};

const Container = styled(Flex)``;

function Create(props: Props) {
  const [name, setName] = useState("");
  return (
    <Container>
      <Input
        placeholder="name"
        value={name}
        onChange={e => setName(e.target.value)}
      />
      <Button onClick={() => props.onCreate({ name })}>Create</Button>
    </Container>
  );
}

export default Create;
