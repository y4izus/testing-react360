import { hasReachExit } from "./map";

let position = [0, 0, 0]

export const getPosition = () => position

export const translate = movement => [
  position[0] + movement[0],
  position[1] + movement[1],
  position[2] + movement[2]
]

export const move = movement => {
  if (hasReachExit(position)) {
    console.log('reach exit')
    return
  }
  position = translate(movement)
}

/*
const cos = Math.cos
const sin = Math.sin
const rotateX = angle => ({
  x: position.x,
  y: cos(angle) * pos.y - sin(angle) * pos.z,
  z: cos(angle) * pos.z - sin(angle) * pos.y
})

const rotateY = angle => ({
  x: cos(angle) * pos.x + sin(angle) * pos.z,
  y: position.y,
  z: cos(angle) * pos.z - sin(angle) * pos.x
})

const rotateZ = angle => ({
  x: cos(angle) * pos.x + sin(angle) * pos.y,
  y: sin(angle) * pos.x + cos(angle) * pos.y,
  z: position.z
})

export const rotate = (axis, angle) => {
  switch (axis) {
    case 'x':
      return rotateX(angle)
    case 'y':
      return rotateY(angle)
    case 'z':
      return rotateZ(angle)
  }
}*/