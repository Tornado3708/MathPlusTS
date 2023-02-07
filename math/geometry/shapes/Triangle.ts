/**Representation of 3-dimensional triangle.*/
export default class Triangle extends Array implements matrix {

  constructor({...points}){
    super()
    if(Triangle.mode === `group`){
      points[0] = [
        points[0].x ?? points[0][0] ?? points[0] ?? 0,
        points[1].x ?? points[0][1] ?? points[1] ?? 0,
        points[2].x ?? points[0][2] ?? points[2] ?? 0
      ]
      points[1] = []
        
    }else if(Triangle.mode === `whole`){

      for(let i = 0; i < 3; i++){
        this[i] = [
          points[i].x ?? points[i][0] ?? points[i * 3    ] ?? 0,
          points[i].y ?? points[i][1] ?? points[i * 3 + 1] ?? 0,
          points[i].z ?? points[i][2] ?? points[i * 3 + 2] ?? 0
        ]
      }
    }
  }
  // static isRegular():boolean{}
  static #modes = [`group` ,`whole`]
  static #mode = 'group'
  static get mode(){ return this.#mode }
  static set mode(string:string){
    if(this.#modes.indexOf(string) >= 0){
      this.#mode = string 
    }else{
      this.#mode = this.#modes[0]
    }
  }
}