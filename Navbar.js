import React, { Component } from "react";
import { Header, Icon, Text } from "react-native-elements";
import { StyleSheet } from "react-native";

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
    var rightElement = (
      <Icon
        name="home"
        color="white"
        onPress={() => {
          this.props.history.push("/");
        }}
      />
    );
    return (
      <Header
        leftComponent={leftElement}
        centerComponent={
          <Text h2 style={styles.header}>
            {this.props.title}
          </Text>
        }
        rightComponent={rightElement}
      />
    );
  }
}

const styles = StyleSheet.create({
  header: {
    color: "white",
    fontWeight: "bold",
    fontSize: 30,
    paddingTop: 20
  }
});
