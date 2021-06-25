"use strict";
var L11_1_Blumenwiese;
(function (L11_1_Blumenwiese) {
    class Daisy extends L11_1_Blumenwiese.Flower {
        constructor(_position, _stemColor, _leaveColor, _stemDirection, _fillHeight) {
            super(_position, _stemColor, _leaveColor, _fillHeight);
            this.stemDirection = _stemDirection;
        }
        draw() {
            L11_1_Blumenwiese.crc2.save();
            L11_1_Blumenwiese.crc2.beginPath();
            L11_1_Blumenwiese.crc2.moveTo(this.position.X, this.position.Y);
            L11_1_Blumenwiese.crc2.translate(this.position.X, this.position.Y);
            L11_1_Blumenwiese.crc2.quadraticCurveTo(this.stemDirection, 5, this.stemDirection, 30);
            L11_1_Blumenwiese.crc2.strokeStyle = this.stemColor;
            L11_1_Blumenwiese.crc2.lineWidth = 5;
            L11_1_Blumenwiese.crc2.stroke();
            L11_1_Blumenwiese.crc2.beginPath();
            moveTo(10, 20);
            L11_1_Blumenwiese.crc2.arc(0, 0, 8, 0, 2 * Math.PI);
            L11_1_Blumenwiese.crc2.fillStyle = "blue";
            L11_1_Blumenwiese.crc2.strokeStyle = "blue";
            L11_1_Blumenwiese.crc2.fill();
            L11_1_Blumenwiese.crc2.shadowColor = "#243323";
            L11_1_Blumenwiese.crc2.shadowOffsetX = 10;
            L11_1_Blumenwiese.crc2.shadowOffsetY = 10;
            L11_1_Blumenwiese.crc2.shadowBlur = 20;
            L11_1_Blumenwiese.crc2.stroke();
            for (var i = 90; i > 10; i -= 10) {
                L11_1_Blumenwiese.crc2.beginPath();
                moveTo(10, 20);
                L11_1_Blumenwiese.crc2.rotate(45 * Math.PI / 20);
                L11_1_Blumenwiese.crc2.arc(10, 0, 5, 0, 2 * Math.PI);
                L11_1_Blumenwiese.crc2.fillStyle = this.leaveColor;
                L11_1_Blumenwiese.crc2.lineWidth = 1;
                L11_1_Blumenwiese.crc2.strokeStyle = "black";
                L11_1_Blumenwiese.crc2.fill();
                /*
                crc2.shadowColor = 'black';
                crc2.shadowOffsetX = 5;
                crc2.shadowOffsetY = 5;
                crc2.shadowBlur = 40;
                */
                L11_1_Blumenwiese.crc2.stroke();
            }
            L11_1_Blumenwiese.crc2.restore();
            this.nectarBar.draw(this.fillHeight);
        }
    }
    L11_1_Blumenwiese.Daisy = Daisy;
})(L11_1_Blumenwiese || (L11_1_Blumenwiese = {}));
//# sourceMappingURL=Daisy.js.map