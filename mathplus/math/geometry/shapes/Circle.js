var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import magnitude from "../../../generic_calculations/magnitude.js";
export default class Circle {
    constructor(_a) {
        var _b, _c, _d, _e, _f, _g;
        var params = __rest(_a, []);
        this.x = 0;
        this.y = 0;
        this.radius = 0;
        this.x = (_c = (_b = params.x) !== null && _b !== void 0 ? _b : params[0]) !== null && _c !== void 0 ? _c : 0;
        this.y = (_e = (_d = params.y) !== null && _d !== void 0 ? _d : params[1]) !== null && _e !== void 0 ? _e : 0;
        this.radius = (_g = (_f = params.radius) !== null && _f !== void 0 ? _f : params[2]) !== null && _g !== void 0 ? _g : 0;
    }
    add(x = 0, y = 0) { this.x += x, this.y += y; }
    sub(x = 0, y = 0) { this.add(-x, -y); }
    mult(x = 1, y = 1) { this.x *= x, this.y *= y; }
    div(x = 1, y = 1) { this.mult(1 / x, 1 / y); }
    get diameter() { return this.radius * 2; }
    get area() { return Circle.area(this.radius); }
    get circumference() { return Circle.circumference(this.radius); }
    static diameter(radius) { return radius * 2; }
    static area(radius) { return Math.PI * Math.pow(radius, 2); }
    static circumference(radius) { return this.diameter(radius) * Math.PI; }
    static distance({ x: x1 = 0, y: y1 = 0, radius: r1 = 0 }, { x: x2 = 0, y: y2 = 0, radius: r2 = 0 }) { return magnitude(x1 - x2, y1 - y2) - (r1 + r2); }
}
