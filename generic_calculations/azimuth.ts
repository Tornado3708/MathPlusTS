/**
 * Refactoring function. Returns Math.atan2(y,x)
 * @param {number} [y] [y] 
 * @param {number} [x] [x]
 * @returns Angle in radians.
 * */
export default function azimuth(y:number=0 , x:number=0) :number { return Math.atan2(y,x) }