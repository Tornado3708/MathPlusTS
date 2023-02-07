import azimuth from "../../../../generic_calculations/azimuth.js"
import magnitude from "../../../../generic_calculations/magnitude.js"

/**
 * Representation of cyclogon.
 * 
 * Cyclogon - roulette, described by rotation of polygon.
 * */
export default class Cyclogon {

  static #chord :number[] = []
  static #an0   :number[] = []
  
  static #diff = {
    x: (end :number, start :number, chord :number) => (Math.sin(end) - Math.sin(start)) * chord,
    y: (end :number, start :number, chord :number) => (Math.cos(end) - Math.cos(start)) * chord
  }

  /**
   * Returns lengths between every point of matrix and point with zero index.
   * @param {matrix} [matrix] Polygon.
   * @returns {number[]} Array with lengths.
   * */
  static #chords = (matrix: matrix) :number[] => {
    this.#chord=[]
    for(let i = 1; i < matrix.length; i++){ this.#chord.push( magnitude( matrix[i][0] - matrix[0][0] , matrix[i][1] - matrix[0][1] ) ) }
    this.#chord.push( 0 )
    return this.#chord
  }

  /**
   * Returns angles in radians between point of polygon in matrix form and matrix zero point element. Last value of result is 0 by reason of it`s angle between one matrix zero point element.
   * @param {matrix} [matrix] [matrix] 
   * @returns {number[]} Array with angles.
   * */
  static #angle0(matrix :matrix): number[] {
    this.#an0=[]
    for(let i = 1; i < matrix.length; i++){
      this.#an0.push(azimuth( matrix[i][1] - matrix[i-1][1] , matrix[i][0] - matrix[i-1][0] ))
      if(this.#an0[i] < 0){ this.#an0[i] += Math.TAU }
    }
    this.#an0.push( 0 )
    return this.#an0
  }




  /**
   * Returns [x] of cyclogon with given parameters.
   * @param {number} [angle] Rolling of polygon.
   * @param {matrix} [polygon] Polygon.
   * @returns {number} Number 
   * */
  static x(angle :number, polygon :matrix): number {

    let [cycle , full , laps , result ] = new Array(4).fill(0)
    let { dir , length , poly , segment , start , values } = {
      dir     : Math.sign(angle),
      length  : polygon.length,
      poly    : polygon,
      segment : new Array(),
      start   : new Array(),
      values  : new Array(),
    }

    if(dir === -1){ poly.reverse() , angle *= -1 }
    
    let [ chord , end ] = [ this.#chords(poly) , this.#angle0(poly) ] 
    

    for(let i = 1; i < length; i++){ values.push( end[i] - end[i-1] ) }
    values.push(end[length - 1] - Math.PI)
    values.forEach(value => cycle += value)


    for(let i = 0; i < length; i++){
      start.push(end[i] - values[i])
      segment.push( this.#diff.x( end[i], start[i], chord[i] ) )
      full += segment[i]
    }

    
    if(angle > cycle){ laps = cycle * (1 / (angle - (angle % cycle))) }

    for(let i = 0; i < length; i++){
      if(angle > 0){
        if(angle >= values[i]){ result += segment[i] , angle -= values[i] }
        else{
          result += this.#diff.x(start[i] + angle , start[i] , chord[i])
          return dir * (result + laps * full)
        }
      }
    }
    return dir * (result + laps * full)
  }


  /**
   * Returns [y] of cyclogon with given parameters.
   * @param {number} [angle] Rolling of polygon.
   * @param {matrix} [polygon] Polygon.
   * @returns {number} Number 
   * */
  static y(angle :number , polygon :matrix) :number {

    let [ poly , length , dir ] = [ polygon , polygon.length , Math.sign(angle) ]
    let [ cycle , result ] = new Array(2).fill(0)
    
    if(dir === -1)      { poly.reverse() , angle *= -1 }
    // if(angle > Math.TAU){ angle %= Math.TAU }

    let [ chord , start , end , values , segment ] = [ this.#chords(poly) , new Array() , this.#angle0(poly) , new Array() , new Array() ]

    for(let i = 1; i < length; i++){ values[i] = end[i] - end[i-1] }
    values.push(Math.PI - values[length-1])
    values.forEach(value => cycle += value)

    for(let i = 0; i < length; i++){
      start.push( end[i] - values[i] )
      segment.push( this.#diff.y(end[i],start[i],chord[i]) )
    }

    return dir * result
  }



  static generate(start=0,polygon=[[0,0]],length=Math.TAU, step=length*.001){
    let end = start + length
    let matrix = []
    for(let i = start; i < end; i+=step){
      matrix.push([
        this.x(i , polygon),
        this.y(i , polygon)
      ])
    }
  }
}