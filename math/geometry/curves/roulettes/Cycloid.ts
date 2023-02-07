/**
 * Representation of cycloid.
 * 
 * Cycloid - roulette, described like point on surface of rolling circle.
 * */
class Cycloid {

  static #buffer = {
  start: 0,
  length: 0,
  radius: 0,
  step: 0,
  matrix: [[0,0]]
}

  /**
   * Returns value on x-axis with angle and radius.
   * @param {number} [angle]  Angle of "rolling".
   * @param {number} [radius] Radius of "rolling" circle.
   * @returns Number
   * */
  static x(angle: number, radius: number = 1): number{ return radius * (angle - Math.sin(angle)) }
  
  /**
   * Returns value on y-axis with angle and radius.
   * @param {number} [angle] Angle of rotation. 
   * @param {number} [radius] Radius of rolling circle.
   * @returns Number
   * */
  static y(angle: number, radius: number = 1): number{ return radius * (1 - Math.cos(angle)) }




  /**
   * Returns matrix with points of cycloid, calculated with next parameters.
   * @param {number} [start] Start angle. 
   * @param {number} [length] Continuation of rotation (in radians) 
   * @param {number} [radius] Radius of "rolling" circle. 
   * @param {number} [step] Step of calculation. 
   * @returns [ [x: number , y: number ], ... ]
   * */
  static generate(start :number=0, length :number=Math.TAU, radius :number=1, step :number=Math.TAU*.001) :matrix {
    if(this.#buffer.start !== start || this.#buffer.length !== length || this.#buffer.radius !== radius || this.#buffer.step !== step){
      this.#buffer.matrix = []
      for(let i = start; i < start + length; i+=step){ this.#buffer.matrix.push([this.x(i , radius) , this.y(i , radius)]) }
    }
    
    return this.#buffer.matrix
  }

  /**
   * Returns last generated cycloid (for optimisation).
   * @returns {matrix} matrix
   * */
  static get last() :matrix { return this.#buffer.matrix }

}

export default Cycloid