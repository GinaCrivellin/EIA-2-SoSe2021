"use strict";
var L11_1_Blumenwiese;
(function (L11_1_Blumenwiese) {
    class Movable {
        constructor(_position) {
            this.position = _position;
        }
        //public abstract update(): void;
        move(_timeslice) {
            let offset = new L11_1_Blumenwiese.Vector(this.velocity.X, this.velocity.Y);
            offset.scale(_timeslice);
            this.position.add(offset);
            if (this.position.X < window.innerWidth) {
                this.position.X += window.innerWidth;
            }
            if (this.position.X > window.innerWidth) {
                this.position.X -= window.innerWidth;
            }
            if (this.position.Y < window.innerHeight) {
                this.position.Y += window.innerHeight;
            }
            if (this.position.Y > window.innerHeight) {
                this.position.Y -= window.innerHeight;
            }
        }
    }
    L11_1_Blumenwiese.Movable = Movable;
})(L11_1_Blumenwiese || (L11_1_Blumenwiese = {}));
//# sourceMappingURL=Movable.js.map