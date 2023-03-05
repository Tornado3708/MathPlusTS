var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _a, _Polygon_buffer;
import PolygonRegular from "./polygons/PolygonRegular.js";
import { Star } from "./polygons/Star.js";
export default class Polygon extends Array {
    constructor(...points) {
        super();
        let p = points;
        switch (p[0].constructor.name) {
            case 'Array':
                for (let segment in p) {
                    this.push(segment);
                }
                break;
            case 'Number':
                while (p.length > 1) {
                    this.push([p[0], p[1]]);
                    points.splice(0, 2);
                }
                break;
            default:
                throw Error(`Expected Array<number>|Matrix. Got ${points[0].constructor.name}, value is ${points[0]}`);
        }
    }
    static sides(polygon) {
        if (__classPrivateFieldGet(this, _a, "f", _Polygon_buffer).polygon !== polygon) {
            __classPrivateFieldGet(this, _a, "f", _Polygon_buffer).polygon = polygon;
            __classPrivateFieldGet(this, _a, "f", _Polygon_buffer).sides = [];
            for (let i = 0; i < polygon.length; i++) {
                __classPrivateFieldGet(this, _a, "f", _Polygon_buffer).sides[i] = Math.hypot(polygon[i][0] - (i < polygon.length ? polygon[i][0] : polygon[0][0]), polygon[i][1] - (i < polygon.length ? polygon[i][1] : polygon[0][1]));
            }
        }
        return __classPrivateFieldGet(this, _a, "f", _Polygon_buffer).sides;
    }
    static perimeter(polygon) {
        __classPrivateFieldGet(this, _a, "f", _Polygon_buffer).perimeter = 0;
        this.sides(polygon).forEach(side => __classPrivateFieldGet(this, _a, "f", _Polygon_buffer).perimeter += side);
        return __classPrivateFieldGet(this, _a, "f", _Polygon_buffer).perimeter;
    }
    static get lastSides() { return __classPrivateFieldGet(this, _a, "f", _Polygon_buffer).sides; }
    static get lastPerimeter() { return __classPrivateFieldGet(this, _a, "f", _Polygon_buffer).perimeter; }
}
_a = Polygon;
_Polygon_buffer = { value: {
        polygon: [[0, 0]],
        sides: [0],
        perimeter: 0
    } };
Polygon.Regular = PolygonRegular;
Polygon.Star = Star;
