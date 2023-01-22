/**Representation of 3-dimensional triangle.*/
export default class Triangle /*extends Array implements matrix*/ {

  public x :number[] = [0,0,0]
  public y :number[] = [0,0,0]
  public z :number[] = [0,0,0]

  constructor({...points}){

    for(let i = 0; i < 3; i++){

      this.x[i] = points[i].x ?? points[i * 3    ] ?? 0
      this.y[i] = points[i].y ?? points[i * 3 + 1] ?? 0
      this.z[i] = points[i].z ?? points[i * 3 + 2] ?? 0
      
    }

    // super()
    // for(let i = 0; i < 3; i++){
    //   this[i].push(
    //     points[i].x ?? points[0][i]  [i] ?? points[0][i]  [i] ?? points  [i*3] ?? 0,
    //     points[i].y ?? points[0][i][i+1] ?? points[0][i+1][i] ?? points[i*3+1] ?? 0,
    //     points[i].z ?? points[0][i][i+2] ?? points[0][i+2][i] ?? points[i*3+2] ?? 0
    //   )
    // }
  }
  // static isRegular():boolean{}
}