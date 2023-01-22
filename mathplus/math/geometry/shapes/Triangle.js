class Triangle extends Array {
    constructor(...points) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
        super();
        for (let i = 0; i < 3; i++) {
            this[i].push((_d = (_c = (_b = (_a = points[i].x) !== null && _a !== void 0 ? _a : points[0][i][i]) !== null && _b !== void 0 ? _b : points[0][i][i]) !== null && _c !== void 0 ? _c : points[i * 3]) !== null && _d !== void 0 ? _d : 0, (_h = (_g = (_f = (_e = points[i].y) !== null && _e !== void 0 ? _e : points[0][i][i + 1]) !== null && _f !== void 0 ? _f : points[0][i + 1][i]) !== null && _g !== void 0 ? _g : points[i * 3 + 1]) !== null && _h !== void 0 ? _h : 0, (_m = (_l = (_k = (_j = points[i].z) !== null && _j !== void 0 ? _j : points[0][i][i + 2]) !== null && _k !== void 0 ? _k : points[0][i + 2][i]) !== null && _l !== void 0 ? _l : points[i * 3 + 2]) !== null && _m !== void 0 ? _m : 0);
        }
    }
}
export default Triangle;
