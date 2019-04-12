// @flow
import styled from "styled-components";

import { Button } from "../../elements";
import theme from "../../styles/theme";

const SubmitButton = styled(Button)`
  border: none;
  background-color: ${theme.accentColor};
  color: black;
  flex: 1;
  padding: 0.5em 0.75rem;
  width: 100%;
`;

export default SubmitButton;
