"use strict";
var L11_1_Blumenwiese;
(function (L11_1_Blumenwiese) {
    class Cloud extends L11_1_Blumenwiese.Movable {
        constructor(_position, _velocity, _x, _y) {
            super(_position, _velocity);
            this.x = _x;
            this.y = _y;
        }
        draw() {
            let particleNumber = 23;
            let particleRadius = 50;
            let particle = new Path2D();
            let gradient = L11_1_Blumenwiese.crc2.createRadialGradient(0, 0, 0, 0, 0, particleRadius);
            particle.arc(0, 0, particleRadius, 0, 2 * Math.PI);
            gradient.addColorStop(0, "HSLA(200, 30%, 80%, 0.15)");
            gradient.addColorStop(1, "HSLA(100, 10%, 70%, 0)");
            L11_1_Blumenwiese.crc2.save();
            L11_1_Blumenwiese.crc2.translate(this.position.X, this.position.Y);
            L11_1_Blumenwiese.crc2.fillStyle = gradient;
            for (let i = 0; i < particleNumber; i++) {
                L11_1_Blumenwiese.crc2.save();
                L11_1_Blumenwiese.crc2.translate(this.x, this.y);
                L11_1_Blumenwiese.crc2.fill(particle);
                L11_1_Blumenwiese.crc2.restore();
            }
            L11_1_Blumenwiese.crc2.restore();
        }
    }
    L11_1_Blumenwiese.Cloud = Cloud;
})(L11_1_Blumenwiese || (L11_1_Blumenwiese = {}));
//# sourceMappingURL=Cloud.js.map