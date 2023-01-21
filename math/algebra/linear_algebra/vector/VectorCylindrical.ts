import Vector3D from "./Vector3D.js"
import VectorSpherical from "./VectorSpherical.js"

/**CylindricalVector is instance for presentation of three-dimensional vector in cylindrical coordinates.*/
class VectorCylindrical implements PointCylindrical{


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
   * Returns given spherical vector in cartesian coordinate system.
   * @param {PointCylindrical} [param0] Object.{azimuth , radius , z}
   * @returns Point3D
   * */
  static cartesian({ azimuth=0 , radius=0 , z=0 } :PointCylindrical) :Point3D { return { x: Math.cos(azimuth) * radius , y: Math.sin(azimuth) * radius, z: z } }

  /**
   * Returns cartesian vector in 
   * @param param0 
   * @returns 
   */
  static cartesianVector({ azimuth=0 , radius=0 , z=0 }) :Vector3D { return new Vector3D(this.cartesian({ azimuth , radius , z })) }


  static spherical({ azimuth=0 , radius=0 , z=0 } :PointCylindrical) :PointSpherical {
    let new_radius = Math.hypot(radius , z)
    return {
      azimuth : azimuth,
      zenith  : Math.acos(z * (1 / new_radius)),
      radius  : new_radius
    }
  }

  static sphericalVector({azimuth=0 , radius=0 , z=0} :PointCylindrical) :VectorSpherical { return new VectorSpherical(this.spherical({ azimuth , radius , z })) }

  /**
   * {azimuth : 0 , radius : 0 , z : 0}
   * @static
   */
  static ZERO: PointCylindrical = {azimuth : 0 , radius : 0 , z : 0}


}
export default VectorCylindrical