import VectorCylindrical from "./VectorCylindrical.js"
import Vector3D          from "./Vector3D.js"

const toArray = ({ azimuth , zenith , radius } :spherical) => {return [azimuth , zenith , radius] }

class VectorSpherical implements spherical{


  public radius  :number=0
  public azimuth :number=0
  public zenith  :number=0


  constructor({...params}){


    this.azimuth = params.azimuth ?? params[0] ?? 0
    this.zenith  = params.zenith  ?? params[1] ?? 0
    this.radius  = params.radius  ?? params[2] ?? 0

    
    if(!isFinite(this.azimuth)){
    this.azimuth = 0;
    }else if(Math.abs(this.azimuth) > Math.TAU){ this.azimuth %= Math.TAU }

    if(!isFinite(this.zenith)){
      this.azimuth = 0;
    }else if(this.zenith  > Math.PI){
      this.zenith  = Math.PI;
    }else if(this.zenith < 0){
        this.zenith = 0;
    }

  }


  


  add(azimuth: number = 0, zenith: number = 0, radius: number = 0): void{

    this.azimuth += azimuth
    this.zenith  += zenith
    this.radius  += radius

    if(Math.abs(this.azimuth) > Math.TAU){
      this.azimuth %= Math.TAU
    }
    if(this.zenith > Math.PI || this.zenith < 0){
    
      this.azimuth  = -this.azimuth;
      this.zenith   = (this.zenith + Math.PI) % Math.PI;
    
    }

  }

  sub(azimuth: number = 0, zenith: number = 0, radius: number = 0): void{

    let PI  = Math.PI;
    let TAU = Math.TAU || PI * 2;

    this.azimuth -= azimuth;
    this.zenith  -= zenith;
    this.radius  -= radius;

    if(Math.abs(this.azimuth) > TAU)       { this.azimuth %= TAU; }
    if(this.zenith > PI || this.zenith < 0){
    
      this.azimuth  = -this.azimuth;
      this.zenith   = (this.zenith + PI) % PI;
    
    }

  }

  /**
   * Multiplication function for radius vector values.
   * @param {number} azimuth Multiplies azimuth of this radius vector by [azimuth].
   * @param {number} zenith Multiplies zenith of this radius vector by [zenith].
   * @param {number} radius Multiplies radius of this radius vector by [radius].
   */
  mult(azimuth: number = 1, zenith: number = 1, radius: number = 1): void{

    let PI  = Math.PI;
    let TAU = Math.TAU || PI * 2;

    this.azimuth *= azimuth;
    this.zenith  *= zenith;
    this.radius  *= radius;
  
    if(Math.abs(this.azimuth) > TAU)       { this.azimuth %= TAU; }
    if(this.zenith > PI || this.zenith < 0){
    
      this.azimuth  = -this.azimuth;
      this.zenith   = (this.zenith + PI) % PI;
    
    }

  }

  /**
   * Division function for radius vector values.
   * @param {number} azimuth Divides azimuth of this radius vector by [azimuth].
   * @param {number} zenith Divides zenith of this radius vector by [zenith].
   * @param {number} radius Divides radius of this radius vector by [radius].
   */
  div(azimuth: number = 1, zenith: number = 1, radius: number = 1): void{

    let PI  = Math.PI;
    let TAU = Math.TAU || PI * 2;

    this.azimuth *= 1 / azimuth;
    this.zenith  *= 1 / zenith;
    this.radius  *= 1 / radius;

    if(Math.abs(this.azimuth) > TAU)       { this.azimuth %= TAU; }
    if(this.zenith > PI || this.zenith < 0){
    
      this.azimuth  = -this.azimuth;
      this.zenith   = (this.zenith + PI) % PI;
    
    }

  }


    /**
     * Rotates radius vector by [azimuth], [zenith].
     * @param {number} azimuth Azimuth for rotation of radius vector by [azimuth]. [-2π, 2π].
     * @param {number} zenith Zenith for rotation of radius vector by [zenith]. [0, 2π].
     */
    rotate(azimuth: number = 0, zenith: number = 0): void{

      let PI  = Math.PI;
      let TAU = Math.TAU || Math.PI * 2;

      this.azimuth += azimuth;
      this.zenith  += zenith;

      if(Math.abs(this.azimuth) > TAU)       { this.azimuth %= TAU; }
      if(this.zenith > PI || this.zenith < 0){
      
        this.azimuth  = -this.azimuth;
        this.zenith   = (this.zenith + PI) % PI;
      
      }

  }

  /**
   * Adds number to radius of radius vector.
   * @param {number} radius Adds [radius] to current radius of radius vector.
   */
  extend(radius: number = 0): void{ this.radius += radius; }

  /**
   * Returns three-dimensional radius vector in array form.
   * @readonly
   * @returns [azimuth , zenith , radius]
   */
  get toArray(): [number , number , number]{ return [this.azimuth , this.zenith , this.radius]; }

  /**
   * Returns Vector3D in cartesian coordinates ,equivalent to this RadiusVector3D.
   * @readonly
   * @returns Vector3D
   */
  get toVector(): Vector3D{

    let azimuth = this.azimuth;
    let zenith  = this.zenith;
    let radius  = this.radius;
    
    return new Vector3D([
      radius * Math.sin(zenith) * Math.cos(azimuth),
      radius * Math.sin(zenith) * Math.sin(azimuth),
      radius * Math.cos(zenith)
    ]);

  }

  /**
   * Returns object ,that contains parameters of this radius vector in cartesian coordinates.
   * @readonly
   * @returns Object{x , y , z}
   */
  get toCartesian(): point3D{

    let azimuth = this.azimuth;
    let zenith  = this.zenith;
    let radius  = this.radius;

    return {
      x: radius * Math.sin(zenith) * Math.cos(azimuth),
      y: radius * Math.sin(zenith) * Math.sin(azimuth),
      z: radius * Math.cos(zenith)
    }

  }

  /**
   * Returns CylindricalVector in cylindrical coordinates ,equivalent to this RadiusVector3D.
   * @readonly
   * @returns CylindricalVector
   */
  get toCylinder(): VectorCylindrical{

    let zenith = this.zenith;
    let radius = this.radius;

    return new VectorCylindrical([
      this.azimuth,
      radius * Math.cos(zenith),
      radius * Math.sin(zenith)
    ]);

  }

  /**
   * Returns object ,that contains parameters of this radius vector in cylindrical coordinates.
   * @readonly
   * @returns Object{azimuth , radius , z}
   */
  get toCylindrical(): cylindrical{

    let zenith = this.zenith;
    let radius = this.radius;

    return {
      azimuth: this.azimuth,
      radius:  radius * Math.cos(zenith),
      z:       radius * Math.sin(zenith)
    }

  }
  static ZERO    : spherical = {azimuth : 0 , zenith: 0 , radius: 0}
  static BACK    : spherical = {azimuth : 0 , zenith : Math.PI , radius : 1}
  static DOWN    : spherical = {azimuth : -Math.PI * 0.5 , zenith : Math.PI * 0.5 , radius : 1}
  static FORWARD : spherical = {azimuth : 0 , zenith : 0 , radius : 1}
  static LEFT    : spherical = {azimuth : Math.PI , zenith : Math.PI * 0.5 , radius : 1}
  static RIGHT   : spherical = {azimuth : 0 , zenith : Math.PI * 0.5 , radius : 1}
  static UP      : spherical = {azimuth : Math.PI * 0.5 , zenith : Math.PI * 0.5 , radius : 1}
  static zero    = [0 , 0 , 0];
  static back    = toArray(this.BACK)
  static down = [-Math.PI_HALF || -Math.PI * 0.5 , Math.PI_HALF || Math.PI * 0.5 , 1];
  static forward = [0 , 0 , 1];
  static left = [Math.PI , Math.PI_HALF || Math.PI * 0.5 , 1];
  static right = [0 , Math.PI_HALF || Math.PI * 0.5 , 1];
  static up = [Math.PI_HALF || Math.PI * 0.5 , Math.PI_HALF || Math.PI * 0.5 , 1];
}

export default VectorSpherical