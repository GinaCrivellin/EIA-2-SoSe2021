"use strict";
var L11_1_Blumenwiese;
(function (L11_1_Blumenwiese) {
    let BeeTask;
    (function (BeeTask) {
        BeeTask[BeeTask["ToFlower"] = 0] = "ToFlower";
        BeeTask[BeeTask["Take"] = 1] = "Take";
        BeeTask[BeeTask["ToBeehive"] = 2] = "ToBeehive";
        BeeTask[BeeTask["Give"] = 3] = "Give";
    })(BeeTask = L11_1_Blumenwiese.BeeTask || (L11_1_Blumenwiese.BeeTask = {}));
    function searchFlower() {
        let wholeFlower = null;
        for (let i = 0; L11_1_Blumenwiese.occupiedFlowers[i].fillHeight < 60 && i < L11_1_Blumenwiese.occupiedFlowers.length; i++) {
            wholeFlower = L11_1_Blumenwiese.occupiedFlowers[i];
            L11_1_Blumenwiese.occupiedFlowers.splice(i, 1);
            break;
        }
        if (wholeFlower === null) {
            return L11_1_Blumenwiese.occupiedFlowers.splice(0, 1)[0];
        }
        else {
            return wholeFlower;
        }
    }
    class Bee extends L11_1_Blumenwiese.Movable {
        constructor(_position) {
            super(_position);
            this.task = BeeTask.ToFlower;
            this.scaleX = 0.4;
            this.scaleY = 0.4;
            this.velocity = new L11_1_Blumenwiese.Vector(0, 0);
            this.flower = searchFlower();
        }
        draw() {
            L11_1_Blumenwiese.crc2.save();
            //crc2.scale(-1, 1);
            L11_1_Blumenwiese.crc2.beginPath();
            L11_1_Blumenwiese.crc2.moveTo(this.position.X, this.position.Y);
            L11_1_Blumenwiese.crc2.translate(this.position.X, this.position.Y);
            L11_1_Blumenwiese.crc2.scale(this.scaleX, this.scaleY);
            L11_1_Blumenwiese.crc2.ellipse(100, 100, 15, 35, 300, 0, 2 * Math.PI);
            let pattern = document.createElement("canvas").getContext("2d");
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
            L11_1_Blumenwiese.crc2.fillStyle = L11_1_Blumenwiese.crc2.createPattern(pattern.canvas, "repeat");
            L11_1_Blumenwiese.crc2.fill();
            L11_1_Blumenwiese.crc2.stroke();
            L11_1_Blumenwiese.crc2.save();
            L11_1_Blumenwiese.crc2.beginPath();
            L11_1_Blumenwiese.crc2.moveTo(75, 98);
            L11_1_Blumenwiese.crc2.translate(75, 98);
            L11_1_Blumenwiese.crc2.scale(this.scaleX + 0.4, this.scaleY + 0.4);
            L11_1_Blumenwiese.crc2.arc(0, 0, 8, 0, 2 * Math.PI);
            L11_1_Blumenwiese.crc2.fillStyle = "white";
            L11_1_Blumenwiese.crc2.fill();
            L11_1_Blumenwiese.crc2.stroke();
            L11_1_Blumenwiese.crc2.restore();
            L11_1_Blumenwiese.crc2.save();
            L11_1_Blumenwiese.crc2.beginPath();
            L11_1_Blumenwiese.crc2.moveTo(75, 98);
            L11_1_Blumenwiese.crc2.translate(75, 98);
            L11_1_Blumenwiese.crc2.scale(this.scaleX + 0.3, this.scaleY + 0.3);
            L11_1_Blumenwiese.crc2.arc(0, 0, 5, 0, 2 * Math.PI);
            L11_1_Blumenwiese.crc2.fillStyle = "black";
            L11_1_Blumenwiese.crc2.fill();
            L11_1_Blumenwiese.crc2.stroke();
            L11_1_Blumenwiese.crc2.restore();
            L11_1_Blumenwiese.crc2.save();
            L11_1_Blumenwiese.crc2.beginPath();
            L11_1_Blumenwiese.crc2.moveTo(77, 88);
            L11_1_Blumenwiese.crc2.translate(77, 88);
            L11_1_Blumenwiese.crc2.scale(this.scaleX + 0.5, this.scaleY + 0.5);
            L11_1_Blumenwiese.crc2.quadraticCurveTo(15, -40, 40, -2);
            L11_1_Blumenwiese.crc2.fillStyle = "white";
            L11_1_Blumenwiese.crc2.strokeStyle = "black";
            L11_1_Blumenwiese.crc2.lineWidth = 2;
            L11_1_Blumenwiese.crc2.fill();
            L11_1_Blumenwiese.crc2.stroke();
            L11_1_Blumenwiese.crc2.restore();
            L11_1_Blumenwiese.crc2.save();
            L11_1_Blumenwiese.crc2.beginPath();
            L11_1_Blumenwiese.crc2.moveTo(95, 84);
            L11_1_Blumenwiese.crc2.translate(95, 84);
            L11_1_Blumenwiese.crc2.scale(this.scaleX + 0.5, this.scaleY + 0.5);
            L11_1_Blumenwiese.crc2.quadraticCurveTo(15, -40, 40, 7);
            L11_1_Blumenwiese.crc2.fillStyle = "white";
            L11_1_Blumenwiese.crc2.strokeStyle = "black";
            L11_1_Blumenwiese.crc2.lineWidth = 2;
            L11_1_Blumenwiese.crc2.fill();
            L11_1_Blumenwiese.crc2.stroke();
            L11_1_Blumenwiese.crc2.restore();
            L11_1_Blumenwiese.crc2.scale(10, 10);
            L11_1_Blumenwiese.crc2.restore();
        }
        move(_timesclice) {
            super.move(_timesclice);
            switch (this.task) {
                case BeeTask.ToFlower:
                    let differenceVelocity = L11_1_Blumenwiese.Vector.getDifference(this.flower.position, this.position);
                    let length = differenceVelocity.length();
                    differenceVelocity.scale(1 / length);
                    this.velocity = differenceVelocity;
                    if (length < 3) {
                        this.task = BeeTask.Take;
                        this.velocity = new L11_1_Blumenwiese.Vector(0, 0);
                        function changeTask() {
                            this.task = BeeTask.ToBeehive;
                            L11_1_Blumenwiese.occupiedFlowers.push(this.flower);
                            this.flower.fillHeight = 0;
                        }
                        window.setTimeout(changeTask.bind(this), 3000);
                    }
                    break;
                case BeeTask.Take:
                    break;
                case BeeTask.ToBeehive:
                    let beehivePosition = new L11_1_Blumenwiese.Vector(window.innerWidth * 0.8, window.innerHeight * 0.8);
                    let differenceVelocity2 = L11_1_Blumenwiese.Vector.getDifference(beehivePosition, this.position);
                    let length2 = differenceVelocity2.length();
                    differenceVelocity2.scale(1 / length2);
                    this.velocity = differenceVelocity2;
                    if (length2 < 3) {
                        this.task = BeeTask.Give;
                        this.velocity = new L11_1_Blumenwiese.Vector(0, 0);
                        setTimeout(changeTask2.bind(this), 3000);
                        function changeTask2() {
                            this.task = BeeTask.ToFlower;
                            this.flower = searchFlower();
                        }
                    }
                case BeeTask.Give:
                    break;
            }
        }
    }
    L11_1_Blumenwiese.Bee = Bee;
})(L11_1_Blumenwiese || (L11_1_Blumenwiese = {}));
//# sourceMappingURL=Bee.js.map