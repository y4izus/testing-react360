import { move, getPosition, translate } from "./position";
import { playSound } from "./sounds";
import { minDistanceColide, calculateExitPosition } from './map'

const isRequestForSound = inputEvent =>
  [87, 83, 65, 68].includes(inputEvent.button) && inputEvent.action === 'down'
const isRequestForSoundStop = inputEvent =>
  [87, 83, 65, 68].includes(inputEvent.button) && inputEvent.action === 'up'
const isMovement = inputEvent =>
  [37, 38, 39, 40].includes(inputEvent.button) && inputEvent.action === 'down'

const getDirection = inputEvent => {
  switch (inputEvent.button) {
    case 87:
      return 'up'
    case 83:
      return 'down'
    case 65:
      return 'left'
    case 68:
      return 'right'
  }
}

const locateSound = inputEvent => {
  const direction = getDirection(inputEvent)
  return minDistanceColide(direction, getPosition())
}

const updatePosition = inputEvent => {
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

export const handleInput = inputEvent => {
  if (isMovement(inputEvent)) {
    return updatePosition(inputEvent)
  }
  const cell = locateSound(inputEvent)
  if (isRequestForSound(inputEvent)) {
    if (!cell) {
      return playSound('exit', translate(calculateExitPosition(getPosition(), direction)))
    }
    return playSound(cell.type, translate(cell.value))
  }
  if (isRequestForSoundStop(inputEvent)) {
    if (!cell) {
      return stopSound('exit')
    }
    return stopSound(cell.type)
  }
}
