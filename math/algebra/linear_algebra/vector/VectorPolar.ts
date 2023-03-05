import Vector2D from "./Vector2D.js"
import { simple2D } from "../../../../simplify.js"
import { const_polar , pol2Array } from "../../../constants.js"


/**Class for representation of 2-dimensional radius vector.*/
export default class VectorPolar implements polar {


  public azimuth :number = 0
  public radius  :number = 0

  /**
   * - { azimuth : number , radius : number }
   * - [ azimuth : number , radius : number ]
   * @param {polar | number[]} params 
   * */
  constructor({...params}){
    
    this.azimuth = params.azimuth ?? params[0] ?? 0
    this.radius  = params.radius  ?? params[1] ?? 0
    
    if(!isFinite(this.azimuth)){ this.azimuth = 0 }
    else if(Math.abs(this.azimuth) > Math.TAU){ this.azimuth %= Math.TAU }
    if(!isFinite(this.radius)){ this.radius = 0 }
  
  }




  /**
   * Rotates polar vector by azimuth.
   * @param {number} [azimuth] Rotation, relative to current azimuth.
   * */
  rotate(azimuth :number=0) :void { VectorPolar.rotate(this, azimuth) }




  /**
   * Extends radius by [add].
   * @param {number} [add] [add]
   * */
  radiusAdd(add :number=0) :void { VectorPolar.radiusAdd(this , add) }

  /**
   * Decrease radius by [sub].
   * @param {number} [sub] [sub]
   * */
  radiusSub(sub :number=0) :void { VectorPolar.radiusAdd(this , -sub) }

  /**
   * Multiplicates radius length by [m].
   * @param {number} [m] [m]
   * */
  radiusMult(m :number=1) :void { VectorPolar.radiusMult(this , m) }
  
  /**
   * Divides radius length by [d].
   * @param {number} [d] [d]
   * */
  radiusDiv(d :number=1) :void { VectorPolar.radiusMult(this , 1 / d) }




  /**Returns parameters of this polar vector in cartesian coordinate system.*/
  get cartesian() :point2D { return VectorPolar.cartesian(this) }

  /**Returns 3-dimensional cartesian vector, equivalent to this vector.*/
  get cartesianVector() :Vector2D { return VectorPolar.cartesianVector(this) }




  /**
   * Rotates given vector by [azimuth], relative to current polar vector azimuth.
   * @param {polar} [polar] Given vector.  
   * @param {number} azimuth Rotation, relative to current azimuth.
   * */
  static rotate(polar :polar, azimuth :number=0) :void {
    if(isFinite(azimuth))polar.azimuth += azimuth
    if(Math.abs(polar.azimuth) > Math.TAU) polar.azimuth %= Math.TAU
  }




  /**
   * Extends radius by [add] for given vector.
   * @param {polar} [polar] Given vector.
   * @param {number} [add] [add]
   * */
  static radiusAdd(polar :polar, add :number=0) :void { polar.radius += add }

  /**
   * Decrease radius by [sub] for given vector.
   * @param {polar} [polar] Given vector.
   * @param {number} [sub] [sub]
   * */
  static radiusSub(polar :polar, sub: number=0) :void { polar.radius -= sub }

  /**
   * Multiplicates radius length by [m] times for given vector.
   * @param {polar} [polar] Given vector.
   * @param {number} [m] [m]
   * */
  static radiusMult(polar :polar, m :number=1)   :void { polar.radius *= m } 
  
  /**
   * Divides radius length by [d] times for given vector.
   * @param {polar} polar Given vector.
   * @param {number} [d] [d] 
   * */
  static radiusDiv (polar :polar, d :number=1)   :void { this.radiusMult(polar, 1 / d) }
  



  /**
   * Returns parameters of given vector in 2-dimensional cartesean coordinates system.
   * @param {polar} param0 Given vector.
   * @returns point2D
   * */
  static cartesian({azimuth=0,radius=0} :polar) :point2D { return simple2D(Math.cos(azimuth) * radius , Math.sin(azimuth) * radius) }

  /**
   * Returns 2-dimensional cartesean vector, equivalent to given polar vector.
   * @param {polar} polar Given vector.
   * @returns Vector2D
   * */
  static cartesianVector(polar :polar) :Vector2D { return new Vector2D(this.cartesian(polar))}




  static ZERO  :polar = const_polar .ZERO
  static DOWN  :polar = const_polar .DOWN
  static LEFT  :polar = const_polar .LEFT
  static RIGHT :polar = const_polar .RIGHT
  static UP    :polar = const_polar .UP

  static LEFT_UP    :polar = const_polar .LEFT_UP
  static LEFT_DOWN  :polar = const_polar .LEFT_DOWN
  static RIGHT_UP   :polar = const_polar .RIGHT_UP
  static RIGHT_DOWN :polar = const_polar .RIGHT_DOWN
  static UP_LEFT    :polar = this        .LEFT_UP
  static UP_RIGHT   :polar = this        .RIGHT_UP
  static DOWN_LEFT  :polar = this        .LEFT_DOWN
  static DOWN_RIGHT :polar = this        .RIGHT_DOWN




  static zero       :number[] = [ 0 , 0 ]
  static down       :number[] = pol2Array( this.DOWN )
  static left       :number[] = pol2Array( this.LEFT )
  static right      :number[] = pol2Array( this.RIGHT )
  static up         :number[] = pol2Array( this.UP )
  static left_up    :number[] = pol2Array( this.LEFT_UP )
  static left_down  :number[] = pol2Array( this.LEFT_DOWN )
  static right_up   :number[] = pol2Array( this.RIGHT_UP )
  static right_down :number[] = pol2Array( this.RIGHT_DOWN )
  static up_left    :number[] =            this.left_up
  static up_right   :number[] =            this.right_up
  static down_left  :number[] =            this.left_down
  static down_right :number[] =            this.right_down
  
}