"use strict";
var Fußball_Simulation;
(function (Fußball_Simulation) {
    class Player extends Fußball_Simulation.Human {
        constructor(_position, _velocity, _radius, _tricotcolor, _name, _number, _precision, _pace) {
            super(_position, _velocity, _radius, _tricotcolor);
            this.name = _name;
            this.number = _number;
            this.precision = _precision;
        }
        draw() {
            console.log("position changed");
            super.draw();
        }
        move(_timeslice) {
            super.move(_timeslice);
        }
    }
    Fußball_Simulation.Player = Player;
})(Fußball_Simulation || (Fußball_Simulation = {}));
//# sourceMappingURL=Player.js.map