import Cycloid from "./Cycloid.js";

class Trochoid {


  /**
   * Returns value of x-axis of trochoid point by angle, length and radius.
   * @static
   * @param {number} angle Angle of trochoid.
   * @param {number} length Distance from center of trochoid.
   * @param {number} radius Radius of circle of trochoid.
   * @returns Number
   */
  static x(angle: number ,radius: number = 1, length: number = radius): number{ 
    return (length === radius ? Cycloid.x(angle, radius) : radius * angle - length * Math.sin(angle)); }

  
  /**
   * Returns value of y-axis of trochoid point by angle, length and radius.
   * @static
   * @param {number} angle Angle of trochoid.
   * @param {number} length Distance from center of trochoid.
   * @param {number} radius Radius of circle of trochoid.
   * @returns Number
   */
  static y(angle: number, radius: number = 1, length: number = radius): number{
    return (length === radius ? Cycloid.y(angle, radius) : radius - length * Math.cos(angle)); }
  

}

export default Trochoid;