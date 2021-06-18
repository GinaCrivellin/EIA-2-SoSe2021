"use strict";
var L11_1_Blumenwiese;
(function (L11_1_Blumenwiese) {
    class Vector {
        constructor(_X, _Y) {
            this.X = _X;
            this.Y = _Y;
        }
        static getScale(_n0) {
            let scaledVector = new Vector(_n0, _n0);
            return scaledVector;
        }
        scale(_factor) {
            this.X *= _factor;
            this.Y *= _factor;
        }
        add(_added) {
            this.X += _added.X;
            this.Y += _added.Y;
        }
    }
    L11_1_Blumenwiese.Vector = Vector;
})(L11_1_Blumenwiese || (L11_1_Blumenwiese = {}));
//# sourceMappingURL=Vector.js.map