import * as React from "react";
import { View, Text } from "react-native";
import Navbar from "./Navbar";
import { ListItem } from "react-native-elements";

const list = [
  {
    title: "Lunedi"
  },
  {
    title: "Martedi"
  },
  {
    title: "Mercoledi"
  },
  {
    title: "Giovedi"
  },
  {
    title: "Venerdi"
  }
];

class Orarioprimo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      orario: null
    };
    this.table = null;
  }

  shouldComponentUpdate(nextProprs, nextState) {
    if (nextState.orario == this.state.orario) {
      return false;
    }
    return true;
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
              leftIcon={{ name: item.icon }}
              onPress={() => {
                this.props.history.push("/Lezioni/Primo/" + item.title);
              }}
            />
          );
        })}
      </View>
    );
  }
}

export default Orarioprimo;
