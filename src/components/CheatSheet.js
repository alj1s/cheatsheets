// @flow
import React, { Component, useState } from "react";
import styled from "styled-components";

import { Button, Flex, Input, Text } from "../elements";
import theme from "../styles/theme";

const ShortcutText = styled(Text)`
  border: 1px solid white;
  color: white;
  font-family: monospace;
  letter-spacing: 0.15em;
  margin-right: 0.5em;
  text-transform: uppercase;
  padding: 0.5em 1em;
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
  padding-left: 5em;
`;

const ContentText = styled(Text)`
  color: white;
  min-width: 15%;
  margin-right: 0.5em;
`;

type ContentPropTypes = {
  filterBy: string,
  sheet?: CheatSheetName
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
  margin-bottom: 1em;
`;

const AddNewButton = styled(Button)`
  background-color: ${theme.accentColor};
  color: ${theme.background};
  padding: 0.5em 3em;
  width: 175px;
`;

const ShortcutInput = styled(Input)`
  min-width: 15%;
  margin-right: 0.5em;
  padding: 0.5em;
`;

function CheatSheetContent(props: ContentPropTypes) {
  if (!props.sheet) return null;

  console.log("sheet", JSON.stringify(props.sheet));

  const [shortcutDescription, setShortcutDescription] = useState("");
  const [shortcutKeySequence, setShortcutKeySequence] = useState([]);

  const commands = props.sheet.shortcuts.items || [];
  //require(`../../data/${props.sheet.name}.json`);
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
      <Row align="center" style={{ marginTop: "1em" }} direction="horizontal">
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
  width: 80%;
`;

const Header = styled(Text)`
  color: white;
  margin: 1em auto;
  text-transform: uppercase;
  letter-spacing: 0.2em;
`;

type SearchPropTypes = {
  onSearch: Function
};

const SearchInput = styled(Input)`
  margin-right: 1rem;
`;

function Search(props: SearchPropTypes) {
  return (
    <SearchInput
      placeholder="search"
      onChange={e => props.onSearch(e.target.value)}
    />
  );
}

type PropTypes = {
  sheet?: any
};

type StateTypes = {
  searchTerm: string
};

class CheatSheet extends Component<PropTypes, StateTypes> {
  state = {
    searchTerm: ""
  };

  updateSearch = (searchTerm: string) => this.setState({ searchTerm });

  render() {
    return (
      <Container>
        <Flex align="center" direction="horizontal">
          <Header>
            {this.props.sheet
              ? this.props.sheet.name
              : "Select a cheatsheet from the sidebar"}
          </Header>
          <Search onSearch={this.updateSearch} />
        </Flex>
        <CheatSheetContent
          addShortcut={this.props.addShortcut}
          sheet={this.props.sheet}
          filterBy={this.state.searchTerm}
        />
      </Container>
    );
  }
}

export default CheatSheet;
