import Lituus from "./spirals/Lituus.js";
import SpiralArchimedean from "./spirals/SpiralArchimedean.js";
import SpiralGolden from "./spirals/SpiralGolden.js";
import SpiralHyperbolic from "./spirals/SpiralHyperbolic.js";
import SpiralParabolic from "./spirals/SpiralParabolic.js";
import SpiralSinusoidal from "./spirals/SpiralSinusoidal.js";
class Spiral {
}
Spiral.Archimedean = SpiralArchimedean;
Spiral.Golden = SpiralGolden;
Spiral.Hyperbolic = SpiralHyperbolic;
Spiral.Lituus = Lituus;
Spiral.Parabolic = SpiralParabolic;
Spiral.Sinusoidal = SpiralSinusoidal;
export default Spiral;
