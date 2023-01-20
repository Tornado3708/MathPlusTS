export const simple2D = (x=0,y=0)     :Point2D => { return { x , y } }
export const simple3D = (x=0,y=0,z=0) :Point3D => { return { x , y , z } }

export const simplePolar       = (azimuth=0,radius=0)          :PointPolar       => { return { azimuth , radius } }
export const simlpleSpherical  = (azimuth=0,zenith=0,radius=0) :PointSpherical   => { return { azimuth , zenith , radius } }
export const simpleCylinrdical = (azimuth=0,radius=0,z=0)      :PointCylindrical => { return { azimuth , radius , z } }



export const simplier2D = ({x=0,y=0})     :Point2D => { return { x , y } }
export const simplier3D = ({x=0,y=0,z=0}) :Point3D => { return { x , y , z } }

export const simplierPolar       = ({azimuth=0,radius=0})          :PointPolar       => { return { azimuth , radius } }
export const simplierSpherical   = ({azimuth=0,zenith=0,radius=0}) :PointSpherical   => { return { azimuth , zenith , radius } }
export const simplierCylindrical = ({azimuth=0,radius=0,z=0})      :PointCylindrical =>  {return { azimuth , radius , z } }