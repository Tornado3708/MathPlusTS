class Lituus {
    static x(angle, coefficient = 1) { return Math.cos(angle) * coefficient / Math.sqrt(angle); }
    static y(angle, coefficient = 1) { return Math.sin(angle) * coefficient / Math.sqrt(angle); }
}
export default Lituus;
