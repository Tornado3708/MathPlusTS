import Epicycloid from "./Epicycloid.js"



/**
 * Representation of epitrochoid.
 * 
 * Epitrochoid - roulette, described like attached point, rolling outside of satellite
 * circle ad rotates together around main circle.
 * */
export default class Epitrochoid {

  static #buffer = {
    matrix: [[0,0]]
  }

/**
 * Returns value of x-axis of centered trochoid by angle, radius of center circle, radius of satellite circle and distance from center of satellite circle.
 * @param {number} [angle] Angle of centered trochoid. Needs value in radians.
 * @param {number} [centerR] Radius of center circle. Default value: 1.
 * @param {number} [satelliteR] Radius of satellite circle. Default value: 1.
 * @param {number} [distance] Distance from center of satellite circle.Default value: satelliteR.
 * @returns {number} Number
 * */
  static x(angle: number ,centerR: number = 1, satelliteR: number = 1, distance: number = satelliteR) :number {

    return(distance === satelliteR 
      ? Epicycloid.x(angle, centerR, satelliteR) 
      : (centerR + satelliteR) * Math.cos(angle) - distance * Math.cos((centerR + satelliteR) / satelliteR * angle)); 
  };


  /**
 * Returns value of y-axis of centered trochoid by angle, radius of center circle, radius of satellite circle and distance from center of satellite circle.
 * @param {number} [angle] Angle of centered trochoid. Needs value in radians.
 * @param {number} [centerR] Radius of center circle. Default value: 1.
 * @param {number} [satelliteR] Radius of satellite circle. Default value: 1.
 * @param {number} [distance] Distance from center of satellite circle.Default value: satelliteR.
 * @returns {number} Number
 * */
  static y(angle: number ,centerR: number = 1, satelliteR: number = 1, distance: number = satelliteR) :number {

    return(distance === satelliteR
      ? Epicycloid.y(angle, centerR, satelliteR)
      : (centerR + satelliteR) * Math.sin(angle) - distance * Math.sin((centerR + satelliteR) / satelliteR * angle))
  }


  /**
   * Generates matrix with points, using next properties.
   * @param {number} [start] Start angle.
   * @param {number} [centerR] Radius of main circle.
   * @param {number} [satelliteR] Radius of satellite circle.
   * @param {number} [distance] Distance from center of [satelliteR] circle.
   * @param {number} [length] Duration of generation.
   * @param {number} [step] Step of generation.
   * @returns {matrix} [ [ x: number , y: number ] , ... ]
   * */
  static generate(start: number=0,centerR: number = 1 ,satelliteR: number = 1,distance: number = satelliteR ,length: number=Math.TAU , step: number=Math.TAU * .001) :matrix {
    this.#buffer.matrix = []
    for(let i = start; i < start + length; i+=step){
      this.#buffer.matrix.push([
        this.x(i,centerR,satelliteR,distance),
        this.y(i,centerR,satelliteR,distance)
      ])
    }
  return this.#buffer.matrix
  }

  static get last() :matrix { return this.#buffer.matrix }
}