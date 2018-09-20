import React, { Component } from "react";
import { View } from "react-native";
import { Text } from "react-native-elements";
import Navbar from "./Navbar";
import striptags from "striptags";

export default class Docenti extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    var url = "http://informatica.uniroma2.it/f0?fid=30&srv=4&cdl=0";
    fetch(url)
      .then(resp => {
        console.log("Working");
        return resp.text();
      })
      .then(text => {
        text = text.replace(/&nbsp;/gi, " ");
        text = text.replace("null", " ");
        text = text.split(
          "<td><a href=\"#\" onMouseOver=f2('null') onMouseOut=f1()>"
        );
        i = 1;
        docs(text, i);
        // console.log(text);
      });

    docs = (text, i) => {
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
        var row =
          "<b>" +
          name +
          "</b> \nRuolo : " +
          ruolo +
          "\nStudio : " +
          ufficio +
          "\nTelefono : " +
          telefono +
          "\nMateria : " +
          materia +
          "\nEmail : " +
          mail;
        console.log(row);
      }
    };
    return (
      <View>
        <Navbar history={this.props.history} />
        <Text>Ciao</Text>
      </View>
    );
  }
}
