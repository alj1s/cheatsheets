// @flow
import React from "react";
import styled from "styled-components";

import { Flex, Button } from "../elements";
import theme from "../styles/theme";

const Container = styled(Flex)`
  width: 20%;
  height: 100vh;
  background-color: ${theme.accentColor};
  align-items: center;
`;

const SideBarButton = styled(Button)`
  background-color: ${theme.accentColor};
  border: none;
  color: ${theme.background};
  cursor: pointer;
  letter-spacing: 0.2em;
  outline: none;
  text-transform: uppercase;
  margin: 0.5em 0;
  padding: 0.5em 3em;
  position: relative;
  width: 100%;
  ${props =>
    props.selected &&
    `::after {
    position: absolute;
    top: 0;
    right: -1.25rem;
    border-bottom: solid 1.25rem transparent;
    border-top: solid 1.25rem transparent;
    border-left: solid 1.25rem ${theme.accentColor};
    content: "";`};
`;

const AddNewButton = styled(Button)`
  background-color: ${theme.background};
  color: ${theme.accentColor};
  padding: 0.5em 3em;
  min-width: 75%;
  margin-top: 0.5em;
`;

type PropTypes = {
  sheets: Array<CheatSheetName>,
  onSelectSheet: Function
};

function SideBar(props: PropTypes) {
  return (
    <Container direction="vertical">
      {props.sheets.map(sheet => {
        return (
          <SideBarButton
            key={sheet}
            selected={props.activeSheet === sheet}
            onClick={() => props.onSelectSheet(sheet)}
          >
            {sheet}
          </SideBarButton>
        );
      })}
      <AddNewButton onClick={() => props.addNew()}>+ ADD</AddNewButton>
    </Container>
  );
}

SideBar.defaultProps = {
  sheets: []
};

export default SideBar;
