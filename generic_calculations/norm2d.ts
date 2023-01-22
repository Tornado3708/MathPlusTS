import azimuth from "./azimuth.js"
import { simple2D } from "../simplify.js"


export default function norm2d({x=0,y=0}): point2D {
  let A = azimuth(y,x)
  return simple2D(Math.cos(A) , Math.sin(A)) 
}