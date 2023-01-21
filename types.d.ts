interface Point2D { x: number, y: number }
interface Point3D extends Point2D { z: number }

interface PointPolar { azimuth: number, radius: number }
interface PointSpherical extends PointPolar { zenith: number }
interface PointCylindrical extends PointPolar { z: number }

interface Round2D extends Point2D { radius: number }
interface Round3D extends Round2D { z: number }

type matrix = number[][]
interface poly_regular extends Point2D , PointPolar{ gons :number }
