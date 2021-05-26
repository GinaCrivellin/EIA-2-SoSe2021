namespace Blumenwiese {

    export class Flower {
        position: Vector;
        stemDirection: number;
        stemColor: string;
        leaveColor: string;
        quantity: number;

        constructor(_position: Vector, _stemDirection: number, _stemColor: string, _leaveColor: string, _quantity: number) {
            this.position = _position;
            this.stemDirection = _stemDirection;
            this.stemColor = _stemColor;
            this.leaveColor = _leaveColor;
            this.quantity = _quantity;
        }

        draw(): void {
            crc2.save();

            crc2.beginPath();
            crc2.moveTo(this.position.X, this.position.Y);
            crc2.translate(this.position.X, this.position.Y);
            crc2.quadraticCurveTo(this.stemDirection, 5, this.stemDirection, 30);
            crc2.strokeStyle = this.stemColor;
            crc2.lineWidth = 5;

            crc2.stroke();

            crc2.beginPath();
            moveTo(10, 20);
            crc2.arc(0, 0, 8, 0, 2 * Math.PI);
            crc2.fillStyle = "blue";
            crc2.strokeStyle = "blue";
            crc2.fill();

            crc2.shadowColor = '#243323';
            crc2.shadowOffsetX = 10;
            crc2.shadowOffsetY = 10;
            crc2.shadowBlur = 20;

            crc2.stroke();

            for (var i: number = this.quantity; i > 10 ; i -= 10) {
            crc2.beginPath();
            moveTo(10, 20);
            crc2.rotate(45 * Math.PI / 20);
            crc2.arc(10, 0, 5, 0, 2 * Math.PI);

            crc2.fillStyle = this.leaveColor;
            crc2.lineWidth = 1;
            crc2.strokeStyle = "black";
            crc2.fill();

            /*
            crc2.shadowColor = 'black';
            crc2.shadowOffsetX = 5;
            crc2.shadowOffsetY = 5;
            crc2.shadowBlur = 40;
            */

            crc2.stroke();
        }

            crc2.restore();
        }
    }
}