import { playSound } from "../utils";
import { translate } from "./position";
import { WIDTH, HEIGHT } from '../constants'

export const drawSound = coordinate =>
  playSound('finger-snap', translate(coordinate))

export const hasReachExit = coordinate => {
  console.log(coordinate)
  const [x, y] = coordinate
  return (x > WIDTH || x < 0) || (y > HEIGHT || y < 0)
}

export const drawMap = map =>
  map.forEach(drawSound)