// @flow
import React, { Component } from "react"
import { render, Window, App, Menu } from "proton-native"

import MainScreen from "./MainScreen"

class AppShell extends Component<*> {
  render() {
    return (
      <App>
        <Menu label="Edit">
          <Menu.Item>Preferences...</Menu.Item>
        </Menu>
        <Window title="Cheatsheets" menuBar>
          <MainScreen topics={["tmux"]} />
        </Window>
      </App>
    )
  }
}

render(<AppShell />)
