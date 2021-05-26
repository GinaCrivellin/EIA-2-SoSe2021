"use strict";
var Blumenwiese;
(function (Blumenwiese) {
    class Bee {
        constructor(_position, _velocity) {
            this.position = _position;
            this.velocity = _velocity;
        }
        draw(_scaleX, _scaleY) {
            Blumenwiese.crc2.save();
            Blumenwiese.crc2.beginPath();
            Blumenwiese.crc2.moveTo(this.position.X, this.position.Y);
            Blumenwiese.crc2.translate(this.position.X, this.position.Y);
            Blumenwiese.crc2.scale(_scaleX, _scaleY);
            Blumenwiese.crc2.ellipse(100, 100, 15, 35, 300, 0, 2 * Math.PI);
            let pattern = document.createElement("canvas").getContext("2d");
            pattern.canvas.width = 20;
            pattern.canvas.height = 20;
            pattern.fillStyle = "#fcba03";
            pattern.fillRect(0, 0, pattern.canvas.width, pattern.canvas.height);
            pattern.moveTo(0, 0);
            pattern.lineTo(0, 40);
            pattern.moveTo(1, 0);
            pattern.lineTo(1, 40);
            pattern.moveTo(3, 0);
            pattern.lineTo(3, 40);
            pattern.strokeStyle = "black";
            pattern.lineWidth = "10";
            pattern.stroke();
            Blumenwiese.crc2.fillStyle = Blumenwiese.crc2.createPattern(pattern.canvas, "repeat");
            Blumenwiese.crc2.fill();
            Blumenwiese.crc2.stroke();
            Blumenwiese.crc2.save();
            Blumenwiese.crc2.beginPath();
            Blumenwiese.crc2.moveTo(75, 98);
            Blumenwiese.crc2.translate(75, 98);
            Blumenwiese.crc2.scale(_scaleX + 0.4, _scaleY + 0.4);
            Blumenwiese.crc2.arc(0, 0, 8, 0, 2 * Math.PI);
            Blumenwiese.crc2.fillStyle = "white";
            Blumenwiese.crc2.fill();
            Blumenwiese.crc2.stroke();
            Blumenwiese.crc2.restore();
            Blumenwiese.crc2.save();
            Blumenwiese.crc2.beginPath();
            Blumenwiese.crc2.moveTo(75, 98);
            Blumenwiese.crc2.translate(75, 98);
            Blumenwiese.crc2.scale(_scaleX + 0.3, _scaleY + 0.3);
            Blumenwiese.crc2.arc(0, 0, 5, 0, 2 * Math.PI);
            Blumenwiese.crc2.fillStyle = "black";
            Blumenwiese.crc2.fill();
            Blumenwiese.crc2.stroke();
            Blumenwiese.crc2.restore();
            Blumenwiese.crc2.save();
            Blumenwiese.crc2.beginPath();
            Blumenwiese.crc2.moveTo(77, 88);
            Blumenwiese.crc2.translate(77, 88);
            Blumenwiese.crc2.scale(_scaleX + 0.5, _scaleY + 0.5);
            Blumenwiese.crc2.quadraticCurveTo(15, -40, 40, -2);
            Blumenwiese.crc2.fillStyle = "white";
            Blumenwiese.crc2.strokeStyle = "black";
            Blumenwiese.crc2.lineWidth = 2;
            Blumenwiese.crc2.fill();
            Blumenwiese.crc2.stroke();
            Blumenwiese.crc2.restore();
            Blumenwiese.crc2.save();
            Blumenwiese.crc2.beginPath();
            Blumenwiese.crc2.moveTo(95, 84);
            Blumenwiese.crc2.translate(95, 84);
            Blumenwiese.crc2.scale(_scaleX + 0.5, _scaleY + 0.5);
            Blumenwiese.crc2.quadraticCurveTo(15, -40, 40, 7);
            Blumenwiese.crc2.fillStyle = "white";
            Blumenwiese.crc2.strokeStyle = "black";
            Blumenwiese.crc2.lineWidth = 2;
            Blumenwiese.crc2.fill();
            Blumenwiese.crc2.stroke();
            Blumenwiese.crc2.restore();
            Blumenwiese.crc2.scale(10, 10);
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
            if (this.position.X < window.innerWidth / 2) {
                this.velocity.Y = 20;
            }
            if (this.position.X > window.innerWidth / 2) {
                this.velocity.Y = -10;
            }
        }
    }
    Blumenwiese.Bee = Bee;
})(Blumenwiese || (Blumenwiese = {}));
//# sourceMappingURL=Bee.js.map