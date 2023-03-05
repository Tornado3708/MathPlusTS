export default class Equation {
    constructor() {
        this.create = (expr, ...attrNames) => {
            let def = [];
            let attr = attrNames.toString();
            return new Function(attr, `
      console.log(${attr})`);
        };
        this.quadratic = this.create("a*x^2+b*x+c", "x", "a", "b", "c");
    }
}
