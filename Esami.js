import React, { Component } from "react";
import { View } from "react-native";
import { ListItem } from "react-native-elements";
import Navbar from "./Navbar";
const list = [
  {
    title: "Invernale",
    path: "Invernale",
    iconType: "MaterialIcons",
    icon: "ac-unit"
  },
  {
    title: "Estiva anticipata",
    path: "Anticipata",
    iconType: "MaterialIcons",
    icon: "looks"
  },
  {
    title: "Estiva",
    path: "Estiva",
    iconType: "MaterialIcons",
    icon: "wb-sunny"
  },
  {
    title: "Autunnale",
    path: "Autunnale",
    iconType: "MaterialIcons",
    icon: "wb-cloudy"
  }
];

export default class Esami extends Component {
  constructor(props) {
    super(props);
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
        {list.map((item, index) => {
          return (
            <ListItem
              key={index}
              title={item.title}
              leftIcon={{ name: item.icon, type: item.iconType }}
              onPress={() => {
                this.props.history.push("/" + item.path);
              }}
            />
          );
        })}
      </View>
    );
  }
}
