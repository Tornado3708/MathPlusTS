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
var _a;
import cart2polar from "./../../../../coordinates_system_translation/cartesian2polar.js";
import azimuth from "../../../../generic_calculations/azimuth.js";
import magnitude from "../../../../generic_calculations/magnitude.js";
import norm2d from "../../../../generic_calculations/norm2d.js";
import unit2d from "../../../../generic_calculations/unit2d.js";
import Dot2D from "../../../geometry/Dot2D.js";
import VectorPolar from "./VectorPolar.js";
class Vector2D {
    constructor(_b) {
        var _c, _d, _e, _f, _g, _h, _j;
        var params = __rest(_b, []);
        this.x = 0;
        this.y = 0;
        this.x = (_e = (_d = (_c = params.x) !== null && _c !== void 0 ? _c : params[0][0]) !== null && _d !== void 0 ? _d : params[0]) !== null && _e !== void 0 ? _e : 0;
        this.y = (_j = (_h = (_g = (_f = params.y) !== null && _f !== void 0 ? _f : params[0][1]) !== null && _g !== void 0 ? _g : params[1][0]) !== null && _h !== void 0 ? _h : params[1]) !== null && _j !== void 0 ? _j : 0;
        if (!isFinite(this.x)) {
            this.x = 0;
        }
        if (!isFinite(this.y)) {
            this.y = 0;
        }
    }
    add(x = 0, y = 0) { this.x += x, this.y += y; }
    sub(x = 0, y = 0) { this.add(-x, -y); }
    mult(x = 1, y = 1) { this.x *= x, this.y *= y; }
    div(x = 1, y = 1) { this.mult(1 / x, 1 / y); }
    get magnitude() { return magnitude(this.x, this.y); }
    get azimuth() { return azimuth(this.y, this.x); }
    get unit() { return unit2d(this); }
    get norm() { return norm2d(this); }
    rotate(azimuth = 0) { Vector2D.rotate(this, azimuth); }
    get polar() { return cart2polar(this); }
    get polarVector() { return Vector2D.polarVector(this); }
    get matrix() { return Vector2D.matrix(this); }
    get point() { return new Dot2D(this); }
    dotProduct(vec2) { return Vector2D.dotProduct(this, vec2); }
    dotProductCos(vec2) { return Vector2D.dotProductCos(this, vec2); }
    dotProductAcos(vec2) { return Vector2D.dotProductAcos(this, vec2); }
    crossProduct(vec2) { return Vector2D.crossProduct(this, vec2); }
    crossProductSin(vec2) { return Vector2D.crossProductSin(this, vec2); }
    crossProductAsin(vec2) { return Vector2D.crossProductAsin(this, vec2); }
    static add(vec2, x = 0, y = 0) { vec2.x += x, vec2.y += y; }
    static sub(vec2, x = 0, y = 0) { this.add(vec2, -x, -y); }
    static mult(vec2, x = 1, y = 1) { vec2.x *= x, vec2.y *= y; }
    static div(vec2, x = 1, y = 1) { this.mult(vec2, 1 / x, 1 / y); }
    static magnitude(vec2) { return magnitude(vec2.x, vec2.y); }
    static azimuth(vec2) { return azimuth(vec2.y, vec2.x); }
    static unit(vec2) { return unit2d(vec2); }
    static norm(vec2) { return norm2d(vec2); }
    static dotProduct(vec2_a, vec2_b) { return vec2_a.x * vec2_b.x + vec2_a.y * vec2_b.y; }
    static dotProductCos(vec2_a, vec2_b) {
        let result = this.dotProduct(vec2_a, vec2_b);
        result = result * (1 / (this.magnitude(vec2_a) * this.magnitude(vec2_b)));
        return result + Number.EPSILON * Math.sign(result);
    }
    static dotProductAcos(vec2_a, vec2_b) { return Math.acos(this.dotProductCos(vec2_a, vec2_b)); }
    static crossProduct(vec2_a, vec2_b) { return vec2_a.x * vec2_b.y - vec2_a.y * vec2_b.x; }
    static crossProductSin(vec2_a, vec2_b) {
        let result = this.crossProduct(vec2_a, vec2_b);
        result = result * (1 / (this.magnitude(vec2_a) * this.magnitude(vec2_b)));
        return result + Number.EPSILON * Math.sign(result) * .5;
    }
    static crossProductAsin(vec2_a, vec2_b) { return Math.asin(this.crossProductSin(vec2_a, vec2_b)); }
    static rotate(vec2, azimuth = 0) {
        let mag = this.magnitude(vec2);
        azimuth += this.azimuth(vec2);
        vec2.x = mag * Math.cos(azimuth);
        vec2.y = mag * Math.sin(azimuth);
    }
    static polar(vec2) { return cart2polar(vec2); }
    static polarVector(vec2) { return new VectorPolar(this.polar(vec2)); }
    static matrix(vec2) { return [[vec2.x, vec2.y]]; }
    static point(vec2) { return new Dot2D(vec2); }
}
_a = Vector2D;
Vector2D.ZERO = { x: 0, y: 0 };
Vector2D.DOWN = { x: 0, y: -1 };
Vector2D.LEFT = { x: -1, y: 0 };
Vector2D.RIGHT = { x: 1, y: 0 };
Vector2D.UP = { x: 0, y: 1 };
Vector2D.LEFT_DOWN = { x: -Math.SQRT1_2, y: -Math.SQRT1_2 };
Vector2D.LEFT_UP = { x: -Math.SQRT1_2, y: Math.SQRT1_2 };
Vector2D.RIGHT_DOWN = { x: Math.SQRT1_2, y: -Math.SQRT1_2 };
Vector2D.RIGHT_UP = { x: Math.SQRT1_2, y: Math.SQRT1_2 };
Vector2D.DOWN_LEFT = _a.LEFT_DOWN;
Vector2D.DOWN_RIGHT = _a.RIGHT_DOWN;
Vector2D.UP_LEFT = _a.LEFT_UP;
Vector2D.UP_RIGHT = _a.RIGHT_UP;
Vector2D.zero = _a.matrix(_a.ZERO);
Vector2D.down = _a.matrix(_a.DOWN);
Vector2D.left = _a.matrix(_a.LEFT);
Vector2D.right = _a.matrix(_a.RIGHT);
Vector2D.up = _a.matrix(_a.UP);
Vector2D.left_down = _a.matrix(_a.LEFT_DOWN);
Vector2D.left_up = _a.matrix(_a.LEFT_UP);
Vector2D.right_down = _a.matrix(_a.RIGHT_DOWN);
Vector2D.right_up = _a.matrix(_a.RIGHT_UP);
Vector2D.down_right = _a.right_down;
Vector2D.down_left = _a.left_down;
Vector2D.up_left = _a.left_up;
Vector2D.up_right = _a.right_up;
export default Vector2D;
