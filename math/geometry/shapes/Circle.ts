import magnitude from "../../../generic_calculations/magnitude.js"
import Point2D   from "../Point2D.js"

/**Class that represents 2-dimensional circle.*/
export default class Circle implements round2D {

  public x      :number=0
  public y      :number=0
  public radius :number=0

  constructor({...params}){
    
    this.x      = params.x      ?? params[0] ?? 0
    this.y      = params.y      ?? params[1] ?? 0
    this.radius = params.radius ?? params[2] ?? 0
  
  }




  /**
   * Addition function.
   * @param {number} [x] [x]
   * @param {number} [y] [y]
   * */
  add(x: number=0, y: number=0): void { this.x += x , this.y += y }
  
  /**
   * Subtraction function.
   * @param {number} [x] [x]
   * @param {number} [y] [y]
   * */
  sub(x: number=0, y: number=0): void { this.add(-x , -y) }
  
  /**
   * Multiplication function.
   * @param {number} [x] [x]
   * @param {number} [y] [y]
   * */
  mult(x: number=1,y: number=1): void { this.x *= x , this.y *= y }
  
  /**
   * Division function.
   * @param {number} [x] [x] 
   * @param {number} [y] [y] 
   * */
  div(x: number=1,y: number=1): void { this.mult(1 / x , 1 / y) }


  
  
  /**Returns diameter of this circle.*/
  get diameter() :number { return this.radius * 2 }

  /**Returns area of this circle.*/
  get area() :number { return Circle.area(this.radius) }

  /**Returns ctrcumference of this circle.*/
  get circumference() :number { return Circle.circumference(this.radius) }



  /**
   * Returns diameter of given circle radius.
   * @param {number} [radius] [radius]
   * @returns Number
   * */
  static diameter(radius :number): number { return radius * 2 }

  /**
   * Returns area of given circle radius.
   * @param {number} [radius] [radius]
   * @returns Number
   * */
  static area(radius :number) :number { return Math.PI * radius ** 2 }
  
  /**
   * Returns circumference of given circle radius.
   * @param {number} [radius] [radius] 
   * @returns Number
   * */
  static circumference(radius :number) :number { return this.diameter(radius) * Math.PI }

  /**
   * Returns distance between bounds of two circles.
   * @param {round2D} [param0] Circle A. 
   * @param {round2D} [param1] Circle B. 
   * @returns Number
   * */
  static distance({ x:x1=0 , y:y1=0 , radius:r1=0 } :round2D, { x:x2=0 , y:y2=0 , radius:r2=0 } :round2D): number { return magnitude(x1 - x2 , y1 - y2) - (r1 + r2) }


  // static contact( { x:x1=0 , y:y1=0 , radius:r1=0 } :round2D, { x:x2=0 , y:y2=0 , radius:r2=0 } :round2D) :number[] {
    // let center = {
    //   x: (x1 + x2) * .5,
    //   y: (y1 + y2) * .5
    // }
    // let distance = Point2D.distance({x:x2 , y:y2} , {x:x1 , y:y1})
    // return }

  /**toDo*/
  // static triangulation({x:x1=0 , y:y1=0 , radius:r1=0} :round2D, {x:x2=0,y:y2=0,radius:r2=0} :round2D, {x:x3=0,y:y3=0,radius:r3=0}){/*toDo*/}
}