class Lituus {

  /**
   * Returns value of x-axis of lituus spiral by angle and coefficient.
   * @param {number} angle Angle of spiral.
   * @param {number} coefficient Number, divided by square root of angle.
   * @returns Number
   */
  static x(angle: number, coefficient: number = 1): number{ return Math.cos(angle) * coefficient / Math.sqrt(angle); }

  /**
   * Returns value of y-axis of lituus spiral by angle and coefficient.
   * @param {number} angle Angle of spiral.
   * @param {number} coefficient Number, divided by square root of angle.
   * @returns Number
   */
  static y(angle: number, coefficient: number = 1): number{ return Math.sin(angle) * coefficient / Math.sqrt(angle); }

}

export default Lituus;