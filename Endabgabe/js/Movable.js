"use strict";
var Fußball_Simulation;
(function (Fußball_Simulation) {
    class Movable {
        constructor(_position, _velocity, _radius) {
            this.velocity = _velocity;
            this.position = _position;
            this.radius = _radius;
        }
    }
    Fußball_Simulation.Movable = Movable;
})(Fußball_Simulation || (Fußball_Simulation = {}));
//# sourceMappingURL=Movable.js.map