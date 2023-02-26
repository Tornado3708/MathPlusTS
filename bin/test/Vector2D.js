import Vector2D from "./../../math/algebra/linear_algebra/vector/Vector2D.js"



const commands = {
  
  ["Vector.ZERO" ] : Vector2D.ZERO,
  ["Vector.LEFT" ] : Vector2D.LEFT,
  ["Vector.RIGHT"] : Vector2D.RIGHT,
  ["Vector.DOWN" ] : Vector2D.DOWN,
  ["Vector.UP"   ] : Vector2D.UP

}




export default ( command="" ) => {

  return commands[ command ]
  
}