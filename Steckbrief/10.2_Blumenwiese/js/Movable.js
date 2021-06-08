"use strict";
var L10_2_Blumenwiese;
(function (L10_2_Blumenwiese) {
    class Movable {
        constructor(_position, _velocity) {
            this.position = _position;
            this.velocity = _velocity;
        }
        draw() { }
        move(_timeslice, _movePattern) {
            let offset = new L10_2_Blumenwiese.Vector(this.velocity.X, this.velocity.Y);
            offset.scale(_timeslice);
            this.position.add(offset);
            if (_movePattern == false) {
                if (this.position.X < window.innerWidth) {
                    this.position.X += window.innerWidth;
                }
                if (this.position.X > window.innerWidth) {
                    this.position.X -= window.innerWidth;
                }
            }
            if (_movePattern == true) {
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
                if (this.position.X < window.innerWidth / 2) {
                    this.velocity.Y = 20;
                }
                if (this.position.X > window.innerWidth / 2) {
                    this.velocity.Y = -10;
                }
            }
        }
    }
    L10_2_Blumenwiese.Movable = Movable;
})(L10_2_Blumenwiese || (L10_2_Blumenwiese = {}));
//# sourceMappingURL=Movable.js.map