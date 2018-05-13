// @flow
import React from "react"
import { Flex, Text } from "./elements"

const ShortcutText = Text.extend`
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

const ContentContainer = Flex.extend`
  margin-left: 1em;
`

const ContentText = Text.extend`
  color: white;
  margin-right: 0.5em;
`

type ContentPropTypes = {
  topic?: Topic
}

function CheatSheetContent(props: ContentPropTypes) {
  if (!props.topic) return null

  const commands = require(`../data/${props.topic}.json`)
  return (
    <ContentContainer>
      {Object.keys(commands).map(command => {
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

const Container = Flex.extend`
  background-color: #3b3b3b;
  width: 80%;
`

const Header = Text.extend`
  color: white;
  margin: 1em auto;
  text-transform: uppercase;
  letter-spacing: 0.2em;
`

type PropTypes = {
  topic?: Topic
}

function CheatSheet(props: PropTypes) {
  return (
    <Container>
      <Header>{props.topic || "Select a cheatsheet from the sidebar"}</Header>
      <CheatSheetContent topic={props.topic} />
    </Container>
  )
}

export default CheatSheet
