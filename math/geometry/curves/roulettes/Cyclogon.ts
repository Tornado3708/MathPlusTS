import azimuth from "../../../../generic_calculations/azimuth.js"
import magnitude from "../../../../generic_calculations/magnitude.js"

/**
 * Representation of cyclogon.
 * 
 * Cyclogon - roulette, described by rotation of polygon.
 * */
export default class Cyclogon {
  
  static #abs      :number[] = []
  static #chord    :number[] = []
  static #cycle    :number   = 0
  static #end      :number[] = []
  static #fullX    :number   = 0
  static #fullY    :number   = 0
  static #length   :number   = 0
  static #polygon  :matrix   = [[0,0]]
  static #start    :number[] = []
  static #segmentX :number[] = []
  static #segmentY :number[] = []
  static #values   :number[] = []
  
  static #diff = {
    x: (end :number, start :number, chord :number) => (Math.sin(end) - Math.sin(start)) * chord,
    y: (end :number, start :number, chord :number) => (Math.cos(end) - Math.cos(start)) * chord
  }

  /**
   * Calculates lengths between every point of matrix and point with zero index. Contains in #chord property.
   * @param {matrix} [matrix] Polygon.
   * */
  static #chords = (matrix: matrix) :void => {
    this.#chord=[]
    for(let i = 1; i < this.#length; i++){ this.#chord.push( magnitude( matrix[i][0] - matrix[0][0] , matrix[i][1] - matrix[0][1] ) ) }
    this.#chord.push( 0 )
  }

  /**
   * Calculates angles in radians between point of polygon in matrix form and matrix zero point element. Last value of result is 0 by reason of it`s angle between one matrix zero point element. Contains result in #end property.
   * @param {matrix} [matrix] [matrix] 
   * */
  static #angle0(matrix :matrix) :void {
    this.#end=[]
    for(let i = 1; i < this.#length-1; i++){
      this.#end.push(azimuth( matrix[i][1] - matrix[0][1] , matrix[i][0] - matrix[0][0] ))
      if(this.#end[i] < 0){ this.#end[i] += Math.TAU }
    }
    this.#end.push(azimuth( matrix[this.#length-1][1] - matrix[0][1] , matrix[this.#length-1][0] - matrix[0][0]),0)
  }

  /**
   * Calculates absolute angle of polygon rotation. Contains result in #abs property.
   * @param {matrix} [matrix] 
   * */
  static #absolute(matrix :matrix) :void {
    this.#abs = []
    for(let i = 1; i < this.#length; i++){ this.#abs.push(azimuth(matrix[i][1] - matrix[i-1][1],matrix[i][0] - matrix[i-1][0])) }
    this.#abs.push(azimuth(matrix[0][1] - matrix[this.#length-1][1],matrix[0][0] - matrix[this.#length-1][0]))
    for(let i in this.#abs){ if(this.#abs[i] < 0) this.#abs[i] += Math.TAU }
  }

  /**Calculates angle between gons. #absolute should be activated before.*/
  static #value(){ 
    this.#values = []
    for(let i = 1; i < this.#length; i++){
      this.#values.push( this.#abs[i] - this.#abs[i-1] )
      if(this.#values[i] < Math.TAU) this.#values[i]+=Math.TAU
    }
    this.#values.push(this.#abs[this.#length - 1] - Math.PI)
    this.#values.forEach(value => this.#cycle += value)
   }

  static #begin(){
    this.#start = []
    for(let i = 0; i < this.#length; i++){ this.#start.push(this.#end[i] - this.#values[i]) }
  }

  static #segmentationX(){
    this.#segmentX = []
    this.#fullX = 0
    for(let i = 0; i < this.#length; i++){
      this.#segmentX[i] = this.#diff.x(this.#end[i],this.#start[i],this.#chord[i])
      this.#fullX += this.#segmentX[i]
    }
  }
  static #segmentationY(){
    this.#segmentY = []
    this.#fullY = 0
    for(let i = 0; i < this.#length; i++){
      this.#segmentY[i] = this.#diff.y(this.#end[i],this.#start[i],this.#chord[i])
      this.#fullY += this.#segmentY[i]
    }
  }






  /**
   * Returns [x] of cyclogon with given parameters.
   * @param {number} [angle] Rolling of polygon.
   * @param {matrix} [polygon] Polygon.
   * @returns {number} Number 
   * */
  static x(angle :number, polygon :matrix): number {

    if(angle === 0) return 0

    this.#polygon = polygon
    this.#length = polygon.length
    let [cycle , full , laps , result ] = new Array(4).fill(0)
    let dir = Math.sign(angle) || 1

    if(dir === -1){ this.#polygon.reverse() , angle *= -1 }
    
    this.#chords       (this.#polygon)
    this.#angle0       (this.#polygon)
    this.#absolute     (this.#polygon)
    this.#value        ()
    this.#begin        ()
    this.#segmentationX()
   
    if(angle > cycle){ laps = cycle * (1 / (angle - (angle % cycle))) }

    for(let i = 0; i < this.#length; i++){
      if(angle > 0){
        if(angle >= this.#values[i]){ result += this.#segmentX[i] , angle -= this.#values[i] }
        else{
          result += this.#diff.x(this.#start[i] + angle , this.#start[i] , this.#chord[i])
          return dir * (result + laps * this.#fullX)
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

    if(angle === 0) return 0
    
    let [ cycle , result ] = new Array(2).fill(0)
    let { dir , length , poly , segment , start ,values } = {
      dir     : Math.sign(angle) || 1,
      poly    : polygon,
      length  : polygon.length,
      segment : new Array(),
      start   : new Array(),
      values  : new Array()
    }
    
    
    if(dir === -1) { poly.reverse() , angle *= -1 }
    // if(angle > Math.TAU){ angle %= Math.TAU }

    this.#chords(poly) , this.#angle0(poly)

    for(let i = 1; i < length; i++){ values[i] = this.#end[i] - this.#end[i-1] }
    values.push(Math.PI - values[length-1])
    values.forEach(value => cycle += value)

    for(let i = 0; i < length; i++){
      start.push( this.#end[i] - values[i] )
      segment.push( this.#diff.y(this.#end[i] , start[i] , this.#chord[i]) )
    }

    return dir * result
  }


  /**
   * Returns points of cyclogon in matrix form.
   * @param {number} [start] 
   * @param {matrix} [polygon] 
   * @param {number} [length] 
   * @param {number} [step] 
   * @returns {matrix} [ [ x: number , y: number ] , ... ]
   * */
  static generate(start :number=0, polygon :matrix=[[0,0]], length :number=Math.TAU, step :number=length*.001) :matrix {
    let end = start + length
    let matrix = []
    for(let i = start; i < end; i+=step){
      matrix.push([
        this.x(i , polygon),
        this.y(i , polygon)
      ])
    }
    return matrix
  }
}