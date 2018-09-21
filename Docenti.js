import React, { Component } from "react";
import { View, ScrollView, StyleSheet } from "react-native";
import { Text } from "react-native-elements";
import Navbar from "./Navbar";
import striptags from "striptags";

export default class Docenti extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fetching: true
    };
  }
  render() {
    var fetchData = () => {
      var url = "http://informatica.uniroma2.it/f0?fid=30&srv=4&cdl=0";
      var novita = [<Text key={-1} />];
      var ultimate = [];
      fetch(url)
        .then(resp => {
          return resp.text();
        })
        .then(text => {
          text = text.replace(/&nbsp;/gi, " ");
          text = text.replace("null", " ");
          text = text.split(
            "<td><a href=\"#\" onMouseOver=f2('null') onMouseOut=f1()>"
          );
          i = 1;
          var result = docs(text, i);
          this.setState({
            fetching: result
          });
        });
    };
    var docs = (text, i) => {
      var row = [];
      while (i != 500) {
        if (text[i] != undefined) {
          var name = striptags(text[i].split("<td>")[0]);
          var ruolo = striptags(text[i].split("<td>")[1]);
          var ufficio = striptags(text[i].split("<td>")[2]);
          var telefono = striptags(text[i].split("<td>")[3]);
          if (telefono[0] != "+" && telefono[0] != "n" && telefono[0] != " ") {
            telefono = "+39" + telefono;
          }
          var mail = text[i].split("<td>")[3];
          var mail = mail.split("@");
          mail1 = mail[0].split(":")[2];
          if (mail[1] != undefined) {
            mail2 = mail[1].split("  '")[0];
            mail = mail1 + "" + mail2;
          } else {
            mail = "Non definita";
          }
          telefono = telefono.replace("-", "");
          telefono = telefono.replace("-", "");
          telefono = telefono.replace(".", "");
          telefono = telefono.replace(" ", "");
          telefono = telefono.replace(" ", "");
          var materia = striptags(text[i].split("<td>")[4]);
          row.push(
            <ScrollView key={i}>
              <Text style={styles.Title} key={i + 100}>
                {name} {" - "} {materia.replace(".", "")}
              </Text>
              <Text h5 key={i + 200}>
                Ufficio : {ufficio}
              </Text>
              <Text h5 key={i + 300}>
                Materia : {materia}
              </Text>
              <Text h5 key={i + 400}>
                Telefono : {telefono}
              </Text>
              <Text style={styles.Text} key={i + 500}>
                Mail : {mail}
              </Text>
            </ScrollView>
          );
          i++;
        } else {
          i = 500;
        }
      }
      return row;
    };

    if (this.state.fetching === true) {
      docenti = fetchData();
    }

    return (
      <View>
        <Navbar history={this.props.history} />
        <ScrollView>{this.state.fetching}</ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  Title: {
    fontWeight: "bold",
    fontSize: 20,
    paddingBottom: 0
  },
  Date: {
    color: "red",
    paddingBottom: 5
  },
  Text: {
    paddingBottom: 20
  }
});
