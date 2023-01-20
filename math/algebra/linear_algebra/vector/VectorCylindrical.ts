/**CylindricalVector is instance for presentation of three-dimensional vector in cylindrical coordinates.*/
class VectorCylindrical implements PointCylindrical{


  public azimuth: number;
  public radius:  number;
  public z:       number;


  /**
   * Creates new CylindricalVector instance.
   * @param azimuth_radius_z Azimuth, radius and z of cylindrical vector.
   * Azimuth - angle of rotation on xy-plain.
   * Radius - distance from start of coordinates on xy-plain.
   * Z - value on z-axis.
   * 
   * Possible to use next values for initialization:
   * 1. {azimuth : number , radius : number , z : number}
   * 2. [azimuth : number , radius : number , z : number]
   * 3. azimuth : number , radius : number , z : number
   */
  constructor(...azimuth_radius_z: Array<any>){

    this.azimuth = azimuth_radius_z[0].azimuth ?? azimuth_radius_z[0][0] ?? azimuth_radius_z[0] ?? 0
    this.radius  = azimuth_radius_z[0].radius  ?? azimuth_radius_z[0][1] ?? azimuth_radius_z[1] ?? 0
    this.z       = azimuth_radius_z[0].z       ?? azimuth_radius_z[0][2] ?? azimuth_radius_z[2] ?? 0
    if(!isFinite(this.azimuth)){ this.azimuth=0 }
    if(!isFinite(this.radius)) { this.radius=0 }
    if(!isFinite(this.z))      { this.z=0 }

  }



  /**
   * {azimuth : 0 , radius : 0 , z : 0}
   * @static
   */
  static ZERO: PointCylindrical = {azimuth : 0 , radius : 0 , z : 0}

  // static BACK: PointCylindrical = {azimuth : }


}
export default VectorCylindrical