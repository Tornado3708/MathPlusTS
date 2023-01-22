/**Class that represents 2-dimensional circle.*/
class Circle implements round2D{

  public x:number=0
  public y:number=0
  public radius:number=0

  constructor(x: number, y: number, radius: number){
    this.x = x
    this.y = y
    this.radius = radius
  }

  add(x=0, y=0){ this.x += x , this.y += y }
  mult(m=1)    { this.x *= m , this.y *= m }
  sub(x=0, y=0){ this.add(-x,-y) }
  div(d=1)     { this.mult(1/d) }


  get diameter()     :number{ return Circle.diameter(this.radius) }
  get area()         :number{ return Circle.area(this.radius) }
  get circumference():number{ return Circle.circumference(this.radius) }

  static diameter(radius: number): number{ return radius*2 }
  static area(radius: number): number{ return Math.PI * radius ** 2 }
  static circumference(radius: number): number{ return this.diameter(radius) * Math.PI }
}

export default Circle