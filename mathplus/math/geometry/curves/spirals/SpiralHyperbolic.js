class SpiralHyperbolic {
    static x(angle, coefficient = 1) { return Math.cos(angle) * coefficient / angle; }
    static y(angle, coefficient = 1) { return Math.sin(angle) * coefficient / angle; }
}
export default SpiralHyperbolic;
