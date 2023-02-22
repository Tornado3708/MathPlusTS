let SQRT3_3 = Math.SQRT3 / 3

/**
 * Vector and points constants (2d).
 */
export let const2d = {

  ZERO : { x:  0 , y:  0 },
  DOWN : { x:  0 , y: -1 },
  LEFT : { x: -1 , y:  0 },
  RIGHT: { x:  1 , y:  0 },
  UP   : { x:  0 , y:  1 },

  LEFT_DOWN : { x: -Math.SQRT1_2 , y: -Math.SQRT1_2 },
  LEFT_UP   : { x: -Math.SQRT1_2 , y:  Math.SQRT1_2 },
  RIGHT_DOWN: { x:  Math.SQRT1_2 , y: -Math.SQRT1_2 },
  RIGHT_UP  : { x:  Math.SQRT1_2 , y:  Math.SQRT1_2 },

}

/**
 * Vector and point constants (3d).
 */
export let const3d = {
  ZERO   : { x:  0 , y:  0 , z:  0 },
  LEFT   : { x: -1 , y:  0 , z:  0 },
  RIGHT  : { x:  1 , y:  0 , z:  0 },
  DOWN   : { x:  0 , y: -1 , z:  0 },
  UP     : { x:  0 , y:  1 , z:  0 },
  BACK   : { x:  0 , y:  0 , z: -1 },
  FORWARD: { x:  0 , y:  0 , z:  1 },

  FORWARD_DOWN : { x:  0            , y: -Math.SQRT1_2 , z:  Math.SQRT1_2 },
  FORWARD_LEFT : { x: -Math.SQRT1_2 , y:  0            , z:  Math.SQRT1_2 },
  FORWARD_RIGHT: { x:  Math.SQRT1_2 , y:  0            , z:  Math.SQRT1_2 },
  FORWARD_UP   : { x:  0            , y:  Math.SQRT1_2 , z:  Math.SQRT1_2 },
  LEFT_BACK    : { x: -Math.SQRT1_2 , y:  0            , z: -Math.SQRT1_2 },
  LEFT_DOWN    : { x: -Math.SQRT1_2 , y: -Math.SQRT1_2 , z:  0 },
  LEFT_UP      : { x: -Math.SQRT1_2 , y:  Math.SQRT1_2 , z:  0 },
  RIGHT_DOWN   : { x:  Math.SQRT1_2 , y: -Math.SQRT1_2 , z:  0 },
  RIGHT_UP     : { x:  Math.SQRT1_2 , y:  Math.SQRT1_2 , z:  0 },
  RIGHT_BACK   : { x:  Math.SQRT1_2 , y:  0            , z: -Math.SQRT1_2 },
  BACK_DOWN    : { x:  0            , y: -Math.SQRT1_2 , z: -Math.SQRT1_2 },
  BACK_UP      : { x:  0            , y:  Math.SQRT1_2 , z: -Math.SQRT1_2 },

  LEFT_DOWN_BACK    :{ x: -SQRT3_3 , y: -SQRT3_3 , z: -SQRT3_3 },
  LEFT_DOWN_FORWARD :{ x: -SQRT3_3 , y: -SQRT3_3 , z:  SQRT3_3 },
  LEFT_UP_BACK      :{ x: -SQRT3_3 , y:  SQRT3_3 , z: -SQRT3_3 },
  LEFT_UP_FORWARD   :{ x: -SQRT3_3 , y:  SQRT3_3 , z:  SQRT3_3 },
  RIGHT_DOWN_BACK   :{ x:  SQRT3_3 , y: -SQRT3_3 , z: -SQRT3_3 },
  RIGHT_DOWN_FORWARD:{ x:  SQRT3_3 , y: -SQRT3_3 , z:  SQRT3_3 },
  RIGHT_UP_BACK     :{ x:  SQRT3_3 , y:  SQRT3_3 , z: -SQRT3_3 },
  RIGHT_UP_FORWARD  :{ x:  SQRT3_3 , y:  SQRT3_3 , z:  SQRT3_3 },

}