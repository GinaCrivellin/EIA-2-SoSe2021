namespace L10_AsteroidsInheritance {

    export class Ufo extends Movable {

        constructor(_position: Vector) {
            super(_position);
        }

        draw (): void {
            console.log("Ufo has been drawn");
            crc2.moveTo(0, 0);
            crc2.arc(100, 75, 50, 0, 2 * Math.PI);
            /*
            crc2.save();
            crc2.moveTo(20, 13);
            crc2.lineTo(27, 3);
            crc2.lineTo(38, 3);
            crc2.lineTo(43, 13);
            crc2.lineTo(59, 25);
            crc2.lineTo(45, 35);
            crc2.lineTo(18, 35);
            crc2.lineTo(4, 25);
            crc2.lineTo(20, 13);
            crc2.lineTo(43, 13);
            crc2.closePath();

            crc2.moveTo(4, 25);
            crc2.lineTo(59, 25);
            crc2.strokeStyle = "white";
            crc2.closePath();
            crc2.restore();
            */
        }

        move(_timeslice: number): void {
            //super.move(_timeslice);
        }

        //shoot() {

        //}
    }

}