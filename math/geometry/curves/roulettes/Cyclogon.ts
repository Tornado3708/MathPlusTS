import azimuth from "../../../../generic_calculations/azimuth.js"
import magnitude from "../../../../generic_calculations/magnitude.js"
import Point2D from "../../Point2D.js"

/**
 * Representation of cyclogon.
 * 
 * Cyclogon - roulette, described by rotation of polygon.
 * */
export default class Cyclogon {
  
  static #abs      :number[] = []
  static #chord    :number[] = []
  static #cycle    :number   = 0
  static #dir      :number   = 1
  static #end      :number[] = []
  static #fullX    :number   = 0
  static #fullY    :number   = 0
  static #length   :number   = 0
  static #loop     :number   = 0
  static #polygon  :matrix   = [[0,0]]
  static #result   :number   = 0
  static #start    :number[] = []
  static #segmentX :number[] = []
  static #segmentY :number[] = []
  static #values   :number[] = []
  
  static #diff = {
    x: (end :number, start :number, chord :number) => (Math.sin(end) - Math.sin(start)) * chord,
    y: (end :number, start :number, chord :number) => (Math.cos(end) - Math.cos(start)) * chord
  }

  /**
   * Calculates this.#lengths between every point of matrix and point with zero index. Contains in #chord property.
   * @param {matrix} [matrix] Polygonm matrix.
   * */
  static #chords = (matrix: matrix) :void => {
    
    this.#chord=[]
    
    let zero = {x:matrix[0][0],y:matrix[0][1]}
    let diff
    for(let i = 1; i < this.#length; i++){

      diff = Point2D.distances( { x : matrix[i][0] , y : matrix[i][1] } , zero)
      
      this.#chord.push( magnitude(diff.x , diff.y) )
    }
    this.#chord.push( 0 )
  }

  /**
   * Calculates angles in radians between point of polygon in matrix form and matrix zero point element. Last value of result is 0 by reason of it`s angle between one matrix zero point element. Contains result in #end property.
   * @param {matrix} [matrix] Polygon matrix.
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
   * @param {matrix} [matrix] Polygon matrix.
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
    this.#cycle = 0
    for(let i = 1; i < this.#length; i++){
      this.#values.push( this.#abs[i] - this.#abs[i-1] )
      if(this.#values[i] < 0) this.#values[i]+=Math.TAU
    }
    this.#values.push(this.#abs[this.#length - 1] - Math.PI)
    this.#values.forEach(value => this.#cycle += value)
   }

   /**Calculates start angles.*/
  static #begin() :void {
    this.#start = []
    for(let i = 0; i < this.#length; i++){ this.#start.push(this.#end[i] - this.#values[i]) }
  }

  /**Calculates segments on x-axis.*/
  static #segmentationX() :void {
    this.#segmentX = []
    this.#fullX = 0
    for(let i = 0; i < this.#length; i++){
      this.#segmentX[i] = this.#diff.x(this.#end[i],this.#start[i],this.#chord[i])
      this.#fullX += this.#segmentX[i]
    }
  }
  /**Calculates segments on y-axis.*/
  static #segmentationY() :void {
    this.#segmentY = []
    this.#fullY = 0
    for(let i = 0; i < this.#length; i++){
      this.#segmentY[i] = this.#diff.y(this.#end[i],this.#start[i],this.#chord[i])
      this.#fullY += this.#segmentY[i]
    }
  }

  /**
   * Initialisation.
   * @param {matrix} [matrix] Polygon matrix. 
   * */
  static #init(matrix :matrix) :void {
    this.#chords(matrix)
    this.#angle0(matrix)
    this.#absolute(matrix)
    this.#value()
    this.#begin()
  }

  /**
   * Resets values.
   * @param {matrix} [matrix] Polygon matrix. 
   * @param {number} [angle] Current angle.
   * */
  static #reset(matrix :matrix, angle :number) :void {
    this.#polygon = matrix
    this.#length  = matrix.length
    this.#result  = this.#loop = 0
    this.#dir     = Math.sign(angle) || 1
  }

  /**
   * Returns [x] of cyclogon with given parameters.
   * @param {number} [angle] Rolling of polygon.
   * @param {matrix} [polygon] Polygon matrix.
   * @returns {number} Number 
   * */
  static x(angle :number, polygon :matrix): number {

    if(angle === 0) return 0

    this.#reset(polygon,angle)

    if(this.#dir === -1){ this.#polygon.reverse() , angle = Math.abs(angle) }
    
    this.#init(this.#polygon)
    this.#segmentationX()
   
    if(angle > this.#cycle){
      this.#loop = (this.#cycle / (angle - (angle % this.#cycle))) || 0
      if(!isFinite(this.#loop)){ this.#loop = 0 }
      angle -= this.#cycle * this.#loop
    }

    
    for(let i = 0; i < this.#length; i++){
      if(angle > 0){
        if(angle >= this.#values[i]){ this.#result += this.#segmentX[i] , angle -= this.#values[i] }
        else{
          this.#result += this.#diff.x(this.#start[i] + angle , this.#start[i] , this.#chord[i])
          return this.#dir * (this.#result + this.#loop * this.#fullX)
        }
      }else{ break }
    }
    return this.#dir * (this.#result + this.#loop * this.#fullX)
  }





  /**
   * Returns [y] of cyclogon with given parameters.
   * @param {number} [angle] Rolling of polygon.
   * @param {matrix} [polygon] Polygon.
   * @returns {number} Number 
   * */
  static y(angle :number , polygon :matrix) :number {

    if(angle === 0) return 0

    this.#reset(polygon,angle)
    
    if(this.#dir === -1) { this.#polygon.reverse() , angle *= -1 }
    

    this.#init(this.#polygon),this.#segmentationY()
    if(angle > this.#cycle) {angle %= this.#cycle }
    for(let i = 0; i < this.#length; i++){
      if(angle > 0){
        if(angle >= this.#values[i]){ this.#result += this.#segmentY[i] , angle -= this.#values[i] }
        else{
          this.#result += this.#diff.y(this.#start[i] + angle , this.#start[i] , this.#chord[i])
          return this.#dir * this.#result
        }
      }else{ break }
    }

    return this.#dir * this.#result
  }


  /**
   * Returns points of cyclogon in matrix form.
   * @param {number} [start] Start angle.
   * @param {matrix} [polygon] Matrix.
   * @param {number} [length] Duration of rotation in radians.
   * @param {number} [step] Step of rotation in radians.
   * @returns {matrix} [ [ x: number , y: number ] , ... ]
   * */
  static generate(start :number=0, polygon :matrix=[[0,0]], length :number=Math.TAU, step :number=length*.001) :matrix {
    let end = start + length
    let matrix = []
    for(let i = start; i < end; i+=step){matrix.push([this.x(i,polygon),this.y(i,polygon)])}
    return matrix
  }
}


// export default class Cyclogon {
    
//   static #chord:number[] = []
//   static #chords = (matrix: matrix) :void => {
//     this.#chord=[]
//     for(let i = 1; i < matrix.length; i++){ this.#chord.push( magnitude( matrix[i][0] - matrix[0][0] , matrix[i][1] - matrix[0][1] ) ) }
//     this.#chord.push( 0 )
//   }
  
//   static x(angle:number,polygon:matrix) /*:number*/ {

//     this.#chords(polygon)
//     let zeroA = []
//     for(let i = 0; i < polygon.length;i++){

//     }

//     return this.#chord
//   }

//   static y(angle:number,polygon:matrix) :number {
    


//     return 0
//   }
//   static generate(start=0,polygon=[[0,0]],length=Math.TAU,step=length/1000){
//     let matrix = []
//     for(let i = start; i < start + length;i+=step){
//       matrix.push([
//         this.x(i,polygon),
//         this.y(i,polygon)
//       ])
//     }
//     return matrix
//   }
// }