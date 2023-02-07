/**
 * Representation of hyperbolic spiral.
 */
class SpiralHyperbolic {

  static #buffer = {
    start: 0,
    coefficient: 0,
    length: 0,
    step: 0,
    matrix: [[0,0]]
  }

  /**
   * Returns value of x-axis of hyperbolic spiral by angle and coefficient.
   * @param {number} [angle] Angle of spiral.
   * @param {number} [coefficient] Number, divided by angle.
   * @returns {number} Number
   * */
  static x(angle :number, coefficient :number=1) :number { return Math.cos(angle) * coefficient / angle }


    /**
   * Returns value of y-axis of hyperbolic spiral by angle and coefficient.
   * @param {number} [angle] Angle of spiral.
   * @param {number} [coefficient] Number, divided by angle.
   * @returns {number} Number
   * */
  static y(angle :number, coefficient :number=1) :number { return Math.sin(angle) * coefficient / angle }

  /**
   * Returns points on spiral im matrix form.
   * @param {number} start 
   * @param {number} coefficient 
   * @param {number} length 
   * @param {number} step 
   * @returns {matrix} [ [ x: number , y: number ] , ... ]
   * */
  static generate(start :number=0, coefficient :number=1, length :number=Math.TAU, step :number=length*.001) :matrix {
    let _buffer = this.#buffer
    if(_buffer.start !== start || _buffer.coefficient !== coefficient || _buffer.length !== length || _buffer.step !== step){
      this.#buffer.start = start
      this.#buffer.coefficient = coefficient
      this.#buffer.length = length
      this.#buffer.step = step
      this.#buffer.matrix = []
      for(let i = start; i < start + length; i+=step){
        this.#buffer.matrix.push([ this.x(i,coefficient) , this.y(i,coefficient) ])
      }
    }
    return this.#buffer.matrix
  }
  
  /**
   * Returns last generated hyperbolic spiral.
   * @returns {matrix} [ [ x: number , y: number ] , ... ]
  * */
  static get last() :matrix { return this.#buffer.matrix } 
}

export default SpiralHyperbolic