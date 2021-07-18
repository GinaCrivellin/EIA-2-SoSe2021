"use strict";
var Fußball_Simulation;
(function (Fußball_Simulation) {
    class Movable {
        constructor(_position, _velocity) {
            this.velocity = _velocity;
            this.position = _position;
        }
        move(_timeslice) {
            let offset = new Fußball_Simulation.Vector(this.velocity.X, this.velocity.Y);
            offset.scale(_timeslice);
            this.position.add(offset);
        }
        setVelocity(vel) {
            this.velocity = vel;
            console.log("new velocity was set");
        }
    }
    Fußball_Simulation.Movable = Movable;
})(Fußball_Simulation || (Fußball_Simulation = {}));
//# sourceMappingURL=Movable.js.map