var a0 = []
var c  = []
/**
 * Буфер для пришвидшення розрахунків при генерації довгих узорів з використанням однієї фігури.
 */

const chords = (matrix: matrix) :number[] => {
  c = []
  for(let i = 1; i < matrix.length; i++){ c.push(Math.hypot(matrix[i][0] - matrix[0][0] , matrix[i][1] - matrix[0][1])) }
  c.push( 0 ); return c
}


/**
 * Representation of cyclogon.
 * 
 * Cyclogon - roulette, described by rotation of polygon.
 * */
export default class Cyclogon {
  

  /**
   * Returns angles in radians between point of polygon in matrix form and matrix zero point element. Last value of result is 0 by reason of it`s angle between one matrix zero point element.
   * @param {matrix} [matrix] [matrix] 
   * @returns {number[]} Array with angles.
   * */
  static angle0(matrix :matrix): number[]{
    a0 = []
    for(let i = 1; i < matrix.length; i++){
      a0.push(Math.atan2(matrix[i][1] - matrix[i-1][1] , matrix[i][0] - matrix[i-1][0]))
      if(a0[i] < 0){ a0[i] += Math.TAU }
    }
    a0.push( 0 ); return a0
  }


  /**
   * Returns [x] of cyclogon with given parameters.
   * @param {number} [angle] Rolling of polygon.
   * @param {matrix} [polygon] Polygon.
   * @returns {number} Number 
   * */
  static x(angle :number, polygon :matrix): number {

    let [ poly , length , dir ] = [ polygon , polygon.length , Math.sign(angle) ]
    let cycle = 0
    let full = 0// x of full rotation
    let laps = 0// count of full rotations
    let segment = []

    if(dir === -1){ poly.reverse() }

    let [ chord , start , end , values ] = [chords(poly) , new Array(), this.angle0(poly) , new Array()] 
    for(let i = 1; i < length; i++){ values.push(end[i] - end[i-1])}
    values.push(end[length - 1] - Math.PI)
    values.forEach(value => cycle += value)
    for(let i = 0; i < length; i++){ start.push(end[i] - values[i]) }

    angle = Math.abs(angle)

    let result = 0
    for(let i = 0; i < length; i++){ segment.push((Math.sin(end[i]) - Math.sin(start[i])) * chord[i]) }
    segment.forEach(seg => full += seg )
    if(angle > cycle){
      laps = cycle * (1 / (angle - (angle % cycle)))
    }

    for(let i = 0; i < length; i++){
      if(angle > 0){
        if(angle >= values[i]){
          result += segment[i]
          angle -= values[i]
        }else{
          result += (Math.sin(start[i] + angle) - Math.sin(start[i])) * chord[i]
          angle = 0
        }
      }
    }

    return dir * (result + laps * full)

  }



  static y(angle :number , polygon :matrix) /*:number*/ {

  }



  static generate(/*params*/){}
}