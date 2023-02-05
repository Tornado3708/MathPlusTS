let matrix = [[0,0]]

class SpiralArchimedean {


  /**
   * Returns position on spiral on x-axis by angle, radius between loops and radius from origin of coordinates.
   * @param {number} [angle] Angle of point on spiral.
   * @param {number} [radius] Distance between loops of spiral.
   * @param {number} [delay] Distance from origin of coordinates.
   * @returns Number
   * */
  static x(angle: number, radius: number = 0, delay: number = 0): number{
    let r = delay + radius * angle;
    return Math.cos(angle) * r + delay;
  }


  /**
   * Returns position on spiral on y-axis by angle, radius between loops and radius from origin of coordinates.
   * @param {number} [angle] Angle of point on spiral.
   * @param {number} [radius] Distance between loops of spiral.
   * @param {number} [delay] Distance from origin of coordinates.
   * @returns Number
   * */
   static y(angle: number, radius: number = 0, delay: number = 0): number{
    let r = delay + radius * angle;
    return Math.sin(angle) * r + delay;
  }


  /**
   * Returns matrix with generated points with next parameters.
   * @param {number} [start] Start angle.
   * @param {number} [radius] Distance between loops of spiral.
   * @param {number} [delay] Distance from origin of coordinates.
   * @param {number} [length] Duration of generation in radians.
   * @param {number} [step] Step of generation in radians.
   * @returns {matrix} [ [ x: number , y: number ] , ... ]
   * */
  static generate(start: number=0,radius: number=1,delay: number=0,length: number=Math.TAU,step: number=length*.001): matrix {
    matrix = []
    for(let i = start; i < start + length; i+=step){
      matrix.push([
        this.x(i,radius,delay),
        this.y(i,radius,delay)
      ])
    }
    return matrix
  }

  /**
   * Returns last generated archimedean spiral (for optimisation).
   * @returns {matrix} matrix
   */
  static last() :matrix { return matrix }
}

export default SpiralArchimedean