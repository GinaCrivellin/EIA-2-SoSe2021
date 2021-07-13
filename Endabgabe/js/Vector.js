"use strict";
var Fußball_Simulation;
(function (Fußball_Simulation) {
    function toRadians(_deg) {
        return _deg / 180 * Math.PI;
    }
    Fußball_Simulation.toRadians = toRadians;
    function randInterval(_a, _b) {
        return Math.random() * (_b - _a) + _a;
    }
    Fußball_Simulation.randInterval = randInterval;
    class Vector {
        constructor(_X, _Y) {
            this.X = _X;
            this.Y = _Y;
        }
        static getDifference(_v1, _v2) {
            let difference = new Vector(_v1.X - _v2.X, _v1.Y - _v2.Y);
            return difference;
        }
        static dot(_a, _b) {
            return _a.X * _b.X + _a.Y * _b.Y;
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
        normalize() {
            const length = this.length();
            return new Vector(this.X / length, this.Y / length);
        }
    }
    Fußball_Simulation.Vector = Vector;
})(Fußball_Simulation || (Fußball_Simulation = {}));
//# sourceMappingURL=Vector.js.map