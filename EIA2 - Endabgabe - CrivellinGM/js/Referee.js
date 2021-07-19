"use strict";
var Fußball_Simulation;
(function (Fußball_Simulation) {
    class Referee extends Fußball_Simulation.Human {
        constructor(_position, _velocity, _tricotcolor) {
            super(_position, _velocity, _tricotcolor);
            this.moveRange = 20;
            this.velocity = _velocity;
        }
        move(_timeslice) {
            let moveRange = 70;
            this.position.X = Fußball_Simulation.getBall().position.X;
            this.position.Y = Fußball_Simulation.getBall().position.Y - moveRange;
            if (Fußball_Simulation.getBall().position.X < window.innerWidth * 0.5) {
                this.position.X = Fußball_Simulation.getBall().position.X + moveRange;
            }
            if (Fußball_Simulation.getBall().position.X > window.innerWidth * 0.5) {
                this.position.X = Fußball_Simulation.getBall().position.X - moveRange;
            }
            super.move(_timeslice);
        }
    }
    Fußball_Simulation.Referee = Referee;
})(Fußball_Simulation || (Fußball_Simulation = {}));
//# sourceMappingURL=Referee.js.map