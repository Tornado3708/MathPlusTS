export default class Triangle extends Array implements matrix {


  constructor({...points}){


    super()
    for(let i = 0; i < 3; i++){
      this[i].push(
        points[i].x ?? points[0][i][i]   ?? points[0][i]  [i] ?? points[i*3]   ?? 0,
        points[i].y ?? points[0][i][i+1] ?? points[0][i+1][i] ?? points[i*3+1] ?? 0,
        points[i].z ?? points[0][i][i+2] ?? points[0][i+2][i] ?? points[i*3+2] ?? 0
      )
    }
  }
}