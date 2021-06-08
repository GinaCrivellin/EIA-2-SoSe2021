"use strict";
var L10_2_Blumenwiese;
(function (L10_2_Blumenwiese) {
    class Vector {
        constructor(_X, _Y) {
            this.X = _X;
            this.Y = _Y;
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
    L10_2_Blumenwiese.Vector = Vector;
})(L10_2_Blumenwiese || (L10_2_Blumenwiese = {}));
//# sourceMappingURL=Vector.js.map