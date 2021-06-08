namespace L10_2_Blumenwiese {

    export class Cloud extends Movable {

        position: Vector;
        velocity: Vector;
        size: Vector;
        x: number;
        y: number;

        constructor(_position: Vector, _size: Vector, _velocity: Vector, _x: number, _y: number) {
            super(_position, _velocity);

            this.size = _size;

            this.x = _x;
            this.y = _y;
    
        }

        draw(): void {

            let particleNumber: number = 23;
            let particleRadius: number = 50;
            let particle: Path2D = new Path2D();
            let gradient: CanvasGradient = crc2.createRadialGradient(0, 0, 0, 0, 0, particleRadius);

            particle.arc(0, 0, particleRadius, 0, 2 * Math.PI);
            gradient.addColorStop(0, "HSLA(200, 30%, 80%, 0.15)");
            gradient.addColorStop(1, "HSLA(100, 10%, 70%, 0)");

            crc2.save();
            crc2.translate(this.position.X, this.position.Y);
            crc2.fillStyle = gradient;

            for (let i: number = 0; i < particleNumber; i++) {
                crc2.save();
                crc2.translate(this.x, this.y);
                crc2.fill(particle);
                crc2.restore();
            }
            crc2.restore();
        }

    }

}