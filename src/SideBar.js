// @flow
import React from "react"
import { Box, Button, Text } from "proton-native"

type PropTypes = {
  topics: Topic[],
  selectedTopic?: Topic,
  onSelectTopic: Function
}

function SideBar(props: PropTypes) {
  return (
    <Box style={{ backgroundColor: "red" }}>
      {props.topics.map(topic => {
        return (
          <Button key={topic} onClick={props.onSelectTopic}>
            {topic}
          </Button>
        )
      })}
    </Box>
  )
}

SideBar.defaultProps = {
  topics: []
}

export default SideBar
