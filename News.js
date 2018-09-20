import React, { Component } from "react";
import { View } from "react-native";
import { Text } from "react-native-elements";
import Navbar from "./Navbar";

export default class News extends Component {
  constructor(props) {
    super(props);
    console.log();
  }
  render() {
    var url = "http://informatica.uniroma2.it/f0?fid=50&srv=4&pag=0";
    fetch(url)
      .then(resp => {
        return resp.text();
        console.log("Working");
      })
      .then(text => {
        // console.log(text);
      });
    return (
      <View>
        <Navbar history={this.props.history} />
        <Text>Ciao</Text>
      </View>
    );
  }
}
