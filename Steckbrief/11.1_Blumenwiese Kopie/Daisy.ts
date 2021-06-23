namespace L11_1_Blumenwiese {

    export class Daisy extends Flower {

        public stemDirection: number;

        constructor(_position: Vector, _stemColor: string, _leaveColor: string, _stemDirection: number, _fillHeight: number) {

            super(_position, _stemColor, _leaveColor, _fillHeight);

            this.stemDirection = _stemDirection;


           
        }

        public draw(): void {
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

            crc2.shadowColor = "#243323";
            crc2.shadowOffsetX = 10;
            crc2.shadowOffsetY = 10;
            crc2.shadowBlur = 20;

            crc2.stroke();

            for (var i: number = 90; i > 10 ; i -= 10) {
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

            this.nectarBar.draw(this.fillHeight);
        }


    }
}