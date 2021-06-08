"use strict";
var L10_2_Blumenwiese;
(function (L10_2_Blumenwiese) {
    class Flower {
        constructor(_position, _stemDirection, _stemColor, _leaveColor, _quantity) {
            this.position = _position;
            this.stemDirection = _stemDirection;
            this.stemColor = _stemColor;
            this.leaveColor = _leaveColor;
            this.quantity = _quantity;
        }
        draw() {
            L10_2_Blumenwiese.crc2.save();
            L10_2_Blumenwiese.crc2.beginPath();
            L10_2_Blumenwiese.crc2.moveTo(this.position.X, this.position.Y);
            L10_2_Blumenwiese.crc2.translate(this.position.X, this.position.Y);
            L10_2_Blumenwiese.crc2.quadraticCurveTo(this.stemDirection, 5, this.stemDirection, 30);
            L10_2_Blumenwiese.crc2.strokeStyle = this.stemColor;
            L10_2_Blumenwiese.crc2.lineWidth = 5;
            L10_2_Blumenwiese.crc2.stroke();
            L10_2_Blumenwiese.crc2.beginPath();
            moveTo(10, 20);
            L10_2_Blumenwiese.crc2.arc(0, 0, 8, 0, 2 * Math.PI);
            L10_2_Blumenwiese.crc2.fillStyle = "blue";
            L10_2_Blumenwiese.crc2.strokeStyle = "blue";
            L10_2_Blumenwiese.crc2.fill();
            L10_2_Blumenwiese.crc2.shadowColor = '#243323';
            L10_2_Blumenwiese.crc2.shadowOffsetX = 10;
            L10_2_Blumenwiese.crc2.shadowOffsetY = 10;
            L10_2_Blumenwiese.crc2.shadowBlur = 20;
            L10_2_Blumenwiese.crc2.stroke();
            for (var i = this.quantity; i > 10; i -= 10) {
                L10_2_Blumenwiese.crc2.beginPath();
                moveTo(10, 20);
                L10_2_Blumenwiese.crc2.rotate(45 * Math.PI / 20);
                L10_2_Blumenwiese.crc2.arc(10, 0, 5, 0, 2 * Math.PI);
                L10_2_Blumenwiese.crc2.fillStyle = this.leaveColor;
                L10_2_Blumenwiese.crc2.lineWidth = 1;
                L10_2_Blumenwiese.crc2.strokeStyle = "black";
                L10_2_Blumenwiese.crc2.fill();
                /*
                crc2.shadowColor = 'black';
                crc2.shadowOffsetX = 5;
                crc2.shadowOffsetY = 5;
                crc2.shadowBlur = 40;
                */
                L10_2_Blumenwiese.crc2.stroke();
            }
            L10_2_Blumenwiese.crc2.restore();
        }
    }
    L10_2_Blumenwiese.Flower = Flower;
})(L10_2_Blumenwiese || (L10_2_Blumenwiese = {}));
//# sourceMappingURL=Flower.js.map