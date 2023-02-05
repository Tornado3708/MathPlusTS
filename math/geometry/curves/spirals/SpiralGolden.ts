let buffer = {
  matrix: [[0,0]],
  start: 0,
  mult: 0,
  length: 0,
  step: 0
}

class SpiralGolden {


  /**
   * Returns value of x-axis of golden spiral by angle and coefficient.
   * @param {number} angle Angle of spiral.
   * @param {number} mult Coefficient .Default value: 1.
   * @returns {number} Number
   * */
  static x(angle: number, mult: number = 1): number{
    let radius = mult * Math.PHI ** (2 * angle * (1 / Math.PI))
    return Math.cos(angle) * radius
  }


   /**
   * Returns value of y-axis of golden spiral by angle and coefficient.
   * @param {number} angle Angle of spiral.
   * @param {number} mult Coefficient .Default value: 1.
   * @returns {number} Number
   * */
  static y(angle: number, mult: number = 1): number{
    let radius = mult * Math.PHI ** (2 * angle * (1 / Math.PI))
    return Math.sin(angle) * radius
  }

  /**
   * Returns generated golden spiral in matrix form.
   * @param {number} [start] Start angle. 
   * @param {number} [mult] Radius multiplication. 
   * @param {number} [length] Duration of rotation in radians. 
   * @param {number} [step] Spet of rotation in radians. 
   * @returns {matrix} matrix
   * */
  static generate(start: number = 0, mult: number = 1, length: number = Math.TAU, step: number = length * .001) :matrix {
    if(
      buffer .start !== start  ||
      buffer  .mult !== mult   ||
      buffer.length !== length ||
      buffer  .step !== step
      ){
        buffer.matrix = []
        for(let i = start; i < start + length; i+=step){ buffer.matrix.push([ this.x(i,mult) , this.y(i,mult) ]) }
      }
      return buffer.matrix
  }

  /**
   * Returns last generated matrix.
   * @returns {matrix} matrix
   * */
  static last() :matrix { return buffer.matrix }
}

export default SpiralGolden