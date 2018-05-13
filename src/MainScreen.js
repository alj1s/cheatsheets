// @flow
import React, { Component } from "react"

import { Flex } from "./elements"
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
      <Flex direction="horizontal">
        <SideBar
          topics={this.props.topics}
          selectedTopic={this.state.currentTopic}
          onSelectTopic={this.changeTopic}
        />
        <CheatSheet topic={this.state.currentTopic} />
      </Flex>
    )
  }
}

export default MainScreen
