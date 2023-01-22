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
import azimuth from "../../generic_calculations/azimuth.js";
import magnitude from "../../generic_calculations/magnitude.js";
class Complex {
    constructor(_a) {
        var _b, _c, _d, _e;
        var complex = __rest(_a, []);
        this.real = 0;
        this.imag = 0;
        this.real = (_c = (_b = complex.real) !== null && _b !== void 0 ? _b : complex[0]) !== null && _c !== void 0 ? _c : 0;
        this.imag = (_e = (_d = complex.imag) !== null && _d !== void 0 ? _d : complex[1]) !== null && _e !== void 0 ? _e : 0;
    }
    add({ real = 0, imag = 0 }) { Complex.add(this, { real, imag }); }
    sub({ real = 0, imag = 0 }) { Complex.add(this, { real: -real, imag: -imag }); }
    mult({ real = 0, imag = 0 }) { Complex.mult(this, { real, imag }); }
    div({ real = 0, imag = 0 }) { Complex.mult(this, { real: 1 / real, imag: 1 / imag }); }
    get modulus() { return Complex.modulus(this); }
    get argument() { return Complex.argument(this); }
    get value() { return Complex.value(this); }
    static add(complex, { real = 0, imag = 0 }) { complex.real += real, complex.imag += imag; }
    static sub(complex, { real = 0, imag = 0 }) { this.add(complex, { real: -real, imag: -imag }); }
    static mult(complex, { real = 0, imag = 0 }) { complex.real *= real, complex.imag *= imag; }
    static div(complex, { real = 0, imag = 0 }) { this.mult(complex, { real: 1 / real, imag: 1 / imag }); }
    static modulus({ real, imag }) { return magnitude(real, imag); }
    static argument({ real, imag }) { return azimuth(imag, real); }
    static value({ real, imag }) { return magnitude(real, imag) * Math.cas(azimuth(imag, real)); }
    static toPolar({ real, imag }) { return { azimuth: azimuth(imag, real), radius: magnitude(imag, real) }; }
    static fromPolar({ azimuth, radius }) { return new Complex([Math.cos(azimuth) * radius, Math.sin(azimuth) * radius]); }
}
Complex.ZERO = { real: 0, imag: 0 };
Complex.REAL_UNIT = { real: 0, imag: 0 };
Complex.IMAG_UNIT = { real: 0, imag: 1 };
Complex.COMPLEX_UNIT = { real: 1, imag: 1 };
export default Complex;
