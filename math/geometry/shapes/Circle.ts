/**Class that represents 2-dimensional circle.*/
export default class Circle implements round2D{

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
   * @returns 
   */
  static circumference(radius :number) :number { return this.diameter(radius) * Math.PI }
}