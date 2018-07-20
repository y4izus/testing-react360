import React from 'react';
import {
  AppRegistry,
  Text,
  View,
  asset,
  VrButton
} from 'react-360';
import { playSound } from './utils'
import styles from './styles'
import { translate } from './service/position';
import { updatePosition } from './service/inputs'
import { registerMap, drawMap } from './service/map'
import map from './static_assets/maps/easy.json'

drawMap(map)

export default class Hello360 extends React.Component {
  handleInput(e) {
    updatePosition(e)
    drawMap(map)
  }
  render() {
    return (
      <View style={styles.panel} onInput={this.handleInput} />
    );
  }
};

AppRegistry.registerComponent('Hello360', () => Hello360);
