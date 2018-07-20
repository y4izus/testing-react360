import React from 'react';
import {
  AppRegistry,
  Text,
  View,
  VrButton
} from 'react-360';
import { playSound } from './utils'
import styles from './styles'
import { translate } from './service/position';
import { handleInput } from './service/inputs'

export default class Hello360 extends React.Component {
  render() {
    return (
      <View style={styles.panel} onInput={handleInput}>
        <View style={styles.greetingBox}>
          <VrButton onClick={() => { playSound('finger-snap', translate([10, 0, 0])) }}>
            <Text style={styles.greeting}>
              Play a sound to the user's right (10 meters down the positive x-axis)
            </Text>
          </VrButton>
        </View >
      </View >
    );
  }
};

AppRegistry.registerComponent('Hello360', () => Hello360);
