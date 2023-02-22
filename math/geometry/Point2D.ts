import Vector2D from "../algebra/linear_algebra/vector/Vector2D.js"
import { const2d } from "../constants.js"

/**Representation of 2-dimensional point.*/
export default class Point2D {

  public x :number = 0
  public y :number = 0


  /**
   * - {   x: number   ,   y: number   }
   * - [ [ x: number   ,   y: number ] ]
   * - [ [ x: number ] , [ y: number ] ]
   * - [   x: number   ,   y: number   ]
   * @param {point2D | matrix | number[] | undefined} [param0] Parameters of point.
   * */
  constructor({...params}){
    
    this.x = params.x ?? params[0][0]                 ?? params[0] ?? 0
    this.y = params.y ?? params[0][1] ?? params[1][0] ?? params[1] ?? 0
  
  }



  
  /**
   * Returns length between two points.
   * @param {point2D} [param0] Point A. 
   * @param {point2D} [param1] Point B. 
   * @returns Number
   * */
  static distance({...dot_a} :point2D={x:0,y:0},{...dot_b} :point2D={x:0,y:0}) :number { return Math.hypot(dot_a.x - dot_b.x, dot_a.y - dot_b.y) }
  

  /**
   * Returns distances between two dots on x- and y- axis.
   * @param {point2D} [param0] First point.
   * @param {point2D} [param1] Second point.
   * @returns {point2D} Differences.
   */
  static distances({...dot_a} :point2D={x:0,y:0},{...dot_b} :point2D={x:0,y:0}) :point2D {
    return {
      x : dot_a.x - dot_b.x,
      y : dot_a.y - dot_b.y
    }
  }

  /**
   * Returns point as vector, relative to [start] point. Default [start] point is { x: 0 , y: 0 , z: 0 }.
   * @param {point2D} [param0] Point for transformation. 
   * @param {point2D} [param1] [start] point.
   * @returns Vector2D
   * */
  static vector({...dot}:point2D,{...start}:point2D={x:0,y:0})  :Vector2D { return new Vector2D([dot.x - start.x, dot.y - start.y]) }




  static ZERO = const2d.ZERO
  static zero = [0,0]
  
}