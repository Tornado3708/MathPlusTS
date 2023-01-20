class Epicycloid {

  /**
   * Returns value of x-axis of epicycloid by angle, radius of center circle and radius of satellite circle.
   * @param {number} angle Angle of epicycloid. Needs value in radians.
   * @param {number} centerR Radius of center circle. Default value: 1.
   * @param {number} satelliteR Radius of satellite circle. Default value: 1.
   * @returns Number
   */
  static x(angle: number, centerR: number = 1, satelliteR: number = 1): number{
    let R = centerR + satelliteR;
    return R * Math.cos(angle) - Math.cos(R / satelliteR * angle);
  }


  /**
   * Returns value of y-axis of epicycloid by angle, radius of center circle and radius of satellite circle.
   * @param {number} angle Angle of epicycloid. Needs value in radians.
   * @param {number} centerR Radius of center circle. Default value: 1.
   * @param {number} satelliteR Radius of satellite circle. Default value: 1.
   * @returns Number
   */
  static y(angle: number, centerR: number = 1, satelliteR: number = 1): number{
    let R = centerR + satelliteR;
    return R * Math.sin(angle) - Math.sin(R / satelliteR * angle);
  }
}

export default Epicycloid;