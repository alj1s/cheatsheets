// @flow
import React, { Component } from "react"
import styled from "react-emotion"

import { Flex, Text } from "./elements"

const ShortcutText = styled(Text)`
  border: 1px solid white;
  color: white;
  font-family: monospace;
  letter-spacing: 0.15em;
  margin-right: 0.5em;
  text-transform: uppercase;
  padding: 0.5em 1em;
`

type ShortcutPropTypes = {
  keyString: string[]
}

function Shortcut(props: ShortcutPropTypes) {
  return (
    <Flex direction="horizontal">
      {props.keyString.map(key => <ShortcutText>{key}</ShortcutText>)}
    </Flex>
  )
}

const ContentContainer = styled(Flex)`
  margin-left: 1em;
`

const ContentText = styled(Text)`
  color: white;
  margin-right: 0.5em;
`

type ContentPropTypes = {
  filterBy: string,
  topic?: Topic
}

const filterShortcut = (shortcut, filterBy) => {
  return shortcut
    .join(" ")
    .toLowerCase()
    .includes(filterBy.toLowerCase())
}

const filterCommand = (filterBy, commands) => command => {
  return (
    command.toLowerCase().includes(filterBy.toLowerCase()) ||
    filterShortcut(commands[command].shortcut, filterBy)
  )
}

function CheatSheetContent(props: ContentPropTypes) {
  if (!props.topic) return null

  const commands = require(`../data/${props.topic}.json`)
  return (
    <ContentContainer>
      {Object.keys(commands)
        .filter(filterCommand(props.filterBy, commands))
        .map(command => {
          return (
            <Flex key={command} align="center" direction="horizontal">
              <ContentText>{command + ":"}</ContentText>
              <Shortcut keyString={commands[command].shortcut} />
            </Flex>
          )
        })}
    </ContentContainer>
  )
}

const Container = styled(Flex)`
  background-color: #3b3b3b;
  width: 80%;
`

const Header = styled(Text)`
  color: white;
  margin: 1em auto;
  text-transform: uppercase;
  letter-spacing: 0.2em;
`

const SearchInput = styled("input")`
  background-color: #565656;
  border: none;
  color: white;
  font-family: inherit;
  font-size: inherit;
  margin: 1em;
  padding: 0.3em 0.5em;
  outline: none;
`

type SearchPropTypes = {
  onSearch: Function
}

function Search(props: SearchPropTypes) {
  return <SearchInput placeholder="search..." onChange={e => props.onSearch(e.target.value)} />
}

type PropTypes = {
  topic?: Topic
}

type StateTypes = {
  searchTerm: string
}

class CheatSheet extends Component<PropTypes, StateTypes> {
  state = {
    searchTerm: ""
  }

  updateSearch = (searchTerm: string) => this.setState({ searchTerm })

  render() {
    return (
      <Container>
        <Flex align="center" direction="horizontal">
          <Header>
            {this.props.topic || "Select a cheatsheet from the sidebar"}
          </Header>
          <Search onSearch={this.updateSearch} />
        </Flex>
        <CheatSheetContent
          topic={this.props.topic}
          filterBy={this.state.searchTerm}
        />
      </Container>
    )
  }
}

export default CheatSheet
