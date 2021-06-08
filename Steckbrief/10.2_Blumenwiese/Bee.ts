namespace L10_2_Blumenwiese {

    export class Bee extends Movable {
        position: Vector;
        velocity: Vector;

        scaleX: number;
        scaleY: number;

        constructor(_position: Vector, _velocity: Vector, _scaleX: number, _scaleY: number) {
            super (_position, _velocity);

            this.scaleX = _scaleX;
            this.scaleY = _scaleY;

        }


        draw(): void {

            crc2.save();

            crc2.beginPath();
            crc2.moveTo(this.position.X, this.position.Y);
            crc2.translate(this.position.X, this.position.Y);
            crc2.scale(this.scaleX, this.scaleY);
            crc2.ellipse(100, 100, 15, 35, 300, 0, 2 * Math.PI);

            let pattern: CanvasRenderingContext = document.createElement("canvas").getContext("2d");
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

            crc2.fillStyle = crc2.createPattern(pattern.canvas, "repeat")!;
            crc2.fill();

            crc2.stroke();

            crc2.save();

            crc2.beginPath();
            crc2.moveTo(75, 98);
            crc2.translate(75, 98);
            crc2.scale(this.scaleX + 0.4, this.scaleY + 0.4);
            crc2.arc(0, 0, 8, 0, 2 * Math.PI);
            crc2.fillStyle = "white";
            crc2.fill();

            crc2.stroke();

            crc2.restore();

            crc2.save();

            crc2.beginPath();
            crc2.moveTo(75, 98);
            crc2.translate(75, 98);
            crc2.scale(this.scaleX + 0.3, this.scaleY + 0.3);
            crc2.arc(0, 0, 5, 0, 2 * Math.PI);
            crc2.fillStyle = "black";
            crc2.fill();

            crc2.stroke();

            crc2.restore();

            crc2.save();

            crc2.beginPath();
            crc2.moveTo(77, 88);
            crc2.translate(77, 88);
            crc2.scale(this.scaleX + 0.5, this.scaleY + 0.5);
            crc2.quadraticCurveTo(15, -40, 40, -2);
            crc2.fillStyle = "white";
            crc2.strokeStyle = "black";
            crc2.lineWidth = 2;
            crc2.fill();

            crc2.stroke();

            crc2.restore();

            crc2.save();

            crc2.beginPath();
            crc2.moveTo(95, 84);
            crc2.translate(95, 84);
            crc2.scale(this.scaleX + 0.5, this.scaleY + 0.5);
            crc2.quadraticCurveTo(15, -40, 40, 7);
            crc2.fillStyle = "white";
            crc2.strokeStyle = "black";
            crc2.lineWidth = 2;
            crc2.fill();

            crc2.stroke();

            crc2.restore();

            crc2.scale(10, 10);

            crc2.restore();
        }

    }
    
}