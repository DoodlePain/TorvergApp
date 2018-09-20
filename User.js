import React from 'react';
import { ActivityIndicator, Text, View } from 'react-native';

export default class User extends React.Component {

    constructor(props){
      super(props)
    }

    render(){
      return(
        <View style={{flex: 1, paddingTop:20}}>
        <Text>{this.props.data}</Text>
        </View>
      );
    }
  }
