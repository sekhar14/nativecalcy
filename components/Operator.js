import React from 'react'

import {
  Text,
  View,
  TouchableNativeFeedback,
  Alert
} from 'react-native';


export default class Operator extends React.Component{
  render() {
    return (
      <TouchableNativeFeedback
        onPress = {this.props.onPress}
        background={TouchableNativeFeedback.SelectableBackground()}>
        <Text style={this.props.stylesheet}>
          {this.props.operator}
        </Text>
      </TouchableNativeFeedback>
    )
  }
}
