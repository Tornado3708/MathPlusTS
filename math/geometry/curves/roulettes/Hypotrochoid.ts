import Hypocycloid from "./Hypocycloid.js";


/**
 * Representation of  hypotrochoid.
 * 
 * Epitrochoid - roulette, described like attached point, rolling outside of satellite
 * circle ad rotates together around main circle.
 */
class Hypotrochoid {


  /**
   * Returns value of x-axis of hypotrochoid point by angle, radius of center circle, radius of satellite circle and distance to center of satellite circle.
   * @static
   * @param {number} [angle] Angle of trochoid.
   * @param {number} [centerR] Radius of center circle.
   * @param {number} [satelliteR] Radius of satellite circle.
   * @param {number} [length] Distance from center of satellite circle.
   * @returns Number
   * */
  static x(angle: number, centerR: number = 1, satelliteR: number = 1, length: number = satelliteR): number{
    return(length === satelliteR
    ? Hypocycloid.x(angle, centerR, satelliteR)
    : (centerR - satelliteR) * Math.cos(angle + length * Math.cos((centerR - satelliteR) / satelliteR * angle)));
  }

  /**
   * Returns value of y-axis of hypotrochoid point by angle, radius of center circle, radius of satellite circle and distance to center of satellite circle.
   * @static
   * @param {number} angle Angle of trochoid.
   * @param {number} centerR Radius of center circle.
   * @param {number} satelliteR Radius of satellite circle.
   * @param {number} length Distance from center of satellite circle.
   * @returns Number
   * */
   static y(angle: number, centerR: number = 1, satelliteR: number = 1, length: number = satelliteR): number{
    return(length === satelliteR
    ? Hypocycloid.y(angle, centerR, satelliteR)
    : (centerR - satelliteR) * Math.sin(angle - length * Math.sin((centerR - satelliteR) / satelliteR * angle)));
  }
}

export default Hypotrochoid;