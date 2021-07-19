"use strict";
var Fußball_Simulation;
(function (Fußball_Simulation) {
    class Human extends Fußball_Simulation.Movable {
        constructor(_position, _velocity, _tricotcolor) {
            super(_position, _velocity);
            this.tricotcolor = _tricotcolor;
        }
        draw() {
            const radius = 20;
            Fußball_Simulation.crc2.save();
            Fußball_Simulation.crc2.beginPath();
            Fußball_Simulation.crc2.arc(this.position.X, this.position.Y, radius, 0, 2 * Math.PI);
            Fußball_Simulation.crc2.fillStyle = this.tricotcolor;
            Fußball_Simulation.crc2.fill();
            Fußball_Simulation.crc2.stroke();
            Fußball_Simulation.crc2.closePath();
            Fußball_Simulation.crc2.restore();
        }
    }
    Fußball_Simulation.Human = Human;
})(Fußball_Simulation || (Fußball_Simulation = {}));
//# sourceMappingURL=Human.js.map