// @flow
import React, { useState } from "react";
import styled from "styled-components";

import { Button, Flex, Input, Text } from "../elements";
import theme from "../styles/theme";

const ShortcutText = styled(Text)`
  border: 1px solid white;
  color: white;
  font-family: monospace;
  letter-spacing: 3px;
  margin-right: 0.5rem;
  text-transform: uppercase;
  padding: 0.5rem 1rem;
`;

const CheatSheetContainer = styled(Flex)`
  padding-top: 1rem;
`;

type ShortcutPropTypes = {
  keySequence?: string[]
};

function Shortcut(props: ShortcutPropTypes) {
  return (
    <Flex direction="horizontal">
      {props.keySequence &&
        props.keySequence.map(key => (
          <ShortcutText key={key}>{key}</ShortcutText>
        ))}
    </Flex>
  );
}

const ContentContainer = styled(Flex)`
  padding-left: 1rem;
`;

const ContentText = styled(Text)`
  color: white;
  min-width: 15%;
  margin-right: 0.5rem;
  letter-spacing: 1px;
  text-transform: uppercase;
`;

type ContentPropTypes = {
  addShortcut: Function,
  filterBy: string,
  sheet: CheatSheet
};

const filterShortcut = (shortcut, filterBy) => {
  return shortcut
    .join(" ")
    .toLowerCase()
    .includes(filterBy.toLowerCase());
};

const filterCommand = filterBy => command => {
  return (
    command.description.toLowerCase().includes(filterBy.toLowerCase()) ||
    filterShortcut(command.keySequence, filterBy)
  );
};

const Row = styled(Flex)`
  margin-bottom: 1rem;
`;

const AddNewButton = styled(Button)`
  background-color: ${theme.accentColor};
  color: ${theme.background};
  padding: 0.5rem 1.25rem;
`;

const ShortcutInput = styled(Input)`
  min-width: 0;
  margin-right: 0.5rem;
  padding: 0.5rem;
`;

function CheatSheetContent(props: ContentPropTypes) {
  const [shortcutDescription, setShortcutDescription] = useState("");
  const [shortcutKeySequence, setShortcutKeySequence] = useState([]);

  const commands = props.sheet.shortcuts ? props.sheet.shortcuts.items : [];
  return (
    <ContentContainer>
      {commands.filter(filterCommand(props.filterBy)).map(command => {
        return (
          <Row key={command.id} align="center" direction="horizontal">
            <ContentText>{command.description + ":"}</ContentText>
            <Shortcut keySequence={command.keySequence} />
          </Row>
        );
      })}
      <Row align="center" style={{ marginTop: "1rem" }} direction="horizontal">
        <ShortcutInput
          value={shortcutDescription}
          onChange={e => setShortcutDescription(e.target.value)}
          placeholder="description"
        />
        <Shortcut
          keyString={shortcutKeySequence}
          onSetKeyString={setShortcutKeySequence}
        />
        <AddNewButton
          onClick={() =>
            props.addShortcut({
              description: shortcutDescription,
              keySequence: shortcutKeySequence,
              shortcutCheatsheetId: props.sheet.id
            })
          }
        >
          + ADD
        </AddNewButton>
      </Row>
    </ContentContainer>
  );
}

const Container = styled(Flex)`
  background-color: ${theme.background};
  width: 100%;
  height: 100vh;
  padding-top: 60px;
  padding-left: 1.5rem;
  @media (min-width: 900px) {
    padding-top: 0;
    width: 80%;
  }
`;

const NoSelectionText = styled(Text)`
  color: white;
  margin: 20vh auto;
  text-transform: uppercase;
  text-align: center;
  letter-spacing: 3px;
  padding: 0 2rem;
`;

type SearchPropTypes = {
  onSearch: Function
};

const SearchInput = styled(Input)`
  margin: 0.5rem 1rem;
  border-radius: 2px;

  @media (min-width: 900px) {
    align-self: flex-end;
  }
`;

function Search(props: SearchPropTypes) {
  return (
    <SearchInput
      placeholder="search"
      onChange={e => props.onSearch(e.target.value)}
    />
  );
}

type CheatSheetProps = {
  sheet: ?CheatSheet,
  addShortcut: Function
};

function CheatSheetView({ sheet, addShortcut }: CheatSheetProps) {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <Container>
      {!sheet ? (
        <NoSelectionText>Select a cheatsheet to view shortcuts</NoSelectionText>
      ) : (
        <React.Fragment>
          <Search onSearch={setSearchTerm} />
          <CheatSheetContainer>
            <CheatSheetContent
              addShortcut={addShortcut}
              sheet={sheet}
              filterBy={searchTerm}
            />
          </CheatSheetContainer>
        </React.Fragment>
      )}
    </Container>
  );
}

export default CheatSheetView;
