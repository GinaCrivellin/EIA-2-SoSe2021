"use strict";
var L11_1_Blumenwiese;
(function (L11_1_Blumenwiese) {
    class Vector {
        constructor(_X, _Y) {
            this.X = _X;
            this.Y = _Y;
        }
        static getDifference(_v1, _v2) {
            let difference = new Vector(_v1.X - _v2.X, _v1.Y - _v2.Y);
            return difference;
        }
        scale(_factor) {
            this.X *= _factor;
            this.Y *= _factor;
        }
        add(_added) {
            this.X += _added.X;
            this.Y += _added.Y;
        }
        length() {
            let normal = Math.sqrt(this.X * this.X + this.Y * this.Y);
            return normal;
        }
    }
    L11_1_Blumenwiese.Vector = Vector;
})(L11_1_Blumenwiese || (L11_1_Blumenwiese = {}));
//# sourceMappingURL=Vector.js.map