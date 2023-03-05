import MathPlus from "./MathPlus.js";
function sinc(x, norm = 1) { return Math.sin(x * norm) / (x * norm) || 1; }
function cosc(x, norm = 1) { return Math.cos(x * norm) / (x * norm) || Infinity; }
function cas(x) { return Math.sin(x) + Math.cos(x) || 0; }
function sec(x) { return 1 / Math.cos(x) || 1; }
function cosec(x) { return 1 / Math.sin(x) || 1; }
function toDegrees(radians) { return radians * Math.RAD2DEG || 0; }
function toRadians(degrees) { return degrees * Math.DEG2RAD || 0; }
const PI_QUARTER = Math.PI * 0.25;
const PI_HALF = Math.PI * 0.5;
const TAU = Math.PI * 2;
const SQRT3 = Math.sqrt(3);
const SQRT5 = Math.sqrt(5);
const PHI = (SQRT5 + 1) * .5;
const phi = (SQRT5 - 1) * .5;
function factorial(n) {
    if (n === 1)
        return 1;
    if (n === 2)
        return 2;
    let int = 1;
    for (let i = 1; i <= n; i++) {
        int *= i;
    }
    return int;
}
function percent(value, max) { return value * (1 / max); }
function object() { window.MathPlus = MathPlus; }
function global() {
    let mp = new MathPlus;
    window = Object.assign(Object.assign({}, window), mp);
}
function math() {
    let mp = new MathPlus;
    Math = Object.assign(Object.assign({}, Math), mp);
}
function all() {
    object();
    math();
}
export function install() {
    Math.factorial = factorial;
    Math.sinc = sinc;
    Math.cosc = cosc;
    Math.cas = cas;
    Math.sec = sec;
    Math.cosec = cosec;
    Math.toDegrees = toDegrees;
    Math.toRadians = toRadians;
    Math.PI_QUARTER = PI_QUARTER;
    Math.PI_HALF = PI_HALF;
    Math.PI_TWO = TAU;
    Math.TAU = TAU;
    Math.SQRT3 = SQRT3;
    Math.SQRT5 = SQRT5;
    Math.PHI = PHI;
    Math.phi = phi;
    Math.RAD2DEG = 180 * (1 / Math.PI);
    Math.DEG2RAD = Math.PI * (1 / 180);
    return {
        object,
        math,
        all
    };
}
