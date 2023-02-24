import PolygonRegular from "./polygons/PolygonRegular.js"
import { Star } from "./polygons/Star.js"



/**
 * Representations of polygons.
 * 
 * - [Regular] - regular polygon.
 * */
export default class Polygon extends Array {

  /**
   * Returns new Polygon.
   * @param {number[] | matrix} [points] Points.
   * */
  constructor(...points:any){
    super()
    let p = points
    switch(p[0].constructor.name){
      case 'Array':
        for(let segment in p){ this.push(segment) }
        break
      case 'Number':
        while(p.length > 1){
          this.push( [ p[ 0 ] , p[ 1 ] ] )
          points.splice( 0 , 2 )
        }
        break
      default:
        throw Error(`Expected Array<number>|Matrix. Got ${points[0].constructor.name}, value is ${points[0]}`)
    }
  }

  static #buffer = {
    polygon   : [[0,0]],
    sides     : [0],
    perimeter : 0
  }

  static Regular = PolygonRegular
  static Star    = Star

  /**
   * Returns length of each side of polygon.
   * @param {matrix} [polygon] Polygon in matrix form. 
   * @returns {number[]} Number[]
   * */
  static sides(polygon :matrix) :number[] {
    if(this.#buffer.polygon !== polygon){
      this.#buffer.polygon = polygon
      this.#buffer.sides = []
      for(let i = 0; i < polygon.length; i++){
        this.#buffer.sides[i] = Math.hypot(
          polygon[i][0] - (i < polygon.length ? polygon[i][0] : polygon[0][0]) ,
          polygon[i][1] - (i < polygon.length ? polygon[i][1] : polygon[0][1])
        )
      }
    }
    return this.#buffer.sides
  }
  static perimeter(polygon :matrix) :number {
    this.#buffer.perimeter = 0
    this.sides(polygon).forEach( side => this.#buffer.perimeter += side )
    return this.#buffer.perimeter
  }

  static get lastSides()     :number[] { return this.#buffer.sides }
  static get lastPerimeter() :number   { return this.#buffer.perimeter }
}

declare global { interface Math { Polygon: typeof Polygon } }