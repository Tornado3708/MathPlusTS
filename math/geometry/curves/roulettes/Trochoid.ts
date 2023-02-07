import Cycloid from "./Cycloid.js"


/**
 * Representation of trochoid.
 * 
 * Trochoid - roulette, described with attached point, rolling together with circle.
 * */
export default class Trochoid {

  /**Hidden buffer for optimisation.*/
  static #buffer = {
  start:0,
  radius: 0,
  distance: 0,
  length: 0,
  step: 0,
  matrix: [[0,0]]
}

  /**
   * Returns value of x-axis of trochoid point by angle, distance and radius.
   * @static
   * @param {number} [angle] Angle of trochoid.
   * @param {number} [distance] Distance from center of trochoid.
   * @param {number} [radius] Radius of circle of trochoid.
   * @returns {number} Number
   * */
  static x(angle :number, radius :number=1, distance :number=radius) :number { 
    return (distance === radius ? Cycloid.x(angle, radius) : radius * angle - distance * Math.sin(angle))}

  
  /**
   * Returns value of y-axis of trochoid point by angle, distance and radius.
   * @static
   * @param {number} [angle] Angle of trochoid.
   * @param {number} [distance] Distance from center of trochoid.
   * @param {number} [radius] Radius of circle of trochoid.
   * @returns {number} Number
   * */
  static y(angle: number, radius: number=1, distance: number=radius): number{
    return (distance === radius ? Cycloid.y(angle, radius) : radius - distance * Math.cos(angle)) }


  /**
   * Returns matrix with generated points with next parameters.
   * @param {number} [start] Start angle.
   * @param {number} [radius] Circle radius.
   * @param {number} [distance] Distance from center of [satelliteR].
   * @param {number} [length] Duration of generation in radians.
   * @param {number} [step] Step of generation in radians.
   * @returns {matrix} matrix
   * */ 
  static generate(start :number=0, radius :number=1, distance :number=radius, length :number=Math.TAU, step: number=length * .001) :matrix {
    let _buffer = this.#buffer
    if(_buffer.start !== start || _buffer.radius !== radius || _buffer.distance !== distance || _buffer.length !== length || _buffer.step !== step){
      this.#buffer.matrix   = []
      this.#buffer   .start = start
      this.#buffer  .radius = radius
      this.#buffer.distance = distance
      this.#buffer  .length = length
      this.#buffer    .step = step
      for(let i = start; i < start + length; i+=step){
        this.#buffer.matrix.push([ this.x(i , radius , distance) , this.y(i , radius , distance) ])
      }
    }
    
    return this.#buffer.matrix
  }
}