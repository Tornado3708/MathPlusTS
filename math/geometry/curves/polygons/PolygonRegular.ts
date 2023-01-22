const infinite_error = Error(`Attribute is not finite.`)
const negative_error = Error(`Attribute is negative.`)
const polygon_error  = Error(`Count of polygons is lower than 3.`)


/**Class for representation of regular polygon.*/
export default class PolygonRegular implements poly_regular {

  public x       :number=0
  public y       :number=0
  public gons    :number=0
  public radius  :number=0
  public azimuth :number=0

  /**
   * - { x: number , y: number , gons: number , radius: number , azimuth: number }
   * - [ x: number , y: number , gons: number , radius: number , azimuth: number ]
   * @param {poly_regular | number[]} params
   */
  constructor({...params} :any={}){

    this.x       = params.x       ?? params[0] ?? 0
    this.y       = params.y       ?? params[1] ?? 0
    this.gons    = params.gons    ?? params[2] ?? 0
    this.radius  = params.radius  ?? params[3] ?? 0
    this.azimuth = params.azimuth ?? params[4] ?? 0

  }



  /**
   * Rotates regular polygon.
   * @param {number} azimuth Azimuth for polygon rotation.
   * */
  rotate(azimuth: number=0) :void   {
    if(isFinite(azimuth)){ this.azimuth += azimuth } else { throw infinite_error }
    if(Math.abs(this.azimuth) > Math.TAU)this.azimuth %= Math.TAU
  }


  /**
   * Returns angle value of one corner of regular polygon.
   * @returns Angle value of one corner.
   * */
  get azimuth_gon() :number { return PolygonRegular.gon_value(this.gons) }

  /**
   * Returns matrix (2-dimensional array) of regular polygon points.
   * @returns Matrix of regular polygon points.
   * */
  get points() :matrix { return PolygonRegular.points(this) }



  /**
   * Sets new value of [x].
   * @param {number} [x] New value of [x].
   * */
  set setX(x :number){ if(isFinite(x)){ this.x = x } else { throw infinite_error } }

  /**
   * Sets new value of [y].
   * @param {number} [y] New value of [y].
   * */
  set setY(y :number){ if(isFinite(y)){ this.y = y } else { throw infinite_error } }

  /**
   * Sets new count of gons.
   * @param {number} [gons] New count of gons.
   * */
  set setGons(gons: number){
    if(isFinite(gons)){
      if(Math.sign(gons) > 0){
        if(Math.floor(gons) === gons){
          gons = Math.floor(gons)
        }
        this.gons = gons
      }else{
        throw negative_error 
      }
    }else{
      throw infinite_error
    }
  }

  /**
   * Sets new radius.
   * @param {number} radius New radius.
   * */
  set setRadius(radius :number){ if(isFinite(radius)){ this.radius = radius } else { throw infinite_error } }
  
  /**Sets new azimuth.
   * @param {number} azimuth New azimuth.
   * */
  set setAzimuth(azimuth :number){
    if(isFinite(azimuth)){
      if(Math.abs(azimuth) > Math.TAU){ azimuth %= Math.TAU }
      this.azimuth = azimuth
    }else{ throw infinite_error }
  }

  static gon_value(gons :number=3) :number { return Math.TAU / gons }
  static gon_length({gons=3,radius=0}){
    let gon = this.gon_value(gons)
    return Math.hypot(radius - Math.cos(gon) * radius, Math.sin(gon) * radius)
  }  
  
  static perimeter({gons=3,radius=0}){ return this.gon_length({gons,radius}) * gons }
  
  //toDo
  static area({gons=3,radius=0}){
    if(gons > 0){
      if(radius === 0){ return 0 }
      return this.apothem({gons,radius}) * this.perimeter({gons,radius}) * .5
    }else{
      throw polygon_error
    }
  }
  
  static points({ x = 0, y = 0, gons = 0, radius = 0, azimuth = 0 }: { x?: number; y?: number; gons?: number; radius?: number; azimuth?: number } = {}) : matrix {

    let matrix = []
    let gonValue = Math.TAU * (1 / gons)

    for(let i = 0; i < gons; i++){
      matrix.push([
        Math.cos(gonValue * i + azimuth) * radius + x,
        Math.sin(gonValue * i + azimuth) * radius + y
      ])
    }
    return matrix
  }

  static apothem({gons = 3, radius = 0}): number { return radius * Math.cos(Math.PI * (1 / gons)) }





  static ZERO_DOT       :poly_regular = { x: 0, y: 0, gons: 0, radius: 0, azimuth:  0 }
  static TRIANGLE_UP    :poly_regular = { x: 0, y: 0, gons: 3, radius: 1, azimuth:  Math.PI_HALF }
  static TRIANGLE_DOWN  :poly_regular = { x: 0, y: 0, gons: 3, radius: 1, azimuth: -Math.PI_HALF }
  static TRIANGLE_LEFT  :poly_regular = { x: 0, y: 0, gons: 3, radius: 1, azimuth:  Math.PI }
  static TRIANGLE_RIGHT :poly_regular = { x: 0, y: 0, gons: 3, radius: 1, azimuth:  0 }
  static SQUARE         :poly_regular = { x: 0, y: 0, gons: 4, radius: 1, azimuth:  this.gon_value(4) * .5 }
  static HEXAGON        :poly_regular = { x: 0, y: 0, gons: 6, radius: 1, azimuth:  0 }
  
}