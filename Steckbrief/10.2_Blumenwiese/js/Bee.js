"use strict";
var L10_2_Blumenwiese;
(function (L10_2_Blumenwiese) {
    class Bee extends L10_2_Blumenwiese.Movable {
        constructor(_position, _velocity, _scaleX, _scaleY) {
            super(_position, _velocity);
            this.scaleX = _scaleX;
            this.scaleY = _scaleY;
        }
        draw() {
            L10_2_Blumenwiese.crc2.save();
            L10_2_Blumenwiese.crc2.beginPath();
            L10_2_Blumenwiese.crc2.moveTo(this.position.X, this.position.Y);
            L10_2_Blumenwiese.crc2.translate(this.position.X, this.position.Y);
            L10_2_Blumenwiese.crc2.scale(this.scaleX, this.scaleY);
            L10_2_Blumenwiese.crc2.ellipse(100, 100, 15, 35, 300, 0, 2 * Math.PI);
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
            L10_2_Blumenwiese.crc2.fillStyle = L10_2_Blumenwiese.crc2.createPattern(pattern.canvas, "repeat");
            L10_2_Blumenwiese.crc2.fill();
            L10_2_Blumenwiese.crc2.stroke();
            L10_2_Blumenwiese.crc2.save();
            L10_2_Blumenwiese.crc2.beginPath();
            L10_2_Blumenwiese.crc2.moveTo(75, 98);
            L10_2_Blumenwiese.crc2.translate(75, 98);
            L10_2_Blumenwiese.crc2.scale(this.scaleX + 0.4, this.scaleY + 0.4);
            L10_2_Blumenwiese.crc2.arc(0, 0, 8, 0, 2 * Math.PI);
            L10_2_Blumenwiese.crc2.fillStyle = "white";
            L10_2_Blumenwiese.crc2.fill();
            L10_2_Blumenwiese.crc2.stroke();
            L10_2_Blumenwiese.crc2.restore();
            L10_2_Blumenwiese.crc2.save();
            L10_2_Blumenwiese.crc2.beginPath();
            L10_2_Blumenwiese.crc2.moveTo(75, 98);
            L10_2_Blumenwiese.crc2.translate(75, 98);
            L10_2_Blumenwiese.crc2.scale(this.scaleX + 0.3, this.scaleY + 0.3);
            L10_2_Blumenwiese.crc2.arc(0, 0, 5, 0, 2 * Math.PI);
            L10_2_Blumenwiese.crc2.fillStyle = "black";
            L10_2_Blumenwiese.crc2.fill();
            L10_2_Blumenwiese.crc2.stroke();
            L10_2_Blumenwiese.crc2.restore();
            L10_2_Blumenwiese.crc2.save();
            L10_2_Blumenwiese.crc2.beginPath();
            L10_2_Blumenwiese.crc2.moveTo(77, 88);
            L10_2_Blumenwiese.crc2.translate(77, 88);
            L10_2_Blumenwiese.crc2.scale(this.scaleX + 0.5, this.scaleY + 0.5);
            L10_2_Blumenwiese.crc2.quadraticCurveTo(15, -40, 40, -2);
            L10_2_Blumenwiese.crc2.fillStyle = "white";
            L10_2_Blumenwiese.crc2.strokeStyle = "black";
            L10_2_Blumenwiese.crc2.lineWidth = 2;
            L10_2_Blumenwiese.crc2.fill();
            L10_2_Blumenwiese.crc2.stroke();
            L10_2_Blumenwiese.crc2.restore();
            L10_2_Blumenwiese.crc2.save();
            L10_2_Blumenwiese.crc2.beginPath();
            L10_2_Blumenwiese.crc2.moveTo(95, 84);
            L10_2_Blumenwiese.crc2.translate(95, 84);
            L10_2_Blumenwiese.crc2.scale(this.scaleX + 0.5, this.scaleY + 0.5);
            L10_2_Blumenwiese.crc2.quadraticCurveTo(15, -40, 40, 7);
            L10_2_Blumenwiese.crc2.fillStyle = "white";
            L10_2_Blumenwiese.crc2.strokeStyle = "black";
            L10_2_Blumenwiese.crc2.lineWidth = 2;
            L10_2_Blumenwiese.crc2.fill();
            L10_2_Blumenwiese.crc2.stroke();
            L10_2_Blumenwiese.crc2.restore();
            L10_2_Blumenwiese.crc2.scale(10, 10);
            L10_2_Blumenwiese.crc2.restore();
        }
    }
    L10_2_Blumenwiese.Bee = Bee;
})(L10_2_Blumenwiese || (L10_2_Blumenwiese = {}));
//# sourceMappingURL=Bee.js.map