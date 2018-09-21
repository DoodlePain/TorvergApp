import React, { Component } from "react";
import { View, ScrollView, StyleSheet } from "react-native";
import { Text } from "react-native-elements";
import Navbar from "./Navbar";
import Striptags from "striptags";

var list = (news, i) => {
  var final = [];
  while (i !== 0) {
    if (i != 0) {
      var title = news[i].split("<img src=/images/new.gif>&nbsp;")[1];
      var date = title.split("</span>")[0];
      var text = title.split("</td></tr>")[0];
      var response = "";
      title = title.split("<br>")[0];
      date = date.split('">')[1];
      date = date.split(" inviato")[0];
      text = text.split("<tr><td>")[1];
      response = {
        title: fixedText(Striptags(title)),
        date: fixedText(Striptags(date)),
        text: fixedText(Striptags(text))
      };
      final.push(response);
    }
    i--;
  }
  return final;
};

var fixedText = text => {
  var fixedText = text;
  for (var k = 0; k < 100; k++) {
    fixedText = fixedText.replace("&nbsp;", "");
    fixedText = fixedText.replace("&rsquo;", "'");
    fixedText = fixedText.replace("&euro;", "€");
    fixedText = fixedText.replace("&rdquo;", '"');
    fixedText = fixedText.replace("&ldquo;", '"');
    fixedText = fixedText.replace("&agrave; ", "à");
    fixedText = fixedText.replace("&egrave; ", "è");
    fixedText = fixedText.replace("&igrave; ", "ì");
    fixedText = fixedText.replace("&ograve; ", "ò");
    fixedText = fixedText.replace("&ugrave; ", "ù");
    fixedText = fixedText.replace(" \n", "  ");
    fixedText = fixedText.replace("\r", " ");
  }
  return fixedText;
};
export default class News extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fetching: true
    };
  }

  render() {
    var fetchData = () => {
      var ultimate = [];
      var url = "http://informatica.uniroma2.it/f0?fid=50&srv=4&pag=0";
      var novita = [<Text key={-1} />];

      fetch(url)
        .then(resp => {
          return resp.text();
        })
        .then(text => {
          text = text.split("<body>")[1];
          text = text.split("</body>")[0];
          text = text.replace(/\u00a0/g, " ");
          var news = text.split("<table>");
          i = news.length - 1;
          ultimate = list(news, i);
          ultimate.map((el, i) => {
            novita.push(
              <ScrollView key={i}>
                <Text style={styles.Title} key={i + 100}>
                  {el.title}
                </Text>
                <Text style={styles.Date} key={i + 200}>
                  {el.date}
                </Text>
                <Text style={styles.Text} key={i + 300}>
                  {el.text}
                </Text>
              </ScrollView>
            );
          });
          this.setState({ fetching: novita });
          return novita;
        });
    };

    if (this.state.fetching === true) {
      novita = fetchData();
    }

    return (
      <View>
        <Navbar history={this.props.history} title={"Notizie"} />
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
