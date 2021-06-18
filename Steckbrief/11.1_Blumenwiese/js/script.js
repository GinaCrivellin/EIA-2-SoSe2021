"use strict";
var L11_1_Blumenwiese;
(function (L11_1_Blumenwiese) {
    window.addEventListener("load", handleload);
    let horizon;
    let flowerArray = [];
    let stepArray = [];
    let heightArray = [];
    let starArray = [];
    let xCloudArray = [];
    let yCloudArray = [];
    let movableArray = [];
    function handleload() {
        L11_1_Blumenwiese.canvas = document.querySelector("canvas");
        L11_1_Blumenwiese.canvas.id = "CanvasID";
        L11_1_Blumenwiese.canvas.width = window.innerWidth;
        L11_1_Blumenwiese.canvas.height = window.innerHeight;
        L11_1_Blumenwiese.canvas.style.backgroundColor = "#4c6273";
        L11_1_Blumenwiese.crc2 = L11_1_Blumenwiese.canvas.getContext("2d");
        horizon = window.innerHeight * 0.6;
        createStarPosition();
        for (var i = 0; i < 15; i++) {
            drawStar(starArray[0].X, starArray[0].Y, 5, 10, 15);
        }
        createMountianSteps(50, 150, 100, 250);
        drawMountians(horizon, window.innerHeight * 0.4, 200, "#414447", "#a3adb5");
        drawMountians(horizon, window.innerHeight * 0.5, 200, "#5b6166", "#b7c1c9");
        drawMoon(window.innerWidth * 0.1, window.innerHeight * 0.1, 30, "rgb(255, 192, 92)", "rgb(255, 215, 105, 0.5)");
        drawGrass(horizon, "#3ba356", "#4f8f4f", "#376142");
        createTulip();
        createFlower();
        createBee();
        let cloudSize = new L11_1_Blumenwiese.Vector(250, 70);
        createCloudxy(20, cloudSize);
        createCloud();
        window.setInterval(update, 20);
    }
    //
    //
    //
    //
    function update() {
        L11_1_Blumenwiese.crc2.fillStyle = "#4c6273";
        L11_1_Blumenwiese.crc2.fillRect(0, 0, window.innerWidth, window.innerHeight);
        for (var i = 0; i < 10; i++) {
            drawStar(starArray[i].X, starArray[i].Y, 5, 10, 15);
        }
        drawMountians(horizon, window.innerHeight * 0.4, 200, "#414447", "#a3adb5");
        drawMountians(horizon, window.innerHeight * 0.5, 200, "#5b6166", "#b7c1c9");
        drawGrass(horizon, "#3ba356", "#4f8f4f", "#376142");
        for (let flowers of flowerArray) {
            flowers.draw();
            if (flowers.fillHeight < 60) {
                flowers.fillHeight += 0.7;
            }
        }
        for (let movable of movableArray) {
            movable.draw();
            if (movable instanceof L11_1_Blumenwiese.Bee) {
                movable.move(1 / 10, true);
            }
            if (movable instanceof L11_1_Blumenwiese.Cloud) {
                movable.move(1 / 40, false);
            }
        }
        drawMoon(window.innerWidth * 0.1, window.innerHeight * 0.1, 30, "rgb(255, 192, 92)", "rgb(255, 215, 105, 0.5)");
        drawBeeStock();
    }
    //
    //
    //
    //
    function createBee() {
        for (let i = 0; i < 10; i++) {
            let randomXBee = Math.random() * (window.innerWidth);
            let randomYBee = Math.random() * (window.innerHeight * 0.7);
            let beePosition = new L11_1_Blumenwiese.Vector(randomXBee, randomYBee);
            let velocityBee = new L11_1_Blumenwiese.Vector(-70, 0);
            let bee = new L11_1_Blumenwiese.Bee(beePosition, velocityBee);
            bee.draw();
            movableArray.push(bee);
        }
    }
    function createTulip() {
        for (let i = 0; i < 10; i++) {
            let randomXOnGrass = Math.random() * window.innerWidth;
            let randomYOnGrass = Math.random() * (window.innerHeight * 0.6 - window.innerHeight) + window.innerHeight;
            let flowerPosition2 = new L11_1_Blumenwiese.Vector(randomXOnGrass, randomYOnGrass);
            let tulip = new L11_1_Blumenwiese.Tulip(flowerPosition2, "#355233", "pink", 0);
            tulip.draw();
            flowerArray.push(tulip);
        }
    }
    function createFlower() {
        for (let i = 0; i < 10; i++) {
            let randomXOnGrass = Math.random() * window.innerWidth;
            let randomYOnGrass = Math.random() * (window.innerHeight * 0.6 - window.innerHeight) + window.innerHeight;
            let flowerPosition = new L11_1_Blumenwiese.Vector(randomXOnGrass, randomYOnGrass);
            let flowerLeft = new L11_1_Blumenwiese.Daisy(flowerPosition, "#355233", "orange", 10, 0);
            flowerLeft.draw();
            flowerArray.push(flowerLeft);
        }
        for (let i = 0; i < 10; i++) {
            let randomXOnGrass = Math.random() * window.innerWidth;
            let randomYOnGrass = Math.random() * (window.innerHeight * 0.6 - window.innerHeight) + window.innerHeight;
            let flowerPosition = new L11_1_Blumenwiese.Vector(randomXOnGrass, randomYOnGrass);
            let flowerRight = new L11_1_Blumenwiese.Daisy(flowerPosition, "#355233", "#ffe357", -10, 0);
            flowerRight.draw();
            flowerArray.push(flowerRight);
        }
    }
    function createCloudxy(_particleNumber, _size) {
        for (let i = 0; i < _particleNumber; i++) {
            let x = (Math.random() - 0.5) * _size.X;
            let y = -(Math.random() * _size.Y);
            xCloudArray.push(x);
            yCloudArray.push(y);
        }
    }
    function createCloud() {
        console.log("cloud function");
        let randomXClouds1 = Math.random() * ((window.innerWidth * 0.7 - window.innerWidth * 0.5) + window.innerWidth * 0.5);
        let randomYClouds1 = Math.random() * (window.innerHeight * 0.4 - window.innerHeight * 0.1) + window.innerHeight * 0.1;
        let randomXClouds2 = Math.random() * ((window.innerWidth * 0.4 - window.innerWidth * 0.3) + window.innerWidth * 0.3);
        let randomYClouds2 = Math.random() * (window.innerHeight * 0.6 - window.innerHeight * 0.4) + window.innerHeight * 0.4;
        let cloud1Position = new L11_1_Blumenwiese.Vector(randomXClouds1, randomYClouds1);
        let cloud1Position2 = new L11_1_Blumenwiese.Vector(randomXClouds2, randomYClouds2);
        let velocityClouds1 = new L11_1_Blumenwiese.Vector(10, 0);
        let velocityClouds2 = new L11_1_Blumenwiese.Vector(-20, 0);
        for (let i = 0; i < 20; i++) {
            let cloud1 = new L11_1_Blumenwiese.Cloud(cloud1Position, velocityClouds1, xCloudArray[i], yCloudArray[i]);
            let cloud2 = new L11_1_Blumenwiese.Cloud(cloud1Position2, velocityClouds2, xCloudArray[i], yCloudArray[i]);
            cloud1.draw();
            cloud2.draw();
            console.log("gemalt");
            movableArray.push(cloud1);
            movableArray.push(cloud2);
        }
    }
    function drawGrass(_horizon, _color1, _color2, _color3) {
        L11_1_Blumenwiese.crc2.beginPath();
        L11_1_Blumenwiese.crc2.moveTo(0, _horizon);
        L11_1_Blumenwiese.crc2.lineTo(window.innerWidth, _horizon);
        L11_1_Blumenwiese.crc2.lineTo(window.innerWidth, window.innerHeight);
        L11_1_Blumenwiese.crc2.lineTo(0, window.innerHeight);
        L11_1_Blumenwiese.crc2.lineTo(0, _horizon);
        L11_1_Blumenwiese.crc2.strokeStyle = "rgba(1, 1, 1, 0)";
        let gradient = L11_1_Blumenwiese.crc2.createLinearGradient(0, 0, 0, L11_1_Blumenwiese.crc2.canvas.height);
        gradient.addColorStop(0, _color1);
        gradient.addColorStop(0.5, _color2);
        gradient.addColorStop(1, _color3);
        L11_1_Blumenwiese.crc2.fillStyle = gradient;
        L11_1_Blumenwiese.crc2.fill();
        L11_1_Blumenwiese.crc2.closePath();
        L11_1_Blumenwiese.crc2.stroke();
    }
    //inspired by Jirka
    function createMountianSteps(_stepMin, _stepMax, _heightMin, _heightMax) {
        let x = 0;
        let y = 0;
        do {
            x += _stepMin + Math.random() * (_stepMax - _stepMin);
            y -= _heightMin - Math.random() * (_heightMax - _heightMin);
            stepArray.push(x);
            heightArray.push(y);
        } while (x < L11_1_Blumenwiese.crc2.canvas.width);
    }
    function drawMountians(_horizon, _height, _heightMax, _colorLow, _colorHigh) {
        L11_1_Blumenwiese.crc2.save();
        L11_1_Blumenwiese.crc2.beginPath();
        L11_1_Blumenwiese.crc2.moveTo(0, _horizon);
        L11_1_Blumenwiese.crc2.lineTo(0, _height);
        L11_1_Blumenwiese.crc2.translate(0, _height);
        for (let i = 0; i < stepArray.length; i++) {
            L11_1_Blumenwiese.crc2.lineTo(stepArray[i], heightArray[i]);
        }
        L11_1_Blumenwiese.crc2.lineTo(window.innerWidth, _horizon);
        L11_1_Blumenwiese.crc2.closePath();
        let gradient = L11_1_Blumenwiese.crc2.createLinearGradient(0, 0, 0, -_heightMax);
        gradient.addColorStop(0, _colorLow);
        gradient.addColorStop(0.9, _colorHigh);
        L11_1_Blumenwiese.crc2.fillStyle = gradient;
        L11_1_Blumenwiese.crc2.fill();
        L11_1_Blumenwiese.crc2.restore();
    }
    function drawMoon(_X, _Y, _radius, _color1, _color2) {
        let gradient = L11_1_Blumenwiese.crc2.createRadialGradient(0, 0, 0, 0, 0, 30);
        L11_1_Blumenwiese.crc2.save();
        L11_1_Blumenwiese.crc2.beginPath();
        L11_1_Blumenwiese.crc2.moveTo(_X, _Y);
        L11_1_Blumenwiese.crc2.translate(_X, _Y);
        L11_1_Blumenwiese.crc2.arc(0, 0, _radius, 0, 2 * Math.PI);
        gradient.addColorStop(0, _color1);
        gradient.addColorStop(1, _color2);
        L11_1_Blumenwiese.crc2.fillStyle = gradient;
        L11_1_Blumenwiese.crc2.fill();
        L11_1_Blumenwiese.crc2.strokeStyle = "rgba(1, 1, 1, 0)";
        L11_1_Blumenwiese.crc2.stroke();
        L11_1_Blumenwiese.crc2.restore();
    }
    // https://stackoverflow.com/questions/25837158/how-to-draw-a-star-by-using-canvas-html5
    function createStarPosition() {
        for (let i = 0; i < 10; i++) {
            let randomX = Math.random() * (window.innerWidth);
            let randomY = Math.random() * ((horizon - window.innerHeight * 0.3) + window.innerHeight * 0.1);
            starArray.push(new L11_1_Blumenwiese.Vector(randomX, randomY));
        }
    }
    function drawStar(_cx, cy, spikes, outerRadius, innerRadius) {
        var rot = Math.PI / 2 * 3;
        var x = _cx;
        var y = cy;
        var step = Math.PI / spikes;
        L11_1_Blumenwiese.crc2.save();
        L11_1_Blumenwiese.crc2.beginPath();
        L11_1_Blumenwiese.crc2.moveTo(_cx, cy - outerRadius);
        for (var i = 0; i < spikes; i++) {
            x = _cx + Math.cos(rot) * outerRadius;
            y = cy + Math.sin(rot) * outerRadius;
            L11_1_Blumenwiese.crc2.lineTo(x, y);
            rot += step;
            x = _cx + Math.cos(rot) * innerRadius;
            y = cy + Math.sin(rot) * innerRadius;
            L11_1_Blumenwiese.crc2.lineTo(x, y);
            rot += step;
        }
        L11_1_Blumenwiese.crc2.lineTo(_cx, cy - outerRadius);
        L11_1_Blumenwiese.crc2.closePath();
        L11_1_Blumenwiese.crc2.lineWidth = 5;
        L11_1_Blumenwiese.crc2.strokeStyle = "rgba(1, 1, 1, 0)";
        L11_1_Blumenwiese.crc2.stroke();
        L11_1_Blumenwiese.crc2.fillStyle = "#f5f4cb";
        L11_1_Blumenwiese.crc2.fill();
        L11_1_Blumenwiese.crc2.restore();
    }
    function drawBeeStock() {
        L11_1_Blumenwiese.crc2.save();
        L11_1_Blumenwiese.crc2.beginPath();
        L11_1_Blumenwiese.crc2.moveTo(window.innerWidth * 0.8, window.innerHeight * 0.8);
        L11_1_Blumenwiese.crc2.translate(window.innerWidth * 0.8, window.innerHeight * 0.8);
        L11_1_Blumenwiese.crc2.ellipse(0, 0, 15, 30, 300, 0, 2 * Math.PI);
        L11_1_Blumenwiese.crc2.stroke();
        L11_1_Blumenwiese.crc2.ellipse(0, 10, 15, 35, 300, 0, 2 * Math.PI);
        L11_1_Blumenwiese.crc2.stroke();
        L11_1_Blumenwiese.crc2.ellipse(0, 20, 15, 40, 300, 0, 2 * Math.PI);
        L11_1_Blumenwiese.crc2.stroke();
        L11_1_Blumenwiese.crc2.ellipse(0, 30, 15, 44, 300, 0, 2 * Math.PI);
        L11_1_Blumenwiese.crc2.stroke();
        L11_1_Blumenwiese.crc2.shadowColor = "#243323";
        L11_1_Blumenwiese.crc2.shadowOffsetX = 10;
        L11_1_Blumenwiese.crc2.shadowOffsetY = 10;
        L11_1_Blumenwiese.crc2.shadowBlur = 20;
        let gradient = L11_1_Blumenwiese.crc2.createLinearGradient(0, 0, 15, 0);
        gradient.addColorStop(0, "#e0c270");
        gradient.addColorStop(0.9, "#c49e35");
        L11_1_Blumenwiese.crc2.fillStyle = gradient;
        L11_1_Blumenwiese.crc2.fill();
        L11_1_Blumenwiese.crc2.stroke();
        L11_1_Blumenwiese.crc2.closePath();
        L11_1_Blumenwiese.crc2.restore();
    }
})(L11_1_Blumenwiese || (L11_1_Blumenwiese = {}));
//# sourceMappingURL=script.js.map