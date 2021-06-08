"use strict";
var L10_2_Blumenwiese;
(function (L10_2_Blumenwiese) {
    class Cloud extends L10_2_Blumenwiese.Movable {
        constructor(_position, _size, _velocity, _x, _y) {
            super(_position, _velocity);
            this.size = _size;
            this.x = _x;
            this.y = _y;
        }
        draw() {
            let particleNumber = 23;
            let particleRadius = 50;
            let particle = new Path2D();
            let gradient = L10_2_Blumenwiese.crc2.createRadialGradient(0, 0, 0, 0, 0, particleRadius);
            particle.arc(0, 0, particleRadius, 0, 2 * Math.PI);
            gradient.addColorStop(0, "HSLA(200, 30%, 80%, 0.15)");
            gradient.addColorStop(1, "HSLA(100, 10%, 70%, 0)");
            L10_2_Blumenwiese.crc2.save();
            L10_2_Blumenwiese.crc2.translate(this.position.X, this.position.Y);
            L10_2_Blumenwiese.crc2.fillStyle = gradient;
            for (let i = 0; i < particleNumber; i++) {
                L10_2_Blumenwiese.crc2.save();
                L10_2_Blumenwiese.crc2.translate(this.x, this.y);
                L10_2_Blumenwiese.crc2.fill(particle);
                L10_2_Blumenwiese.crc2.restore();
            }
            L10_2_Blumenwiese.crc2.restore();
        }
    }
    L10_2_Blumenwiese.Cloud = Cloud;
})(L10_2_Blumenwiese || (L10_2_Blumenwiese = {}));
//# sourceMappingURL=Cloud.js.map