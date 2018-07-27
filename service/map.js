import { playSound } from "../utils";
import { translate } from "./position";
import { WIDTH, HEIGHT } from '../constants'
import map from '../static_assets/maps/easy.json'

export const drawSound = cell =>
  playSound('finger-snap', translate(cell.value))

export const hasReachExit = coordinate => {
  const [x, y] = coordinate
  return (x > WIDTH || x < -WIDTH) || (y > HEIGHT || y < -HEIGHT)
}

const getAxis = direction => direction.includes(['up', 'down']) ? 0 : 1
const getOppositveAxis = direction => direction.includes(['up', 'down']) ? 1 : 0

const getCellsInSameDirection = (direction, position, map) => {
  const axis = getOppositveAxis(direction)
  return map.filter(cell => !cell.emptyOn.includes(direction)).filter(cell => {
    return cell.value[axis] === position[axis]
  })
}

const getClosestCellOnAxis = (axis, cellsInSameDirection) => {
  return cellsInSameDirection.reduce((minDistanceCell, cell) => cell.value[axis] < minDistanceCell.value[axis] ? cell : minDistanceCell, cellsInSameDirection[0])
}

export const minDistanceColide = (direction, position) => {
  const axis = getAxis(direction)
  const cellsInSameDirection = getCellsInSameDirection(direction, position, map.cells)
  return getClosestCellOnAxis(axis, cellsInSameDirection)
}