import React from "react";
import { View } from "react-native";
import Body from "./Body";
import News from "./News";
import Docenti from "./Docenti";
import Yearchooser from "./Yearchooser";
import Orarioprimo from "./Orarioprimo";
import Orariosecondo from "./Orariosecondo";
import Orarioterzo from "./Orarioterzo";
import Tabviewer from "./Tabviewer";
import Esami from "./Esami";
import { NativeRouter, Switch, Route } from "react-router-native";

export default class App extends React.Component {
  render() {
    return (
      <NativeRouter>
        <View>
          <Switch>
            <Route exact path="/" component={Body} />
            <Route exact path="/Notizie" component={Tabviewer} />
            <Route exact path="/Lezioni" component={Yearchooser} />
            <Route exact path="/Lezioni/Primo" component={Orarioprimo} />
            <Route exact path="/Lezioni/Primo/Lunedi" component={Tabviewer} />
            <Route
              exact
              path="/Lezioni/Primo/Martedi"
              component={Orarioprimo}
            />
            <Route
              exact
              path="/Lezioni/Primo/Mercoledi"
              component={Orarioprimo}
            />
            <Route
              exact
              path="/Lezioni/Primo/Giovedi"
              component={Orarioprimo}
            />
            <Route
              exact
              path="/Lezioni/Primo/Venerdi"
              component={Orarioprimo}
            />
            <Route exact path="/Lezioni/Secondo" component={Orariosecondo} />
            <Route exact path="/Lezioni/Terzo" component={Orarioterzo} />
            <Route exact path="/Docenti" component={Docenti} />
            <Route exact path="/Esami" component={Esami} />
          </Switch>
        </View>
      </NativeRouter>
    );
  }
}
