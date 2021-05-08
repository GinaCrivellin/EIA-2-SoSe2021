"use strict";
var Canvas;
(function (Canvas) {
    window.addEventListener("load", handleload);
    function handleload() {
        let canvas = document.querySelector("canvas");
        canvas.width = 600;
        canvas.height = 600;
        for (let i = 0; i < 20; i++) {
            createLines();
        }
    }
    function createLines() {
        let canvas = document.querySelector("canvas");
        let crc2 = canvas.getContext("2d");
        let randomX = Math.floor(Math.random() * 500);
        let randomX2 = Math.floor(Math.random() * 500);
        let width = Math.floor(Math.random() * 5);
        crc2.moveTo(randomX, 0);
        crc2.lineTo(randomX2, 610);
        /*
        if (randomX < 300) {
            crc2.strokeStyle = "#FF0000";
        }
        else {
            crc2.strokeStyle = "#0000FF";
        }
        */
        crc2.stroke();
        var gradient = crc2.createLinearGradient(0, 0, 170, 0);
        gradient.addColorStop(0.3, "magenta");
        gradient.addColorStop(0.9, "blue");
        gradient.addColorStop(1, "red");
        crc2.strokeStyle = gradient;
        crc2.lineWidth = width;
    }
})(Canvas || (Canvas = {}));
//# sourceMappingURL=script.js.map