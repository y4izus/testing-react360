import { playSound } from "../utils";
import { translate } from "./position";
import { WIDTH, HEIGHT } from '../constants'

export const drawSound = coordinate =>
  playSound('finger-snap', translate(coordinate))

export const hasReachExit = coordinate => {
  console.log(coordinate)
  const [x, y] = coordinate
  return (x > WIDTH || x < -WIDTH) || (y > HEIGHT || y < -HEIGHT)
}

export const drawMap = map => map.forEach(drawSound)

const distanceColide = (direction, position) => (maxDistance, mapCell) => {
  const distance = mapCell[direction].value - position[direction.includes(['up', 'down']) === 'x' ? 0 : 1]
  mapCell[axis].ty && distance < maxDistance ? distance : maxDistance
}

export const minDistanceColide = (direction, position, maxDistance) => {
  return map.reduce(distanceColide(direction, position), ['up', 'down'].includes(direction) ? HEIGHT * 2 : WIDTH * 2)
}
