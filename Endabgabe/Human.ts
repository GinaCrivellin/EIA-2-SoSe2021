namespace Fußball_Simulation {

    export class Human extends Movable {

        public tricotcolor: string;

        constructor(_position: Vector, _velocity: Vector, _radius: Vector, _tricotcolor: string) {
            super(_position, _velocity, _radius);

            this.tricotcolor = _tricotcolor;
        }

        draw(): void {
            crc2.save();

            crc2.beginPath();

            crc2.arc(this.position.X, this.position.Y, 30, 0, 2 * Math.PI);
            crc2.fillStyle = this.tricotcolor;
            crc2.fill();

            crc2.stroke();

            crc2.closePath();

            crc2.restore();
        }

        move(_timeslice: number): void {
            let offset: Vector = new Vector(this.velocity.X, this.velocity.Y);

            offset.scale(_timeslice);
            this.position.add(offset);
        }
    }
}