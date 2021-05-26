namespace Blumenwiese {

    export class Tulip {
        position: Vector;
        leaveColor: string;
        stemColor: string;

        constructor(_position: Vector, _leaveColor: string, _stemColor: string) {
            this.position = _position;
            this.leaveColor = _leaveColor;
            this.stemColor = _stemColor;
        }

        draw(): void {

        crc2.save();

        crc2.beginPath();
        crc2.moveTo(this.position.X, this.position.Y);
        crc2.translate(this.position.X, this.position.Y);
        crc2.quadraticCurveTo(10, 5, 10, 30);
        crc2.strokeStyle = this.stemColor;
        crc2.lineWidth = 5;

        crc2.shadowColor = '#243323';
        crc2.shadowOffsetX = 10;
        crc2.shadowOffsetY = 10;
        crc2.shadowBlur = 30;

        crc2.stroke();

        crc2.beginPath();
        moveTo(0, 22);
        crc2.quadraticCurveTo(10, 5, -20, -20);
        crc2.strokeStyle = "darkorange";
        crc2.lineWidth = 2;

        crc2.stroke();

        crc2.beginPath();
        moveTo(0, 22);
        crc2.quadraticCurveTo(10, 5, -20, -12);
        crc2.strokeStyle = "orange";
        crc2.lineWidth = 2;
        
        crc2.stroke();

        crc2.beginPath();
        moveTo(0, 22);
        crc2.quadraticCurveTo(10, 5, -10, -20);
        crc2.strokeStyle = "orange";
        crc2.lineWidth = 2;
        
        crc2.stroke();


        crc2.beginPath();
        moveTo(10, 20);
        crc2.arc(0, 0, 12, 5, 0.8 * Math.PI);
        crc2.lineWidth = 1.3;
        crc2.strokeStyle = "black";
        moveTo(0, 20);
        crc2.lineTo(-20, -8);
        crc2.lineTo(-2, -2);
        crc2.lineTo(-2, -20);
        crc2.closePath();
        crc2.fillStyle = this.leaveColor;
        crc2.fill();

        crc2.stroke();

        crc2.restore();

        }
    }
}