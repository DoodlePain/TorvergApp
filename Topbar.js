import React, { Component } from "react";
import { StyleSheet } from "react-native";
import { Header, Text } from "react-native-elements";

export default class Topbar extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Header
        centerComponent={
          <Text h2 style={styles.header}>
            Torvergapp
          </Text>
        }
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
