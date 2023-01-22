import Vector3D from "../algebra/linear_algebra/vector/Vector3D.js"


export default class Dot3D implements point3D{
  
  public x: number = 0
  public y: number = 0
  public z: number = 0

  constructor({...params}){

    this.x = params.x ?? params[0][0] ?? params[0] ?? 0
    this.y = params.y ?? params[0][1] ?? params[1][0] ?? params[1] ?? 0
    this.z = params.z ?? params[0][2] ?? params[2][0] ?? params[2] ?? 0
    if(!isFinite(this.x)){ this.x = 0 }
    if(!isFinite(this.y)){ this.y = 0 }
    if(!isFinite(this.z)){ this.z = 0 }
    
  }



  /**
   * Returns distance between this dot
   * @param d2 
   * @returns 
   */
  distance(d2 :point3D) :number { return Dot3D.distance(this , d2) }
  vector(start=Vector3D.ZERO) :Vector3D { return Dot3D.vector  (this , start) }


  /**
   * Returns distance between two 3-dimensional dots.
   * @param {point3D} param0 Dot A.
   * @param {point3D} param1 Dot B.
   * @returns Number
   * */
  static distance({ x:x1=0 , y:y1=0 , z:z1=0 } :point3D, { x:x2=0 , y:y2=0 ,z:z2=0 } :point3D) :number { return Math.hypot(x1 - x2 , y1 - y2 , z1 - z2) }


  /**
   * Returns 3-dimensional cartesian vector with parameters of given dot, relative to start coordinates.
   * @param {point3D} param0 Dot for transformation.
   * @param {point3D} param1 Start point, as relative start of coordinate system.
   * @returns Vector3D
   * */
  static vector({x=0,y=0,z=0} :point3D, {x:x0,y:y0,z:z0} :point3D=Vector3D.ZERO) :Vector3D { return new Vector3D([x - x0 , y - y0 , z - z0]) }
}