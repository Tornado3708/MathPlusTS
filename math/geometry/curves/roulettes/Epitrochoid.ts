import Epicycloid from "./Epicycloid.js";

class Epitrochoid {


/**
 * Returns value of x-axis of centered trochoid by angle, radius of center circle, radius of satellite circle and distance from center of satellite circle.
 * @param {number} angle Angle of centered trochoid. Needs value in radians.
 * @param {number} centerR Radius of center circle. Default value: 1.
 * @param {number} satelliteR Radius of satellite circle. Default value: 1.
 * @param {number} length Distance from center of satellite circle.Default value: satelliteR.
 * @returns Number
 */
  static x(angle: number ,centerR: number = 1, satelliteR: number = 1, length: number = satelliteR){

    return(length === satelliteR 
      ? Epicycloid.x(angle, centerR, satelliteR) 
      : (centerR + satelliteR) * Math.cos(angle) - length * Math.cos((centerR + satelliteR) / satelliteR * angle)); 
  };


  /**
 * Returns value of y-axis of centered trochoid by angle, radius of center circle, radius of satellite circle and distance from center of satellite circle.
 * @param {number} angle Angle of centered trochoid. Needs value in radians.
 * @param {number} centerR Radius of center circle. Default value: 1.
 * @param {number} satelliteR Radius of satellite circle. Default value: 1.
 * @param {number} length Distance from center of satellite circle.Default value: satelliteR.
 * @returns Number
 */
  static y(angle: number ,centerR: number = 1, satelliteR: number = 1, length: number = satelliteR){

    return(length === satelliteR
      ? Epicycloid.y(angle, centerR, satelliteR)
      : (centerR + satelliteR) * Math.sin(angle) - length * Math.sin((centerR + satelliteR) / satelliteR * angle));
  }
}

export default Epitrochoid;