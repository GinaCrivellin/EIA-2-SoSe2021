"use strict";
var Fußball_Simulation;
(function (Fußball_Simulation) {
    class LineJudge extends Fußball_Simulation.Human {
        constructor(_position, _velocity, _tricotcolor, _lineJudgeHeight) {
            super(_position, _velocity, _tricotcolor);
            this.height = _lineJudgeHeight;
        }
        move(_timeslice) {
            super.move(_timeslice);
            this.position.X = Fußball_Simulation.getBall().position.X;
            this.position.Y = this.height;
        }
    }
    Fußball_Simulation.LineJudge = LineJudge;
})(Fußball_Simulation || (Fußball_Simulation = {}));
//# sourceMappingURL=LineJudge.js.map