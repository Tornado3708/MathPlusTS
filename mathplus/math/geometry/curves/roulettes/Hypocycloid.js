class Hypocycloid {
    static x(angle, centerR = 1, satelliteR = 1) {
        let R = centerR - satelliteR;
        return R * Math.cos(angle) + satelliteR * Math.cos(R / satelliteR * angle);
    }
    static y(angle, centerR = 1, satelliteR = 1) {
        let R = centerR - satelliteR;
        return R * Math.sin(angle) - satelliteR * Math.cos(R / satelliteR * angle);
    }
}
export default Hypocycloid;
