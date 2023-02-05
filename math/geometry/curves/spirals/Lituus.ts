/**
 * toDo
 */
export default class Lituus {
  static #buffer = { matrix : [[0,0]] }

  /**
   * Returns value of x-axis of lituus spiral by angle and coefficient.
   * @param {number} [angle] Angle of spiral.
   * @param {number} [coefficient] Number, divided by square root of angle.
   * @returns Number
   * */
  static x(angle: number, coefficient: number = 1) :number { return Math.cos(angle) * coefficient * (1 / Math.sqrt(angle)) }

  /**
   * Returns value of y-axis of lituus spiral by angle and coefficient.
   * @param {number} [angle] Angle of spiral.
   * @param {number} [coefficient] Number, divided by square root of angle.
   * @returns Number
   * */
  static y(angle: number, coefficient: number = 1) :number { return Math.sin(angle) * coefficient * (1 / Math.sqrt(angle)) }




  /**
   * Returns matrix with generated points with nex parameters.
   * @param {number} [start] Start angle.
   * @param {number} [coefficient] Number, divided by square root of angle.
   * @param {number} [length] Duration of generation in radians.
   * @param {number} [step] Step value of generation in radians.
   * @returns {matrix} [ [ x: number , y: number ] , ... ]
   * */
  static generate(start: number=0, coefficient: number=1 ,length: number=Math.TAU, step: number=length * .001) :matrix {
    this.#buffer.matrix = []
    for(let i = start; i < start + length; i+=step){
      this.#buffer.matrix.push([ this.x(i,coefficient) , this.y(i,coefficient) ])
    }
    return this.#buffer.matrix
  }

  /**
   * Returns last generated lituus (for optimisation).
   * @returns { matrix } matrix
   **/
  static last() :matrix { return this.#buffer.matrix }
}