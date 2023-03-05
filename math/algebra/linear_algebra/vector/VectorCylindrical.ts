import Vector3D from "./Vector3D.js"
import VectorSpherical from "./VectorSpherical.js"
import { const_cylindrical , cyl2Array } from "../../../constants.js"





/**CylindricalVector is instance for presentation of three-dimensional vector in cylindrical coordinates.*/
export default class VectorCylindrical implements cylindrical {


  public azimuth :number=0
  public radius  :number=0
  public z       :number=0


  /**
   * - { azimuth: number , radius: number , z: number }
   * - [ azimuth: number , radius: number , z: number ]
   * @param params Azimuth, radius and z of cylindrical vector.
   */
  constructor({...params}){

    this.azimuth = params.azimuth ?? params[0] ?? 0
    this.radius  = params.radius  ?? params[1] ?? 0
    this.z       = params.z       ?? params[2] ?? 0
    if(!isFinite(this.azimuth)){
      this.azimuth=0
    }
    else if(Math.abs(this.azimuth) > Math.TAU){
      this.azimuth %= Math.TAU
    }
    if(!isFinite(this.radius)) { this.radius=0 }
    if(!isFinite(this.z))      { this.z=0 }

  }




  /**
   * Returns given spherical vector parameters in cartesian coordinate system.
   * @param {cylindrical} [param0] Object.{azimuth , radius , z}
   * @returns Point3D
   * */
  static cartesian({ azimuth=0 , radius=0 , z=0 } :cylindrical) :point3D { return { x: Math.cos(azimuth) * radius , y: Math.sin(azimuth) * radius, z: z } }

  /**
   * Returns 3-dimensional cartesian vector, equivalent to given cylindrical vector.
   * @param {cylindrical} [param0] Object.{azimuth , radius , z}
   * @returns Vector3D
   * */
  static cartesianVector({ azimuth=0 , radius=0 , z=0 }: cylindrical) :Vector3D { return new Vector3D(this.cartesian({ azimuth , radius , z })) }

  /**
   * Returns given spherical vector parameters in cylinric coordinate system.
   * @param {cylindrical} [param0] Object.{azimuth , radius , z}
   * @returns spherical
   * */
  static spherical({ azimuth=0 , radius=0 , z=0 } :cylindrical) :spherical {
    let new_radius = Math.hypot(radius , z)
    return {
      azimuth : azimuth,
      zenith  : Math.acos(z * (1 / new_radius)),
      radius  : new_radius
    }
  }

  /**
   * Return spherical vector, equivalent to given cilindrical vector.
   * @param {cylindrical} [param0] Objet.{azimuth , radius , z}
   * @returns {VectorSpherical} SphericalVector
   * */
  static sphericalVector({azimuth=0 , radius=0 , z=0} :cylindrical) :VectorSpherical { return new VectorSpherical(this.spherical({ azimuth , radius , z })) }





  static ZERO          = const_cylindrical .ZERO
  static BACK          = const_cylindrical .BACK
  static DOWN          = const_cylindrical .DOWN
  static FORWARD       = const_cylindrical .FORWARD
  static LEFT          = const_cylindrical .LEFT
  static RIGHT         = const_cylindrical .RIGHT
  static UP            = const_cylindrical .UP
  
  static LEFT_BACK     = const_cylindrical .LEFT_BACK
  static LEFT_DOWN     = const_cylindrical .LEFT_DOWN
  static LEFT_FORWARD  = const_cylindrical .LEFT_FORWARD
  static LEFT_UP       = const_cylindrical .LEFT_UP
  static RIGHT_BACK    = const_cylindrical .RIGHT_BACK
  static RIGHT_DOWN    = const_cylindrical .RIGHT_DOWN
  static RIGHT_FORWARD = const_cylindrical .RIGHT_FORWARD
  static RIGHT_UP      = const_cylindrical .RIGHT_UP
  static DOWN_BACK     = const_cylindrical .DOWN_BACK
  static DOWN_FORWARD  = const_cylindrical .DOWN_FORWARD
  static DOWN_LEFT     = this              .LEFT_DOWN
  static DOWN_RIGHT    = this              .RIGHT_DOWN
  static UP_BACK       = const_cylindrical .UP_BACK
  static UP_FORWARD    = const_cylindrical .UP_FORWARD
  static UP_LEFT       = this              .LEFT_UP
  static UP_RIGHT      = this              .RIGHT_UP
  static FORWARD_DOWN  = this              .DOWN_FORWARD
  static FORWARD_LEFT  = this              .LEFT_FORWARD
  static FORWARD_RIGHT = this              .RIGHT_FORWARD
  static FORWARD_UP    = this              .UP_FORWARD
  static BACK_DOWN     = this              .DOWN_BACK
  static BACK_LEFT     = this              .LEFT_BACK
  static BACK_RIGHT    = this              .RIGHT_BACK
  static BACK_UP       = this              .UP_BACK



  static zero          = cyl2Array( this.ZERO )
  static back          = cyl2Array( this.BACK )
  static down          = cyl2Array( this.DOWN )
  static forward       = cyl2Array( this.FORWARD )
  static left          = cyl2Array( this.LEFT )
  static right         = cyl2Array( this.RIGHT )
  static up            = cyl2Array( this.UP )

  static left_back     = cyl2Array( this.LEFT_BACK )
  static left_down     = cyl2Array( this.LEFT_DOWN )
  static left_forward  = cyl2Array( this.LEFT_FORWARD )
  static left_up       = cyl2Array( this.LEFT_UP )
  static right_back    = cyl2Array( this.RIGHT_BACK )
  static right_down    = cyl2Array( this.RIGHT_DOWN )
  static right_forward = cyl2Array( this.RIGHT_FORWARD )
  static right_up      = cyl2Array( this.RIGHT_UP )
  static down_back     = cyl2Array( this.DOWN_BACK )
  static down_forward  = cyl2Array( this.DOWN_FORWARD )
  static down_left     =            this.left_down
  static down_right    =            this.right_down
  static up_back       = cyl2Array( this.UP_BACK )
  static up_forward    = cyl2Array( this.UP_FORWARD )
  static up_left       =            this.left_up
  static up_right      =            this.right_up
  static forward_down  =            this.down_forward
  static forward_left  =            this.left_forward
  static forward_right =            this.right_forward
  static forward_up    =            this.up_forward
  static back_down     =            this.down_back
  static back_left     =            this.left_back
  static back_right    =            this.right_back
  static back_up       =            this.up_back

}