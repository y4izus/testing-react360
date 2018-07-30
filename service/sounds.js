import {
  asset,
  NativeModules
} from 'react-360';
const { AudioModule } = NativeModules
// Play a sound to the user's right (3 meters down the positive x-axis)
export function playSound(name, position) {
  AudioModule.createAudio(name, {
    source: asset(`/sounds/${name}.mp4`),
    is3d: true,
    loop: true
  })
  AudioModule.play(name, { position })
}

export function stopSound(name) {
  AudioModule.destroy(name)
}