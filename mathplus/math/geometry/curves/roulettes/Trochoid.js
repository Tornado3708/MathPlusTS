import Cycloid from "./Cycloid.js";
class Trochoid {
    static x(angle, radius = 1, length = radius) {
        return (length === radius ? Cycloid.x(angle, radius) : radius * angle - length * Math.sin(angle));
    }
    static y(angle, radius = 1, length = radius) {
        return (length === radius ? Cycloid.y(angle, radius) : radius - length * Math.cos(angle));
    }
}
export default Trochoid;
