import { simple3D } from "../simplify.js";
import azimuth from "./azimuth.js";
import zenith from "./zenith.js";
export default function norm3d({ x = 0, y = 0, z = 0 }) {
    let A = azimuth(y, x);
    let Z = zenith(x, y, z);
    return simple3D(Math.sin(Z) * Math.cos(A), Math.sin(Z) * Math.sin(A), Math.cos(Z));
}
