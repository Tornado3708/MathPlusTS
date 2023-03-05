import azimuth from "../generic_calculations/azimuth.js";
import magnitude from "../generic_calculations/magnitude.js";
import zenith from "../generic_calculations/zenith.js";
import { simlpleSpherical } from "../simplify.js";
export default function cart2spheric({ x, y, z }) { return simlpleSpherical(azimuth(y, x), zenith(x, y, z), magnitude(x, y, z)); }
