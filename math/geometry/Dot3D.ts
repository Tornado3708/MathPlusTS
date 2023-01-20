import Vector3D from "../algebra/linear_algebra/vector/Vector3D.js"


export default class Dot3D implements Point3D{
  
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

  distance(d2 :Point3D)       :number   { return Dot3D.distance(this , d2) }
  vector(start=Vector3D.ZERO) :Vector3D { return Dot3D.vector  (this , start) }

  static distance(d2_a :Point3D , d2_b :Point3D)            :number  { return Math.hypot(d2_a.x - d2_b.x , d2_a.y - d2_b.y , d2_a.z - d2_b.z) }
  static vector(d2 :Point3D, start :Point3D=Vector3D.ZERO) :Vector3D { return new Vector3D([d2.x - start.x , d2.y - start.y , d2.z - start.z]) }
}