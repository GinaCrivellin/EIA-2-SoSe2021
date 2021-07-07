namespace Fußball_Simulation {

    export class Ball extends Movable {

        public color: string;

        constructor(_position: Vector, _velocity: Vector, _radius: Vector, _color: string) {
            super(_position, _velocity, _radius);

            this.color = _color;
        }

        move(_timeslice: number): void {
            //
        }

        draw(): void {

            crc2.save();

            crc2.beginPath();

            crc2.arc(this.position.X, this.position.Y, 15, 0, 2 * Math.PI);
            var img: HTMLImageElement = new Image();
            img.src = "Assets/ball.jpg";
            img.onload = function(): void {
            var pattern: CanvasPattern = crc2.createPattern(img, "repeat")!;
            crc2.fillStyle = pattern;
            crc2.fillRect(0, 0, 30, 30);
            };

            //crc2.fillRect(0, 0, 300, 300);
            //crc2.fillStyle = this.color;
            //crc2.fill();

            crc2.stroke();

            crc2.closePath();

            crc2.restore();
        }

        klickPath(_timeslice: number, _velocity: Vector): void {

            console.log("klickPath started");
            let offset: Vector = new Vector(_velocity.X, _velocity.Y);

            let difference: Vector = Vector.getDifference(this.position, _velocity);

            let differenceNumber: number = difference.length();

            while (differenceNumber > 3) {
            offset.scale(_timeslice);
            this.position.add(offset);
            }
        }
    }
}