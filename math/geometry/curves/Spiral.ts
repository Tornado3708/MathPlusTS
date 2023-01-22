import Lituus            from "./spirals/Lituus.js";
import SpiralArchimedean from "./spirals/SpiralArchimedean.js";
import SpiralGolden      from "./spirals/SpiralGolden.js";
import SpiralHyperbolic  from "./spirals/SpiralHyperbolic.js";
import SpiralParabolic   from "./spirals/SpiralParabolic.js";
import SpiralSinusoidal  from "./spirals/SpiralSinusoidal.js";


export default class Spiral {

  
  static Archimedean = SpiralArchimedean;
  static Golden      = SpiralGolden;
  static Hyperbolic  = SpiralHyperbolic;
  static Lituus      = Lituus;
  static Parabolic   = SpiralParabolic;
  static Sinusoidal  = SpiralSinusoidal;

  
}