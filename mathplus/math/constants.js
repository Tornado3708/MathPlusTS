let SQRT3_3 = Math.SQRT3 / 3;
export const const2d_zero = { x: 0, y: 0 };
export const const3d_zero = Object.assign(Object.assign({}, const2d_zero), { z: 0 });
export const const_polar_zero = { azimuth: 0, radius: 0 };
export const const_cyl_zero = Object.assign(Object.assign({}, const_polar_zero), { z: 0 });
export const const_sph_zero = Object.assign(Object.assign({}, const_polar_zero), { zenith: 0 });
export const const2d = {
    ZERO: const2d_zero,
    DOWN: { x: 0, y: -1 },
    LEFT: { x: -1, y: 0 },
    RIGHT: { x: 1, y: 0 },
    UP: { x: 0, y: 1 },
    LEFT_DOWN: { x: -Math.SQRT1_2, y: -Math.SQRT1_2 },
    LEFT_UP: { x: -Math.SQRT1_2, y: Math.SQRT1_2 },
    RIGHT_DOWN: { x: Math.SQRT1_2, y: -Math.SQRT1_2 },
    RIGHT_UP: { x: Math.SQRT1_2, y: Math.SQRT1_2 },
};
export const const3d = {
    ZERO: const3d_zero,
    LEFT: Object.assign(Object.assign({}, const2d.LEFT), { z: 0 }),
    RIGHT: Object.assign(Object.assign({}, const2d.RIGHT), { z: 0 }),
    DOWN: Object.assign(Object.assign({}, const2d.DOWN), { z: 0 }),
    UP: Object.assign(Object.assign({}, const2d.UP), { z: 0 }),
    BACK: Object.assign(Object.assign({}, const2d.ZERO), { z: -1 }),
    FORWARD: Object.assign(Object.assign({}, const2d.ZERO), { z: 1 }),
    FORWARD_DOWN: { x: 0, y: -Math.SQRT1_2, z: Math.SQRT1_2 },
    FORWARD_LEFT: { x: -Math.SQRT1_2, y: 0, z: Math.SQRT1_2 },
    FORWARD_RIGHT: { x: Math.SQRT1_2, y: 0, z: Math.SQRT1_2 },
    FORWARD_UP: { x: 0, y: Math.SQRT1_2, z: Math.SQRT1_2 },
    LEFT_BACK: { x: -Math.SQRT1_2, y: 0, z: -Math.SQRT1_2 },
    LEFT_DOWN: Object.assign(Object.assign({}, const2d.LEFT_DOWN), { z: 0 }),
    LEFT_UP: Object.assign(Object.assign({}, const2d.LEFT_UP), { z: 0 }),
    RIGHT_DOWN: Object.assign(Object.assign({}, const2d.RIGHT_DOWN), { z: 0 }),
    RIGHT_UP: Object.assign(Object.assign({}, const2d.RIGHT_UP), { z: 0 }),
    RIGHT_BACK: { x: Math.SQRT1_2, y: 0, z: -Math.SQRT1_2 },
    BACK_DOWN: { x: 0, y: -Math.SQRT1_2, z: -Math.SQRT1_2 },
    BACK_UP: { x: 0, y: Math.SQRT1_2, z: -Math.SQRT1_2 },
    LEFT_DOWN_BACK: { x: -SQRT3_3, y: -SQRT3_3, z: -SQRT3_3 },
    LEFT_DOWN_FORWARD: { x: -SQRT3_3, y: -SQRT3_3, z: SQRT3_3 },
    LEFT_UP_BACK: { x: -SQRT3_3, y: SQRT3_3, z: -SQRT3_3 },
    LEFT_UP_FORWARD: { x: -SQRT3_3, y: SQRT3_3, z: SQRT3_3 },
    RIGHT_DOWN_BACK: { x: SQRT3_3, y: -SQRT3_3, z: -SQRT3_3 },
    RIGHT_DOWN_FORWARD: { x: SQRT3_3, y: -SQRT3_3, z: SQRT3_3 },
    RIGHT_UP_BACK: { x: SQRT3_3, y: SQRT3_3, z: -SQRT3_3 },
    RIGHT_UP_FORWARD: { x: SQRT3_3, y: SQRT3_3, z: SQRT3_3 },
};
export const const_polar = {
    ZERO: const_polar_zero,
    DOWN: { azimuth: -Math.PI * .5, radius: 1 },
    LEFT: { azimuth: Math.PI, radius: 1 },
    RIGHT: { azimuth: 0, radius: 1 },
    UP: { azimuth: Math.PI * .5, radius: 1 },
    LEFT_UP: { azimuth: Math.PI * .75, radius: 1 },
    LEFT_DOWN: { azimuth: -Math.PI * .75, radius: 1 },
    RIGHT_UP: { azimuth: Math.PI * .25, radius: 1 },
    RIGHT_DOWN: { azimuth: -Math.PI * .25, radius: 1 },
};
export const const_cylindrical = {
    ZERO: const_cyl_zero,
    DOWN: Object.assign(Object.assign({}, const_polar.DOWN), { z: 0 }),
    LEFT: Object.assign(Object.assign({}, const_polar.LEFT), { z: 0 }),
    RIGHT: Object.assign(Object.assign({}, const_polar.RIGHT), { z: 0 }),
    UP: Object.assign(Object.assign({}, const_polar.UP), { z: 0 }),
    BACK: Object.assign(Object.assign({}, const_polar.ZERO), { z: -1 }),
    FORWARD: Object.assign(Object.assign({}, const_polar.ZERO), { z: 1 }),
    LEFT_UP: Object.assign(Object.assign({}, const_polar.LEFT_UP), { z: 0 }),
    LEFT_DOWN: Object.assign(Object.assign({}, const_polar.LEFT_DOWN), { z: 0 }),
    LEFT_BACK: Object.assign(Object.assign({}, const_polar.LEFT), { z: -1 }),
    LEFT_FORWARD: Object.assign(Object.assign({}, const_polar.LEFT), { z: 1 }),
    RIGHT_UP: Object.assign(Object.assign({}, const_polar.RIGHT_UP), { z: 0 }),
    RIGHT_DOWN: Object.assign(Object.assign({}, const_polar.RIGHT_DOWN), { z: 0 }),
    RIGHT_BACK: Object.assign(Object.assign({}, const_polar.RIGHT), { z: -1 }),
    RIGHT_FORWARD: Object.assign(Object.assign({}, const_polar.RIGHT), { z: 1 }),
    DOWN_BACK: Object.assign(Object.assign({}, const_polar.DOWN), { z: -1 }),
    DOWN_FORWARD: Object.assign(Object.assign({}, const_polar.DOWN), { z: 1 }),
    UP_BACK: Object.assign(Object.assign({}, const_polar.UP), { z: -1 }),
    UP_FORWARD: Object.assign(Object.assign({}, const_polar.UP), { z: 1 }),
};
export const const_spherical = {
    ZERO: const_sph_zero,
    DOWN: Object.assign(Object.assign({}, const_polar.DOWN), { zenith: Math.PI_HALF }),
    LEFT: Object.assign(Object.assign({}, const_polar.LEFT), { zenith: Math.PI_HALF }),
    RIGHT: Object.assign(Object.assign({}, const_polar.RIGHT), { zenith: Math.PI_HALF }),
    UP: Object.assign(Object.assign({}, const_polar.UP), { zenith: Math.PI_HALF }),
    BACK: Object.assign(Object.assign({}, const_polar.ZERO), { zenith: Math.PI }),
    FORWARD: Object.assign(Object.assign({}, const_polar.ZERO), { zenith: 0 }),
};
export let pol2Array = ({ azimuth: a = 0, radius: r = 0 }) => [a, r];
export let cyl2Array = ({ azimuth: a = 0, radius: r = 0, z = 0 }) => [a, r, z];
export let sph2Array = ({ azimuth: a = 0, zenith: z = 0, radius: r = 0 }) => [a, z, r];
