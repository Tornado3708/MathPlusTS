import Complex           from "./math/comlpex/Complex.js"

import Equation          from "./math/algebra/elementary_algebra/Equation.js"

import Matrix            from "./math/algebra/linear_algebra/matrix/Matrix.js"
import Tensor            from "./math/algebra/linear_algebra/tensor/Tensor.js"
import VectorCylindrical from "./math/algebra/linear_algebra/vector/VectorCylindrical.js"
import Vector2D          from "./math/algebra/linear_algebra/vector/Vector2D.js"
import Vector3D          from "./math/algebra/linear_algebra/vector/Vector3D.js"
import VectorPolar       from "./math/algebra/linear_algebra/vector/VectorPolar.js"
import VectorSpherical   from "./math/algebra/linear_algebra/vector/VectorSpherical.js"

import Polygon           from "./math/geometry/curves/Polygon.js"
import Roulette          from "./math/geometry/curves/Roulette.js"
import Spiral            from "./math/geometry/curves/Spiral.js"






declare global {

  interface Math {

    Complex           :typeof Complex
    Equation          :typeof Equation

    Tensor            :typeof Tensor

    Matrix            :typeof Matrix

    Vector2D          :typeof Vector2D
    Vector3D          :typeof Vector3D
    VectorPolar       :typeof VectorPolar
    VectorSpherical   :typeof VectorSpherical
    VectorCylindrical :typeof VectorCylindrical

    Polygon           :typeof Polygon
    Roulette          :typeof Roulette
    Spiral            :typeof Spiral

    factorial: (n: number) => number

    sinc: (x: number, norm: number) => number
    cosc: (x: number, norm: number) => number

    cas: (x: number) => number

    sec: (x: number) => number
    cosec: (x: number) => number


    toDegrees: (radians: number) => number
    toRadians: (degrees: number) => number



    PI_QUARTER :number
    PI_HALF    :number
    PI_TWO     :number
    TAU        :number

    SQRT3      :number
    SQRT5      :number

    PHI        :number
    phi        :number

    RAD2DEG    :number
    DEG2RAD    :number
  }
}
