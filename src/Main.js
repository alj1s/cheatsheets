// @flow
import React, { Component } from "react";
import { API, graphqlOperation } from "aws-amplify";

import * as queries from "./graphql/queries";
import * as mutations from "./graphql/mutations";
import { Flex } from "./elements";
import { SideBar, CheatSheet as CheatSheetView } from "./components";

const currentSheetKey = "cheatsheet:currentSheet";

type Props = {
  onAddNew: () => void,
  onChangeSheet: CheatSheetName => void,
  sheets: Array<CheatSheet>
};

type State = {
  currentSheet: CheatSheet,
  error?: string,
  sheets: Array<any>
};

class Main extends Component<Props, State> {
  state = { sheets: [] };
  onChangeSheet = async (currentSheetName: CheatSheetName) => {
    sessionStorage.setItem(currentSheetKey, currentSheetName);
    await this.fetchCheatsheet(currentSheetName);
  };

  fetchCheatsheet = async currentSheetName => {
    if (this.state.sheets.length === 0) return;
    console.log("fetch", currentSheetName, this.state.sheets);
    const currentSheetId = this.state.sheets.find(
      s => s.name === currentSheetName
    ).id;
    const { data: { getCheatsheet } } = await API.graphql(
      graphqlOperation(queries.getCheatsheet, { id: currentSheetId })
    );
    console.log("fetch response", getCheatsheet);
    this.setState({
      currentSheet: getCheatsheet
    });
  };

  onAddShortcut = async shortcut => {
    const { data: { createShortcut: { cheatsheet } } } = await API.graphql(
      graphqlOperation(mutations.createShortcut, { input: shortcut })
    );
    console.log("Create response", JSON.stringify(cheatsheet));
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
  render() {
    return (
      <Flex direction="horizontal">
        <SideBar
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
}

export default Main;
