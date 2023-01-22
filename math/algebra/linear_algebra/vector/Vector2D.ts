import cart2polar  from "./../../../../coordinates_system_translation/cartesian2polar.js"
import azimuth     from "../../../../generic_calculations/azimuth.js"
import magnitude   from "../../../../generic_calculations/magnitude.js"
import norm2d      from "../../../../generic_calculations/norm2d.js"
import unit2d      from "../../../../generic_calculations/unit2d.js"
import Dot2D       from "../../../geometry/Point2D.js"
import VectorPolar from "./VectorPolar.js"




/**Class for representation of vector in 2-dimensional space.*/
class Vector2D implements point2D {

  public x :number = 0
  public y :number = 0

  /**- [ x: number     ,   y: number ]
   * - { x: number     ,   y: number }
   * - [ [ x: number ] , [ y: number ] ]
   * - [ [ x: number   ,   y: number ] ]
   * @param params Parameters of new Vector2D.*/
  constructor({...params}){
    
      this.x = params.x ?? params[0][0] ??                 params[0] ?? 0
      this.y = params.y ?? params[0][1] ?? params[1][0] ?? params[1] ?? 0
      if(!isFinite(this.x)){ this.x = 0 }
      if(!isFinite(this.y)){ this.y = 0 }

    }




  /**Addition function.
   * @param {number} x [x]
   * @param {number} y [y]
   * */
  add(x: number=0, y: number=0) :void { this.x += x , this.y += y }
  
  
  /**Subtraction function.
   * @param {number} x [x]
   * @param {number} y [y]
   * */
  sub(x: number=0, y: number=0) :void { this.add(-x , -y) }


  /**Multiplication function.
   * @param {number} x [x]
   * @param {number} y [y]
   * */
  mult(x: number=1, y: number=1) :void { this.x *= x , this.y *= y }
  
  
  /**Division function.
   * @param {number} x [x]
   * @param {number} y [y]
   * */
  div(x: number=1, y: number=1) :void { this.mult(1 / x , 1 / y) }




  /**Returns magnitude of vector.*/
  get magnitude() :number { return magnitude(this.x, this.y) }

  /**Returns azimuth of vector.*/
  get azimuth() :number { return azimuth(this.y, this.x) }




  /**Returns normalised vector, calculated by magnitude.
   * @returns Object with normalised parameters.
   * */
  get unit() :point2D{ return unit2d(this) }
  
  /**Returns normalised vector, calculated by azimuth.
   * @returns Object with normalised parameters.
   * */
  get norm() :point2D{ return norm2d(this) }




  /**Rotates vector by azimuth in radians.
   * @param {number} azimuth Azimuth for rotation.
   * */
  rotate(azimuth :number=0): void { Vector2D.rotate(this , azimuth) }



  
  /**Returns coordinates of this vector in polar coordinates.*/
  get polar() :polar { return cart2polar(this) }

  /**Returns vector in polar coordinates, that is equivalent of this vector.*/
  get polarVector() :VectorPolar { return Vector2D.polarVector(this) }

  /**Returns this vector values in matrix form.*/
  get matrix() :matrix { return Vector2D.matrix(this) }
  
  /**Returns Dot2D with this vector parameters.*/
  get point() :Dot2D { return new Dot2D(this) }




  /**Returns dot product of this vector and vector [vec2].
   * @param {point2D} vec2 2-dimensional vector or object with [x] and [y] values.
   * @returns Dot product of two vectors.
   * */
  dotProduct(vec2: point2D) :number { return Vector2D.dotProduct(this, vec2) }
  
  /**Returns cosine of dot product of this vector and vector [vec2].
   * @param {point2D} vec2 2-dimensional vector or object with [x] and [y] values.
   * @returns Cosine of dot product.
   * */
  dotProductCos(vec2: point2D) :number { return Vector2D.dotProductCos (this, vec2) }

  /**Returns azimuth between this vector and vector [vec2].
   * @param {point2D} vec2 2-dimensional vector or object with [x] and [y] values.
   * @returns Arccosine of dot product.
   * */
  dotProductAcos(vec2: point2D) :number { return Vector2D.dotProductAcos(this, vec2) }



  
  /**Returns cross product of this vector and given vector.
   * @param {point2D} vec2 Object with parameters.
   * @returns Cross product of these vectors.
   * */
  crossProduct(vec2 :point2D) :number { return Vector2D.crossProduct(this, vec2) }

  /**Returns normalised cross product of this vector and given vector.
   * @param {point2D} vec2 Object with parameters.
   * @returns Sine of cross product of these vectors.
   * */
  crossProductSin(vec2: point2D) :number { return Vector2D.crossProductSin(this, vec2) }

  /**Returns azimuth between this vector and given vector.
   * @param {point2D0} vec2 Object with parameters.
   * @returns Arcsine of cross product.
   * */
  crossProductAsin(vec2: point2D) :number { return Vector2D.crossProductAsin(this, vec2)}




  /**Addition function.
   * @param {point2D} vec2 Object with parameters.
   * @param {number} x [x].
   * @param {number} y [y].
   * */
  static add(vec2 :point2D, x :number=0, y :number=0) :void { vec2.x += x , vec2.y += y }

  /**Subtraction function.
   * @param {point2D} vec2 Object with parameters.
   * @param {number} x [x].
   * @param {number} y [y].
   * */
  static sub( vec2 :point2D, x :number=0, y :number=0) :void { this.add(vec2, -x, -y) }

  /**Multiplication function.
   * @param {point2D} vec2 Object with parameters.
   * @param {number} x [x].
   * @param {number} y [y].
   * */
  static mult(vec2 :point2D, x :number=1, y :number=1) :void { vec2.x *= x , vec2.y *= y }

  /**Division function.
   * @param {point2D} vec2 Object with parameters.
   * @param {number} x [x].
   * @param {number} y [y].
   * */
  static div(vec2 :point2D, x :number=1, y :number=1) :void { this.mult(vec2 , 1 / x , 1 / y) }



  
  /**Returns magnitude of given vector.
   * @param {point2D} vec2 
   * @returns Magnitude of vector.
   */
  static magnitude(vec2:point2D) :number { return magnitude(vec2.x,vec2.y) }

  /**Returns azimuth of given vector.
   * @param {point2D} vec2 Object with properties.
   * @returns Azimuth of vector.
   */
  static azimuth(vec2:point2D) :number { return azimuth(vec2.y, vec2.x) }

  

  
  /**Returns given vector as normalised, calculated by magnitude.
   * @param {point2D} vec2 Object with parameters.
   * @returns Object with normalised parameters.
   * */
  static unit(vec2 :point2D) :point2D { return unit2d(vec2) }

  /**Returns given vector as normalised, calculated by azimuth.
   * @param {point2D} vec2 Object with parameters.
   * @returns Object with normalised parameters.
   * */
  static norm(vec2 :point2D) :point2D { return norm2d(vec2) }



  
  /**Returns dot product of these vectors.
   * @param {point2D} vec2_a Vector A.
   * @param {point2D} vec2_b Vector B.
   * @returns Dot product of vectors.
   * */
  static dotProduct(vec2_a :point2D, vec2_b :point2D) :number { return vec2_a.x * vec2_b.x + vec2_a.y * vec2_b.y }

  /**Returns normalised dot product of these vectors.
   * @param {point2D} vec2_a Vector A.
   * @param {point2D} vec2_b Vector B.
   * @returns Cosine of dot product of this vectors.
   * */
  static dotProductCos(vec2_a: point2D, vec2_b: point2D): number {
    let result = this.dotProduct(vec2_a, vec2_b)
    result = result * (1 / (this.magnitude(vec2_a) * this.magnitude(vec2_b)))
    return result + Number.EPSILON * Math.sign(result)
  }
  
  /**Returns azimuth between these vectors.
   * @param {point2D} vec2_a Vector A.
   * @param {point2D} vec2_b Vector B.
   * @returns Arccosine of dot product.
   * */
  static dotProductAcos(vec2_a :point2D, vec2_b :point2D) :number { return Math.acos(this.dotProductCos(vec2_a, vec2_b)) }




  /**
   * Returns cross product of these vectors.
   * @param {point2D} vec2_a Vector A.
   * @param {point2D} vec2_b Vector B.
   * @returns Cross product of these vectors.
   * */
  static crossProduct(vec2_a :point2D, vec2_b :point2D) :number { return vec2_a.x * vec2_b.y - vec2_a.y * vec2_b.x }

  /**Returns normalised cross product of these vectors.
   * @param {point2D} vec2_a Vector A.
   * @param {point2D} vec2_b Vector B.
   * @returns Sine of cross product of these vectors.
   * */
  static crossProductSin(vec2_a :point2D, vec2_b :point2D) :number {
    let result = this.crossProduct(vec2_a, vec2_b)
    result = result * (1 / (this.magnitude(vec2_a) * this.magnitude(vec2_b)))
    return result + Number.EPSILON * Math.sign(result) * .5 
  }

  /**Returns azimuth between two vectors.
   * @param {point2D} vec2_a Vector A.
   * @param {point2D} vec2_b Vector B.
   * @returns Arcsine of cross product.
   * */
  static crossProductAsin(vec2_a :point2D, vec2_b :point2D) :number { return Math.asin(this.crossProductSin(vec2_a, vec2_b)) }



  
  /**Rotates vector by azimuth.
   * @param {point2D} vec2 Object with properties.
   * @param {number} azimuth Azimuth of rotation.
   * */
  static rotate(vec2 :point2D ,azimuth :number=0): void {
    let mag = this.magnitude(vec2)
    azimuth += this.azimuth(vec2)
    vec2.x = mag * Math.cos(azimuth)
    vec2.y = mag * Math.sin(azimuth)
  }


  
  
  /**Returns given vector in polar coordinate system.
   * @param {point2D} vec2 Object with properties.
   * @returns Vector in polar coordinate system.
   * */
  static polar(vec2 :point2D): polar { return cart2polar(vec2) }
  
  /**Returns polar vector, equivalent to [vec2].
   * @param {point2D} vec2 Object with properties.
   * @returns Polar vector.
   * */
  static polarVector(vec2 :point2D): VectorPolar { return new VectorPolar(this.polar(vec2)) }

  /**Returns [vec2] in matrix form.
   * @param {point2D} vec2 Object with properties.
   * @returns 2-dimensional array.
   * */
  static matrix(vec2 :point2D): matrix { return [ [ vec2.x , vec2.y ] ] }

  /**
   * Returns [vec2] as dot in 2-dimensional point.
   * @param {point2D} vec2 2-dimensional vector.
   * @returns Dot2D
   */
  static point(vec2 :point2D): Dot2D { return new Dot2D(vec2) }




  static ZERO       :point2D = { x:  0 , y:  0 }
  static DOWN       :point2D = { x:  0 , y: -1 }
  static LEFT       :point2D = { x: -1 , y:  0 }
  static RIGHT      :point2D = { x:  1 , y:  0 } 
  static UP         :point2D = { x:  0 , y:  1 }
  static LEFT_DOWN  :point2D = { x: -Math.SQRT1_2 , y: -Math.SQRT1_2 }
  static LEFT_UP    :point2D = { x: -Math.SQRT1_2 , y:  Math.SQRT1_2 }
  static RIGHT_DOWN :point2D = { x:  Math.SQRT1_2 , y: -Math.SQRT1_2 }
  static RIGHT_UP   :point2D = { x:  Math.SQRT1_2 , y:  Math.SQRT1_2 }
  static DOWN_LEFT           = this.LEFT_DOWN
  static DOWN_RIGHT          = this.RIGHT_DOWN
  static UP_LEFT             = this.LEFT_UP
  static UP_RIGHT            = this.RIGHT_UP
 
  


  static zero       = this.matrix(this.ZERO)
  static down       = this.matrix(this.DOWN)
  static left       = this.matrix(this.LEFT)
  static right      = this.matrix(this.RIGHT)
  static up         = this.matrix(this.UP)
  static left_down  = this.matrix(this.LEFT_DOWN)
  static left_up    = this.matrix(this.LEFT_UP)
  static right_down = this.matrix(this.RIGHT_DOWN)
  static right_up   = this.matrix(this.RIGHT_UP)
  static down_right = this.right_down
  static down_left  = this.left_down
  static up_left    = this.left_up
  static up_right   = this.right_up

}


export default Vector2D