class SpiralArchimedean {


  /**
   * Returns position on spiral on x-axis by angle, distance between loops and distance from origin of coordinates.
   * @param {number} angle Angle of point on spiral.
   * @param {number} distance Distance between loops of spiral.
   * @param {number} translate Distance from origin of coordinates.
   * @returns Number
   */
  static x(angle: number, distance: number = 0, translate: number = 0): number{
    let r = translate + distance * angle;
    return Math.cos(angle) * r + translate;
  }


  /**
   * Returns position on spiral on y-axis by angle, distance between loops and distance from origin of coordinates.
   * @param {number} angle Angle of point on spiral.
   * @param {number} distance Distance between loops of spiral.
   * @param {number} translate Distance from origin of coordinates.
   * @returns Number
   */
   static y(angle: number, distance: number = 0, translate: number = 0): number{
    let r = translate + distance * angle;
    return Math.sin(angle) * r + translate;
  }
}

export default SpiralArchimedean;