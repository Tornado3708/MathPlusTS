import Vector2D from "./Vector2D.js"
import { simple2D } from "../../../../simplify.js"


function toArray(obj :PointPolar){ return [ obj.azimuth , obj.radius ] }


/**Class for representation of 2-dimensional radius vector.*/
class VectorPolar implements PointPolar {


  public azimuth :number = 0
  public radius  :number = 0

  /**
   * - { azimuth : number , radius : number }
   * - [ azimuth : number , radius : number ]
   * @param {PointPolar | number[]} params 
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
  get cartesian() :Point2D { return VectorPolar.cartesian(this) }

  /**Returns 3-dimensional cartesian vector, equivalent to this vector.*/
  get cartesianVector() :Vector2D { return VectorPolar.cartesianVector(this) }




  /**
   * Rotates given vector by [azimuth], relative to current polar vector azimuth.
   * @param {PointPolar} [polar] Given vector.  
   * @param {number} azimuth Rotation, relative to current azimuth.
   * */
  static rotate(polar :PointPolar, azimuth :number=0) :void {
    if(isFinite(azimuth))polar.azimuth += azimuth
    if(Math.abs(polar.azimuth) > Math.TAU) polar.azimuth %= Math.TAU
  }




  /**
   * Extends radius by [add] for given vector.
   * @param {PointPolar} [polar] Given vector.
   * @param {number} [add] [add]
   * */
  static radiusAdd(polar :PointPolar, add :number=0) :void { polar.radius += add }

  /**
   * Decrease radius by [sub] for given vector.
   * @param {PointPolar} [polar] Given vector.
   * @param {number} [sub] [sub]
   * */
  static radiusSub(polar :PointPolar, sub: number=0) :void { polar.radius -= sub }

  /**
   * Multiplicates radius length by [m] times for given vector.
   * @param {PointPolar} [polar] Given vector.
   * @param {number} [m] [m]
   * */
  static radiusMult(polar :PointPolar, m :number=1)   :void { polar.radius *= m } 
  
  /**
   * Divides radius length by [d] times for given vector.
   * @param {PointPolar} polar Given vector.
   * @param {number} [d] [d] 
   * */
  static radiusDiv (polar :PointPolar, d :number=1)   :void { this.radiusMult(polar, 1 / d) }
  



  /**
   * Returns parameters of given vector in 2-dimensional cartesean coordinates system.
   * @param {PointPolar} param0 Given vector.
   * @returns Point2D
   * */
  static cartesian({azimuth=0,radius=0} :PointPolar) :Point2D { return simple2D(Math.cos(azimuth) * radius , Math.sin(azimuth) * radius) }

  /**
   * Returns 2-dimensional cartesean vector, equivalent to given polar vector.
   * @param {PointPolar} polar Given vector.
   * @returns Vector2D
   * */
  static cartesianVector(polar :PointPolar) :Vector2D { return new Vector2D(this.cartesian(polar))}




  static ZERO   :PointPolar = { azimuth:  0          , radius: 0 }
  static DOWN   :PointPolar = { azimuth: -Math.PI*.5 , radius: 1 }
  static LEFT   :PointPolar = { azimuth:  Math.PI    , radius: 1 }
  static RIGHT  :PointPolar = { azimuth:  0          , radius: 1 }
  static UP     :PointPolar = { azimuth:  Math.PI*.5 , radius: 1 }
  



  static LEFT_UP    :PointPolar = { azimuth: Math.PI * .75          , radius: 1 }
  static LEFT_DONW  :PointPolar = { azimuth: -this.LEFT_UP.azimuth  , radius: 1 }
  static RIGHT_UP   :PointPolar = { azimuth: Math.PI * .25          , radius: 1 }
  static RIGHT_DOWN :PointPolar = { azimuth: -this.RIGHT_UP.azimuth , radius: 1 }
  static UP_LEFT                = this.LEFT_UP
  static UP_RIGHT               = this.RIGHT_UP
  static DOWN_LEFT              = this.LEFT_DONW
  static DOWN_RIGHT             = this.RIGHT_DOWN




  static zero  :number[] = [ 0 , 0 ]
  static down  :number[] = toArray(this.DOWN)
  static left  :number[] = toArray(this.LEFT)
  static right :number[] = toArray(this.RIGHT)
  static up    :number[] = toArray(this.UP)




  static left_up    :number[] = toArray(this.LEFT_UP)
  static left_down  :number[] = toArray(this.LEFT_DONW)
  static right_up   :number[] = toArray(this.RIGHT_UP)
  static right_down :number[] = toArray(this.RIGHT_DOWN)
  static up_left    = this.left_up
  static up_right   = this.right_up
  static down_left  = this.left_down
  static down_right = this.right_down
}

export default VectorPolar