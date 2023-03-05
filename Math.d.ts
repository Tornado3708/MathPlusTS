import Vector2D          from "./math/algebra/linear_algebra/vector/Vector2D.js";
import Vector3D          from "./math/algebra/linear_algebra/vector/Vector3D.js";
import VectorPolar       from "./math/algebra/linear_algebra/vector/VectorPolar.js";
import VectorCylindrical from "./math/algebra/linear_algebra/vector/VectorCylindrical.js";
import VectorSpherical   from "./math/algebra/linear_algebra/vector/VectorSpherical.js";
import Polygon           from "./math/geometry/curves/Polygon.js";
import Spiral            from "./math/geometry/curves/Spiral.js";
import Roulette          from "./math/geometry/curves/Roulette.js";
import Point2D           from "./math/geometry/Point2D.js";
import Point3D           from "./math/geometry/Point3D.js";




declare global {
  
  interface Math {
    
    Vector2D?          : typeof Vector2D
    Vector3D?          : typeof Vector3D
    VectorPolar?       : typeof VectorPolar
    VectorSpherical?   : typeof VectorSpherical
    VectorCylindrical? : typeof VectorCylindrical

    Polygon?           : typeof Polygon
    Roulette?          : typeof Roulette
    Spiral?            : typeof Spiral

    Point2D?           : typeof Point2D
    Point3D?           : typeof Point3D
  }
}