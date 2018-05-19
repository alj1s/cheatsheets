// @flow
import styled, { css } from "react-emotion"

import View from "./View"

export default styled(View)`
  display: flex;
  flex-direction: ${props =>
    props.direction === "horizontal" ? "row" : "column"};
  ${props =>
    props.align &&
    css`
      align-items: ${props.align};
    `};
`
