import Vector2D from "../algebra/linear_algebra/vector/Vector2D.js"


export default class Point2D {

  public x :number = 0
  public y :number = 0


  constructor({...params}){
    
    this.x = params.x ?? params[0] ?? 0
    this.y = params.y ?? params[1] ?? 0
  
  }



  static distance({...dot_a}={x:0,y:0},{...dot_b}={x:0,y:0}): number { return Math.hypot(dot_a.x - dot_b.x, dot_a.y - dot_b.y) }
  static vector({...dot}:{x:number,y:number},{...start}={x:0,y:0}): Vector2D { return new Vector2D([dot.x - start.x, dot.y - start.y]) }
}