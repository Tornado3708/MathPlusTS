import Epicycloid from "./Epicycloid.js";
class Epitrochoid {
    static x(angle, centerR = 1, satelliteR = 1, length = satelliteR) {
        return (length === satelliteR
            ? Epicycloid.x(angle, centerR, satelliteR)
            : (centerR + satelliteR) * Math.cos(angle) - length * Math.cos((centerR + satelliteR) / satelliteR * angle));
    }
    ;
    static y(angle, centerR = 1, satelliteR = 1, length = satelliteR) {
        return (length === satelliteR
            ? Epicycloid.y(angle, centerR, satelliteR)
            : (centerR + satelliteR) * Math.sin(angle) - length * Math.sin((centerR + satelliteR) / satelliteR * angle));
    }
}
export default Epitrochoid;
