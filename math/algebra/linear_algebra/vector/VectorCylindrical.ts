import Vector3D from "./Vector3D.js"
import VectorSpherical from "./VectorSpherical.js"



let toArray = ({ azimuth=0 , radius=0 , z=0 }) => { return [azimuth , radius , z] } 



/**CylindricalVector is instance for presentation of three-dimensional vector in cylindrical coordinates.*/
class VectorCylindrical implements cylindrical{


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
   * @returns VectorSpherical
   * */
  static sphericalVector({azimuth=0 , radius=0 , z=0} :cylindrical) :VectorSpherical { return new VectorSpherical(this.spherical({ azimuth , radius , z })) }





  static ZERO: cylindrical = {azimuth : 0 , radius : 0 , z : 0}

  static zero: number[] = toArray(this.ZERO)
}
export default VectorCylindrical