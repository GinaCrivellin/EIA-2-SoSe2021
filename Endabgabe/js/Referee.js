"use strict";
var Fußball_Simulation;
(function (Fußball_Simulation) {
    class Referee extends Fußball_Simulation.Human {
        constructor(_position, _velocity, _radius, _tricotcolor) {
            super(_position, _velocity, _radius, _tricotcolor);
        }
        move() {
            //
        }
    }
    Fußball_Simulation.Referee = Referee;
})(Fußball_Simulation || (Fußball_Simulation = {}));
//# sourceMappingURL=Referee.js.map