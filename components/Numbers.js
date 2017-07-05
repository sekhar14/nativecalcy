import React from 'react'
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableNativeFeedback,
  Alert,
  ToastAndroid
} from 'react-native';


export default class Numbers extends React.Component {
  render() {
    let numbers = this.props.numbers.map((num, key) => {
      return (
        <TouchableNativeFeedback key={key}
          onPress = { () => this.props.onClick(num)}
        >
          <Text
            style={this.props.numstyle}
          >{num}</Text>
        </TouchableNativeFeedback>
    )})
    return (
      <View style={this.props.rowstyle}>
        {numbers}
      </View>
    )
  }
}
