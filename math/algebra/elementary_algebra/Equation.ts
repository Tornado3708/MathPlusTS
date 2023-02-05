

export default class Equation {
  create = (expr :string,...attrNames:string[]) => {
    let def :Function[] = []
    let attr = attrNames.toString()
    return new Function(
      /*Attributes*/attr,
      /*CODE*/
      `
      console.log(${attr})`
    )
  }

  quadratic = this.create("a*x^2+b*x+c","x","a","b","c")
}