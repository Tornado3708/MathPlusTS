class SpiralGolden {


  /**
   * Returns value of x-axis of golden spiral by angle and coefficient.
   * @param {number} angle Angle of spiral.
   * @param {number} mult Coefficient .Default value: 1.
   * @returns Number
   */
  static x(angle: number, mult: number = 1): number{
    let radius = mult * Math.PHI ** (2 * angle * (1 / Math.PI))
    return Math.cos(angle) * radius
  }


   /**
   * Returns value of y-axis of golden spiral by angle and coefficient.
   * @param {number} angle Angle of spiral.
   * @param {number} mult Coefficient .Default value: 1.
   * @returns Number
   */
  static y(angle: number, mult: number = 1): number{
    let radius = mult * Math.PHI ** (2 * angle * (1 / Math.PI))
    return Math.sin(angle) * radius
  }

}

export default SpiralGolden