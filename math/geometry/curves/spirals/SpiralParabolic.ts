class SpiralParabolic {


  /**
   * Returns position on parabolic spiral on x-axis by angle and exponent.
   * @param {number} angle Angle of spiral.
   * @param {number} exponent Exponent.
   * @returns Number 
   */
  static x(angle: number, exponent: number = 1): number{
    return Math.pow(angle, 1 / exponent) * Math.cos(angle);
  }


  /**
   * Returns position on parabolic spiral on y-axis by angle and exponent.
   * @param {number} angle Angle of spiral.
   * @param {number} exponent Exponent.
   * @returns Number 
   */
  static y(angle: number, exponent: number = 1): number{
    return Math.pow(angle, 1 / exponent) * Math.sin(angle);
  }
}

export default SpiralParabolic;