// @flow
import * as React from "react";
import View from "./View";

type ItemPropTypes = {};
function MenuItem(props: ItemPropTypes) {
  return <View />;
}

type PropTypes = {
  children: React.Node
};
function Menu(props: PropTypes) {
  return <View>{props.children}</View>;
}

Menu.Item = MenuItem;

export default Menu;
