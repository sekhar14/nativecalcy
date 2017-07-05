/**
 * Author : Sekhar Banarjee
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableNativeFeedback,
  Alert,
  ToastAndroid
} from 'react-native';
import Operator from './components/Operator'
import Numbers from './components/Numbers'

export default class calcy2 extends Component {

  constructor(props) {
    super(props)
    this.state = {
      current : '0',
      operatorPresent : ''
    }
    this.A = 0
    this.B = 0
    this.bstarts = 0
  }

  _handleOperator(opt) {
    //ToastAndroid.show(opt+' cliecked!', ToastAndroid.SHORT)
    let {current, operatorPresent} = this.state
    if (operatorPresent != '') {

    }
    switch(opt) {
      case 'DEL':
        if (current.length === 1) {
          this.setState({
            current : '0'
          })
        }else {
          if (current[current.length-1] === '+' ||
              current[current.length-1] === '-' ||
              current[current.length-1] === '*' ||
              current[current.length-1] === '/') {
            this.setState({
              current : current.slice(0, current.length-1),
              operatorPresent : ''
            })
          }else {
            this.setState({
              current : current.slice(0, current.length - 1)
            })
          }
        }
        break
      case '+':
        if (current === '0' || current === '0.' || current === '.') {
          return
        }else {
          if (operatorPresent === '') {
            this.setState({
              current : current + opt,
              operatorPresent : '+'
            })
            this.A = parseFloat(current)
            this.bstarts = current.length + 1
          }else {
            this.B = parseFloat(current.slice(this.bstarts, current.length - 1))
            this.setState({
              operatorPresent: '+',
              current: String(this.A + this.B) + '+',
            })
          }
        }
        break
        case '-':
          if (current === '0' || current === '0.' || current === '.') {
            return
          }else {
            this.setState({
              current : current + opt,
              operatorPresent : '+'
            })
          }
          break
        case '*':
          if (current === '0' || current === '0.' || current === '.') {
            return
          }else {
            this.setState({
              current : current + opt,
              operatorPresent : '+'
            })
          }
          break
        case '/':
          if (current === '0' || current === '0.' || current === '.') {
            return
          }else {
            this.setState({
              current : current + opt,
              operatorPresent : '+'
            })
          }
          break
    }
  }

  _handleNum(num) {
    //ToastAndroid.show(num+' cliecked!', ToastAndroid.SHORT)
    let {current} = this.state
    if (num === '=') {

    }
    if (current === '0') {
        this.setState({
          current : num
        })
    }else {
      this.setState({
        current : current + num
      })
    }
  }

  render() {
    console.log(this.state)
    console.log(this.A)
    console.log(this.B)
    return (
      <View style={styles.container}>
        <Text style={styles.resultcanvas}>
          {this.state.current}
        </Text>
        <View style={styles.userinput}>
          <View style={styles.numbers}>
            <Numbers numbers = {['7', '8', '9']}
              numstyle={styles.number}
              rowstyle={styles.row}
              onClick={ (num) => this._handleNum(num)}
            />
            <Numbers
              numbers = {['4', '5', '6']}
              numstyle = {styles.number}
              rowstyle={styles.row}
              onClick = { (num) => this._handleNum(num)}
            />
            <Numbers
              numbers = {['1', '2', '3']}
              numstyle = {styles.number}
              rowstyle = {styles.row}
              onClick = {(num) => this._handleNum(num)}
            />
            <Numbers
              numbers = {['.', '0', '=']}
              numstyle = {styles.number}
              rowstyle = {styles.row}
              onClick = {(num) => this._handleNum(num)}
            />
          </View>
          <View style={styles.operators}>
            <Operator operator="DEL" stylesheet={styles.operator}
              onPress={() => this._handleOperator('DEL')}
            />
            <Operator operator="/" stylesheet={styles.operator}
              onPress={() => this._handleOperator('/')}
            />
            <Operator operator="*" stylesheet={styles.operator}
              onPress={() => this._handleOperator('*')}
            />
            <Operator operator="+" stylesheet={styles.operator}
              onPress={() => this._handleOperator('+')}
            />
            <Operator operator="-" stylesheet={styles.operator}
              onPress={() => this._handleOperator('-')}
            />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  resultcanvas: {
    fontSize: 30,
    flex: 1,
    width: "100%",
    textAlign : 'right',
    fontSize: 60,
    paddingTop: 40,
  },
  userinput: {
    flex: 2,
    flexDirection: 'row',
  },
  numbers: {
    height: "100%",
    flex:3,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  operators: {
    backgroundColor: 'green',
    height: "100%",
    flex:1,
    flexDirection: 'column',
  },
  operator: {
    backgroundColor: 'grey',
    flex: 1,
    fontSize: 30,
    textAlign: 'center',
    padding: 10,
    minHeight:50,
  },
  number: {
    backgroundColor: 'orange',
    flex: 1,
    fontSize: 50,
    textAlign: 'center',
    padding: 10,
  },
  row: {
    width: "100%",
    flex: 1,
    flexDirection: 'row',
  }
});

AppRegistry.registerComponent('calcy2', () => calcy2);
