import azimuth from "../generic_calculations/azimuth.js";
import magnitude from "../generic_calculations/magnitude.js";
import { simplePolar } from "../simplify.js";

export default function cart2polar({x=0,y=0}){
  let mag  = magnitude(x,y)
  let azim = azimuth  (y,x)
  return simplePolar(azim,mag)
}
