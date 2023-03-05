import { simple2D } from "../simplify.js";
export default function polar2cart({ azimuth = 0, radius = 0 }) { return simple2D(Math.cos(azimuth) * radius, Math.sin(azimuth) * radius); }
