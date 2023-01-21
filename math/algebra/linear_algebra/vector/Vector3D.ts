import azimuth           from "../../../../generic_calculations/azimuth.js"
import magnitude         from "../../../../generic_calculations/magnitude.js"
import norm3d            from "../../../../generic_calculations/norm3d.js"
import unit3d            from "../../../../generic_calculations/unit3d.js"
import zenith            from "../../../../generic_calculations/zenith.js"
import Dot3D             from "../../../geometry/Dot3D.js"
import VectorCylindrical from "./VectorCylindrical.js"
import VectorSpherical   from "./VectorSpherical.js"




let SQRT3_3 = Math.SQRT3 / 3



/**Class for representation of vector in 3-dimensional space.*/
class Vector3D implements Point3D {

  /**Value of x-axis.*/   public x :number=0
  /**Value of y-axis.*/   public y :number=0
  /**Value of z-axis.*/   public z :number=0

  /**
   * - [ x: number , y: number , z: number ]
   * - { x: number , y: number , z: number }
   * - [ [ x: number ] , [ y: number ] , [ z: number ] ]
   * - [ [ x: number   ,   y: number   ,   z: number ] ]
   * @param params Parameters of new Vector3D.*/
  constructor({...params}){

    this.x = params.x ?? params[0][0] ??                 params[0] ?? 0
    this.y = params.y ?? params[0][1] ?? params[1][0] ?? params[1] ?? 0
    this.z = params.z ?? params[0][2] ?? params[2][0] ?? params[2] ?? 0
    if(!isFinite(this.x)){ this.x = 0 }
    if(!isFinite(this.y)){ this.y = 0 }
    if(!isFinite(this.z)){ this.z = 0 }
    
  }




  /**
   * Addition function.
   * @param {number} x [x]
   * @param {number} y [y]
   * @param {number} z [z]
   * */
  add(x :number=0, y :number=0, z :number=0) :void { this.x += x , this.y += y , this.z += z }

  /**
   * Substraction function.
   * @param {number} x [x]
   * @param {number} y [y]
   * @param {number} z [z]
   * */
  sub(x :number=0, y :number=0, z :number=0) :void { this.add(-x, -y, -z) }

  /**
   * Multiplication function.
   * @param {number} x [x]
   * @param {number} y [y]
   * @param {number} z [z]
   * */
  mult(x :number=1, y :number=1, z :number=1) :void { this.x *= x , this.y *= y , this.z *= z }
  
  /**
   * Division function.
   * @param {number} x [x]
   * @param {number} y [y]
   * @param {number} z [z]
   * */
  div(x :number=1, y :number=1, z :number=1) :void { this.mult(1 / x , 1 / y , 1 / z) }
  
  


  /**
   * Returns magnitude of this vector.
   * @returns Magnitude of vector.
   * */
  get magnitude() :number { return magnitude(this.x , this.y , this.z) }

  /**
   * Returns angle in radians between [x] and [y] axis.
   * @returns Azimuth of vector.
   * */
  get azimuth() :number { return azimuth(this.y , this.x) }
  
  /**
   * Returns angle between xy plain and z axis.
   * @returns Zenith of vector.
   * */
  get zenith() :number { return zenith(this.x , this.y , this.z) }
 





  /**
   * Rotates this vector by azimuth and zenith.
   * @param {number} azimuth Will be add to this [azimuth].
   * @param {number} zenith Will be add to this [zenith].
   * */
  rotate(azimuth :number=0, zenith :number=0) :void { Vector3D.rotate(this, azimuth, zenith) }


  
  

  
  /**
   * Returns normalised properties of this vector. Calculation by magnitude.
   * @returns Normalised vector.
   * */
  get unit() :Point3D { return unit3d(this) }

  /**
   * Returns normalised properties of this vector. Calculation by azimuth.
   * @returns Normalised vector.
   * */
  get norm() :Point3D { return norm3d(this) }






  /**
   * Returns sherical vector, equivalent to this vector.
   * @returns Object with properties.
   * */
  get spherical() :PointSpherical { return Vector3D.spherical(this) }
  
  /**
   * Returns spherical vector, equivalent to this vector.
   * @returns Spherical vector.
   * */
  get sphericalVector() :VectorSpherical { return Vector3D.sphericalVector(this) }

  /**
   * Returns cylindrical vector, equivalent to this vector.
   * @returns Object with properties.
   * */
  get cylindrical() :PointCylindrical { return Vector3D.cylindrical(this) }

  /**
   * Returns cylindrical vector, equivalent to this vector.
   * @returns Cylindrical vector.
   * */
  get cylindricalVector() :VectorCylindrical { return Vector3D.cylindricalVector(this) }

  /**
   * Returns this vector in matrix form.
   * @returns matrix
   * */
  get matrix() :matrix { return Vector3D.matrix(this) }

  /**
   * Returns object Dot3D with paramaters of this vector.
   * @returns Dot3D
   * */
  get point() :Dot3D { return new Dot3D(this) }




  /**Dot product functions.*/
  dotProduct = {
    full :(vec3 :Point3D) :number => Vector3D.dotProduct.full(this , vec3),
    xy   :(vec3 :Point3D) :number => Vector3D.dotProduct.xy  (this , vec3),
    xz   :(vec3 :Point3D) :number => Vector3D.dotProduct.xz  (this , vec3),
    yz   :(vec3 :Point3D) :number => Vector3D.dotProduct.yz  (this , vec3)
  }

  /**Normalised dot product functions.*/
  dotProductCos = {
    full :(vec3 :Point3D) :number => Vector3D.dotProductCos.full(this , vec3),
    xy   :(vec3 :Point3D) :number => Vector3D.dotProductCos.xy  (this , vec3),
    xz   :(vec3 :Point3D) :number => Vector3D.dotProductCos.xz  (this , vec3),
    yz   :(vec3 :Point3D) :number => Vector3D.dotProductCos.yz  (this , vec3)
  }

  /*Angular dot product functions.*/
  dotProductAcos = {
    full :(vec3 :Point3D) :number => Vector3D.dotProductAcos.full(this , vec3),
    xy   :(vec3 :Point3D) :number => Vector3D.dotProductAcos.xy  (this , vec3),
    xz   :(vec3 :Point3D) :number => Vector3D.dotProductAcos.xz  (this , vec3),
    yz   :(vec3 :Point3D) :number => Vector3D.dotProductAcos.yz  (this , vec3)
  }

  /**Cross product funtions.*/
  crossProduct = {
    full  :(vec3 :Point3D) :number => Vector3D.crossProduct.full(this , vec3),
    x     :(vec3 :Point3D) :number => Vector3D.crossProduct.x   (this , vec3),
    y     :(vec3 :Point3D) :number => Vector3D.crossProduct.y   (this , vec3),
    z     :(vec3 :Point3D) :number => Vector3D.crossProduct.z   (this , vec3),

    _full :(vec3 :Point3D) :number => Vector3D.crossProduct.full(vec3 , this),
    _x    :(vec3 :Point3D) :number => Vector3D.crossProduct.x   (vec3 , this),
    _y    :(vec3 :Point3D) :number => Vector3D.crossProduct.y   (vec3 , this),
    _z    :(vec3 :Point3D) :number => Vector3D.crossProduct.z   (vec3 , this),

    xy    :(vec3 :Point3D) :number => Vector3D.crossProduct.z   (this , vec3),
    xz    :(vec3 :Point3D) :number => Vector3D.crossProduct.y   (this , vec3),
    yx    :(vec3 :Point3D) :number => Vector3D.crossProduct.z   (vec3 , this),
    yz    :(vec3 :Point3D) :number => Vector3D.crossProduct.x   (this , vec3),
    zx    :(vec3 :Point3D) :number => Vector3D.crossProduct.y   (vec3 , this),
    zy    :(vec3 :Point3D) :number => Vector3D.crossProduct.z   (vec3 , this)
  }

  /**Nornalised cross product functions.*/
  crossProductSin = {
    full  :(vec3 :Point3D) :number => Vector3D.crossProductSin.full(this , vec3),
    x     :(vec3 :Point3D) :number => Vector3D.crossProductSin.x   (this , vec3),
    y     :(vec3 :Point3D) :number => Vector3D.crossProductSin.y   (this , vec3),
    z     :(vec3 :Point3D) :number => Vector3D.crossProductSin.z   (this , vec3),
    
    _full :(vec3 :Point3D) :number => Vector3D.crossProductSin.full(vec3 , this),
    _x    :(vec3 :Point3D) :number => Vector3D.crossProductSin.x   (vec3 , this),
    _y    :(vec3 :Point3D) :number => Vector3D.crossProductSin.y   (vec3 , this),
    _z    :(vec3 :Point3D) :number => Vector3D.crossProductSin.z   (vec3 , this),

    xy    :(vec3 :Point3D) :number => Vector3D.crossProductSin.z   (this , vec3),
    xz    :(vec3 :Point3D) :number => Vector3D.crossProductSin.y   (this , vec3),
    yx    :(vec3 :Point3D) :number => Vector3D.crossProductSin.z   (vec3 , this),
    yz    :(vec3 :Point3D) :number => Vector3D.crossProductSin.x   (this , vec3),
    zx    :(vec3 :Point3D) :number => Vector3D.crossProductSin.y   (vec3 , this),
    zy    :(vec3 :Point3D) :number => Vector3D.crossProductSin.z   (vec3 , this)
  }

  crossProductAsin = {
    full  :(vec3 :Point3D) :number => Vector3D.crossProductAsin.full(this , vec3),
    x     :(vec3 :Point3D) :number => Vector3D.crossProductAsin.x   (this , vec3),
    y     :(vec3 :Point3D) :number => Vector3D.crossProductAsin.y   (this , vec3),
    z     :(vec3 :Point3D) :number => Vector3D.crossProductAsin.z   (this , vec3),
    
    _full :(vec3 :Point3D) :number => Vector3D.crossProductAsin.full(vec3 , this),
    _x    :(vec3 :Point3D) :number => Vector3D.crossProductAsin.x   (vec3 , this),
    _y    :(vec3 :Point3D) :number => Vector3D.crossProductAsin.y   (vec3 , this),
    _z    :(vec3 :Point3D) :number => Vector3D.crossProductAsin.z   (vec3 , this),

    xy    :(vec3 :Point3D) :number => Vector3D.crossProductAsin.z   (this , vec3),
    xz    :(vec3 :Point3D) :number => Vector3D.crossProductAsin.y   (this , vec3),
    yx    :(vec3 :Point3D) :number => Vector3D.crossProductAsin.z   (vec3 , this),
    yz    :(vec3 :Point3D) :number => Vector3D.crossProductAsin.x   (this , vec3),
    zx    :(vec3 :Point3D) :number => Vector3D.crossProductAsin.y   (vec3 , this),
    zy    :(vec3 :Point3D) :number => Vector3D.crossProductAsin.z   (vec3 , this)
  }



  static add (vec3 :Point3D, x :number=0, y :number=0, z :number=0): void{ vec3.x += x , vec3.y += y , vec3.z += z }
  static sub (vec3 :Point3D, x :number=0, y :number=0, z :number=0): void{ this.add(vec3 , -x , -y , -z) }
  static mult(vec3 :Point3D, x :number=1, y :number=1, z :number=1): void{ vec3.x *= x , vec3.y *= y , vec3.z *= z }
  static div (vec3 :Point3D, x :number=1, y :number=1, z :number=1): void{ this.mult(vec3 , 1 / x, 1 / y , 1 / z) }

  /**
   * Returns magnitude of given vector.
   * @returns Magnitude of vector.
   * */
  static magnitude(vec3 :Point3D) :number { return magnitude(vec3.x , vec3.y , vec3.z) }

  /**
   * Returns angle in radians between [x] and [y] axis.
   * @returns Azimuth of vector.
   * */
  static azimuth(vec3 :Point3D) :number { return azimuth(vec3.y , vec3.x) }

  /**
   * Returns angle between xy plain and z axis.
   * @returns Zenith of vector.
   * */
  static zenith(vec3 :Point3D) :number { return zenith(vec3.x , vec3.y , vec3.z) }
  



  /**
   * Returns normalised properties of given vector. Calculation by magnitude.
   * @returns Normalised vector.
   * */
  static unit(vec3 :Point3D) :Point3D { return unit3d(vec3) }

  /**
   * Returns normalised properties of given vector. Calculation by azimuth.
   * @returns Normalised vector.
   * */
  static norm(vec3 :Point3D) :Point3D { return norm3d(vec3) }




  /**
   * Rotates given vector by azimuth and zenith.
   * @param {number} azimuth Will be add to this [azimuth].
   * @param {number} zenith Will be add to this [zenith].
   * */
  static rotate(vec3 :Point3D, azimuth :number=0, zenith :number=0){
    let mag  = this.magnitude(vec3)
    azimuth += this.azimuth(vec3)
    zenith  += this.zenith(vec3)
    vec3.x = mag * Math.sin(zenith) * Math.cos(azimuth)
    vec3.y = mag * Math.sin(zenith) * Math.sin(azimuth)
    vec3.z = mag * Math.cos(zenith)
  }



  /**Dot product functions.*/
  static dotProduct = {

    /**
     * Dot product of all parameters of these vectors.
     * @param {Point3D} vec3_a Vector A.
     * @param {Point3D} vec3_b Vector B.
     * @returns Dot product.
     * */
    full(vec3_a :Point3D, vec3_b :Point3D) :number{ return vec3_a.x * vec3_b.x + vec3_a.y * vec3_b.y + vec3_a.z * vec3_b.z },
    
    /**
     * Dot product of [x] and [y] parameters of these vectors.
     * @param {Point3D} vec3_a Vector A.
     * @param {Point3D} vec3_b Vector B.
     * @returns Dot product.
     * */
    xy  (vec3_a :Point3D, vec3_b :Point3D) :number{ return vec3_a.x * vec3_b.x + vec3_a.y * vec3_b.y },

    /**
     * Dot product of [x] and [z] parameters of these vectors.
     * @param {Point3D} vec3_a Vector A.
     * @param {Point3D} vec3_b Vector B.
     * @returns Dot product.
     * */
    xz  (vec3_a :Point3D, vec3_b :Point3D) :number{ return vec3_a.x * vec3_b.x + vec3_a.z * vec3_b.z },

    /**
     * Dot product of [y] and [z] parameters of these vectors.
     * @param {Point3D} vec3_a Vector A.
     * @param {Point3D} vec3_b Vector B.
     * @returns Dot product.
     * */
    yz  (vec3_a :Point3D, vec3_b :Point3D) :number{ return vec3_a.y * vec3_b.y + vec3_a.z * vec3_b.z }

  }

  /**Normalised dot products.*/
  static dotProductCos = {
    /**
     * Cosine from dot product of all parameters of these vectors.
     * @param {Point3D} vec3_a Vector A.
     * @param {Point3D} vec3_b Vector B.
     * @returns Dot product cosine.
     * */
    full(vec3_a :Point3D, vec3_b :Point3D) :number { return Vector3D.dotProduct.full(vec3_a,vec3_b) * (1 / (Vector3D.magnitude(vec3_a) * Vector3D.magnitude(vec3_b))) },
    
    /**
     * Cosine from dot product of [x] and [y] parameters of these vectors.
     * @param {Point3D} vec3_a Vector A.
     * @param {Point3D} vec3_b Vector B.
     * @returns Dot product cosine.
     * */
    xy(vec3_a :Point3D, vec3_b :Point3D) :number { return Vector3D.dotProduct.xy  (vec3_a,vec3_b) * (1 / (
      magnitude(vec3_a.x , vec3_a.y) *
      magnitude(vec3_b.x , vec3_b.y)))
    },
    
    /**
     * Cosine from dot product of [x] and [z] parameters of these vectors.
     * @param {Point3D} vec3_a Vector A.
     * @param {Point3D} vec3_b Vector B.
     * @returns Dot product cosine.
     * */
    xz(vec3_a :Point3D, vec3_b :Point3D) :number { return Vector3D.dotProduct.xz  (vec3_a,vec3_b) * (1 / (
      magnitude(vec3_a.x , vec3_a.z) *
      magnitude(vec3_b.x , vec3_b.z)))
    },
    
    /**
     * Cosine from dot product of [y] and [z] parameters of these vectors.
     * @param {Point3D} vec3_a Vector A.
     * @param {Point3D} vec3_b Vector B.
     * @returns Dot product cosine.
     * */
    yz(vec3_a :Point3D, vec3_b :Point3D) :number { return Vector3D.dotProduct.yz  (vec3_a,vec3_b) * (1 / (
      magnitude(vec3_a.y , vec3_a.z) *
      magnitude(vec3_b.y , vec3_b.z)))
    }
  }

  /**Angular dot products.*/
  static dotProductAcos = {
    /**
     * Arccosine from dot product of all parameters of these vectors.
     * @param {Point3D} vec3_a Vector A.
     * @param {Point3D} vec3_b Vector B.
     * @returns Dot product arccosine.
     * */
    full(vec3_a :Point3D, vec3_b :Point3D) :number { return Math.acos(Vector3D.dotProductCos.full(vec3_a, vec3_b)) },
    
    /**
     * Arccosine from dot product of [y] and [y] parameters of these vectors.
     * @param {Point3D} vec3_a Vector A.
     * @param {Point3D} vec3_b Vector B.
     * @returns Dot product arccosine.
     * */
    xy(vec3_a :Point3D, vec3_b :Point3D) :number { return Math.acos(Vector3D.dotProductCos.xy(vec3_a, vec3_b)) },
    
    /**
     * Arccosine from dot product of [x] and [z] parameters of these vectors.
     * @param {Point3D} vec3_a Vector A.
     * @param {Point3D} vec3_b Vector B.
     * @returns Dot product arccosine.
     * */
    xz(vec3_a :Point3D, vec3_b :Point3D) :number { return Math.acos(Vector3D.dotProductCos.xz(vec3_a, vec3_b)) },

    /**
     * Arccosine from dot product of [y] and [z] parameters of these vectors.
     * @param {Point3D} vec3_a Vector A.
     * @param {Point3D} vec3_b Vector B.
     * @returns Dot product arccosine.
     * */
    yz(vec3_a :Point3D, vec3_b :Point3D) :number { return Math.acos(Vector3D.dotProductCos.yz(vec3_a, vec3_b)) }

  }


  
  /**Cross products.*/
  static crossProduct = {

    /**
     * Returns cross product of all parameters of these vectors.
     * @param {Point3D} vec3_a Vector A.
     * @param {Point3D} vec3_b Vector B.
     * @returns Cross product.
     * */
     full(vec3_a :Point3D, vec3_b :Point3D) :number { return Vector3D.crossProduct.x(vec3_a,vec3_b) - Vector3D.crossProduct.y(vec3_a,vec3_b) + Vector3D.crossProduct.z(vec3_a, vec3_b) },
     
    /**
     * Returns opposite cross product of all parameters of these vectors.
     * @param {Point3D} vec3_a Vector A.
     * @param {Point3D} vec3_b Vecotr B.
     * @returns Cross product.
     * */
    _full(vec3_a :Point3D, vec3_b :Point3D) :number { return Vector3D.crossProduct.full(vec3_b , vec3_a) },


    /**
     * Returns cross product of [y] and [z] parameters.
     * @param {Point3D} vec3_a Vector A.
     * @param {Point3D} vec3_b Vector B.
     * @returns Cross product.
     * */
    x(vec3_a :Point3D, vec3_b :Point3D) :number { return vec3_a.y * vec3_b.z - vec3_a.z * vec3_b.y },

    /**
     * Returns cross product of [z] and [x] parameters.
     * @param {Point3D} vec3_a Vector A.
     * @param {Point3D} vec3_b Vector B.
     * @returns Cross product.
     * */
    y(vec3_a :Point3D, vec3_b :Point3D) :number { return vec3_a.z * vec3_b.x - vec3_a.x * vec3_b.z },

    /**
     * Returns cross product of [x] and [y] parameters.
     * @param {Point3D} vec3_a Vector A.
     * @param {Point3D} vec3_b Vector B.
     * @returns Cross product.
     */
    z(vec3_a :Point3D, vec3_b :Point3D) :number { return vec3_a.x * vec3_b.y - vec3_a.y * vec3_b.x },


    /**
     * Returns opposite cross product of [y] and [z] parameters.
     * @param {Point3D} vec3_a Vector A.
     * @param {Point3D} vec3_b Vector B.
     * @returns Cross product.
     * */
    _x(vec3_a :Point3D, vec3_b :Point3D) :number { return Vector3D.crossProduct.x(vec3_b, vec3_a) },

    /**
     * Returns opposite cross product of [z] and [x] parameters.
     * @param {Point3D} vec3_a Vector A.
     * @param {Point3D} vec3_b Vector B.
     * @returns Cross product.
     * */
    _y(vec3_a :Point3D, vec3_b :Point3D) :number { return Vector3D.crossProduct.y(vec3_b, vec3_a) },

    /**
     * Returns opposite cross product of [x] and [y] parameters.
     * @param {Point3D} vec3_a Vector A.
     * @param {Point3D} vec3_b Vector B.
     * @returns Cross product.
     */
    _z(vec3_a :Point3D, vec3_b :Point3D) :number { return Vector3D.crossProduct.z(vec3_b, vec3_a) },
    
    /**
     * Returns cross product of [x] and [y] parameters.
     * @param {Point3D} vec3_a Vector A.
     * @param {Point3D} vec3_b Vector B.
     * @returns Cross product.
     */
    xy(vec3_a :Point3D, vec3_b :Point3D) :number { return Vector3D.crossProduct.z(vec3_a , vec3_b) },

    /**
     * Returns cross product of [z] and [x] parameters.
     * @param {Point3D} vec3_a Vector A.
     * @param {Point3D} vec3_b Vector B.
     * @returns Cross product.
     * */
    xz(vec3_a :Point3D, vec3_b :Point3D) :number { return Vector3D.crossProduct.y(vec3_a , vec3_b) },

    /**
     * Returns opposite cross product of [x] and [y] parameters.
     * @param {Point3D} vec3_a Vector A.
     * @param {Point3D} vec3_b Vector B.
     * @returns Cross product.
     */
    yx(vec3_a :Point3D, vec3_b :Point3D) :number { return Vector3D.crossProduct.z(vec3_b , vec3_a) },

    /**
     * Returns cross product of [y] and [z] parameters.
     * @param {Point3D} vec3_a Vector A.
     * @param {Point3D} vec3_b Vector B.
     * @returns Cross product.
     * */
    yz(vec3_a :Point3D, vec3_b :Point3D) :number { return Vector3D.crossProduct.x(vec3_a , vec3_b) },

    /**
     * Returns opposite cross product of [z] and [x] parameters.
     * @param {Point3D} vec3_a Vector A.
     * @param {Point3D} vec3_b Vector B.
     * @returns Cross product.
     * */
    zx(vec3_a :Point3D, vec3_b :Point3D) :number { return Vector3D.crossProduct.y(vec3_b , vec3_a) },

    /**
     * Returns opposite cross product of [y] and [z] parameters.
     * @param {Point3D} vec3_a Vector A.
     * @param {Point3D} vec3_b Vector B.
     * @returns Cross product.
     * */
    zy(vec3_a :Point3D, vec3_b :Point3D) :number { return Vector3D.crossProduct.x(vec3_b , vec3_a) }
  }
  


  /**Normalised cross products.*/
  static crossProductSin = {

    /**
     * Returns sine of cross product of all parameters of these vectors.
     * @param {Point3D} vec3_a Vector A.
     * @param {Point3D} vec3_b Vecotr B.
     * @returns Cross product sine.
     * */
    full(vec3_a :Point3D, vec3_b :Point3D) :number { return Vector3D.crossProduct.full(vec3_a , vec3_b) * (1 / (Vector3D.magnitude(vec3_a) * Vector3D.magnitude(vec3_b))) },

    /**
     * Returns sine of opposite cross product of all parameters of these vectors.
     * @param {Point3D} vec3_a Vector A.
     * @param {Point3D} vec3_b Vecotr B.
     * @returns Cross product sine.
     * */
    _full(vec3_a :Point3D, vec3_b :Point3D) :number { return Vector3D.crossProductSin.full(vec3_b , vec3_a) },


    /**
     * Returns sine of cross product of [y] and [z] parameters.
     * @param {Point3D} vec3_a Vector A.
     * @param {Point3D} vec3_b Vector B.
     * @returns Cross product sine.
     * */
    x(vec3_a :Point3D, vec3_b :Point3D) :number { return Vector3D.crossProduct.x(vec3_a , vec3_b) * (1 / (magnitude(vec3_a.y , vec3_a.z) * magnitude(vec3_b.y , vec3_b.z))) },

    /**
     * Returns sine of cross product of [z] and [x] parameters.
     * @param {Point3D} vec3_a Vector A.
     * @param {Point3D} vec3_b Vector B.
     * @returns Cross product sine.
     * */
    y(vec3_a :Point3D, vec3_b :Point3D) :number { return Vector3D.crossProduct.y(vec3_a , vec3_b) * (1 / (magnitude(vec3_a.x , vec3_a.z) * magnitude(vec3_b.x , vec3_b.z))) },

    /**
     * Returns cross product of [x] and [y] parameters.
     * @param {Point3D} vec3_a Vector A.
     * @param {Point3D} vec3_b Vector B.
     * @returns Cross product sine.
     * */
    z(vec3_a :Point3D, vec3_b :Point3D) :number { return Vector3D.crossProduct.z(vec3_a , vec3_b) * (1 / (magnitude(vec3_a.x , vec3_a.y) * magnitude(vec3_b.x , vec3_b.y))) },


    /**
     * Returns sine of opposite cross product of [y] and [z] parameters.
     * @param {Point3D} vec3_a Vector A.
     * @param {Point3D} vec3_b Vector B.
     * @returns Cross product sine.
     * */
    _x(vec3_a :Point3D, vec3_b :Point3D) :number { return Vector3D.crossProductSin.x(vec3_b , vec3_a) },

    /**
     * Returns sine of opposite cross product of [z] and [x] parameters.
     * @param {Point3D} vec3_a Vector A.
     * @param {Point3D} vec3_b Vector B.
     * @returns Cross product sine.
     * */
    _y(vec3_a :Point3D, vec3_b :Point3D) :number { return Vector3D.crossProductSin.y(vec3_b , vec3_a) },

    /**
     * Returns sine of opposite cross product of [x] and [y] parameters.
     * @param {Point3D} vec3_a Vector A.
     * @param {Point3D} vec3_b Vector B.
     * @returns Cross product sine.
     * */
    _z(vec3_a :Point3D, vec3_b :Point3D) :number { return Vector3D.crossProductSin.z(vec3_b , vec3_a) },


    /**
     * Returns sine of cross product of [x] and [y] parameters.
     * @param {Point3D} vec3_a Vector A.
     * @param {Point3D} vec3_b Vector B.
     * @returns Cross product sine.
     * */
    xy(vec3_a :Point3D, vec3_b :Point3D) :number { return Vector3D.crossProductSin.z(vec3_a , vec3_b) },

    /**
     * Returns sine of cross product of [z] and [x] parameters.
     * @param {Point3D} vec3_a Vector A.
     * @param {Point3D} vec3_b Vector B.
     * @returns Cross product sine.
     * */
    xz(vec3_a :Point3D, vec3_b :Point3D) :number { return Vector3D.crossProductSin.y(vec3_a , vec3_b) },

    /**
     * Returns sine of opposite cross product of [x] and [y] parameters.
     * @param {Point3D} vec3_a Vector A.
     * @param {Point3D} vec3_b Vector B.
     * @returns Cross product sine.
     * */
    yx(vec3_a :Point3D, vec3_b :Point3D) :number { return Vector3D.crossProductSin.z(vec3_b , vec3_a) },
    
    /**
     * Returns sine of cross product of [y] and [z] parameters.
     * @param {Point3D} vec3_a Vector A.
     * @param {Point3D} vec3_b Vector B.
     * @returns Cross product sine.
     * */
    yz(vec3_a :Point3D, vec3_b :Point3D) :number { return Vector3D.crossProductSin.x(vec3_a , vec3_b) },

    /**
     * Returns sine of opposite cross product of [z] and [x] parameters.
     * @param {Point3D} vec3_a Vector A.
     * @param {Point3D} vec3_b Vector B.
     * @returns Cross product sine.
     * */
    zx(vec3_a :Point3D, vec3_b :Point3D) :number { return Vector3D.crossProductSin.y(vec3_b , vec3_a) },

    /**
     * Returns sine of opposite cross product of [y] and [z] parameters.
     * @param {Point3D} vec3_a Vector A.
     * @param {Point3D} vec3_b Vector B.
     * @returns Cross product sine.
     * */
    zy(vec3_a :Point3D, vec3_b :Point3D) :number { return Vector3D.crossProductSin.x(vec3_b , vec3_a) }
  }



  /**Angular cross products.*/
  static crossProductAsin = {

    /**
     * Returns arcsine of cross product of all parameters of these vectors.
     * @param {Point3D} vec3_a Vector A.
     * @param {Point3D} vec3_b Vecotr B.
     * @returns Cross product arcsine.
     * */
    full(vec3_a :Point3D, vec3_b :Point3D)  :number { return Math.asin(Vector3D.crossProductSin.full(vec3_a , vec3_b)) },

    /**
     * Returns arcsine of opposite cross product of all parameters of these vectors.
     * @param {Point3D} vec3_a Vector A.
     * @param {Point3D} vec3_b Vecotr B.
     * @returns Cross product arcsine.
     * */
    _full(vec3_a :Point3D, vec3_b :Point3D) :number { return Math.asin(Vector3D.crossProductAsin.full(vec3_b , vec3_a)) },


    /**
     * Returns arcsine of cross product of [y] and [z] parameters.
     * @param {Point3D} vec3_a Vector A.
     * @param {Point3D} vec3_b Vector B.
     * @returns Cross product arcsine.
     * */
    x(vec3_a :Point3D, vec3_b :Point3D) :number { return Math.asin(Vector3D.crossProductSin.x(vec3_a, vec3_b)) },

    /**
     * Returns arcsine of cross product of [z] and [x] parameters.
     * @param {Point3D} vec3_a Vector A.
     * @param {Point3D} vec3_b Vector B.
     * @returns Cross product arcsine.
     * */
    y(vec3_a :Point3D, vec3_b :Point3D) :number { return Math.asin(Vector3D.crossProductSin.y(vec3_a, vec3_b)) },

    /**
     * Returns arcsine of cross product of [x] and [y] parameters.
     * @param {Point3D} vec3_a Vector A.
     * @param {Point3D} vec3_b Vector B.
     * @returns Cross product arcsine.
     * */
    z(vec3_a :Point3D, vec3_b :Point3D) :number { return Math.asin(Vector3D.crossProductSin.z(vec3_a, vec3_b)) },


    /**
     * Returns arcsine of opposite cross product of [y] and [z] parameters.
     * @param {Point3D} vec3_a Vector A.
     * @param {Point3D} vec3_b Vector B.
     * @returns Cross product arcsine.
     * */
    _x(vec3_a :Point3D, vec3_b :Point3D) :number { return Vector3D.crossProductAsin.x(vec3_b , vec3_a) },

    /**
     * Returns arcsine of opposite cross product of [z] and [x] parameters.
     * @param {Point3D} vec3_a Vector A.
     * @param {Point3D} vec3_b Vector B.
     * @returns Cross product arcsine.
     * */
    _y(vec3_a :Point3D, vec3_b :Point3D) :number { return Vector3D.crossProductAsin.y(vec3_b , vec3_a) },

    /**
     * Returns arcsine of opposite cross product of [x] and [y] parameters.
     * @param {Point3D} vec3_a Vector A.
     * @param {Point3D} vec3_b Vector B.
     * @returns Cross product arcsine.
     * */
    _z(vec3_a :Point3D, vec3_b :Point3D) :number { return Vector3D.crossProductAsin.z(vec3_b , vec3_a) },



    /**
     * Returns arcsine of cross product of [x] and [y] parameters.
     * @param {Point3D} vec3_a Vector A.
     * @param {Point3D} vec3_b Vector B.
     * @returns Cross product arcsine.
     * */
    xy(vec3_a :Point3D, vec3_b :Point3D) :number { return Vector3D.crossProductAsin.z(vec3_a , vec3_b) },

    /**
     * Returns arcsine of cross product of [z] and [x] parameters.
     * @param {Point3D} vec3_a Vector A.
     * @param {Point3D} vec3_b Vector B.
     * @returns Cross product arcsine.
     * */
    xz(vec3_a :Point3D, vec3_b :Point3D) :number { return Vector3D.crossProductAsin.y(vec3_a , vec3_b) },

    /**
     * Returns arcsine of opposite cross product of [x] and [y] parameters.
     * @param {Point3D} vec3_a Vector A.
     * @param {Point3D} vec3_b Vector B.
     * @returns Cross product arcsine.
     * */
    yx(vec3_a :Point3D, vec3_b :Point3D) :number { return Vector3D.crossProductAsin.z(vec3_b , vec3_a) },

    /**
     * Returns arcsine of cross product of [y] and [z] parameters.
     * @param {Point3D} vec3_a Vector A.
     * @param {Point3D} vec3_b Vector B.
     * @returns Cross product arcsine.
     * */
    yz(vec3_a :Point3D, vec3_b :Point3D) :number { return Vector3D.crossProductAsin.x(vec3_a , vec3_b) },

    /**
     * Returns arcsine of opposite cross product of [z] and [x] parameters.
     * @param {Point3D} vec3_a Vector A.
     * @param {Point3D} vec3_b Vector B.
     * @returns Cross product arcsine.
     * */
    zx(vec3_a :Point3D, vec3_b :Point3D) :number { return Vector3D.crossProductAsin.y(vec3_b , vec3_a) },

    /**
     * Returns arcsine of opposite cross product of [y] and [z] parameters.
     * @param {Point3D} vec3_a Vector A.
     * @param {Point3D} vec3_b Vector B.
     * @returns Cross product arcsine.
     * */
    zy(vec3_a :Point3D, vec3_b :Point3D) :number { return Vector3D.crossProductAsin.x(vec3_b , vec3_a) }

  }
  
  

  static spherical         (vec3 :Point3D) :PointSpherical    { return { azimuth :this.azimuth(vec3), zenith :this.zenith(vec3), radius :this.magnitude(vec3) } }
  static sphericalVector   (vec3 :Point3D) :VectorSpherical   { return new VectorSpherical([this.azimuth(vec3), this.zenith(vec3), this.magnitude(vec3)]) }
  static cylindrical       (vec3 :Point3D) :PointCylindrical  { return { azimuth :this.azimuth(vec3), radius :this.magnitude(vec3), z :vec3.z } }
  static cylindricalVector (vec3 :Point3D) :VectorCylindrical { return new VectorCylindrical([this.azimuth(vec3), this.magnitude(vec3), vec3.z]) }
  static matrix            (vec3 :Point3D) :matrix            { return [[vec3.x , vec3.y , vec3.z]] }
  static point             (vec3 :Point3D) :Dot3D             { return new Dot3D(vec3) }




  static ZERO    :Point3D = { x:  0 , y:  0 , z:  0 }
  static LEFT    :Point3D = { x: -1 , y:  0 , z:  0 }
  static RIGHT   :Point3D = { x:  1 , y:  0 , z:  0 }
  static DOWN    :Point3D = { x:  0 , y: -1 , z:  0 }
  static UP      :Point3D = { x:  0 , y:  1 , z:  0 }
  static BACK    :Point3D = { x:  0 , y:  0 , z: -1 }
  static FORWARD :Point3D = { x:  0 , y:  0 , z:  1 }
  



  static FORWARD_DOWN  :Point3D = { x:  0            , y: -Math.SQRT1_2 , z:  Math.SQRT1_2 }
  static FORWARD_LEFT  :Point3D = { x: -Math.SQRT1_2 , y:  0            , z:  Math.SQRT1_2 }
  static FORWARD_RIGHT :Point3D = { x:  Math.SQRT1_2 , y:  0            , z:  Math.SQRT1_2 }
  static FORWARD_UP    :Point3D = { x:  0            , y:  Math.SQRT1_2 , z:  Math.SQRT1_2 }
  
  static LEFT_BACK     :Point3D = { x: -Math.SQRT1_2 , y:  0            , z: -Math.SQRT1_2 }
  static LEFT_DOWN     :Point3D = { x: -Math.SQRT1_2 , y: -Math.SQRT1_2 , z:  0 }
  static LEFT_FORWARD  = this.FORWARD_LEFT
  static LEFT_UP       :Point3D = { x: -Math.SQRT1_2 , y:  Math.SQRT1_2 , z:  0 }
  
  static RIGHT_DOWN    :Point3D = { x:  Math.SQRT1_2 , y: -Math.SQRT1_2 , z:  0 }
  static RIGHT_UP      :Point3D = { x:  Math.SQRT1_2 , y:  Math.SQRT1_2 , z:  0 }
  static RIGHT_BACK    :Point3D = { x:  Math.SQRT1_2 , y:  0            , z: -Math.SQRT1_2 }
  static RIGHT_FORWARD = this.FORWARD_RIGHT
  
  static BACK_DOWN     :Point3D = { x:  0            , y: -Math.SQRT1_2 , z: -Math.SQRT1_2 }
  static BACK_LEFT     = this.LEFT_BACK
  static BACK_RIGHT    = this.RIGHT_BACK
  static BACK_UP       :Point3D = { x:  0            , y:  Math.SQRT1_2 , z: -Math.SQRT1_2 }
  
  static UP_BACK       = this.BACK_UP
  static UP_FORWARD    = this.FORWARD_UP
  static UP_LEFT       = this.LEFT_UP
  static UP_RIGHT      = this.RIGHT_UP
  
  static DOWN_BACK     = this.BACK_DOWN
  static DOWN_FORWARD  = this.FORWARD_DOWN
  static DOWN_LEFT     = this.LEFT_DOWN
  static DOWN_RIGHT    = this.RIGHT_DOWN




  static LEFT_DOWN_BACK     :Point3D = { x: -SQRT3_3 , y: -SQRT3_3 , z: -SQRT3_3 }
  static LEFT_DOWN_FORWARD  :Point3D = { x: -SQRT3_3 , y: -SQRT3_3 , z:  SQRT3_3 }
  static LEFT_UP_BACK       :Point3D = { x: -SQRT3_3 , y:  SQRT3_3 , z: -SQRT3_3 }
  static LEFT_UP_FORWARD    :Point3D = { x: -SQRT3_3 , y:  SQRT3_3 , z:  SQRT3_3 }
  static LEFT_BACK_DOWN     = this.LEFT_DOWN_BACK
  static LEFT_BACK_UP       = this.LEFT_UP_BACK
  static LEFT_FORWARD_DOWN  = this.LEFT_DOWN_FORWARD
  static LEFT_FORWARD_UP    = this.LEFT_UP_FORWARD
  
  static RIGHT_DOWN_BACK    :Point3D = { x:  SQRT3_3 , y: -SQRT3_3 , z: -SQRT3_3 }
  static RIGHT_DOWN_FORWARD :Point3D = { x:  SQRT3_3 , y: -SQRT3_3 , z:  SQRT3_3 }
  static RIGHT_UP_BACK      :Point3D = { x:  SQRT3_3 , y:  SQRT3_3 , z: -SQRT3_3 }
  static RIGHT_UP_FORWARD   :Point3D = { x:  SQRT3_3 , y:  SQRT3_3 , z:  SQRT3_3 }
  static RIGHT_BACK_DOWN    = this.RIGHT_DOWN_BACK
  static RIGHT_BACK_UP      = this.RIGHT_UP_BACK
  static RIGHT_FORWARD_DOWN = this.RIGHT_DOWN_FORWARD
  static RIGHT_FORWARD_UP   = this.RIGHT_UP_FORWARD
  
  static DOWN_LEFT_BACK     = this.LEFT_DOWN_BACK
  static DOWN_LEFT_FORWARD  = this.LEFT_DOWN_FORWARD
  static DOWN_RIGHT_BACK    = this.RIGHT_DOWN_BACK
  static DOWN_RIGHT_FORWARD = this.RIGHT_DOWN_FORWARD
  static DOWN_BACK_LEFT     = this.LEFT_DOWN_BACK
  static DOWN_BACK_RIGHT    = this.RIGHT_DOWN_BACK
  static DOWN_FORWARD_LEFT  = this.LEFT_DOWN_FORWARD
  static DOWN_FORWARD_RIGHT = this.RIGHT_DOWN_FORWARD
  
  static UP_LEFT_BACK       = this.LEFT_UP_BACK
  static UP_LEFT_FORWARD    = this.LEFT_UP_FORWARD
  static UP_RIGHT_BACK      = this.RIGHT_UP_BACK
  static UP_RIGHT_FORWARD   = this.RIGHT_UP_FORWARD
  static UP_BACK_LEFT       = this.LEFT_UP_BACK
  static UP_BACK_RIGHT      = this.RIGHT_UP_BACK
  static UP_FORWARD_LEFT    = this.LEFT_UP_FORWARD
  static UP_FORWARD_RIGHT   = this.RIGHT_UP_FORWARD
  
  static FORWARD_LEFT_UP    = this.LEFT_UP_FORWARD
  static FORWARD_LEFT_DOWN  = this.LEFT_DOWN_FORWARD
  static FORWARD_RIGHT_UP   = this.RIGHT_UP_FORWARD
  static FORWARD_RIGHT_DOWN = this.RIGHT_DOWN_FORWARD
  static FORWARD_DOWN_LEFT  = this.LEFT_DOWN_FORWARD
  static FORWARD_DOWN_RIGHT = this.RIGHT_DOWN_FORWARD
  static FORWARD_UP_LEFT    = this.LEFT_UP_FORWARD
  static FORWARD_UP_RIGHT   = this.RIGHT_UP_FORWARD
  
  static BACK_LEFT_DOWN     = this.LEFT_DOWN_BACK
  static BACK_LEFT_UP       = this.LEFT_UP_BACK
  static BACK_RIGHT_DOWN    = this.RIGHT_DOWN_BACK
  static BACK_RIGHT_UP      = this.RIGHT_UP_BACK
  static BACK_DOWN_LEFT     = this.LEFT_DOWN_BACK
  static BACK_DOWN_RIGHT    = this.RIGHT_DOWN_BACK
  static BACK_UP_LEFT       = this.LEFT_UP_BACK
  static BACK_UP_RIGHT      = this.RIGHT_UP_BACK




  static zero    = this.matrix(this.ZERO)
  static back    = this.matrix(this.BACK)
  static down    = this.matrix(this.DOWN)
  static forward = this.matrix(this.FORWARD)
  static left    = this.matrix(this.LEFT)
  static right   = this.matrix(this.RIGHT)
  static up      = this.matrix(this.UP)




  static forward_down  = this.matrix(this.FORWARD_DOWN)
  static forward_left  = this.matrix(this.FORWARD_LEFT)
  static forward_right = this.matrix(this.FORWARD_RIGHT)
  static forward_up    = this.matrix(this.FORWARD_UP)
  
  static left_back     = this.matrix(this.LEFT_BACK)
  static left_down     = this.matrix(this.LEFT_DOWN)
  static left_forward  = this.forward_left
  static left_up       = this.matrix(this.LEFT_UP)
  
  static right_down    = this.matrix(this.RIGHT_DOWN)
  static right_up      = this.matrix(this.RIGHT_UP)
  static right_back    = this.matrix(this.RIGHT_BACK)
  static right_forward = this.forward_right
  
  static back_down     = this.matrix(this.BACK_DOWN)
  static back_left     = this.left_back
  static back_right    = this.right_back
  static back_up       = this.matrix(this.BACK_UP)
  
  static up_back       = this.back_up
  static up_forward    = this.forward_up
  static up_left       = this.left_up
  static up_right      = this.right_up
  
  static down_back     = this.back_down
  static down_forward  = this.forward_down
  static down_left     = this.left_down
  static down_right    = this.right_down




  static left_down_back      = this.matrix(this.LEFT_DOWN_BACK)
  static left_down_forward   = this.matrix(this.LEFT_DOWN_FORWARD)
  static left_up_back        = this.matrix(this.LEFT_UP_BACK)
  static left_up_forward     = this.matrix(this.LEFT_UP_FORWARD)
  static left_back_down      = this.left_down_back
  static left_back_up        = this.left_up_back
  static left_forward_down   = this.left_down_forward
  static left_forward_up     = this.left_up_forward
  
  static right_down_back     = this.matrix(this.RIGHT_DOWN_BACK)
  static right_down_forward  = this.matrix(this.RIGHT_DOWN_FORWARD)
  static right_up_back       = this.matrix(this.RIGHT_UP_BACK)
  static right_up_forward    = this.matrix(this.RIGHT_UP_FORWARD)
  static right_back_down     = this.right_down_back  
  static right_back_up       = this.right_up_back
  static right_forward_down  = this.right_down_forward
  static right_forward_up    = this.right_up_forward

  static down_left_back      = this.left_down_back
  static down_left_forward   = this.left_down_forward
  static down_right_back     = this.right_down_back
  static down_right_forward  = this.right_down_forward
  static down_back_left      = this.left_down_back
  static down_back_right     = this.right_down_back
  static down_forward_left   = this.left_down_forward
  static down_forward_right  = this.right_down_forward

  static up_left_back        = this.left_up_back
  static up_left_forward     = this.left_up_forward
  static up_right_back       = this.right_up_back
  static up_right_forward    = this.right_up_forward
  static up_back_left        = this.left_up_back
  static up_back_right       = this.right_up_back
  static up_forward_left     = this.left_up_forward
  static up_forward_right    = this.right_up_forward

  static forward_left_down   = this.left_down_forward
  static forward_left_up     = this.left_up_forward
  static forward_right_down  = this.right_down_forward
  static forward_right_up    = this.right_up_forward
  static forward_down_left   = this.left_down_forward
  static forward_down_right  = this.right_down_forward
  static forward_up_left     = this.left_up_forward
  static forward_up_right    = this.right_up_forward

  static back_left_down     = this.left_down_back
  static back_left_up       = this.left_up_back
  static back_right_down    = this.right_down_back
  static back_right_up      = this.right_up_back
  static back_down_left     = this.left_down_back
  static back_down_right    = this.right_down_back
  static back_up_left       = this.left_up_back
  static back_up_right      = this.right_up_back

}


export default Vector3D