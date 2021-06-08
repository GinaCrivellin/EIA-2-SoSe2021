"use strict";
var L10_2_Blumenwiese;
(function (L10_2_Blumenwiese) {
    class Tulip {
        constructor(_position, _leaveColor, _stemColor) {
            this.position = _position;
            this.leaveColor = _leaveColor;
            this.stemColor = _stemColor;
        }
        draw() {
            L10_2_Blumenwiese.crc2.save();
            L10_2_Blumenwiese.crc2.beginPath();
            L10_2_Blumenwiese.crc2.moveTo(this.position.X, this.position.Y);
            L10_2_Blumenwiese.crc2.translate(this.position.X, this.position.Y);
            L10_2_Blumenwiese.crc2.quadraticCurveTo(10, 5, 10, 30);
            L10_2_Blumenwiese.crc2.strokeStyle = this.stemColor;
            L10_2_Blumenwiese.crc2.lineWidth = 5;
            L10_2_Blumenwiese.crc2.shadowColor = '#243323';
            L10_2_Blumenwiese.crc2.shadowOffsetX = 10;
            L10_2_Blumenwiese.crc2.shadowOffsetY = 10;
            L10_2_Blumenwiese.crc2.shadowBlur = 30;
            L10_2_Blumenwiese.crc2.stroke();
            L10_2_Blumenwiese.crc2.beginPath();
            moveTo(0, 22);
            L10_2_Blumenwiese.crc2.quadraticCurveTo(10, 5, -20, -20);
            L10_2_Blumenwiese.crc2.strokeStyle = "darkorange";
            L10_2_Blumenwiese.crc2.lineWidth = 2;
            L10_2_Blumenwiese.crc2.stroke();
            L10_2_Blumenwiese.crc2.beginPath();
            moveTo(0, 22);
            L10_2_Blumenwiese.crc2.quadraticCurveTo(10, 5, -20, -12);
            L10_2_Blumenwiese.crc2.strokeStyle = "orange";
            L10_2_Blumenwiese.crc2.lineWidth = 2;
            L10_2_Blumenwiese.crc2.stroke();
            L10_2_Blumenwiese.crc2.beginPath();
            moveTo(0, 22);
            L10_2_Blumenwiese.crc2.quadraticCurveTo(10, 5, -10, -20);
            L10_2_Blumenwiese.crc2.strokeStyle = "orange";
            L10_2_Blumenwiese.crc2.lineWidth = 2;
            L10_2_Blumenwiese.crc2.stroke();
            L10_2_Blumenwiese.crc2.beginPath();
            moveTo(10, 20);
            L10_2_Blumenwiese.crc2.arc(0, 0, 12, 5, 0.8 * Math.PI);
            L10_2_Blumenwiese.crc2.lineWidth = 1.3;
            L10_2_Blumenwiese.crc2.strokeStyle = "black";
            moveTo(0, 20);
            L10_2_Blumenwiese.crc2.lineTo(-20, -8);
            L10_2_Blumenwiese.crc2.lineTo(-2, -2);
            L10_2_Blumenwiese.crc2.lineTo(-2, -20);
            L10_2_Blumenwiese.crc2.closePath();
            L10_2_Blumenwiese.crc2.fillStyle = this.leaveColor;
            L10_2_Blumenwiese.crc2.fill();
            L10_2_Blumenwiese.crc2.stroke();
            L10_2_Blumenwiese.crc2.restore();
        }
    }
    L10_2_Blumenwiese.Tulip = Tulip;
})(L10_2_Blumenwiese || (L10_2_Blumenwiese = {}));
//# sourceMappingURL=Tulip.js.map