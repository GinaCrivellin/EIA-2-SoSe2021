"use strict";
var Fußball_Simulation;
(function (Fußball_Simulation) {
    window.addEventListener("load", handleload);
    window.addEventListener("click", moveBall);
    let canvasWidth = window.innerWidth;
    let canvasHeight = window.innerHeight;
    let ballArray = [];
    var background = new Image();
    background.src = "Assets/field2.jpg";
    function handleload() {
        Fußball_Simulation.canvas = document.querySelector("canvas");
        Fußball_Simulation.canvas.id = "CanvasID";
        Fußball_Simulation.canvas.width = canvasWidth;
        Fußball_Simulation.canvas.height = canvasHeight;
        // Quelle: https://stackoverflow.com/questions/14012768/html5-canvas-background-image
        var background = new Image();
        background.src = "Assets/field2.jpg";
        background.onload = function () {
            Fußball_Simulation.crc2.drawImage(background, window.innerWidth * 0.15, window.innerHeight * 0.065, canvasWidth - 400, canvasHeight - 100);
        };
        Fußball_Simulation.crc2 = Fußball_Simulation.canvas.getContext("2d");
        window.setInterval(update, 20);
    }
    function update() {
        console.log("in update");
        Fußball_Simulation.crc2.drawImage(background, window.innerWidth * 0.15, window.innerHeight * 0.07, canvasWidth - 400, canvasHeight - 100);
        createPlayer();
        createBall();
    }
    function createPlayer() {
        let playerPosition = new Fußball_Simulation.Vector(100, 100);
        let playerVelocity = new Fußball_Simulation.Vector(0, 0);
        let playerRadius = new Fußball_Simulation.Vector(10, 10);
        let tricotcolor = "#0A36AF";
        let name = "Immobile";
        let number = 17;
        let playerpace = 10;
        let playerPrecision = 10;
        let player = new Fußball_Simulation.Player(playerPosition, playerVelocity, playerRadius, tricotcolor, name, number, playerPrecision, playerpace);
        player.draw();
    }
    function createBall() {
        let ballPosition = new Fußball_Simulation.Vector(100, 100);
        let ballVelocity = new Fußball_Simulation.Vector(0, 0);
        let ballRadius = new Fußball_Simulation.Vector(10, 10);
        let color = "red";
        let ball = new Fußball_Simulation.Ball(ballPosition, ballVelocity, ballRadius, color);
        ballArray.push(ball);
        ball.draw();
    }
    function moveBall(_event) {
        console.log("got Event");
        let xPos = _event.clientX;
        let yPos = _event.clientY;
        let ballPosition = new Fußball_Simulation.Vector(xPos, yPos);
        ballArray[0].klickPath(1 / 10, ballPosition);
    }
})(Fußball_Simulation || (Fußball_Simulation = {}));
//# sourceMappingURL=Script.js.map