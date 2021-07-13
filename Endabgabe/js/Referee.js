"use strict";
var Fußball_Simulation;
(function (Fußball_Simulation) {
    class Referee extends Fußball_Simulation.Human {
        constructor(_position, _velocity, _tricotcolor) {
            super(_position, _velocity, _tricotcolor);
        }
        move(_timeslice) {
            super.move(_timeslice);
        }
    }
    Fußball_Simulation.Referee = Referee;
})(Fußball_Simulation || (Fußball_Simulation = {}));
//# sourceMappingURL=Referee.js.map