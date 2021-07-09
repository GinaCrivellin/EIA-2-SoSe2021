"use strict";
var Fußball_Simulation;
(function (Fußball_Simulation) {
    window.addEventListener("load", handleload);
    window.addEventListener("click", moveBall);
    Fußball_Simulation.stopGame = false;
    let canvasWidth = window.innerWidth;
    let canvasHeight = window.innerHeight;
    let ballArray = [];
    function getBall() {
        return ballArray[0];
    }
    Fußball_Simulation.getBall = getBall;
    let playerArray = [];
    let playerToChange = [];
    var background = new Image();
    background.src = "Assets/field2.jpg";
    function handleload() {
        let form = document.querySelector("#FormBox");
        form.addEventListener("change", formchange);
        console.log("in handle");
        Fußball_Simulation.canvas = document.querySelector("canvas");
        Fußball_Simulation.canvas.id = "CanvasID";
        Fußball_Simulation.canvas.width = canvasWidth;
        Fußball_Simulation.canvas.height = canvasHeight;
        /*
        // Quelle: https://stackoverflow.com/questions/14012768/html5-canvas-background-image
        var background: HTMLImageElement = new Image();
        background.src = "Assets/field2.jpg";
        background.onload = function(): void {
            crc2.drawImage(background, window.innerWidth * 0.15, window.innerHeight * 0.065, canvasWidth - 400, canvasHeight - 100);
        };
        */
        Fußball_Simulation.crc2 = Fußball_Simulation.canvas.getContext("2d");
        createField();
        createPlayer();
        createBall();
        window.setInterval(update, 20);
        initialize();
    }
    function update() {
        //crc2.drawImage(background, window.innerWidth * 0.15, window.innerHeight * 0.07, canvasWidth - 400, canvasHeight - 100); 
        if (Fußball_Simulation.stopGame == false) {
            createField();
            for (let player of playerArray) {
                player.update();
                player.draw();
                player.move(1 / 40);
            }
            ballArray[0].draw();
            ballArray[0].move(1 / 40);
        }
        else {
            return;
        }
    }
    function moveBall(_event) {
        let xPos = _event.clientX;
        let yPos = _event.clientY;
        let mousePosition = new Fußball_Simulation.Vector(xPos, yPos);
        let goTo = Fußball_Simulation.Vector.getDifference(mousePosition, ballArray[0].position);
        goTo = goTo.normalize();
        goTo.scale(50);
        ballArray[0].setVelocity(goTo);
    }
    function createPlayer() {
        let playerVelocity = new Fußball_Simulation.Vector(0, 0);
        let playerRadius = new Fußball_Simulation.Vector(30, 30);
        let playerSkills = [
            {
                name: "Immobile",
                tricotcolor: "#0A36AF",
                number: 17,
                playerPace: 10,
                playerPrecision: 0
            },
            {
                name: "Chiellini",
                tricotcolor: "#0A36AF",
                number: 3,
                playerPace: 10,
                playerPrecision: 10
            },
            {
                name: "Donnarumma",
                tricotcolor: "#0A36AF",
                number: 21,
                playerPace: 10,
                playerPrecision: 10
            },
            {
                name: "Spinazzola",
                tricotcolor: "#0A36AF",
                number: 4,
                playerPace: 10,
                playerPrecision: 10
            },
            {
                name: "Bonucci",
                tricotcolor: "#0A36AF",
                number: 19,
                playerPace: 10,
                playerPrecision: 10
            },
            {
                name: "Di Lorenzo",
                tricotcolor: "#0A36AF",
                number: 2,
                playerPace: 10,
                playerPrecision: 10
            },
            {
                name: "Pessina",
                tricotcolor: "#0A36AF",
                number: 12,
                playerPace: 10,
                playerPrecision: 10
            },
            {
                name: "Locatelli",
                tricotcolor: "#0A36AF",
                number: 5,
                playerPace: 10,
                playerPrecision: 10
            },
            {
                name: "Barella",
                tricotcolor: "#0A36AF",
                number: 18,
                playerPace: 10,
                playerPrecision: 10
            },
            {
                name: "Chiesa",
                tricotcolor: "#0A36AF",
                number: 14,
                playerPace: 10,
                playerPrecision: 10
            },
            {
                name: "Insigne",
                tricotcolor: "#0A36AF",
                number: 10,
                playerPace: 10,
                playerPrecision: 10
            },
            //
            {
                name: "Müller",
                tricotcolor: "#f5b342",
                number: 17,
                playerPace: 10,
                playerPrecision: 10
            },
            {
                name: "Schmidt",
                tricotcolor: "#f5b342",
                number: 3,
                playerPace: 10,
                playerPrecision: 10
            },
            {
                name: "Schneider",
                tricotcolor: "#f5b342",
                number: 21,
                playerPace: 10,
                playerPrecision: 10
            },
            {
                name: "Günter",
                tricotcolor: "#f5b342",
                number: 4,
                playerPace: 10,
                playerPrecision: 10
            },
            {
                name: "Fischer",
                tricotcolor: "#f5b342",
                number: 19,
                playerPace: 10,
                playerPrecision: 10
            },
            {
                name: "Weber",
                tricotcolor: "#f5b342",
                number: 2,
                playerPace: 10,
                playerPrecision: 10
            },
            {
                name: "Meyer",
                tricotcolor: "#f5b342",
                number: 12,
                playerPace: 10,
                playerPrecision: 10
            },
            {
                name: "Wagner",
                tricotcolor: "#f5b342",
                number: 5,
                playerPace: 10,
                playerPrecision: 10
            },
            {
                name: "Schulz",
                tricotcolor: "#f5b342",
                number: 18,
                playerPace: 10,
                playerPrecision: 10
            },
            {
                name: "Braun",
                tricotcolor: "#f5b342",
                number: 14,
                playerPace: 10,
                playerPrecision: 10
            },
            {
                name: "Koch",
                tricotcolor: "#f5b342",
                number: 10,
                playerPace: 10,
                playerPrecision: 10
            }
        ];
        let startPositionArrayTeam1 = [
            new Fußball_Simulation.Vector(window.innerWidth * 0.47, window.innerHeight * 0.3),
            new Fußball_Simulation.Vector(window.innerWidth * 0.47, window.innerHeight * 0.7),
            new Fußball_Simulation.Vector(window.innerWidth * 0.35, window.innerHeight * 0.25),
            new Fußball_Simulation.Vector(window.innerWidth * 0.35, window.innerHeight * 0.75),
            new Fußball_Simulation.Vector(window.innerWidth * 0.4, window.innerHeight * 0.5),
            new Fußball_Simulation.Vector(window.innerWidth * 0.3, window.innerHeight * 0.5),
            new Fußball_Simulation.Vector(window.innerWidth * 0.2, window.innerHeight * 0.23),
            new Fußball_Simulation.Vector(window.innerWidth * 0.2, window.innerHeight * 0.77),
            new Fußball_Simulation.Vector(window.innerWidth * 0.25, window.innerHeight * 0.35),
            new Fußball_Simulation.Vector(window.innerWidth * 0.25, window.innerHeight * 0.65),
            new Fußball_Simulation.Vector(window.innerWidth * 0.15, window.innerHeight * 0.5)
        ];
        let startPositionArrayTeam2 = [
            new Fußball_Simulation.Vector(window.innerWidth * 0.53, window.innerHeight * 0.3),
            new Fußball_Simulation.Vector(window.innerWidth * 0.53, window.innerHeight * 0.7),
            new Fußball_Simulation.Vector(window.innerWidth * 0.65, window.innerHeight * 0.25),
            new Fußball_Simulation.Vector(window.innerWidth * 0.65, window.innerHeight * 0.75),
            new Fußball_Simulation.Vector(window.innerWidth * 0.6, window.innerHeight * 0.5),
            new Fußball_Simulation.Vector(window.innerWidth * 0.7, window.innerHeight * 0.5),
            new Fußball_Simulation.Vector(window.innerWidth * 0.8, window.innerHeight * 0.23),
            new Fußball_Simulation.Vector(window.innerWidth * 0.8, window.innerHeight * 0.77),
            new Fußball_Simulation.Vector(window.innerWidth * 0.75, window.innerHeight * 0.35),
            new Fußball_Simulation.Vector(window.innerWidth * 0.75, window.innerHeight * 0.65),
            new Fußball_Simulation.Vector(window.innerWidth * 0.85, window.innerHeight * 0.5)
        ];
        //console.log(startPositionArray[0][0]);
        for (let i = 0; i < startPositionArrayTeam1.length; i++) {
            let player = new Fußball_Simulation.Player((startPositionArrayTeam1[i]), playerVelocity, playerRadius, playerSkills[i].tricotcolor, playerSkills[i].name, playerSkills[i].number, playerSkills[i].playerPrecision, playerSkills[i].playerPace);
            player.draw();
            //console.log("Player" + i + "is drawn");
            playerArray.push(player);
        }
        for (let j = 0; j < startPositionArrayTeam2.length; j++) {
            let player = new Fußball_Simulation.Player((startPositionArrayTeam2[j]), playerVelocity, playerRadius, playerSkills[j + 11].tricotcolor, playerSkills[j + 11].name, playerSkills[j + 11].number, playerSkills[j + 11].playerPrecision, playerSkills[j + 11].playerPace);
            player.draw();
            //console.log("Player" + j + "is drawn");
            playerArray.push(player);
        }
    }
    function createBall() {
        let ballPosition = new Fußball_Simulation.Vector(window.innerWidth * 0.5, window.innerHeight * 0.5);
        let ballVelocity = new Fußball_Simulation.Vector(0, 0);
        let ballRadius = new Fußball_Simulation.Vector(10, 10);
        let color = "red";
        let ball = new Fußball_Simulation.Ball(ballPosition, ballVelocity, ballRadius, color);
        ball.draw();
        ballArray.push(ball);
    }
    function createField() {
        Fußball_Simulation.crc2.beginPath();
        // Feld außen grün
        Fußball_Simulation.crc2.save();
        Fußball_Simulation.crc2.moveTo(window.innerWidth * 0.1, window.innerHeight * 0.1);
        Fußball_Simulation.crc2.translate(window.innerWidth * 0.1, window.innerHeight * 0.1);
        Fußball_Simulation.crc2.rect(0, 0, window.innerWidth * 0.8, window.innerHeight * 0.8);
        Fußball_Simulation.crc2.strokeStyle = "white";
        Fußball_Simulation.crc2.lineWidth = 3;
        Fußball_Simulation.crc2.fillStyle = "green";
        Fußball_Simulation.crc2.fill();
        Fußball_Simulation.crc2.stroke();
        Fußball_Simulation.crc2.restore();
        // Feldlinie außen groß
        Fußball_Simulation.crc2.save();
        Fußball_Simulation.crc2.moveTo(window.innerWidth * 0.125, window.innerHeight * 0.15);
        Fußball_Simulation.crc2.translate(window.innerWidth * 0.125, window.innerHeight * 0.15);
        Fußball_Simulation.crc2.rect(0, 0, window.innerWidth * 0.75, window.innerHeight * 0.7);
        Fußball_Simulation.crc2.strokeStyle = "white";
        Fußball_Simulation.crc2.lineWidth = 3;
        Fußball_Simulation.crc2.stroke();
        Fußball_Simulation.crc2.restore();
        // Tor groß
        Fußball_Simulation.crc2.save();
        Fußball_Simulation.crc2.moveTo(window.innerWidth * 0.125, window.innerHeight * 0.255);
        Fußball_Simulation.crc2.translate(window.innerWidth * 0.125, window.innerHeight * 0.25);
        Fußball_Simulation.crc2.rect(0, 0, window.innerWidth * 0.12, window.innerHeight * 0.5);
        Fußball_Simulation.crc2.strokeStyle = "white";
        Fußball_Simulation.crc2.lineWidth = 3;
        Fußball_Simulation.crc2.stroke();
        Fußball_Simulation.crc2.restore();
        // Tor klein
        Fußball_Simulation.crc2.save();
        Fußball_Simulation.crc2.moveTo(window.innerWidth * 0.125, window.innerHeight * 0.35);
        Fußball_Simulation.crc2.translate(window.innerWidth * 0.125, window.innerHeight * 0.35);
        Fußball_Simulation.crc2.rect(0, 0, window.innerWidth * 0.05, window.innerHeight * 0.3);
        Fußball_Simulation.crc2.strokeStyle = "white";
        Fußball_Simulation.crc2.lineWidth = 3;
        Fußball_Simulation.crc2.stroke();
        Fußball_Simulation.crc2.restore();
        // Tor rechts groß
        Fußball_Simulation.crc2.save();
        Fußball_Simulation.crc2.moveTo(window.innerWidth * 0.875, window.innerHeight * 0.255);
        Fußball_Simulation.crc2.translate(window.innerWidth * 0.875, window.innerHeight * 0.255);
        Fußball_Simulation.crc2.rect(0, 0, -window.innerWidth * 0.12, window.innerHeight * 0.5);
        Fußball_Simulation.crc2.strokeStyle = "white";
        Fußball_Simulation.crc2.lineWidth = 3;
        Fußball_Simulation.crc2.stroke();
        Fußball_Simulation.crc2.restore();
        // Tor rechts klein
        Fußball_Simulation.crc2.save();
        Fußball_Simulation.crc2.moveTo(window.innerWidth * 0.875, window.innerHeight * 0.35);
        Fußball_Simulation.crc2.translate(window.innerWidth * 0.875, window.innerHeight * 0.35);
        Fußball_Simulation.crc2.rect(0, 0, -window.innerWidth * 0.05, window.innerHeight * 0.3);
        Fußball_Simulation.crc2.strokeStyle = "white";
        Fußball_Simulation.crc2.lineWidth = 3;
        Fußball_Simulation.crc2.stroke();
        Fußball_Simulation.crc2.restore();
        // Mittellinie
        Fußball_Simulation.crc2.save();
        Fußball_Simulation.crc2.moveTo(window.innerWidth * 0.5, window.innerHeight * 0.1);
        Fußball_Simulation.crc2.translate(window.innerWidth * 0.5, window.innerHeight * 0.1);
        Fußball_Simulation.crc2.lineTo(0, window.innerHeight * 0.8);
        Fußball_Simulation.crc2.strokeStyle = "white";
        Fußball_Simulation.crc2.lineWidth = 3;
        Fußball_Simulation.crc2.stroke();
        Fußball_Simulation.crc2.restore();
        Fußball_Simulation.crc2.closePath();
        // MITTELKREIS
        Fußball_Simulation.crc2.beginPath();
        Fußball_Simulation.crc2.save();
        //crc2.moveTo(window.innerWidth * 0.5, window.innerHeight * 0.5);
        //crc2.translate(window.innerWidth * 0.5, window.innerHeight * 0.5);
        Fußball_Simulation.crc2.arc(window.innerWidth * 0.5, window.innerHeight * 0.5, 50, 0, 2 * Math.PI);
        Fußball_Simulation.crc2.strokeStyle = "white";
        Fußball_Simulation.crc2.lineWidth = 3;
        Fußball_Simulation.crc2.stroke();
        Fußball_Simulation.crc2.restore();
        Fußball_Simulation.crc2.closePath();
    }
    // Quelle: https://stackoverflow.com/questions/61574962/how-to-add-event-listenerclick-to-a-canvas-object
    function initialize() {
        Fußball_Simulation.canvas.addEventListener("mousedown", function (evt) {
            let x = evt.clientX;
            let y = evt.clientY;
            for (let player of playerArray) {
                if (player.checkClick(x, y) == true) {
                    console.log(player);
                    showForm(player);
                    console.log("! " + player.name + " wurde übergeben");
                    let form = document.querySelector("#FormBox");
                    form.style.visibility = "visible";
                }
            }
        });
    }
    function showForm(_player) {
        console.log("!! showform wurde gestartet mit " + _player.name);
        //playerArray.splice(playerArray.indexOf(_player, 1));
        let name = document.querySelector("#PlayerName");
        name.innerHTML = _player.name;
        let number = document.querySelector("#PlayerNumber");
        number.innerHTML = _player.number.toString();
        let precision = document.querySelector("#precision");
        precision.innerHTML = "precision: " + _player.precision.toString();
        console.log(_player.precision);
        console.log("playerMin: " + _player.minPrecision);
        let pace = document.querySelector("#pace");
        pace.innerHTML = "pace: " + _player.pace.toString();
        let tricotcolor = document.querySelector("#tricotcolor");
        tricotcolor.innerHTML = "tricotcolor: " + _player.tricotcolor.toString();
        let precisionOfPlayerMin = document.getElementById("PrecisionSliderMin");
        precisionOfPlayerMin.value = (_player.minPrecision.toString());
        console.log("playerMin: " + _player.minPrecision);
        let precisionOfPlayerMax = document.getElementById("PrecisionSliderMax");
        precisionOfPlayerMax.value = (_player.maxPrecision.toString());
        //precisionOfPlayer?.setAttribute("value", (playerSafe.precision.toString()));
        let paceOfPlayerMin = document.getElementById("PaceSliderMin");
        paceOfPlayerMin.value = (_player.minPace.toString());
        let paceOfPlayerMax = document.getElementById("PaceSliderMax");
        paceOfPlayerMax.value = (_player.maxPace.toString());
        let tricotcolorOfPlayer = document.getElementById("tricotcolor");
        tricotcolorOfPlayer.value = (_player.tricotcolor.toString());
        for (let player of playerArray) {
            if (player.name == _player.name) {
                playerToChange.push(_player);
                console.log("!!! " + _player + " wurde in das Array gepusht");
                if (playerToChange.length > 1) {
                    playerToChange.splice(0, 1);
                    console.log("!!!! " + playerToChange[0] + " wurde aus dem Array gespliced");
                }
            }
        }
    }
    function formchange() {
        console.log("--- Reading new data from form");
        let formData = new FormData(document.forms[0]);
        let player = playerToChange[0];
        player.minPrecision = parseInt(formData.get("PrecisionSliderMin")?.toString());
        player.maxPrecision = parseInt(formData.get("PrecisionSliderMax")?.toString());
        player.precision = Math.round(Math.random() * (player.maxPrecision - player.minPrecision) + player.minPrecision);
        let precision = document.getElementById("precision");
        precision.innerHTML = "!!! precision: " + player.precision;
        player.minPace = parseInt(formData.get("PaceSliderMin")?.toString());
        player.maxPace = parseInt(formData.get("PaceSliderMax")?.toString());
        player.pace = Math.round(Math.random() * (player.maxPace - player.minPace) + player.minPace);
        let pace = document.getElementById("pace");
        pace.innerHTML = "pace: " + player.pace;
        player.tricotcolor = formData.get("tricotcolor")?.toString();
    }
})(Fußball_Simulation || (Fußball_Simulation = {}));
//# sourceMappingURL=Script.js.map