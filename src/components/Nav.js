// @flow
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Media from "react-media";

import { Flex, Button } from "../elements";
import theme from "../styles/theme";

const Container = styled(Flex)`
  background: ${theme.accentColor};
  position: fixed;
  width: 100%;
  padding: 0.5rem;

  @media (min-width: 900px) {
    width: 20%;
    height: 100vh;
    padding: 0;
    position: static;
  }
`;

const SideBarButton = styled(Button)`
  background: transparent;
  border: none;
  color: ${theme.background};
  cursor: pointer;
  letter-spacing: 3px;
  outline: none;
  text-transform: uppercase;
  margin: 0.5rem 0;
  padding: 0.5rem 3rem;
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
  padding: 0.5rem 3rem;
  min-width: 75%;
  margin-top: 0.5rem;
`;

const MenuButton = styled(Button)`
  align-self: flex-end;
  color: ${theme.background};
  font-size: 1.5rem;
  background: transparent;
`;

type PropTypes = {
  activeSheet: ?CheatSheetName,
  addNew: Function,
  sheets: Array<CheatSheetName>,
  onSelectSheet: Function
};

function Nav(props: PropTypes) {
  const [isMenuOpen, openMenu] = useState(false);

  useEffect(() => {
    const listener = () => openMenu(false);
    document.addEventListener("click", listener);
    return () => document.removeEventListener("click", listener);
  }, []);

  return (
    <Media query={{ minWidth: 900 }}>
      {match =>
        match ? (
          <Container align="center" direction="vertical">
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
        ) : (
          <Container align="center">
            <MenuButton
              onClick={e => {
                openMenu(!isMenuOpen);
                e.stopPropagation();
                e.nativeEvent.stopImmediatePropagation();
              }}
            >
              &#9776;
            </MenuButton>
            {isMenuOpen && (
              <Flex align="center">
                {props.sheets.map(sheet => (
                  <SideBarButton
                    key={sheet}
                    selected={props.activeSheet === sheet}
                    onClick={() => props.onSelectSheet(sheet)}
                  >
                    {sheet}
                  </SideBarButton>
                ))}
                <AddNewButton onClick={() => props.addNew()}>
                  + ADD
                </AddNewButton>
              </Flex>
            )}
          </Container>
        )
      }
    </Media>
  );
}

Nav.defaultProps = {
  sheets: []
};

export default Nav;
