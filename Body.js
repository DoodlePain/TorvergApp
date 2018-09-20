import React, { Component } from "react";
import { View } from "react-native";
import { ListItem } from "react-native-elements";
import Topbar from "./Topbar";

const list = [
  {
    title: "Notizie",
    icon: "mail"
  },
  {
    title: "Lezioni",
    icon: "bookmark"
  },
  {
    title: "Docenti",
    icon: "face"
  },
  {
    title: "Esami",
    icon: "book"
  }
];

export default class Body extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View>
        <Topbar />
        {list.map((item, index) => {
          return (
            <ListItem
              key={index}
              title={item.title}
              leftIcon={{ name: item.icon }}
              onPress={() => {
                this.props.history.push("/" + item.title);
              }}
            />
          );
        })}
      </View>
    );
  }
}
