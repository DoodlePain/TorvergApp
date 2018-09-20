import React, { Component } from "react";
import { View, Image } from "react-native";
import { Card, Text, ListItem, Button, Icon } from "react-native-elements";
import Navbar from "./Navbar";

export default class tabviewer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      orario: null
    };
  }

  shouldComponentUpdate(nextProprs, nextState) {
    if (nextState === this.state) {
      console.log("NotUpdating");
      return false;
    }
    return true;
  }

  componentDidMount = () => {
    var url = "http://informatica.uniroma2.it/pages/trien/orario/orario.htm";
    fetch(url)
      .then(resp => {
        return resp.text();
      })
      .then(text => {
        var orario = [];
        text = text.split("00</td>");
        var app = [];
        var app2 = [];
        var app3 = [];
        var app4 = [];
        var app5 = [];
        var ore = [
          "9:00 : ",
          "10:00 : ",
          "11:00 : ",
          "12:00 : ",
          "13:00 : ",
          "14:00 : ",
          "15:00 : ",
          "16:00 : ",
          "17:00 : ",
          "18:00 : "
        ];
        for (i = 1; i < 11; i++) {
          bodya = text[i].split('</tr><tr style="');
          bodya = bodya[0];
          bodya = bodya.split("<td");
          body1 = bodya[1];
          body1 = body1.split(">");
          if (body1[2] != "") {
            body1 = "\n" + ore[i - 1] + "" + body1[2].replace("</a", "");
          } else {
            body1 = "\n" + ore[i - 1] + "" + "Nulla";
          }
          app.push(body1);
          body2 = bodya[2];
          body2 = body2.split(">");
          if (body2[2] != "") {
            body2 = "\n" + ore[i - 1] + "" + body2[2].replace("</a", "");
          } else {
            body2 = "\n" + ore[i - 1] + "" + "Nulla";
          }
          app2.push(body2);
          body3 = bodya[3];
          body3 = body3.split(">");
          if (body3[2] != "") {
            body3 = "\n" + ore[i - 1] + "" + body3[2].replace("</a", "");
          } else {
            body3 = "\n" + ore[i - 1] + "" + "Nulla";
          }
          app3.push(body3);
          body4 = bodya[4];
          body4 = body4.split(">");
          if (body4[2] != "") {
            body4 = "\n" + ore[i - 1] + "" + body4[2].replace("</a", "");
          } else {
            body4 = "\n" + ore[i - 1] + "" + "Nulla";
          }
          app4.push(body4);
          body5 = bodya[5];
          body5 = body5.split(">");
          if (body5[2] == "</tr") {
            body5[2] = "";
          }
          if (body5[2] != "") {
            body5 = "\n" + ore[i - 1] + "" + body5[2].replace("</a", "");
          } else {
            body5 = "\n" + ore[i - 1] + "" + "Nulla";
          }
          app5.push(body5);
        }
        orario.push(app, app2, app3, app4, app5);
        var axax = [];
        orario[0].map(ora => {
          axax = [...axax, <Text>{ora}</Text>];
        });
        this.setState({
          orario: axax
        });
      });
  };
  render() {
    var orario = [<Text />];
    this.fetchData;
    console.log("null");
    var titolo = "";
    if (this.state.orario !== null) {
      var title = JSON.stringify(this.props.match.url);
      title = title.split("/");
      titolo = title[title.length - 1].split('"')[0];
      this.state.orario.map((el, i) => {
        orario.push(
          <Text h4 key={i}>
            {el}
          </Text>
        );
      });
    }

    return (
      <View>
        <Navbar history={this.props.history} />
        <Text h1>{titolo}</Text>
        {orario}
      </View>
    );
  }
}
