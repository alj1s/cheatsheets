// @flow
import React, { Component } from "react"
import { Box, Text } from "proton-native"

import SideBar from "./SideBar"
import CheatSheet from "./CheatSheet"

type PropTypes = {
  topics: Topic[]
}

type StateTypes = {
  currentTopic?: Topic
}

class MainScreen extends Component<PropTypes, StateTypes> {
  state = { currentTopic: "" }
  changeTopic = (currentTopic: Topic) => this.setState({ currentTopic })

  render() {
    return (
      <Box vertical={false} padded={false}>
        <SideBar
          topics={this.props.topics}
          selectedTopic={this.state.currentTopic}
          onSelectTopic={this.changeTopic}
        />
        <CheatSheet topic={this.state.currentTopic} />
      </Box>
    )
  }
}

export default MainScreen
