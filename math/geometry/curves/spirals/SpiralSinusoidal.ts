class SpiralSinusoidal {


  /**Object with functions, that returns values of axises of sinusoidal spiral(cos) by angle, constant and exponent.*/
  static cos = {

    /**
     * Returns value of x-axis of sinusoidal spiral, calculated through cosine.
     * @param {number} angle Angle of spiral.
     * @param {number} base Base for exponent.
     * @param {number} exponent Exponent for base and angle multiplication.
     * @returns Number
     */
    x(angle: number, base: number = 1, exponent: number = 1): number{

      let r = base ** exponent * Math.cos(angle * exponent);
      return Math.cos(angle) * r;

    },

    /**
     * Returns value of y-axis of sinusoidal spiral, calculated through cosine.
     * @param {number} angle Angle of spiral.
     * @param {number} base Base for exponent.
     * @param {number} exponent Exponent for base and angle multiplication.
     * @returns Number
     */
    y(angle: number, base: number = 1, exponent: number = 1): number{

      let r = base ** exponent * Math.cos(angle * exponent);
      return Math.sin(angle) * r;

    }

  }


  
  /**Returns values of axises of sinusoidal spiral(sin) by angle, constant and exponent.*/
  static sin = {

    /**
     * Returns value of x-axis of sinusoidal spiral, calculated through sine.
     * @param {number} angle Angle of spiral.
     * @param {number} base Base for exponent.
     * @param {number} exponent Exponent for base and angle multiplication.
     * @returns Number
     */
    x(angle: number, base: number = 1, exponent: number = 1): number{

      let r = base ** exponent * Math.sin(angle * exponent);
      return Math.cos(angle) * r;

    },


    /**
     * Returns value of y-axis of sinusoidal spiral, calculated through sine.
     * @param {number} angle Angle of spiral.
     * @param {number} base Base for exponent.
     * @param {number} exponent Exponent for base and angle multiplication.
     * @returns Number
     */
    y(angle: number, base: number = 1, exponent: number = 1): number{

      let r = base ** exponent * Math.sin(angle * exponent);
      return Math.sin(angle) * r;

    }
  }


}

export default SpiralSinusoidal;