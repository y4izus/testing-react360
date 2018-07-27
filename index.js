import React from 'react';
import {
  AppRegistry,
  View,
} from 'react-360';
import styles from './styles'
import { handleInput } from './service/inputs'


export default class Hello360 extends React.Component {
  handleInput(e) {
    const event = e.nativeEvent
    const inputEvent = event.inputEvent
    handleInput(inputEvent)
  }
  render() {
    return (
      <View style={styles.panel} onInput={this.handleInput} />
    );
  }
};

AppRegistry.registerComponent('Hello360', () => Hello360);
