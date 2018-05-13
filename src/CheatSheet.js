// @flow
import React from "react"
import { Box, Text } from "proton-native"

type ContentPropTypes = {
  topic?: Topic
}

function CheatSheetContent(props: ContentPropTypes) {
  if (!props.topic) return null

  const commands = require(`../data/${props.topic}.json`)
  return (
    <Box>
      {Object.keys(commands).map(command => {
        return (
          <Box key={command} padded={false}>
            <Text>{command}</Text>
            <Text>{commands[command].shortcut}</Text>
            <Text>{commands[command].description}</Text>
          </Box>
        )
      })}
    </Box>
  )
}

type PropTypes = {
  topic?: Topic
}

function CheatSheet(props: PropTypes) {
  return (
    <Box>
      <Text>{props.topic || "Select a cheatsheet from the sidebar"}</Text>
      <CheatSheetContent topic={props.topic} />
    </Box>
  )
}

export default CheatSheet
