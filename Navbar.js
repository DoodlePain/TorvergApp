import React, { Component } from "react";
import { Header, Icon } from "react-native-elements";

export default class Navbar extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    var leftElement = (
      <Icon
        name="arrow-back"
        type="MaterialIcons"
        color="white"
        onPress={() => {
          this.props.history.goBack();
        }}
      />
    );
    return (
      <Header
        leftComponent={leftElement}
        centerComponent={{ text: this.props.title, style: { color: "#fff" } }}
        rightComponent={{ icon: "home", color: "#fff" }}
      />
    );
  }
}
