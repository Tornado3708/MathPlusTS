import magnitude from "../../../generic_calculations/magnitude.js"
import PolygonRegular from "./polygons/PolygonRegular.js"
import Star from "./polygons/Star.js"

/**
 * Representations of polygons.
 * 
 * - [Regular] - regular polygon.
 * */
export default class Polygon {

  static Regular = PolygonRegular
  static Star    = Star

  static sides(polygon :matrix){
    let sides = []
    for(let i = 0; i < polygon.length; i++){
      sides.push(Math.hypot(
        polygon[i][0] - (i < polygon.length ? polygon[i][0] : polygon[0][0]) , polygon[i][1] - polygon[(i + 1) || 0][1]))
    }
    return sides
  }
  static perimeter(polygon :matrix){
    let perimeter = 0
    this.sides(polygon).forEach( side => perimeter += side )
    return perimeter
  }
}