import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  asset,
  NativeModules,
  VrButton
} from 'react-360';

const { AudioModule } = NativeModules

// Play a sound to the user's right (3 meters down the positive x-axis)
function playSound(name, position) {

  AudioModule.createAudio(name, {
    source: asset(`/sounds/${name}.mp4`),
    is3d: true,
  })
  AudioModule.play(name, { position })
  AudioModule.destroy(name)
}
export default class Hello360 extends React.Component {
  render() {
    return (
      <View style={styles.panel}>
        <View style={styles.greetingBox}>
          <VrButton onClick={() => { playSound('finger-snap', [10, 0, 0]) }}>
            <Text style={styles.greeting}>
              Play a sound to the user's right (10 meters down the positive x-axis)
            </Text>
          </VrButton>
          <VrButton onClick={() => {
            playSound('finger-snap', [1, 0, 0])
          }}>
            < Text style={styles.greeting} >
              Play a sound to the user's right (1 meters down the positive y-axis)
            </Text>
          </VrButton>
          <VrButton onClick={() => {
            playSound('finger-snap', [-10, 0, 0])
          }}>
            < Text style={styles.greeting} >
              Play a sound to the user's left (10 meters down the positive x-axis)
            </Text>
          </VrButton>
          <VrButton onClick={() => {
            playSound('finger-snap', [-1, 0, 0])
          }}>
            < Text style={styles.greeting} >
              Play a sound to the user's left (1 meters down the positive y-axis)
            </Text >
          </VrButton >
        </View >
      </View >
    );
  }
};

const styles = StyleSheet.create({
  panel: {
    // Fill the entire surface
    width: 1000,
    height: 600,
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  greetingBox: {
    padding: 20,
    backgroundColor: '#000000',
    borderColor: '#639dda',
    borderWidth: 2,
  },
  greeting: {
    fontSize: 30,
  },
});

AppRegistry.registerComponent('Hello360', () => Hello360);
