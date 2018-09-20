import React, { Component } from "react";
import { Text, View } from "react-native";
import Styles from "./SidemenuStyle";

export default class Sidemenu extends Component {
  render() {
    return (
      <View className={Styles.Background}>
        <Text className={Styles.title}>Hello </Text>
      </View>
    );
  }
}
