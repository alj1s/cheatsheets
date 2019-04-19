// @flow
import React, { Component } from "react";
import { API, graphqlOperation } from "aws-amplify";
import Media from "react-media";

import * as queries from "../graphql/queries";
import * as mutations from "../graphql/mutations";

import { Flex } from "../elements";
import { Nav, CheatSheet as CheatSheetView } from "../components";

const currentSheetKey = "cheatsheet:currentSheet";

const devices = {
  laptop: { minWidth: 900 }
};

type Props = {
  onAddNew: () => void,
  onChangeSheet: CheatSheetName => void,
  sheets: Array<CheatSheet>
};

type State = {
  currentSheet?: CheatSheet,
  error?: string,
  sheets: Array<any>
};

class Main extends Component<Props, State> {
  state = { sheets: [], currentSheet: undefined };
  onChangeSheet = async (currentSheetName: CheatSheetName) => {
    sessionStorage.setItem(currentSheetKey, currentSheetName);
    await this.fetchCheatsheet(currentSheetName);
  };

  fetchCheatsheet = async (currentSheetName: CheatSheetName) => {
    if (this.state.sheets.length === 0) return;
    const currentSheet = this.state.sheets.find(
      s => s.name === currentSheetName
    );

    if (currentSheet) {
      const { data: { getCheatsheet } } = await API.graphql(
        graphqlOperation(queries.getCheatsheet, { id: currentSheet.id })
      );
      this.setState({
        currentSheet: getCheatsheet
      });
    }
  };

  onAddShortcut = async (shortcut: Shortcut) => {
    const { data: { createShortcut: { cheatsheet } } } = await API.graphql(
      graphqlOperation(mutations.createShortcut, { input: shortcut })
    );
    this.setState({ currentSheet: cheatsheet });
  };

  fetchCheatSheets = async () =>
    await API.graphql(graphqlOperation(queries.listCheatsheets));

  async componentDidMount() {
    try {
      const {
        data: { listCheatsheets: { items } }
      } = await this.fetchCheatSheets();
      const currentSheetName = sessionStorage.getItem(currentSheetKey);
      if (currentSheetName) {
        await this.fetchCheatsheet(currentSheetName);
      }
      this.setState({ sheets: items });
    } catch (e) {
      this.setState({ error: e });
    }
  }

  renderLaptop() {
    return (
      <Flex direction="horizontal">
        <Nav
          addNew={this.props.onAddNew}
          sheets={this.state.sheets.map(s => s.name)}
          activeSheet={
            this.state.currentSheet ? this.state.currentSheet.name : undefined
          }
          onSelectSheet={this.onChangeSheet}
        />
        <CheatSheetView
          addShortcut={this.onAddShortcut}
          sheet={this.state.currentSheet}
        />
      </Flex>
    );
  }

  renderMobile() {
    return (
      <Flex direction="vertical">
        <Nav
          addNew={this.props.onAddNew}
          sheets={this.state.sheets.map(s => s.name)}
          activeSheet={
            this.state.currentSheet ? this.state.currentSheet.name : undefined
          }
          onSelectSheet={this.onChangeSheet}
        />
        <CheatSheetView
          addShortcut={this.onAddShortcut}
          sheet={this.state.currentSheet}
        />
      </Flex>
    );
  }

  render() {
    return (
      <Media query={devices.laptop}>
        {match => (match ? this.renderLaptop() : this.renderMobile())}
      </Media>
    );
  }
}

export default Main;
