class Epicycloid {

  /**
   * Returns value of x-axis of epicycloid by angle, radius of center circle and radius of satellite circle.
   * @param {number} [angle] Angle of epicycloid. Needs value in radians.
   * @param {number} [centerR] Radius of main circle. Default value: 1.
   * @param {number} [satelliteR] Radius of satellite circle. Default value: 1.
   * @returns Number
   * */
  static x(angle: number, centerR: number = 1, satelliteR: number = 1): number{
    let R = centerR + satelliteR;
    return R * Math.cos(angle) - satelliteR *  Math.cos(R * (1 / satelliteR) * angle)
  }


  /**
   * Returns value of y-axis of epicycloid by angle, radius of center circle and radius of satellite circle.
   * @param {number} [angle] Angle of epicycloid. Needs value in radians.
   * @param {number} [centerR] Radius of center circle. Default value: 1.
   * @param {number} [satelliteR] Radius of satellite circle. Default value: 1.
   * @returns Number
   * */
  static y(angle: number, centerR: number = 1, satelliteR: number = 1): number{
    let R = centerR + satelliteR;
    return R * Math.sin(angle) - satelliteR * Math.sin(R * (1 / satelliteR) * angle)
  }




  /**
   * Returns matrix with points of epicycloid, generated with properties.
   * @param {number} [centerR] Radius of main circle.
   * @param {number} [satelliteR] Radius of satellite circle.
   * @param {number} [start] Start angle.
   * @param {number} [length] Duration of rotation.
   * @param {number} [step] Step of calculation.
   * @returns [ [x: number , y: number ] , ... ]
   * */
  static generate(centerR: number=1,satelliteR: number=1,start: number=0, length: number=Math.TAU,step: number=Math.TAU * .001): matrix{
    let matrix = []
    for(let i = start; i < start + length; i+=step){ matrix.push([ this.x(i , centerR , satelliteR) , this.y(i , centerR , satelliteR) ]) }
    return matrix
  }
}

export default Epicycloid;