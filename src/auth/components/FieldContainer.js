// @flow
import * as React from "react";
import styled from "styled-components";

import { Flex } from "../../elements";

const Container = styled(Flex)`
  align-items: center;
  justify-content: center;
  padding: 3em;
  width: 350px;
`;

type Props = {
  children: React.Node
};

function FieldContainer(props: Props) {
  return (
    <Container>
      {React.Children.map(props.children, child =>
        React.cloneElement(child, { style: { marginTop: "1.5rem" } })
      )}
    </Container>
  );
}

export default FieldContainer;
