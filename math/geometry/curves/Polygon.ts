import PolygonRegular from "./polygons/PolygonRegular.js"
import { Star } from "./polygons/Star.js"



/**
 * Representations of polygons.
 * 
 * - [Regular] - regular polygon.
 * */
export default class Polygon {

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