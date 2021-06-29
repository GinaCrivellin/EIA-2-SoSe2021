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
            let startPositions = {
                Stürmer: {
                    links: new Fußball_Simulation.Vector(window.innerWidth * 0.5, window.innerHeight * 0.2),
                    rechts: new Fußball_Simulation.Vector(window.innerWidth * 0.5, window.innerHeight * 0.8)
                },
                Mittelfeld: {
                    links: new Fußball_Simulation.Vector(window.innerWidth * 0.5, window.innerHeight * 0.2),
                    rechts: new Fußball_Simulation.Vector(window.innerWidth * 0.5, window.innerHeight * 0.8),
                    mitte: new Fußball_Simulation.Vector(window.innerWidth * 0.5, window.innerHeight * 0.2),
                    mitteHinten: new Fußball_Simulation.Vector(window.innerWidth * 0.5, window.innerHeight * 0.8)
                },
                Abwehr: {
                    außenLinks: new Fußball_Simulation.Vector(window.innerWidth * 0.4, window.innerHeight * 0.3),
                    außenRechts: new Fußball_Simulation.Vector(window.innerWidth * 0.5, window.innerHeight * 0.8),
                    innenLinks: new Fußball_Simulation.Vector(window.innerWidth * 0.5, window.innerHeight * 0.2),
                    innenRechts: new Fußball_Simulation.Vector(window.innerWidth * 0.5, window.innerHeight * 0.8)
                },
                Tor: new Fußball_Simulation.Vector(window.innerWidth * 0.5, window.innerHeight * 0.2)
            };
            this.position = startPositions.Abwehr.außenLinks;
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