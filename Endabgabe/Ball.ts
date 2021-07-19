namespace Fußball_Simulation {

    export class Ball extends Movable {

        public color: string;

        constructor(_position: Vector, _velocity: Vector, _color: string) {
            super(_position, _velocity);

            this.color = _color;
        }

        move(_timeslice: number): void {
            super.move(_timeslice);

            // Apply friction
            this.velocity.scale(0.99);
        }

        draw(): void {

            crc2.save();

            crc2.beginPath();

            crc2.arc(this.position.X, this.position.Y, 15, 0, 2 * Math.PI);
            //crc2.fillRect(0, 0, 30, 30);

            var img: HTMLImageElement = new Image();
            img.src = "Assets/ball.jpg";
            img.onload = function(): void {
            var pattern: any = crc2.createPattern(img, "repeat");
            crc2.fillStyle = pattern;
            crc2.fillRect(0, 0, 20, 20);
            };

            crc2.stroke();

            crc2.closePath();

            crc2.restore();
        }

    }
}