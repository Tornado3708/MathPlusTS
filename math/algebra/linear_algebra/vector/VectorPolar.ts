import Vector2D from "./Vector2D.js"


function toArray(obj :PointPolar){ return [ obj.azimuth , obj.radius ] }


class VectorPolar implements PointPolar {


  public azimuth :number = 0
  public radius  :number = 0


  constructor({...params}){
    
    this.azimuth = params.azimuth ?? params[0] ?? 0
    this.radius  = params.radius  ?? params[1] ?? 0
    
    if(!isFinite(this.azimuth)){ this.azimuth = 0 }
    else if(Math.abs(this.azimuth) > Math.TAU){ this.azimuth %= Math.TAU }
    if(!isFinite(this.radius)){ this.radius = 0 }
  
  }


  rotate(azimuth :number=0) :void { VectorPolar.rotate(this, azimuth) }

  radiusAdd (add :number=0) :void { VectorPolar.radiusAdd(this, add) }
  radiusSub (sub :number=0) :void { VectorPolar.radiusAdd(this, -sub) }
  radiusMult(m :number=1)   :void { VectorPolar.radiusMult(this, m) }
  radiusDiv (d :number=1)   :void { VectorPolar.radiusMult(this, 1 / d) }

  get cartesian()       :Point2D  { return VectorPolar.cartesian(this) }
  get cartesianVector() :Vector2D { return VectorPolar.cartesianVector(this) }
  

  static rotate(polar :PointPolar, azimuth :number=0) :void {
    if(isFinite(azimuth))polar.azimuth += azimuth
    if(Math.abs(polar.azimuth) > Math.TAU) polar.azimuth %= Math.TAU
  }

  static radiusAdd (polar :PointPolar, add :number=0) :void { polar.radius += add }
  static radiusMult(polar :PointPolar, m :number=1)   :void { polar.radius *= m } 
  static radiusSub (polar :PointPolar, sub: number=0) :void { polar.radius -= sub }
  static radiusDiv (polar :PointPolar, d :number=1)   :void { this.radiusMult(polar, 1 / d) }
  
  static cartesian(polar :PointPolar) :Point2D { return {
    x: Math.cos(polar.azimuth) * polar.radius,
    y: Math.sin(polar.azimuth) * polar.radius
  }}

  static cartesianVector(polar :PointPolar) :Vector2D { return new Vector2D([
    Math.cos(polar.azimuth) * polar.radius,
    Math.sin(polar.azimuth) * polar.radius
  ])}

  static ZERO   :PointPolar = { azimuth:  0          , radius: 0 }
  static DOWN   :PointPolar = { azimuth: -Math.PI*.5 , radius: 1 }
  static LEFT   :PointPolar = { azimuth:  Math.PI    , radius: 1 }
  static RIGHT  :PointPolar = { azimuth:  0          , radius: 1 }
  static UP     :PointPolar = {azimuth:   Math.PI*.5 , radius: 1 }

  static zero   :number[]   = toArray(this.ZERO)
  static down   :number[]   = toArray(this.DOWN)
  static left   :number[]   = toArray(this.LEFT)
  static right  :number[]   = toArray(this.RIGHT)
  static up     :number[]   = toArray(this.UP)
}

export default VectorPolar