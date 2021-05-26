"use strict";
var Blumenwiese;
(function (Blumenwiese) {
    class Cloud {
        constructor(_position, _size, _velocity, _x, _y) {
            this.position = _position;
            this.velocity = _velocity;
            this.size = _size;
            this.x = _x;
            this.y = _y;
            //this.x = (Math.random() - 0.5) * this.size.X;
            //this.x = - (Math.random() * this.size.Y);
        }
        draw() {
            let particleNumber = 23;
            let particleRadius = 50;
            let particle = new Path2D();
            let gradient = Blumenwiese.crc2.createRadialGradient(0, 0, 0, 0, 0, particleRadius);
            particle.arc(0, 0, particleRadius, 0, 2 * Math.PI);
            gradient.addColorStop(0, "HSLA(200, 30%, 80%, 0.15)");
            gradient.addColorStop(1, "HSLA(100, 10%, 70%, 0)");
            Blumenwiese.crc2.save();
            Blumenwiese.crc2.translate(this.position.X, this.position.Y);
            Blumenwiese.crc2.fillStyle = gradient;
            for (let i = 0; i < particleNumber; i++) {
                Blumenwiese.crc2.save();
                Blumenwiese.crc2.translate(this.x, this.y);
                Blumenwiese.crc2.fill(particle);
                Blumenwiese.crc2.restore();
            }
            Blumenwiese.crc2.restore();
        }
        move(_timesclice) {
            let offset = new Blumenwiese.Vector(this.velocity.X, this.velocity.Y);
            offset.scale(_timesclice);
            this.position.add(offset);
            if (this.position.X < window.innerWidth) {
                this.position.X += window.innerWidth;
            }
            if (this.position.X > window.innerWidth) {
                this.position.X -= window.innerWidth;
            }
            if (this.position.Y < window.innerHeight) {
                this.position.Y += window.innerHeight;
            }
            if (this.position.Y > window.innerHeight) {
                this.position.Y -= window.innerHeight;
            }
        }
    }
    Blumenwiese.Cloud = Cloud;
})(Blumenwiese || (Blumenwiese = {}));
//# sourceMappingURL=Cloud.js.map