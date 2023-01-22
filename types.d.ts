interface point2D { x: number, y: number }
interface point3D extends point2D { z: number }

interface polar { azimuth: number, radius: number }
interface spherical extends polar { zenith: number }
interface cylindrical extends polar { z: number }

interface round2D extends point2D { radius: number }
interface round3D extends round2D { z: number }

interface poly_regular extends point2D , polar { gons :number }

type matrix = number[][]