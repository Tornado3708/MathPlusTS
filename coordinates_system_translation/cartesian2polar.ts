import azimuth         from "../generic_calculations/azimuth.js"
import magnitude       from "../generic_calculations/magnitude.js"
import { simplePolar } from "../simplify.js"

/**
 * Returns cartesian position to polar position.
 * @param {point2D} [param0] Object.{x: number, y: number} 
 * @returns polar
 * */
export default function cart2polar({x=0,y=0} :point2D): polar {
  let mag  = magnitude(x,y)
  let azim = azimuth  (y,x)
  return simplePolar(azim,mag)
}
