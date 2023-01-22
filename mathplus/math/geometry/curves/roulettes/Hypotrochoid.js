import Hypocycloid from "./Hypocycloid.js";
class Hypotrochoid {
    static x(angle, centerR = 1, satelliteR = 1, length = satelliteR) {
        return (length === satelliteR
            ? Hypocycloid.x(angle, centerR, satelliteR)
            : (centerR - satelliteR) * Math.cos(angle + length * Math.cos((centerR - satelliteR) / satelliteR * angle)));
    }
    static y(angle, centerR = 1, satelliteR = 1, length = satelliteR) {
        return (length === satelliteR
            ? Hypocycloid.y(angle, centerR, satelliteR)
            : (centerR - satelliteR) * Math.sin(angle - length * Math.sin((centerR - satelliteR) / satelliteR * angle)));
    }
}
export default Hypotrochoid;
