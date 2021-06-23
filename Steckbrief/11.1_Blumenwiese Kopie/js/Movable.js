"use strict";
var L11_1_Blumenwiese;
(function (L11_1_Blumenwiese) {
    class Movable {
        constructor(_position, _velocity) {
            this.position = _position;
            this.velocity = _velocity;
        }
        move(_timeslice, _movePattern) {
            let offset = new L11_1_Blumenwiese.Vector(this.velocity.X, this.velocity.Y);
            offset.scale(_timeslice);
            this.position.add(offset);
            /*
            let offset2: Vector = new Vector(this.velocity.X, this.velocity.Y);

            offset2 = Vector.getScale(_timeslice);
            this.position.add(offset2);
            */
            if (_movePattern == false) {
                if (this.position.X < window.innerWidth) {
                    this.position.X += window.innerWidth;
                }
                if (this.position.X > window.innerWidth) {
                    this.position.X -= window.innerWidth;
                }
            }
        }
    }
    L11_1_Blumenwiese.Movable = Movable;
})(L11_1_Blumenwiese || (L11_1_Blumenwiese = {}));
//# sourceMappingURL=Movable.js.map