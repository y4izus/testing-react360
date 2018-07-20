import { move, getPosition } from "./position";

export const updatePosition = e => {
  const event = e.nativeEvent
  const inputEvent = event.inputEvent
  if (inputEvent.action !== 'down') return
  switch (inputEvent.button) {
    case 38:
      return move([0, 1, 0])
    case 40:
      return move([0, -1, 0])
    case 39:
      return move([1, 0, 0])
    case 37:
      return move([-1, 0, 0])
  }
}