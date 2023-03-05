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
const infinite_error = Error(`Attribute is not finite.`);
const negative_error = Error(`Attribute is negative.`);
const polygon_error = Error(`Count of polygons is lower than 3.`);
export default class PolygonRegular {
    constructor(_b = {}) {
        var _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
        var params = __rest(_b, []);
        this.x = 0;
        this.y = 0;
        this.gons = 0;
        this.radius = 0;
        this.azimuth = 0;
        this.x = (_d = (_c = params.x) !== null && _c !== void 0 ? _c : params[0]) !== null && _d !== void 0 ? _d : 0;
        this.y = (_f = (_e = params.y) !== null && _e !== void 0 ? _e : params[1]) !== null && _f !== void 0 ? _f : 0;
        this.gons = (_h = (_g = params.gons) !== null && _g !== void 0 ? _g : params[2]) !== null && _h !== void 0 ? _h : 0;
        this.radius = (_k = (_j = params.radius) !== null && _j !== void 0 ? _j : params[3]) !== null && _k !== void 0 ? _k : 0;
        this.azimuth = (_m = (_l = params.azimuth) !== null && _l !== void 0 ? _l : params[4]) !== null && _m !== void 0 ? _m : 0;
    }
    rotate(azimuth = 0) {
        if (isFinite(azimuth)) {
            this.azimuth += azimuth;
        }
        else {
            throw infinite_error;
        }
        if (Math.abs(this.azimuth) > Math.TAU)
            this.azimuth %= Math.TAU;
    }
    get azimuth_gon() { return PolygonRegular.gon_value(this.gons); }
    get points() { return PolygonRegular.points(this); }
    set setX(x) { if (isFinite(x)) {
        this.x = x;
    }
    else {
        throw infinite_error;
    } }
    set setY(y) { if (isFinite(y)) {
        this.y = y;
    }
    else {
        throw infinite_error;
    } }
    set setGons(gons) {
        if (isFinite(gons)) {
            if (Math.sign(gons) > 0) {
                if (Math.floor(gons) === gons) {
                    gons = Math.floor(gons);
                }
                this.gons = gons;
            }
            else {
                throw negative_error;
            }
        }
        else {
            throw infinite_error;
        }
    }
    set setRadius(radius) { if (isFinite(radius)) {
        this.radius = radius;
    }
    else {
        throw infinite_error;
    } }
    set setAzimuth(azimuth) {
        if (isFinite(azimuth)) {
            if (Math.abs(azimuth) > Math.TAU) {
                azimuth %= Math.TAU;
            }
            this.azimuth = azimuth;
        }
        else {
            throw infinite_error;
        }
    }
    static gon_value(gons = 3) { return Math.TAU / gons; }
    static gon_length({ gons = 3, radius = 0 }) {
        let gon = this.gon_value(gons);
        return Math.hypot(radius - Math.cos(gon) * radius, Math.sin(gon) * radius);
    }
    static perimeter({ gons = 3, radius = 0 }) { return this.gon_length({ gons, radius }) * gons; }
    static area({ gons = 3, radius = 0 }) {
        if (gons > 0) {
            if (radius === 0) {
                return 0;
            }
            return this.apothem({ gons, radius }) * this.perimeter({ gons, radius }) * .5;
        }
        else {
            throw polygon_error;
        }
    }
    static points({ x = 0, y = 0, gons = 0, radius = 0, azimuth = 0 } = {}) {
        let matrix = [];
        let gonValue = Math.TAU * (1 / gons);
        for (let i = 0; i < gons; i++) {
            matrix.push([
                Math.cos(gonValue * i + azimuth) * radius + x,
                Math.sin(gonValue * i + azimuth) * radius + y
            ]);
        }
        return matrix;
    }
    static apothem({ gons = 3, radius = 0 }) { return radius * Math.cos(Math.PI * (1 / gons)); }
}
_a = PolygonRegular;
PolygonRegular.ZERO_DOT = { x: 0, y: 0, gons: 0, radius: 0, azimuth: 0 };
PolygonRegular.TRIANGLE_UP = { x: 0, y: 0, gons: 3, radius: 1, azimuth: Math.PI_HALF };
PolygonRegular.TRIANGLE_DOWN = { x: 0, y: 0, gons: 3, radius: 1, azimuth: -Math.PI_HALF };
PolygonRegular.TRIANGLE_LEFT = { x: 0, y: 0, gons: 3, radius: 1, azimuth: Math.PI };
PolygonRegular.TRIANGLE_RIGHT = { x: 0, y: 0, gons: 3, radius: 1, azimuth: 0 };
PolygonRegular.SQUARE = { x: 0, y: 0, gons: 4, radius: 1, azimuth: _a.gon_value(4) * .5 };
PolygonRegular.HEXAGON = { x: 0, y: 0, gons: 6, radius: 1, azimuth: 0 };
