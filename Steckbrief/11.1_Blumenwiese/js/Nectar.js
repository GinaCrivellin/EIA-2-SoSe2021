"use strict";
var L11_1_Blumenwiese;
(function (L11_1_Blumenwiese) {
    class Nectar {
        constructor(_position) {
            this.position = _position;
        }
        draw(_fillHeight) {
            L11_1_Blumenwiese.crc2.save();
            L11_1_Blumenwiese.crc2.beginPath();
            L11_1_Blumenwiese.crc2.moveTo(this.position.X - 30, this.position.Y - 30);
            L11_1_Blumenwiese.crc2.translate(this.position.X - 30, this.position.Y - 30);
            L11_1_Blumenwiese.crc2.font = "10px Arial";
            L11_1_Blumenwiese.crc2.fillStyle = "white";
            L11_1_Blumenwiese.crc2.fillText("Nectar", 0, 0);
            L11_1_Blumenwiese.crc2.closePath();
            L11_1_Blumenwiese.crc2.restore();
            L11_1_Blumenwiese.crc2.save();
            L11_1_Blumenwiese.crc2.beginPath();
            L11_1_Blumenwiese.crc2.moveTo(this.position.X + 20, this.position.Y);
            L11_1_Blumenwiese.crc2.translate(this.position.X + 20, this.position.Y);
            L11_1_Blumenwiese.crc2.rect(0, 0, 15, 60);
            L11_1_Blumenwiese.crc2.fillStyle = "#7d8991";
            L11_1_Blumenwiese.crc2.fill();
            L11_1_Blumenwiese.crc2.closePath();
            L11_1_Blumenwiese.crc2.stroke();
            L11_1_Blumenwiese.crc2.restore();
            L11_1_Blumenwiese.crc2.save();
            L11_1_Blumenwiese.crc2.beginPath();
            L11_1_Blumenwiese.crc2.moveTo(this.position.X + 20, this.position.Y + 60);
            L11_1_Blumenwiese.crc2.translate(this.position.X + 20, this.position.Y + 60);
            L11_1_Blumenwiese.crc2.rect(0, 0, 15, -_fillHeight);
            L11_1_Blumenwiese.crc2.fillStyle = "#ffb83d";
            L11_1_Blumenwiese.crc2.fill();
            L11_1_Blumenwiese.crc2.closePath();
            L11_1_Blumenwiese.crc2.stroke();
            L11_1_Blumenwiese.crc2.restore();
        }
    }
    L11_1_Blumenwiese.Nectar = Nectar;
})(L11_1_Blumenwiese || (L11_1_Blumenwiese = {}));
//# sourceMappingURL=Nectar.js.map