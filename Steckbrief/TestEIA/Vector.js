"use strict";
var Blumenwiese;
(function (Blumenwiese) {
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
    Blumenwiese.Vector = Vector;
})(Blumenwiese || (Blumenwiese = {}));
//# sourceMappingURL=Vector.js.map