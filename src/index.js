// @flow
import React, { Component } from "react"
import { render } from "react-dom"

import { Flex, Menu } from "./elements"
import MainScreen from "./MainScreen"

class AppShell extends Component<*> {
  render() {
    return (
      <Flex>
        <Menu label="Edit">
          <Menu.Item>Preferences...</Menu.Item>
        </Menu>
        <MainScreen topics={["tmux"]} />
      </Flex>
    )
  }
}

const appRoot = document.getElementById("app")
if (appRoot) render(<AppShell />, appRoot)
