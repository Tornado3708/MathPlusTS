import azimuth from "../generic_calculations/azimuth.js";
import magnitude from "../generic_calculations/magnitude.js";
import { simplePolar } from "../simplify.js";
export default function cart2polar({ x = 0, y = 0 }) { return simplePolar(azimuth(y, x), magnitude(x, y)); }
