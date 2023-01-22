export default class Equation {

  quadratic = (a=0,b=0,c=0) => {
    return [
      (-b + Math.pow(b ** 2 - 4 * a * c, .5)) * (a * .5),
      (-b - Math.pow(b ** 2 - 4 * a * c, .5)) * (a * .5)
    ]
  }
  // cubic     = (a=0,b=0,c=0,d=0) => { return[0,0,0] }
}