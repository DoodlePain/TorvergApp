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
import Tabviewer2 from "./Tabviewer2";
import Tabviewer3 from "./Tabviewer3";
import Esami from "./Esami";
import { NativeRouter, Switch, Route } from "react-router-native";

export default class App extends React.Component {
  render() {
    return (
      <NativeRouter>
        <View>
          <Switch>
            <Route exact path="/" component={Body} />
            <Route exact path="/Notizie" component={News} />
            <Route exact path="/Lezioni" component={Yearchooser} />
            <Route exact path="/Lezioni/Primo" component={Orarioprimo} />
            <Route exact path="/Lezioni/Primo/Lunedi" component={Tabviewer} />
            <Route exact path="/Lezioni/Primo/Martedi" component={Tabviewer} />
            <Route
              exact
              path="/Lezioni/Primo/Mercoledi"
              component={Tabviewer}
            />
            <Route exact path="/Lezioni/Primo/Giovedi" component={Tabviewer} />
            <Route exact path="/Lezioni/Primo/Venerdi" component={Tabviewer} />
            <Route
              exact
              path="/Lezioni/Secondo/Lunedi"
              component={Tabviewer2}
            />
            <Route
              exact
              path="/Lezioni/Secondo/Martedi"
              component={Tabviewer2}
            />
            <Route
              exact
              path="/Lezioni/Secondo/Mercoledi"
              component={Tabviewer2}
            />
            <Route
              exact
              path="/Lezioni/Secondo/Giovedi"
              component={Tabviewer2}
            />
            <Route
              exact
              path="/Lezioni/Secondo/Venerdi"
              component={Tabviewer2}
            />
            <Route exact path="/Lezioni/Terzo/Lunedi" component={Tabviewer3} />
            <Route exact path="/Lezioni/Terzo/Martedi" component={Tabviewer3} />
            <Route
              exact
              path="/Lezioni/Terzo/Mercoledi"
              component={Tabviewer3}
            />
            <Route exact path="/Lezioni/Terzo/Giovedi" component={Tabviewer3} />
            <Route exact path="/Lezioni/Terzo/Venerdi" component={Tabviewer3} />
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
