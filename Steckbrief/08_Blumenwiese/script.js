"use strict";
var Canvas;
(function (Canvas) {
    window.addEventListener("load", handleload);
    let canvas;
    let crc2;
    function handleload() {
        canvas = document.querySelector("canvas");
        canvas.id = "CanvasID";
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        canvas.style.backgroundColor = "#4c6273";
        crc2 = canvas.getContext("2d");
        for (var i = 0; i < 15; i++) {
            var randomX = Math.random() * (window.innerWidth);
            var randomY = Math.random() * ((window.innerHeight * 0.6 - window.innerHeight * 0.3) + window.innerHeight * 0.1);
            drawStar(randomX, randomY, 5, 10, 15);
        }
        drawMountians(window.innerHeight * 0.4, "#414447", "#a3adb5");
        drawMountians(window.innerHeight * 0.5, "#5b6166", "#b7c1c9");
        drawMoon();
        drawGrass();
        for (var y = 0; y < 10; y++) {
            drawFlowersL();
            drawFlowersR();
            drawTulipsL();
            //drawTulipsR();
        }
        var randomXClouds1 = Math.random() * (window.innerWidth * 0.3);
        var randomYClouds1 = Math.random() * (window.innerHeight * 0.3);
        var randomXClouds2 = Math.random() * (window.innerWidth * 0.9 - window.innerWidth * 0.4) + window.innerWidth * 0.4;
        var randomYClouds2 = Math.random() * (window.innerHeight * 0.5 - window.innerHeight * 0.1) + window.innerHeight * 0.1;
        drawCloud(randomXClouds1, randomYClouds1, 250, 75);
        drawCloud(randomXClouds2, randomYClouds2, 250, 75);
        //drawCloud(500, 120, 250, 75);
        //drawCloud({ x: 700, y: 300 }, { x: 250, y: 75 });
        drawMoon();
        drawBee(0.7, 0.7);
    }
    function drawGrass() {
        crc2.beginPath();
        crc2.moveTo(0, window.innerHeight * 0.6);
        crc2.lineTo(window.innerWidth, window.innerHeight * 0.6);
        crc2.lineTo(window.innerWidth, window.innerHeight);
        crc2.lineTo(0, window.innerHeight);
        crc2.lineTo(0, window.innerHeight * 0.6);
        crc2.strokeStyle = "rgba(1, 1, 1, 0)";
        let gradient = crc2.createLinearGradient(0, 0, 0, crc2.canvas.height);
        gradient.addColorStop(0, "#3ba356");
        gradient.addColorStop(0.5, "#4f8f4f");
        gradient.addColorStop(1, "#376142");
        crc2.fillStyle = gradient;
        crc2.fill();
        crc2.closePath();
        crc2.stroke();
    }
    function drawFlowersL() {
        var placeTulipsX = (Math.random() * window.innerWidth - 10);
        var placeTulipsY = (Math.random() * (window.innerHeight - window.innerHeight * 0.6) + window.innerHeight * 0.6);
        console.log(placeTulipsX);
        console.log(placeTulipsY);
        crc2.save();
        crc2.beginPath();
        crc2.moveTo(placeTulipsX, placeTulipsY);
        crc2.translate(placeTulipsX, placeTulipsY);
        crc2.quadraticCurveTo(10, 5, 10, 30);
        crc2.strokeStyle = "#355233";
        crc2.lineWidth = 5;
        crc2.stroke();
        crc2.beginPath();
        moveTo(10, 20);
        crc2.arc(0, 0, 8, 0, 2 * Math.PI);
        crc2.fillStyle = "blue";
        crc2.strokeStyle = "blue";
        crc2.fill();
        crc2.stroke();
        for (var i = 90; i > 10; i -= 10) {
            crc2.beginPath();
            moveTo(10, 20);
            crc2.rotate(45 * Math.PI / 20);
            crc2.arc(10, 0, 5, 0, 2 * Math.PI);
            crc2.fillStyle = "#ffa8fc";
            crc2.lineWidth = 1;
            crc2.strokeStyle = "black";
            crc2.fill();
            crc2.stroke();
        }
        crc2.restore();
    }
    function drawFlowersR() {
        var placeTulipsX = (Math.random() * window.innerWidth - 10);
        var placeTulipsY = (Math.random() * (window.innerHeight - window.innerHeight * 0.6) + window.innerHeight * 0.6);
        console.log(placeTulipsX);
        console.log(placeTulipsY);
        var placestemx = Math.random() * ((30 - 10) + 10);
        var placestemy = Math.random() * ((30 - 20) + 20);
        console.log(placestemx);
        console.log(placestemy);
        crc2.save();
        crc2.beginPath();
        crc2.moveTo(placeTulipsX, placeTulipsY);
        crc2.translate(placeTulipsX, placeTulipsY);
        crc2.quadraticCurveTo(-10, 5, -10, 20);
        crc2.strokeStyle = "#355233";
        crc2.lineWidth = 5;
        crc2.stroke();
        crc2.beginPath();
        moveTo(10, 20);
        crc2.arc(0, 0, 8, 0, 2 * Math.PI);
        crc2.fillStyle = "blue";
        crc2.strokeStyle = "blue";
        crc2.fill();
        crc2.stroke();
        for (var i = 90; i > 10; i -= 10) {
            crc2.beginPath();
            moveTo(10, 20);
            crc2.rotate(45 * Math.PI / 20);
            crc2.arc(10, 0, 5, 0, 2 * Math.PI);
            crc2.fillStyle = "#ffc34d";
            crc2.lineWidth = 1;
            crc2.strokeStyle = "black";
            crc2.fill();
            crc2.stroke();
        }
        crc2.restore();
    }
    function drawTulipsL() {
        var placeTulipsX = (Math.random() * window.innerWidth - 10);
        var placeTulipsY = (Math.random() * (window.innerHeight - window.innerHeight * 0.6) + window.innerHeight * 0.6);
        console.log(placeTulipsX);
        console.log(placeTulipsY);
        crc2.save();
        crc2.beginPath();
        crc2.moveTo(placeTulipsX, placeTulipsY);
        crc2.translate(placeTulipsX, placeTulipsY);
        crc2.quadraticCurveTo(10, 5, 10, 30);
        crc2.strokeStyle = "#355233";
        crc2.lineWidth = 5;
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
        crc2.fillStyle = "pink";
        crc2.fill();
        //crc2.lineTo(-9 , 3);
        crc2.stroke();
        crc2.restore();
    }
    /*

    function drawTulipsR (): void {

        var placeTulipsX: number = (Math.random() * window.innerWidth - 10);
        var placeTulipsY: number = (Math.random() * (window.innerHeight - window.innerHeight * 0.6) + window.innerHeight * 0.6);

        console.log(placeTulipsX);
        console.log(placeTulipsY);

        crc2.save();

        crc2.beginPath();
        crc2.moveTo(placeTulipsX, placeTulipsY);
        crc2.translate(placeTulipsX, placeTulipsY);
        crc2.quadraticCurveTo(-10, 5, -10, 30);
        crc2.strokeStyle = "#355233";
        crc2.lineWidth = 5;

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
        crc2.rotate(Math.PI / 2);
        crc2.fillStyle = "pink";
        crc2.fill();
        //crc2.lineTo(-9 , 3);

        crc2.stroke();

        crc2.restore();
    }
    */
    //Insprired by Jirka
    function drawCloud(_positionX, _positionY, _sizeX, _sizeY) {
        let nParticles = 20;
        let radiusParticle = 50;
        let particle = new Path2D();
        let gradient = crc2.createRadialGradient(0, 0, 0, 0, 0, radiusParticle);
        particle.arc(0, 0, radiusParticle, 0, 2 * Math.PI);
        gradient.addColorStop(0, "HSLA(200, 30%, 80%, 0.5)");
        gradient.addColorStop(1, "HSLA(100, 10%, 70%, 0)");
        crc2.save();
        crc2.translate(_positionX, _positionY);
        crc2.fillStyle = gradient;
        for (let drawn = 0; drawn < nParticles; drawn++) {
            crc2.save();
            let x = (Math.random() - 0.5) * _sizeX;
            let y = -(Math.random() * _sizeY);
            crc2.translate(x, y);
            crc2.fill(particle);
            crc2.restore();
        }
        crc2.restore();
    }
    /*
    function drawMountians (): void {

        var randomFirstHillX: number = Math.random() * ((window.innerWidth * 0.3 - window.innerWidth * 0.2) + window.innerWidth * 0.2);
        var randomFirstHillY: number = Math.random() * ((window.innerHeight * 0.3 - window.innerHeight * 0.2) + window.innerHeight * 0.2);

        crc2.beginPath();
        crc2.moveTo(0, window.innerHeight * 0.6);
        crc2.lineTo(0, window.innerHeight * 0.4);
        crc2.lineTo(randomFirstHillX, randomFirstHillY);
    
        crc2.stroke();

    }
    */
    //inspired by Jirka
    function drawMountians(_height, _colorLow, _colorHigh) {
        var min = 70;
        var max = 200;
        let stepMin = 50;
        let stepMax = 150;
        let x = 0;
        crc2.save();
        crc2.beginPath();
        crc2.moveTo(0, window.innerHeight * 0.6);
        crc2.lineTo(0, _height);
        crc2.translate(0, _height);
        do {
            x += stepMin + Math.random() * (stepMax - stepMin);
            let y = -min - Math.random() * (max - min);
            crc2.lineTo(x, y);
        } while (x < crc2.canvas.width);
        crc2.lineTo(window.innerWidth, window.innerHeight * 0.6);
        crc2.closePath();
        let gradient = crc2.createLinearGradient(0, 0, 0, -max);
        gradient.addColorStop(0, _colorLow);
        gradient.addColorStop(0.9, _colorHigh);
        crc2.fillStyle = gradient;
        crc2.fill();
        crc2.restore();
        console.log("im at mountinas!");
    }
    function drawMoon() {
        console.log("Im at Sun!");
        let gradient = crc2.createRadialGradient(0, 0, 0, 0, 0, 30);
        crc2.save();
        crc2.beginPath();
        crc2.moveTo(window.innerWidth * 0.1, window.innerHeight * 0.1);
        crc2.translate(window.innerWidth * 0.1, window.innerHeight * 0.1);
        crc2.arc(0, 0, 30, 0, 2 * Math.PI);
        gradient.addColorStop(0, "rgb(255, 192, 92)");
        gradient.addColorStop(1, "rgb(255, 215, 105, 0.5)");
        crc2.fillStyle = gradient;
        crc2.fill();
        crc2.strokeStyle = "rgba(1, 1, 1, 0)";
        crc2.stroke();
        crc2.restore();
    }
    function drawStars() {
        var randomX = Math.random() * (window.innerWidth);
        var randomY = Math.random() * ((window.innerHeight * 0.6 - window.innerHeight * 0.3) + window.innerHeight * 0.1);
        crc2.save();
        crc2.beginPath();
        crc2.moveTo(randomX, randomY);
        crc2.translate(randomX, randomY);
        crc2.arc(0, 0, 5, 0, 2 * Math.PI);
        crc2.fillStyle = "rgb(236, 242, 216)";
        crc2.fill();
        crc2.strokeStyle = "rgba(1, 1, 1, 0)";
        crc2.stroke();
        crc2.restore();
    }
    // https://stackoverflow.com/questions/25837158/how-to-draw-a-star-by-using-canvas-html5
    function drawStar(_cx, cy, spikes, outerRadius, innerRadius) {
        var rot = Math.PI / 2 * 3;
        var x = _cx;
        var y = cy;
        var step = Math.PI / spikes;
        crc2.save();
        crc2.beginPath();
        crc2.moveTo(_cx, cy - outerRadius);
        for (var i = 0; i < spikes; i++) {
            x = _cx + Math.cos(rot) * outerRadius;
            y = cy + Math.sin(rot) * outerRadius;
            crc2.lineTo(x, y);
            rot += step;
            x = _cx + Math.cos(rot) * innerRadius;
            y = cy + Math.sin(rot) * innerRadius;
            crc2.lineTo(x, y);
            rot += step;
        }
        crc2.lineTo(_cx, cy - outerRadius);
        crc2.closePath();
        crc2.lineWidth = 5;
        crc2.strokeStyle = "rgba(1, 1, 1, 0)";
        crc2.stroke();
        crc2.fillStyle = "#f5f4cb";
        crc2.fill();
        crc2.restore();
    }
    function drawBee(_scaleX, _scaleY) {
        crc2.save();
        crc2.beginPath();
        crc2.moveTo(200, 200);
        crc2.translate(200, 200);
        crc2.scale(_scaleX, _scaleY);
        crc2.ellipse(100, 100, 15, 35, 300, 0, 2 * Math.PI);
        let pattern = document.createElement('canvas').getContext('2d');
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
        crc2.fillStyle = crc2.createPattern(pattern.canvas, 'repeat');
        crc2.fill();
        crc2.stroke();
        crc2.save();
        crc2.beginPath();
        crc2.moveTo(75, 98);
        crc2.translate(75, 98);
        crc2.scale(_scaleX, _scaleY);
        crc2.arc(0, 0, 8, 0, 2 * Math.PI);
        crc2.fillStyle = "white";
        crc2.fill();
        crc2.stroke();
        crc2.restore();
        crc2.save();
        crc2.beginPath();
        crc2.moveTo(75, 98);
        crc2.translate(75, 98);
        crc2.scale(_scaleX, _scaleY);
        crc2.arc(0, 0, 5, 0, 2 * Math.PI);
        crc2.fillStyle = "black";
        crc2.fill();
        crc2.stroke();
        crc2.restore();
        crc2.save();
        crc2.beginPath();
        crc2.moveTo(77, 88);
        crc2.translate(77, 88);
        crc2.scale(_scaleX, _scaleY);
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
        crc2.scale(_scaleX, _scaleY);
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
})(Canvas || (Canvas = {}));
//# sourceMappingURL=script.js.map