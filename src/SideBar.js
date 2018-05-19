// @flow
import React from "react"
import styled from "react-emotion"

import { Flex, Button } from "./elements"

const Container = styled(Flex)`
  width: 20%;
  height: 100vh;
  background-color: #FBFF45;
`

const SideBarButton = styled(Button)`
  background-color: transparent;
  border: none;
  color: #3b3b3b;
  cursor: pointer;
  font-family: inherit;
  font-size: inherit;
  letter-spacing: 0.2em;
  outline: none;
  text-transform: uppercase;
  margin: 0.5em 2em;
  padding: 0.5em 3em;
`

type PropTypes = {
  topics: Topic[],
  selectedTopic?: Topic,
  onSelectTopic: Function
}

function SideBar(props: PropTypes) {
  return (
    <Container direction="vertical">
      {props.topics.map(topic => {
        return (
          <SideBarButton key={topic} onClick={() => props.onSelectTopic(topic)}>
            {topic}
          </SideBarButton>
        )
      })}
    </Container>
  )
}

SideBar.defaultProps = {
  topics: []
}

export default SideBar
