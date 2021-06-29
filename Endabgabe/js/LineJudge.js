"use strict";
var Fußball_Simulation;
(function (Fußball_Simulation) {
    class LineJudge extends Fußball_Simulation.Human {
        constructor(_position, _velocity, _radius, _tricotcolor) {
            super(_position, _velocity, _radius, _tricotcolor);
        }
        move() {
            //
        }
    }
    Fußball_Simulation.LineJudge = LineJudge;
})(Fußball_Simulation || (Fußball_Simulation = {}));
//# sourceMappingURL=LineJudge.js.map