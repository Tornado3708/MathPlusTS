import magnitude from "./magnitude.js"
export default function zenith(x=0 , y=0 , z=0) :number { return Math.acos(z * (1 / magnitude(x,y,z))) }