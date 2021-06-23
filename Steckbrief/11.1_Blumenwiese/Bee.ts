namespace L11_1_Blumenwiese {

    export enum BeeTask {
        ToFlower,
        Take,
        ToBeehive,
        Give
    }

    function searchFlower(): Flower {

        let wholeFlower: Flower | null = null;

        for (let i: number = 0; occupiedFlowers[i].fillHeight < 60 && i < occupiedFlowers.length; i++) {
            wholeFlower = occupiedFlowers[i];
            occupiedFlowers.splice(i, 1);
            break;
        }

        if (wholeFlower === null) {
            return occupiedFlowers.splice(0, 1)[0];

        }
        else {
            return wholeFlower;
        }
    }

    export class Bee extends Movable {

        public task: BeeTask = BeeTask.ToFlower;
        public flower: Flower;

        private scaleX: number = 0.4;
        private scaleY: number = 0.4;  


        constructor(_position: Vector) {
            super (_position);
            this.velocity = new Vector (0, 0);
            this.flower = searchFlower();

        }


        public draw(): void {

            crc2.save();

            //crc2.scale(-1, 1);

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

        public move(_timesclice: number): void {

            super.move(_timesclice);

            switch (this.task) {
            case BeeTask.ToFlower:
                    
                let differenceVelocity: Vector = Vector.getDifference(this.flower.position, this.position);
                let length: number = differenceVelocity.length();
        
                differenceVelocity.scale(1 / length);

                this.velocity = differenceVelocity;

                if (length < 3) {
                    this.task = BeeTask.Take;

                    this.velocity = new Vector (0, 0);

                    function changeTask(): void {
                        this.task = BeeTask.ToBeehive;
                        occupiedFlowers.push(this.flower);
                        this.flower.fillHeight = 0;
                    }
                    window.setTimeout(changeTask.bind(this), 3000);
                }

                break;

            case BeeTask.Take:


                break;
                
            case BeeTask.ToBeehive:

                let beehivePosition: Vector = new Vector(window.innerWidth * 0.8, window.innerHeight * 0.8);

                let differenceVelocity2: Vector = Vector.getDifference(beehivePosition, this.position);
                let length2: number = differenceVelocity2.length();
            
                differenceVelocity2.scale(1 / length2);

                this.velocity = differenceVelocity2;

                if (length2 < 3) {
                    this.task = BeeTask.Give;

                    this.velocity = new Vector (0, 0);

                    setTimeout(changeTask2.bind(this), 3000);

                    function changeTask2(): void {
                        this.task = BeeTask.ToFlower;
                        this.flower = searchFlower();
                    }
                }

            case BeeTask.Give:
                
                break;

        }

        }

    }
    
}