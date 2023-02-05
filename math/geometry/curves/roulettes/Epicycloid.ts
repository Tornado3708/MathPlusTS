
/**
 * Representation of epicycloid.
 * 
 * Epicycloid - roulette, described with point on surface of satellite circle rolling around main circle.
 * */
export default class Epicycloid {

  static #buffer = {
    matrix: [[0,0]],
    radii: 0,
    cRadius: 0,
    sRadius: 0
  }

  /**
   * Returns value of x-axis of epicycloid by angle, radius of center circle and radius of satellite circle.
   * @param {number} [angle] Angle of epicycloid. Needs value in radians.
   * @param {number} [cRadius] Radius of main circle. Default value: 1.
   * @param {number} [sRadius] Radius of satellite circle. Default value: 1.
   * @returns Number
   * */
  static x(angle: number, cRadius: number = 1, sRadius: number = 1) :number {
    if(cRadius !== this.#buffer.cRadius && sRadius !== this.#buffer.sRadius){
      this.#buffer.cRadius = cRadius
      this.#buffer.sRadius = sRadius
      this.#buffer.radii   = cRadius + sRadius
    }
    return this.#buffer.radii * Math.cos(angle) - sRadius *  Math.cos(this.#buffer.radii * (1 / sRadius) * angle)
  }


  /**
   * Returns value of y-axis of epicycloid by angle, radius of center circle and radius of satellite circle.
   * @param {number} [angle] Angle of epicycloid. Needs value in radians.
   * @param {number} [cRadius] Radius of center circle. Default value: 1.
   * @param {number} [sRadius] Radius of satellite circle. Default value: 1.
   * @returns Number
   * */
  static y(angle: number, cRadius: number = 1, sRadius: number = 1) :number{
    if(cRadius !== this.#buffer.cRadius && sRadius !== this.#buffer.sRadius){
      this.#buffer.cRadius = cRadius
      this.#buffer.sRadius = sRadius
      this.#buffer.radii   = cRadius + sRadius
    }
    return this.#buffer.radii * Math.sin(angle) - sRadius * Math.sin(this.#buffer.radii * (1 / sRadius) * angle)
  }




  /**
   * Returns matrix with points of epicycloid, generated with properties.
   * @param {number} [cRadius] Radius of main circle.
   * @param {number} [sRadius] Radius of satellite circle.
   * @param {number} [start] Start angle.
   * @param {number} [length] Duration of rotation.
   * @param {number} [step] Step of calculation.
   * @returns [ [x: number , y: number ] , ... ]
   * */
  static generate(cRadius: number=1,sRadius: number=1,start: number=0, length: number=Math.TAU,step: number=Math.TAU * .001): matrix{
    this.#buffer.matrix = []
    for(let i = start; i < start + length; i+=step){
      this.#buffer.matrix.push([ this.x(i , cRadius , sRadius) , this.y(i , cRadius , sRadius) ]) }
    return this.#buffer.matrix
  }

  /**
   * Returns last generated epicycloid (for optimisation).
   * @returns 
   */
  static get last(): matrix { return this.#buffer.matrix }
}