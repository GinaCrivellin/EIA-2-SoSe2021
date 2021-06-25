namespace L11_1_Blumenwiese {
    
    export class Nectar {

    public position: Vector;

    constructor(_position: Vector) {
        this.position = _position;
    }

    public draw(_fillHeight: number): void {

        crc2.save();

        crc2.beginPath();
        crc2.moveTo(this.position.X - 30, this.position.Y - 30);
        crc2.translate(this.position.X - 30, this.position.Y - 30);

        crc2.font = "10px Arial";
        crc2.fillStyle = "white";
        crc2.fillText("Nectar", 0, 0);
        crc2.closePath();

        crc2.restore();

        crc2.save();

        crc2.beginPath();
        crc2.moveTo(this.position.X + 20, this.position.Y);
        crc2.translate(this.position.X + 20, this.position.Y);

        crc2.rect(0, 0, 15, 60);

        crc2.fillStyle = "#7d8991";
        crc2.fill();
        crc2.closePath();

        crc2.stroke();

        crc2.restore();

        crc2.save();

        crc2.beginPath();
        crc2.moveTo(this.position.X + 20, this.position.Y + 60);
        crc2.translate(this.position.X + 20, this.position.Y + 60);

        crc2.rect(0, 0, 15, - _fillHeight);
        crc2.fillStyle = "#ffb83d";
        crc2.fill();
        crc2.closePath();

        crc2.stroke();

        crc2.restore();
    }

    }

}