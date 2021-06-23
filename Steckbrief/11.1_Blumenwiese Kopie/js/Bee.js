"use strict";
var L11_1_Blumenwiese;
(function (L11_1_Blumenwiese) {
    class Bee extends L11_1_Blumenwiese.Movable {
        constructor(_position, _velocity, _flower) {
            super(_position, _velocity);
            this.scaleX = 0.4;
            this.scaleY = 0.4;
            this.flower = _flower;
        }
        draw() {
            L11_1_Blumenwiese.crc2.save();
            L11_1_Blumenwiese.crc2.beginPath();
            L11_1_Blumenwiese.crc2.moveTo(this.position.X, this.position.Y);
            L11_1_Blumenwiese.crc2.translate(this.position.X, this.position.Y);
            L11_1_Blumenwiese.crc2.scale(this.scaleX, this.scaleY);
            L11_1_Blumenwiese.crc2.ellipse(100, 100, 15, 35, 300, 0, 2 * Math.PI);
            let pattern = document.createElement("canvas").getContext("2d");
            pattern.canvas.width = 20;
            pattern.canvas.height = 20;
            pattern.fillStyle = "#fcba03";
            pattern.fillRect(0, 0, pattern.canvas.width, pattern.canvas.height);
            pattern.moveTo(0, 0);
            pattern.lineTo(0, 40);
            pattern.moveTo(1, 0);
            pattern.lineTo(1, 40);
            pattern.moveTo(3, 0);
            pattern.lineTo(3, 40);
            pattern.strokeStyle = "black";
            pattern.lineWidth = "10";
            pattern.stroke();
            L11_1_Blumenwiese.crc2.fillStyle = L11_1_Blumenwiese.crc2.createPattern(pattern.canvas, "repeat");
            L11_1_Blumenwiese.crc2.fill();
            L11_1_Blumenwiese.crc2.stroke();
            L11_1_Blumenwiese.crc2.save();
            L11_1_Blumenwiese.crc2.beginPath();
            L11_1_Blumenwiese.crc2.moveTo(75, 98);
            L11_1_Blumenwiese.crc2.translate(75, 98);
            L11_1_Blumenwiese.crc2.scale(this.scaleX + 0.4, this.scaleY + 0.4);
            L11_1_Blumenwiese.crc2.arc(0, 0, 8, 0, 2 * Math.PI);
            L11_1_Blumenwiese.crc2.fillStyle = "white";
            L11_1_Blumenwiese.crc2.fill();
            L11_1_Blumenwiese.crc2.stroke();
            L11_1_Blumenwiese.crc2.restore();
            L11_1_Blumenwiese.crc2.save();
            L11_1_Blumenwiese.crc2.beginPath();
            L11_1_Blumenwiese.crc2.moveTo(75, 98);
            L11_1_Blumenwiese.crc2.translate(75, 98);
            L11_1_Blumenwiese.crc2.scale(this.scaleX + 0.3, this.scaleY + 0.3);
            L11_1_Blumenwiese.crc2.arc(0, 0, 5, 0, 2 * Math.PI);
            L11_1_Blumenwiese.crc2.fillStyle = "black";
            L11_1_Blumenwiese.crc2.fill();
            L11_1_Blumenwiese.crc2.stroke();
            L11_1_Blumenwiese.crc2.restore();
            L11_1_Blumenwiese.crc2.save();
            L11_1_Blumenwiese.crc2.beginPath();
            L11_1_Blumenwiese.crc2.moveTo(77, 88);
            L11_1_Blumenwiese.crc2.translate(77, 88);
            L11_1_Blumenwiese.crc2.scale(this.scaleX + 0.5, this.scaleY + 0.5);
            L11_1_Blumenwiese.crc2.quadraticCurveTo(15, -40, 40, -2);
            L11_1_Blumenwiese.crc2.fillStyle = "white";
            L11_1_Blumenwiese.crc2.strokeStyle = "black";
            L11_1_Blumenwiese.crc2.lineWidth = 2;
            L11_1_Blumenwiese.crc2.fill();
            L11_1_Blumenwiese.crc2.stroke();
            L11_1_Blumenwiese.crc2.restore();
            L11_1_Blumenwiese.crc2.save();
            L11_1_Blumenwiese.crc2.beginPath();
            L11_1_Blumenwiese.crc2.moveTo(95, 84);
            L11_1_Blumenwiese.crc2.translate(95, 84);
            L11_1_Blumenwiese.crc2.scale(this.scaleX + 0.5, this.scaleY + 0.5);
            L11_1_Blumenwiese.crc2.quadraticCurveTo(15, -40, 40, 7);
            L11_1_Blumenwiese.crc2.fillStyle = "white";
            L11_1_Blumenwiese.crc2.strokeStyle = "black";
            L11_1_Blumenwiese.crc2.lineWidth = 2;
            L11_1_Blumenwiese.crc2.fill();
            L11_1_Blumenwiese.crc2.stroke();
            L11_1_Blumenwiese.crc2.restore();
            L11_1_Blumenwiese.crc2.scale(10, 10);
            L11_1_Blumenwiese.crc2.restore();
        }
        move(_timesclice, _movePattern) {
            super.move(1 / 10, false);
            let difference = L11_1_Blumenwiese.Vector.getDifference(this.position, this.flower.position);
            difference.length();
            if (difference.length() == 0) {
                //
            }
        }
    }
    L11_1_Blumenwiese.Bee = Bee;
})(L11_1_Blumenwiese || (L11_1_Blumenwiese = {}));
//# sourceMappingURL=Bee.js.map