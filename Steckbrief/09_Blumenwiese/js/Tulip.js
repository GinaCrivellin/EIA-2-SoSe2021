"use strict";
var Blumenwiese;
(function (Blumenwiese) {
    class Tulip {
        constructor(_position, _leaveColor, _stemColor) {
            this.position = _position;
            this.leaveColor = _leaveColor;
            this.stemColor = _stemColor;
        }
        draw() {
            Blumenwiese.crc2.save();
            Blumenwiese.crc2.beginPath();
            Blumenwiese.crc2.moveTo(this.position.X, this.position.Y);
            Blumenwiese.crc2.translate(this.position.X, this.position.Y);
            Blumenwiese.crc2.quadraticCurveTo(10, 5, 10, 30);
            Blumenwiese.crc2.strokeStyle = this.stemColor;
            Blumenwiese.crc2.lineWidth = 5;
            Blumenwiese.crc2.shadowColor = '#243323';
            Blumenwiese.crc2.shadowOffsetX = 10;
            Blumenwiese.crc2.shadowOffsetY = 10;
            Blumenwiese.crc2.shadowBlur = 30;
            Blumenwiese.crc2.stroke();
            Blumenwiese.crc2.beginPath();
            moveTo(0, 22);
            Blumenwiese.crc2.quadraticCurveTo(10, 5, -20, -20);
            Blumenwiese.crc2.strokeStyle = "darkorange";
            Blumenwiese.crc2.lineWidth = 2;
            Blumenwiese.crc2.stroke();
            Blumenwiese.crc2.beginPath();
            moveTo(0, 22);
            Blumenwiese.crc2.quadraticCurveTo(10, 5, -20, -12);
            Blumenwiese.crc2.strokeStyle = "orange";
            Blumenwiese.crc2.lineWidth = 2;
            Blumenwiese.crc2.stroke();
            Blumenwiese.crc2.beginPath();
            moveTo(0, 22);
            Blumenwiese.crc2.quadraticCurveTo(10, 5, -10, -20);
            Blumenwiese.crc2.strokeStyle = "orange";
            Blumenwiese.crc2.lineWidth = 2;
            Blumenwiese.crc2.stroke();
            Blumenwiese.crc2.beginPath();
            moveTo(10, 20);
            Blumenwiese.crc2.arc(0, 0, 12, 5, 0.8 * Math.PI);
            Blumenwiese.crc2.lineWidth = 1.3;
            Blumenwiese.crc2.strokeStyle = "black";
            moveTo(0, 20);
            Blumenwiese.crc2.lineTo(-20, -8);
            Blumenwiese.crc2.lineTo(-2, -2);
            Blumenwiese.crc2.lineTo(-2, -20);
            Blumenwiese.crc2.closePath();
            Blumenwiese.crc2.fillStyle = this.leaveColor;
            Blumenwiese.crc2.fill();
            Blumenwiese.crc2.stroke();
            Blumenwiese.crc2.restore();
        }
    }
    Blumenwiese.Tulip = Tulip;
})(Blumenwiese || (Blumenwiese = {}));
//# sourceMappingURL=Tulip.js.map