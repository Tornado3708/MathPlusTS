import Vector2D from "./math/algebra/linear_algebra/vector/Vector2D.js"
import Vector3D from "./math/algebra/linear_algebra/vector/Vector3D.js"
import VectorCylindrical from "./math/algebra/linear_algebra/vector/VectorCylindrical.js"
import VectorPolar from "./math/algebra/linear_algebra/vector/VectorPolar.js"
import VectorSpherical from "./math/algebra/linear_algebra/vector/VectorSpherical.js"

 const MathPlus: MathPlus = {

  Vector2D,
  Vector3D,
  VectorPolar,
  VectorSpherical,
  VectorCylindrical,

}
export default MathPlus

declare global {
  interface Window {
    MathPlus?: MathPlus
  }
}