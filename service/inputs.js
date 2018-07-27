import { move, getPosition, translate } from "./position";
import { playSound } from "../utils";
import { minDistanceColide } from './map'

const isRequestForSound = inputEvent =>
  [87, 83, 65, 68].includes(inputEvent.button) && inputEvent.action === 'down'
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

// TODO: Calculate exit on given direction
const calculateExit = (position, direction) => {
  return position
}

const locateSound = inputEvent => {
  const direction = getDirection(inputEvent)
  const cell = minDistanceColide(direction, getPosition())
  if (!cell) {
    return playSound('exit', calculateExit(getPosition(), direction))
  }
  return playSound(cell.type, translate(cell.value))
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
  if (isRequestForSound(inputEvent))
    return locateSound(inputEvent)
}
