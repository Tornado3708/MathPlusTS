let SQRT3_3 = Math.SQRT3 / 3

/**
 * Vector and points constants (2d).
 */
export const const2d = {

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
export const const3d = {
  ZERO   : { ...const2d.ZERO  , z:  0 },
  LEFT   : { ...const2d.LEFT  , z:  0 },
  RIGHT  : { ...const2d.RIGHT , z:  0 },
  DOWN   : { ...const2d.DOWN  , z:  0 },
  UP     : { ...const2d.UP    , z:  0 },
  BACK   : { ...const2d.ZERO  , z: -1 },
  FORWARD: { ...const2d.ZERO  , z:  1 },

  FORWARD_DOWN : { x:  0            , y: -Math.SQRT1_2 , z:  Math.SQRT1_2 },
  FORWARD_LEFT : { x: -Math.SQRT1_2 , y:  0            , z:  Math.SQRT1_2 },
  FORWARD_RIGHT: { x:  Math.SQRT1_2 , y:  0            , z:  Math.SQRT1_2 },
  FORWARD_UP   : { x:  0            , y:  Math.SQRT1_2 , z:  Math.SQRT1_2 },
  LEFT_BACK    : { x: -Math.SQRT1_2 , y:  0            , z: -Math.SQRT1_2 },
  LEFT_DOWN    : { ...const2d.LEFT_DOWN  , z:  0 },
  LEFT_UP      : { ...const2d.LEFT_UP    , z:  0 },
  RIGHT_DOWN   : { ...const2d.RIGHT_DOWN , z:  0 },
  RIGHT_UP     : { ...const2d.RIGHT_UP   , z:  0 },
  RIGHT_BACK   : { x:  Math.SQRT1_2 , y:  0            , z: -Math.SQRT1_2 },
  BACK_DOWN    : { x:  0            , y: -Math.SQRT1_2 , z: -Math.SQRT1_2 },
  BACK_UP      : { x:  0            , y:  Math.SQRT1_2 , z: -Math.SQRT1_2 },

  LEFT_DOWN_BACK    : { x: -SQRT3_3 , y: -SQRT3_3 , z: -SQRT3_3 },
  LEFT_DOWN_FORWARD : { x: -SQRT3_3 , y: -SQRT3_3 , z:  SQRT3_3 },
  LEFT_UP_BACK      : { x: -SQRT3_3 , y:  SQRT3_3 , z: -SQRT3_3 },
  LEFT_UP_FORWARD   : { x: -SQRT3_3 , y:  SQRT3_3 , z:  SQRT3_3 },
  RIGHT_DOWN_BACK   : { x:  SQRT3_3 , y: -SQRT3_3 , z: -SQRT3_3 },
  RIGHT_DOWN_FORWARD: { x:  SQRT3_3 , y: -SQRT3_3 , z:  SQRT3_3 },
  RIGHT_UP_BACK     : { x:  SQRT3_3 , y:  SQRT3_3 , z: -SQRT3_3 },
  RIGHT_UP_FORWARD  : { x:  SQRT3_3 , y:  SQRT3_3 , z:  SQRT3_3 },

}




export const const_polar = {

  ZERO : { azimuth:  0          , radius: 0 },
  DOWN : { azimuth: -Math.PI*.5 , radius: 1 },
  LEFT : { azimuth:  Math.PI    , radius: 1 },
  RIGHT: { azimuth:  0          , radius: 1 },
  UP   : { azimuth:  Math.PI*.5 , radius: 1 },


  LEFT_UP    : { azimuth:  Math.PI * .75  , radius: 1 },
  LEFT_DOWN  : { azimuth: -Math.PI * .75  , radius: 1 },
  RIGHT_UP   : { azimuth:  Math.PI * .25  , radius: 1 },
  RIGHT_DOWN : { azimuth: -Math.PI * .25  , radius: 1 },

}


export const const_cylindrical = {
  
  ZERO   : { ...const_polar.ZERO  , z:  0 },
  DOWN   : { ...const_polar.DOWN  , z:  0 },
  LEFT   : { ...const_polar.LEFT  , z:  0 },
  RIGHT  : { ...const_polar.RIGHT , z:  0 },
  UP     : { ...const_polar.UP    , z:  0 },
  BACK   : { ...const_polar.ZERO  , z: -1 },
  FORWARD: { ...const_polar.ZERO  , z:  1 },
  
  LEFT_UP       : { ...const_polar.LEFT_UP    , z:  0 },
  LEFT_DOWN     : { ...const_polar.LEFT_DOWN  , z:  0 },
  LEFT_BACK     : { ...const_polar.LEFT       , z: -1 },
  LEFT_FORWARD  : { ...const_polar.LEFT       , z:  1 },
  RIGHT_UP      : { ...const_polar.RIGHT_UP   , z:  0 },
  RIGHT_DOWN    : { ...const_polar.RIGHT_DOWN , z:  0 },
  RIGHT_BACK    : { ...const_polar.RIGHT      , z: -1 },
  RIGHT_FORWARD : { ...const_polar.RIGHT      , z:  1 },
  DOWN_BACK     : { ...const_polar.DOWN       , z: -1 },
  DOWN_FORWARD  : { ...const_polar.DOWN       , z:  1 },
  UP_BACK       : { ...const_polar.UP         , z: -1 },
  UP_FORWARD    : { ...const_polar.UP         , z:  1 },

  //toDo LEFT_UP_FORWARD etc.

}

export const const_spherical = {

  ZERO   : { ...const_polar.ZERO  , zenith: 0 },
  DOWN   : { ...const_polar.DOWN  , zenith: Math.PI_HALF },
  LEFT   : { ...const_polar.LEFT  , zenith: Math.PI_HALF },
  RIGHT  : { ...const_polar.RIGHT , zenith: Math.PI_HALF },
  UP     : { ...const_polar.UP    , zenith: Math.PI_HALF },
  BACK   : { ...const_polar.ZERO  , zenith: Math.PI},
  FORWARD: { ...const_polar.ZERO  , zenith: 0 },



  //TODO

}



// export let cart2d2Array = ( { x=0         , y=0 }                     :point2D )     :number[] => [ x , y     ]
export let pol2Array    = ( { azimuth:a=0 , radius:r=0 }              :polar )       :number[] => [ a , r     ]
// export let cart3d2Array = ( { x=0         , y=0        , z=0 }        :point3D )     :number[] => [ x , y , z ]
export let cyl2Array    = ( { azimuth:a=0 , radius:r=0 , z=0 }        :cylindrical ) :number[] => [ a , r , z ]
export let sph2Array    = ( { azimuth:a=0 , zenith:z=0 , radius:r=0 } :spherical )   :number[] => [ a , z , r ]