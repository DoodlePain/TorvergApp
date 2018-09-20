import React, { Component } from "react";
import { Header, Icon } from "react-native-elements";

export default class Topbar extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    var leftElement = { icon: "menu", color: "#fff" };
    if (this.props.home === false) {
      console.log(this.props.home);

      leftElement = (
        <Icon
          raised
          name="heartbeat"
          type="font-awesome"
          color="#f50"
          onPress={() => {
            this.props.history.push("/");
          }}
        />
      );
    }
    return (
      <Header
        leftComponent={leftElement}
        centerComponent={{ text: "MY TITLE", style: { color: "#fff" } }}
        rightComponent={{ icon: "home", color: "#fff" }}
      />
    );
  }
}
