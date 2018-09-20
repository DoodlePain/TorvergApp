import React, { Component } from "react";
import { View } from "react-native";
import { ListItem } from "react-native-elements";
import Navbar from "./Navbar";
const list = [
  {
    title: "Primo"
  },
  {
    title: "Secondo"
  },
  {
    title: "Terzo"
  }
];

export default class Yearchooser extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View>
        <Navbar history={this.props.history} />
        {list.map((item, index) => {
          return (
            <ListItem
              key={index}
              title={item.title}
              onPress={() => {
                this.props.history.push("/Lezioni/" + item.title);
              }}
            />
          );
        })}
      </View>
    );
  }
}
