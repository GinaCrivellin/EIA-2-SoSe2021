"use strict";
var Blumenwiese;
(function (Blumenwiese) {
    class Flower {
        constructor(_position, _stemDirection, _stemColor, _leaveColor, _quantity) {
            this.position = _position;
            this.stemDirection = _stemDirection;
            this.stemColor = _stemColor;
            this.leaveColor = _leaveColor;
            this.quantity = _quantity;
        }
        draw() {
            Blumenwiese.crc2.save();
            Blumenwiese.crc2.beginPath();
            Blumenwiese.crc2.moveTo(this.position.X, this.position.Y);
            Blumenwiese.crc2.translate(this.position.X, this.position.Y);
            Blumenwiese.crc2.quadraticCurveTo(this.stemDirection, 5, this.stemDirection, 30);
            Blumenwiese.crc2.strokeStyle = this.stemColor;
            Blumenwiese.crc2.lineWidth = 5;
            Blumenwiese.crc2.stroke();
            Blumenwiese.crc2.beginPath();
            moveTo(10, 20);
            Blumenwiese.crc2.arc(0, 0, 8, 0, 2 * Math.PI);
            Blumenwiese.crc2.fillStyle = "blue";
            Blumenwiese.crc2.strokeStyle = "blue";
            Blumenwiese.crc2.fill();
            Blumenwiese.crc2.shadowColor = '#243323';
            Blumenwiese.crc2.shadowOffsetX = 10;
            Blumenwiese.crc2.shadowOffsetY = 10;
            Blumenwiese.crc2.shadowBlur = 20;
            Blumenwiese.crc2.stroke();
            for (var i = this.quantity; i > 10; i -= 10) {
                Blumenwiese.crc2.beginPath();
                moveTo(10, 20);
                Blumenwiese.crc2.rotate(45 * Math.PI / 20);
                Blumenwiese.crc2.arc(10, 0, 5, 0, 2 * Math.PI);
                Blumenwiese.crc2.fillStyle = this.leaveColor;
                Blumenwiese.crc2.lineWidth = 1;
                Blumenwiese.crc2.strokeStyle = "black";
                Blumenwiese.crc2.fill();
                /*
                crc2.shadowColor = 'black';
                crc2.shadowOffsetX = 5;
                crc2.shadowOffsetY = 5;
                crc2.shadowBlur = 40;
                */
                Blumenwiese.crc2.stroke();
            }
            Blumenwiese.crc2.restore();
        }
    }
    Blumenwiese.Flower = Flower;
})(Blumenwiese || (Blumenwiese = {}));
//# sourceMappingURL=Flower.js.map