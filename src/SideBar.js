// @flow
import React from "react"

import { Flex, Button } from "./elements"

const Container = Flex.extend.attrs({ direction: "vertical" })`
  width: 20%;
  height: 100vh;
  background-color: #FBFF45;
`

const SideBarButton = Button.extend`
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
    <Container>
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
