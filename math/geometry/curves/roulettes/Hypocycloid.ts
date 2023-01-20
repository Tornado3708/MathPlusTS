class Hypocycloid{

  /**
   * Returns value of x-axis of hypocycloid by angle, radius of center circle and radius of satellite circle.
   * @param {number} angle Angle of hypocycloid.
   * @param {number} centerR Radius of center circle.
   * @param {number} satelliteR Radius of satellite circle.
   * @returns Number
   */
  static x(angle: number, centerR: number = 1, satelliteR: number = 1): number{
    let R = centerR - satelliteR;
    return R * Math.cos(angle) + satelliteR * Math.cos(R / satelliteR * angle);
  }


  /**
   * Returns value of y-axis of hypocycloid by angle, radius of center circle and radius of satellite circle.
   * @param {number} angle Angle of hypocycloid.
   * @param {number} centerR Radius of center circle.
   * @param {number} satelliteR Radius of satellite circle.
   * @returns Number
   */
   static y(angle: number, centerR: number = 1, satelliteR: number = 1): number{
    let R = centerR - satelliteR;
    return R * Math.sin(angle) - satelliteR * Math.cos(R / satelliteR * angle);
  }
}

export default Hypocycloid;