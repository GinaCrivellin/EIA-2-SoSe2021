"use strict";
var L11_1_Blumenwiese;
(function (L11_1_Blumenwiese) {
    class Tulip extends L11_1_Blumenwiese.Flower {
        constructor(_position, _stemColor, _leaveColor, _fillHeight) {
            super(_position, _stemColor, _leaveColor, _fillHeight);
        }
        draw() {
            L11_1_Blumenwiese.crc2.save();
            L11_1_Blumenwiese.crc2.beginPath();
            L11_1_Blumenwiese.crc2.moveTo(this.position.X, this.position.Y);
            L11_1_Blumenwiese.crc2.translate(this.position.X, this.position.Y);
            L11_1_Blumenwiese.crc2.quadraticCurveTo(10, 5, 10, 30);
            L11_1_Blumenwiese.crc2.strokeStyle = this.stemColor;
            L11_1_Blumenwiese.crc2.lineWidth = 5;
            L11_1_Blumenwiese.crc2.shadowColor = "#243323";
            L11_1_Blumenwiese.crc2.shadowOffsetX = 10;
            L11_1_Blumenwiese.crc2.shadowOffsetY = 10;
            L11_1_Blumenwiese.crc2.shadowBlur = 30;
            L11_1_Blumenwiese.crc2.stroke();
            L11_1_Blumenwiese.crc2.beginPath();
            moveTo(0, 22);
            L11_1_Blumenwiese.crc2.quadraticCurveTo(10, 5, -20, -20);
            L11_1_Blumenwiese.crc2.strokeStyle = "darkorange";
            L11_1_Blumenwiese.crc2.lineWidth = 2;
            L11_1_Blumenwiese.crc2.stroke();
            L11_1_Blumenwiese.crc2.beginPath();
            moveTo(0, 22);
            L11_1_Blumenwiese.crc2.quadraticCurveTo(10, 5, -20, -12);
            L11_1_Blumenwiese.crc2.strokeStyle = "orange";
            L11_1_Blumenwiese.crc2.lineWidth = 2;
            L11_1_Blumenwiese.crc2.stroke();
            L11_1_Blumenwiese.crc2.beginPath();
            moveTo(0, 22);
            L11_1_Blumenwiese.crc2.quadraticCurveTo(10, 5, -10, -20);
            L11_1_Blumenwiese.crc2.strokeStyle = "orange";
            L11_1_Blumenwiese.crc2.lineWidth = 2;
            L11_1_Blumenwiese.crc2.stroke();
            L11_1_Blumenwiese.crc2.beginPath();
            moveTo(10, 20);
            L11_1_Blumenwiese.crc2.arc(0, 0, 12, 5, 0.8 * Math.PI);
            L11_1_Blumenwiese.crc2.lineWidth = 1.3;
            L11_1_Blumenwiese.crc2.strokeStyle = "black";
            moveTo(0, 20);
            L11_1_Blumenwiese.crc2.lineTo(-20, -8);
            L11_1_Blumenwiese.crc2.lineTo(-2, -2);
            L11_1_Blumenwiese.crc2.lineTo(-2, -20);
            L11_1_Blumenwiese.crc2.closePath();
            L11_1_Blumenwiese.crc2.fillStyle = this.leaveColor;
            L11_1_Blumenwiese.crc2.fill();
            L11_1_Blumenwiese.crc2.stroke();
            L11_1_Blumenwiese.crc2.restore();
            this.nectarBar.draw(this.fillHeight);
        }
    }
    L11_1_Blumenwiese.Tulip = Tulip;
})(L11_1_Blumenwiese || (L11_1_Blumenwiese = {}));
//# sourceMappingURL=Tulip.js.map