"use strict";
var Fußball_Simulation;
(function (Fußball_Simulation) {
    class Ball extends Fußball_Simulation.Movable {
        constructor(_position, _velocity, _radius, _color) {
            super(_position, _velocity, _radius);
            this.color = _color;
        }
        move(_timeslice) {
            //
        }
        draw() {
            Fußball_Simulation.crc2.save();
            Fußball_Simulation.crc2.beginPath();
            Fußball_Simulation.crc2.arc(this.position.X, this.position.Y, 15, 0, 2 * Math.PI);
            var img = new Image();
            img.src = "Assets/ball.jpg";
            img.onload = function () {
                var pattern = Fußball_Simulation.crc2.createPattern(img, "repeat");
                Fußball_Simulation.crc2.fillStyle = pattern;
                Fußball_Simulation.crc2.fillRect(0, 0, 30, 30);
            };
            //crc2.fillRect(0, 0, 300, 300);
            //crc2.fillStyle = this.color;
            //crc2.fill();
            Fußball_Simulation.crc2.stroke();
            Fußball_Simulation.crc2.closePath();
            Fußball_Simulation.crc2.restore();
        }
        klickPath(_timeslice, _velocity) {
            console.log("klickPath started");
            let offset = new Fußball_Simulation.Vector(_velocity.X, _velocity.Y);
            let difference = Fußball_Simulation.Vector.getDifference(this.position, _velocity);
            let differenceNumber = difference.length();
            while (differenceNumber > 3) {
                offset.scale(_timeslice);
                this.position.add(offset);
            }
        }
    }
    Fußball_Simulation.Ball = Ball;
})(Fußball_Simulation || (Fußball_Simulation = {}));
//# sourceMappingURL=Ball.js.map