"use strict";
var Fußball_Simulation;
(function (Fußball_Simulation) {
    window.addEventListener("load", handleload);
    let canvasWidth = window.innerWidth;
    let canvasHeight = window.innerHeight;
    let ballArray = [];
    var background = new Image();
    background.src = "Assets/field2.jpg";
    function handleload() {
        console.log("in handle");
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
        window.addEventListener("click", moveBall);
        function moveBall(_event) {
            console.log("got Event");
            let xPos = _event.clientX;
            let yPos = _event.clientY;
            let ballPosition = new Fußball_Simulation.Vector(xPos, yPos);
            ballArray[0].klickPath(1 / 10, ballPosition);
        }
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
        const startPositions = {
            Stürmer: {
                links: new Fußball_Simulation.Vector(window.innerWidth * 0.5, window.innerHeight * 0.2),
                rechts: new Fußball_Simulation.Vector(window.innerWidth * 0.5, window.innerHeight * 0.8)
            },
            Mittelfeld: {
                links: new Fußball_Simulation.Vector(window.innerWidth * 0.5, window.innerHeight * 0.2),
                rechts: new Fußball_Simulation.Vector(window.innerWidth * 0.5, window.innerHeight * 0.8),
                mitte: new Fußball_Simulation.Vector(window.innerWidth * 0.5, window.innerHeight * 0.2),
                mitteHinten: new Fußball_Simulation.Vector(window.innerWidth * 0.5, window.innerHeight * 0.8)
            },
            Abwehr: {
                außenLinks: new Fußball_Simulation.Vector(window.innerWidth * 0.4, window.innerHeight * 0.3),
                außenRechts: new Fußball_Simulation.Vector(window.innerWidth * 0.5, window.innerHeight * 0.8),
                innenLinks: new Fußball_Simulation.Vector(window.innerWidth * 0.5, window.innerHeight * 0.2),
                innenRechts: new Fußball_Simulation.Vector(window.innerWidth * 0.5, window.innerHeight * 0.8)
            },
            Tor: new Fußball_Simulation.Vector(window.innerWidth * 0.5, window.innerHeight * 0.2)
        };
        // keys macht aus "startPositions" ein Array
        // map geht durch alle Einträge
        //list.map(function(n: number): void { console.log(n); });
        // ist das Gleiche wie
        //list.map(n => console.log(n));
        // map macht das gleiche wie 
        // for (const n of list) {
        //console.log(n);
        //}
        Object.keys(startPositions).map(key => {
            //let playerPosition: Vector = key[0][0];
            console.log(key[0][0]);
        });
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
})(Fußball_Simulation || (Fußball_Simulation = {}));
//# sourceMappingURL=Script.js.map