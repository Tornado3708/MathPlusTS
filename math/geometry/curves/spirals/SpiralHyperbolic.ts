class SpiralHyperbolic {


  /**
   * Returns value of x-axis of hyperbolic spiral by angle and coefficient.
   * @param {number} angle Angle of spiral.
   * @param {number} coefficient Number, divided by angle.
   * @returns Number
   */
  static x(angle: number, coefficient: number = 1): number{ return Math.cos(angle) * coefficient / angle; }


    /**
   * Returns value of y-axis of hyperbolic spiral by angle and coefficient.
   * @param {number} angle Angle of spiral.
   * @param {number} coefficient Number, divided by angle.
   * @returns Number
   */
  static y(angle: number, coefficient: number = 1): number{ return Math.sin(angle) * coefficient / angle; }

  
}

export default SpiralHyperbolic;