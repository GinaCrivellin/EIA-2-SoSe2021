"use strict";
var Blumenwiese;
(function (Blumenwiese) {
    window.addEventListener("load", handleload);
    let canvas;
    //let horizon: number;
    let cloudArray = [];
    let cloudSize = new Blumenwiese.Vector(250, 70);
    let xCloudArray = [];
    let yCloudArray = [];
    function handleload() {
        canvas = document.querySelector("canvas");
        canvas.id = "CanvasID";
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        canvas.style.backgroundColor = "#4c6273";
        Blumenwiese.crc2 = canvas.getContext("2d");
        horizon = window.innerHeight * 0.6;
        createCloudxy(20, cloudSize);
        createCloud();
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
        let randomXClouds1 = Math.random() * (window.innerWidth * 0.3);
        let randomYClouds1 = Math.random() * (window.innerHeight * 0.3);
        let randomXClouds2 = Math.random() * (window.innerWidth * 0.9 - window.innerWidth * 0.4) + window.innerWidth * 0.4;
        let randomYClouds2 = Math.random() * (window.innerHeight * 0.5 - window.innerHeight * 0.1) + window.innerHeight * 0.1;
        let cloud1Position1 = new Blumenwiese.Vector(randomXClouds1, randomYClouds1);
        let cloud1Position2 = new Blumenwiese.Vector(randomXClouds2, randomYClouds2);
        let cloudSize = new Blumenwiese.Vector(250, 70);
        let velocityClouds = new Blumenwiese.Vector(20, 5);
        let cloud1 = new Blumenwiese.Cloud(cloud1Position1, cloudSize, velocityClouds, xCloudArray[0], yCloudArray[0]);
        let cloud2 = new Blumenwiese.Cloud(cloud1Position2, cloudSize, velocityClouds, xCloudArray[0], yCloudArray[0]);
        cloud1.draw();
        cloud2.draw();
        cloudArray.push(cloud1);
        cloudArray.push(cloud2);
    }
})(Blumenwiese || (Blumenwiese = {}));
//# sourceMappingURL=test.js.map