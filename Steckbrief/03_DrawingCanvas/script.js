"use strict";
var Canvas;
(function (Canvas) {
    window.addEventListener("load", handleload);
    let randomMiddle = Math.floor(Math.random() * (600 - 0) + 0);
    let randomMiddleY = Math.floor(Math.random() * (600 - 0) + 0);
    let canvas;
    let crc2;
    function handleload() {
        canvas = document.querySelector("canvas");
        canvas.id = "CanvasID";
        crc2 = canvas.getContext("2d");
        canvas.width = 600;
        canvas.height = 600;
        canvas.style.backgroundColor = "grey";
        PatternFunction();
        for (let i = 0; i < 10; i++) {
            CreateAbstract();
        }
    }
    function CreateAbstract() {
        let randomXfirst = Math.floor(Math.random() * (600 - 300) + 300);
        let randomYfirst = Math.floor(Math.random() * (300 - 0) + 0);
        let randomXsecond = Math.floor(Math.random() * (600 - 300) + 300);
        let randomYsecond = Math.floor(Math.random() * (600 - 300) + 300);
        let randomXthird = Math.floor(Math.random() * (300 - 0) + 0);
        let randomYthird = Math.floor(Math.random() * (600 - 300) + 300);
        let randomXfourth = Math.floor(Math.random() * (300 - 0) + 0);
        let randomYfourth = Math.floor(Math.random() * (300 - 0) + 0);
        crc2.beginPath();
        crc2.moveTo(randomMiddle, randomMiddleY);
        crc2.quadraticCurveTo(randomXfirst, randomYfirst, 600, 0);
        if (randomMiddle < 300 && randomMiddleY < 300) {
            crc2.strokeStyle = "#fcb0ff";
        }
        if (randomMiddle < 300 && randomMiddleY > 300) {
            crc2.strokeStyle = "#b0daff";
        }
        if (randomMiddle > 300 && randomMiddleY > 300) {
            crc2.strokeStyle = "#ccffb0";
        }
        if (randomMiddle > 300 && randomMiddleY < 300) {
            crc2.strokeStyle = "#ffd9b0";
        }
        crc2.stroke();
        crc2.beginPath();
        crc2.moveTo(randomMiddle, randomMiddleY);
        crc2.quadraticCurveTo(randomXfourth, randomYfourth, 0, 0);
        crc2.stroke();
        crc2.beginPath();
        crc2.moveTo(randomMiddle, randomMiddleY);
        crc2.quadraticCurveTo(randomXsecond, randomYsecond, 600, 600);
        crc2.stroke();
        crc2.beginPath();
        crc2.moveTo(randomMiddle, randomMiddleY);
        crc2.quadraticCurveTo(randomXthird, randomYthird, 0, 600);
        crc2.stroke();
    }
    function PatternFunction() {
        let pattern = document.createElement('canvas').getContext('2d');
        pattern.canvas.width = 40;
        pattern.canvas.height = 20;
        var alpha = 0.8;
        pattern.fillStyle = "grey";
        pattern.fillRect(0, 0, pattern.canvas.width, pattern.canvas.height);
        pattern.moveTo(0, Math.random() * 10);
        pattern.lineTo(Math.random() * 10, 10);
        pattern.lineTo(20, Math.random() * 0);
        pattern.lineTo(Math.random() * 30, 0);
        pattern.lineTo(40, Math.random() * 10);
        pattern.lineTo(30, Math.random() * 20);
        pattern.lineTo(20, Math.random() * 20);
        pattern.lineTo(Math.random() * 10, 10);
        if (randomMiddle < 300 && randomMiddleY < 300) {
            pattern.strokeStyle = "rgba(" + 204 + "," + 255 + "," + 176 + "," + alpha + ")";
        }
        if (randomMiddle < 300 && randomMiddleY > 300) {
            pattern.strokeStyle = "rgba(" + 255 + "," + 217 + "," + 176 + "," + alpha + ")";
        }
        if (randomMiddle > 300 && randomMiddleY > 300) {
            pattern.strokeStyle = "rgba(" + 252 + "," + 176 + "," + 255 + "," + alpha + ")";
        }
        if (randomMiddle > 300 && randomMiddleY < 300) {
            pattern.strokeStyle = "rgba(" + 176 + "," + 218 + "," + 255 + "," + alpha + ")";
        }
        pattern.stroke();
        crc2.fillStyle = crc2.createPattern(pattern.canvas, "repeat");
        crc2.fillRect(0, 0, canvas.width, canvas.height);
    }
})(Canvas || (Canvas = {}));
//# sourceMappingURL=script.js.map