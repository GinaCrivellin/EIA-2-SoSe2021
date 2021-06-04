"use strict";
var L10_AsteroidsInheritance;
(function (L10_AsteroidsInheritance) {
    class Ufo extends L10_AsteroidsInheritance.Movable {
        constructor(_position) {
            super(_position);
        }
        draw() {
            console.log("Ufo has been drawn");
            L10_AsteroidsInheritance.crc2.moveTo(0, 0);
            L10_AsteroidsInheritance.crc2.arc(100, 75, 50, 0, 2 * Math.PI);
            /*
            crc2.save();
            crc2.moveTo(20, 13);
            crc2.lineTo(27, 3);
            crc2.lineTo(38, 3);
            crc2.lineTo(43, 13);
            crc2.lineTo(59, 25);
            crc2.lineTo(45, 35);
            crc2.lineTo(18, 35);
            crc2.lineTo(4, 25);
            crc2.lineTo(20, 13);
            crc2.lineTo(43, 13);
            crc2.closePath();

            crc2.moveTo(4, 25);
            crc2.lineTo(59, 25);
            crc2.strokeStyle = "white";
            crc2.closePath();
            crc2.restore();
            */
        }
        move(_timeslice) {
            //super.move(_timeslice);
        }
    }
    L10_AsteroidsInheritance.Ufo = Ufo;
})(L10_AsteroidsInheritance || (L10_AsteroidsInheritance = {}));
//# sourceMappingURL=Ufo.js.map