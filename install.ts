import Complex           from "./math/comlpex/Complex.js"

import Equation          from "./math/algebra/elementary_algebra/Equation.js"

import Matrix            from "./math/algebra/linear_algebra/matrix/Matrix.js"

import Tensor            from "./math/algebra/linear_algebra/tensor/Tensor.js"

import Vector2D          from "./math/algebra/linear_algebra/vector/Vector2D.js"
import Vector3D          from "./math/algebra/linear_algebra/vector/Vector3D.js"
import VectorCylindrical from "./math/algebra/linear_algebra/vector/VectorCylindrical.js"
import VectorSpherical   from "./math/algebra/linear_algebra/vector/VectorSpherical.js"
import VectorPolar       from "./math/algebra/linear_algebra/vector/VectorPolar.js"


import Polygon           from "./math/geometry/curves/Polygon.js"
import Roulette          from "./math/geometry/curves/Roulette.js"
import Spiral            from "./math/geometry/curves/Spiral.js"

/**
 * Sinc - "sinus cardinalis". Divides sine by [x], what was used for calculation of this sine. It can be normalized by [norm]. Default return value: 1.
 * @param {number} [x] Value for calculation.
 * @param {number} [norm] Value for normalization.
 * @returns Number
 * */
function sinc(x: number ,norm: number = 1): number{ return Math.sin(x * norm) / (x * norm) || 1; }


/**
 * Cosc - "cosinus cardinalis". Divides cosine by [x], what was used for calculation of this cosine. It can be normalized ny [norm]. Default return value: Infinity.
 * @param {number} [x] Value for calculation.
 * @param {number} [norm] Value for normalization.
 * @returns Number
 * */
function cosc(x: number, norm: number = 1): number{ return Math.cos(x * norm) / (x * norm) || Infinity; }


/**
 * Cas - "cosine and sine". Sum of sine and cosine from one number.
 * @param {number} [x] Value for calculation.
 * @returns Number
 * */
function cas(x: number): number{ return Math.sin(x) + Math.cos(x) || 0; }


/**
 * Secant. 1 / cos(x).
 * @param {number} [x] Value for calculation.
 * @returns Number
 * */
function sec(x: number): number { return 1 / Math.cos(x) || 1; }


/**
 * Cosecant. 1 / sin(x).
 * @param {number} [x] Value for calculation.
 * @returns Number
 * */
function cosec(x: number): number{ return 1 / Math.sin(x) || 1; }


/**
 * Returns value of degrees, equivalent to value in radians.
 * @param {number} [radians] Radians for translation to degrees.
 * @returns Number
 * */
function toDegrees(radians: number): number{ return radians * Math.RAD2DEG || 0; }


/**
 * Returns value of radians, equivalent to value in degrees.
 * @param {number} [degrees] Radians for translation to degrees.
 * @returns Number
 * */
function toRadians(degrees: number): number{ return degrees * Math.DEG2RAD || 0; }




/**Quarter of PI number.*/
const PI_QUARTER = Math.PI * 0.25;

/**Half of PI number.*/
const PI_HALF    = Math.PI * 0.5;

/**Equivalent to two PI.*/
const TAU        = Math.PI * 2;


/**Square root of 3.*/
const SQRT3 = Math.sqrt(3);

/**Square root of 5.*/
const SQRT5 = Math.sqrt(5);


/**Φ. Golden ratio.*/
const PHI = (SQRT5 + 1) * .5;

/**ϕ. Inversive golden ratio.*/
const phi = (SQRT5 - 1) * .5;


/**Factorial calculation.*/
function factorial(n :number) :number {
  if(n === 1) return 1
  if(n === 2) return 2
  let int = 1
  for(let i = 1; i <= n; i++){ int*=i }
  return int 
}

/**Installation function for extending Math object.*/
export function install(): void{

  Math.Complex           = Complex

  Math.Equation          = Equation

  Math.Matrix            = Matrix
  
  Math.Tensor            = Tensor

  Math.Vector2D          = Vector2D
  Math.Vector3D          = Vector3D
  Math.VectorPolar       = VectorPolar
  Math.VectorSpherical   = VectorSpherical
  Math.VectorCylindrical = VectorCylindrical

  Math.Polygon           = Polygon
  Math.Roulette          = Roulette
  Math.Spiral            = Spiral
  
  
  Math.factorial  = factorial

  Math.sinc       = sinc
  Math.cosc       = cosc
  
  Math.cas        = cas

  Math.sec        = sec
  Math.cosec      = cosec

  Math.toDegrees  = toDegrees
  Math.toRadians  = toRadians

  Math.PI_QUARTER = PI_QUARTER
  Math.PI_HALF    = PI_HALF
  Math.PI_TWO     = TAU
  Math.TAU        = TAU

  Math.SQRT3      = SQRT3
  Math.SQRT5      = SQRT5

  Math.PHI        = PHI
  Math.phi        = phi

  Math.RAD2DEG    = 180 * (1 / Math.PI)
  Math.DEG2RAD    = Math.PI * (1 / 180)

}