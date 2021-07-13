"use strict";
var Fußball_Simulation;
(function (Fußball_Simulation) {
    window.addEventListener("load", handleload);
    let scoreTeam1 = 0;
    let scoreTeam2 = 0;
    let canvasWidth = window.innerWidth;
    let canvasHeight = window.innerHeight;
    let playerArray = [];
    let playerToChange = [];
    let ballArray = [];
    function getBall() {
        return ballArray[0];
    }
    Fußball_Simulation.getBall = getBall;
    function pauseGame() {
        console.log("game was paused");
        Fußball_Simulation.gameStatus = true;
    }
    Fußball_Simulation.pauseGame = pauseGame;
    function resumeGame() {
        Fußball_Simulation.gameStatus = false;
        window.addEventListener("click", firstBallMove);
        console.log("game was resumed");
    }
    Fußball_Simulation.resumeGame = resumeGame;
    function formStatusV() {
        let form = document.querySelector("#FormBox");
        form.style.visibility = "visible";
        pauseGame();
    }
    Fußball_Simulation.formStatusV = formStatusV;
    function formStatusH() {
        let form = document.querySelector("#FormBox");
        form.style.visibility = "hidden";
        resumeGame();
    }
    Fußball_Simulation.formStatusH = formStatusH;
    function resetGame() {
        playerArray = [];
        ballArray = [];
        createPlayer();
        createBall();
    }
    function handleload() {
        window.addEventListener("click", firstBallMove);
        formStatusH();
        resumeGame();
        let form = document.querySelector("#FormBox");
        form.addEventListener("change", formchange);
        console.log("in handle");
        Fußball_Simulation.canvas = document.querySelector("canvas");
        Fußball_Simulation.canvas.id = "CanvasID";
        Fußball_Simulation.canvas.width = canvasWidth;
        Fußball_Simulation.canvas.height = canvasHeight;
        Fußball_Simulation.crc2 = Fußball_Simulation.canvas.getContext("2d");
        let scoreTeam1 = 0;
        let scoreTeam2 = 0;
        let score = document.getElementById("score");
        score.innerHTML = "current score: " + scoreTeam1 + " | " + scoreTeam2;
        createBackground();
        createField();
        createPlayer();
        createBall();
        window.setInterval(update, 20);
        initialize();
    }
    function update() {
        //crc2.drawImage(background, window.innerWidth * 0.15, window.innerHeight * 0.07, canvasWidth - 400, canvasHeight - 100); 
        if (Fußball_Simulation.gameStatus == false) {
            createBackground();
            createField();
            for (let player of playerArray) {
                player.update();
                player.draw();
                player.move(1 / 40);
            }
            ballArray[0].draw();
            ballArray[0].move(1 / 40);
            // Tor links
            if (ballArray[0].position.X < window.innerWidth * 0.125 && ballArray[0].position.X < window.innerWidth * 0.13 && ballArray[0].position.Y > window.innerHeight * 0.35 && ballArray[0].position.Y < window.innerHeight * 0.65) {
                resetGame();
                scoreTeam2++;
                let score = document.getElementById("score");
                score.innerHTML = "current score: " + scoreTeam1 + " | " + scoreTeam2;
            }
            /*

            // Unten am Tor vorbei
            if (ballArray[0].position.X < window.innerWidth * 0.125 && ballArray[0].position.Y > window.innerHeight * 0.65) {
                resetGame();

                console.log("22")
            }

            // oben am Tor vorbei
            if (ballArray[0].position.X < window.innerWidth * 0.125 && ballArray[0].position.Y < window.innerHeight * 0.35) {
                resetGame();

                console.log("33")
            }

            */
            // Tor rechts
            if (ballArray[0].position.X > window.innerWidth * 0.870 && ballArray[0].position.X < window.innerWidth * 0.875 && ballArray[0].position.Y > window.innerHeight * 0.35 && ballArray[0].position.Y < window.innerHeight * 0.65) {
                resetGame();
                scoreTeam1++;
                let score = document.getElementById("score");
                score.innerHTML = "1 für rechts";
            }
            /*
            // Unten am Tor vorbei
            if (ballArray[0].position.X > window.innerWidth * 0.875 && ballArray[0].position.Y > window.innerHeight * 0.65) {
                resetGame();

                console.log("55")
            }

            // oben am Tor vorbei
            if (ballArray[0].position.X > window.innerWidth * 0.875 && ballArray[0].position.Y < window.innerHeight * 0.35) {
                resetGame();

                console.log("66")
            }

            */
            if (ballArray[0].position.X > window.innerWidth * 0.9) {
                resetGame();
            }
            if (ballArray[0].position.X < window.innerWidth * 0.1) {
                resetGame();
            }
            if (ballArray[0].position.Y > window.innerHeight * 0.9) {
                resetGame();
            }
            if (ballArray[0].position.Y < window.innerHeight * 0.1) {
                resetGame();
            }
        }
        else {
            return;
        }
    }
    function moveBall(_newDir) {
        ballArray[0].setVelocity(_newDir);
    }
    Fußball_Simulation.moveBall = moveBall;
    function firstBallMove(_evt) {
        let dir = Fußball_Simulation.Vector.getDifference(new Fußball_Simulation.Vector(_evt.x, _evt.y), getBall().position);
        dir = dir.normalize();
        dir.scale(50);
        moveBall(dir);
        window.removeEventListener("click", firstBallMove);
    }
    function createPlayer() {
        let playerVelocity = new Fußball_Simulation.Vector(0, 0);
        let playerSkills = [
            {
                name: "Immobile",
                tricotcolor: "#0A36AF",
                number: 17,
                playerPace: 10,
                playerPrecision: 0,
                team: 1
            },
            {
                name: "Chiellini",
                tricotcolor: "#0A36AF",
                number: 3,
                playerPace: 10,
                playerPrecision: 10,
                team: 1
            },
            {
                name: "Donnarumma",
                tricotcolor: "#0A36AF",
                number: 21,
                playerPace: 10,
                playerPrecision: 10,
                team: 1
            },
            {
                name: "Spinazzola",
                tricotcolor: "#0A36AF",
                number: 4,
                playerPace: 10,
                playerPrecision: 10,
                team: 1
            },
            {
                name: "Bonucci",
                tricotcolor: "#0A36AF",
                number: 19,
                playerPace: 10,
                playerPrecision: 10,
                team: 1
            },
            {
                name: "Di Lorenzo",
                tricotcolor: "#0A36AF",
                number: 2,
                playerPace: 10,
                playerPrecision: 10,
                team: 1
            },
            {
                name: "Pessina",
                tricotcolor: "#0A36AF",
                number: 12,
                playerPace: 10,
                playerPrecision: 10,
                team: 1
            },
            {
                name: "Locatelli",
                tricotcolor: "#0A36AF",
                number: 5,
                playerPace: 10,
                playerPrecision: 10,
                team: 1
            },
            {
                name: "Barella",
                tricotcolor: "#0A36AF",
                number: 18,
                playerPace: 10,
                playerPrecision: 10,
                team: 1
            },
            {
                name: "Chiesa",
                tricotcolor: "#0A36AF",
                number: 14,
                playerPace: 10,
                playerPrecision: 10,
                team: 1
            },
            {
                name: "Insigne",
                tricotcolor: "#0A36AF",
                number: 10,
                playerPace: 10,
                playerPrecision: 10,
                team: 1
            },
            //
            {
                name: "Müller",
                tricotcolor: "#f5b342",
                number: 17,
                playerPace: 10,
                playerPrecision: 10,
                team: 2
            },
            {
                name: "Schmidt",
                tricotcolor: "#f5b342",
                number: 3,
                playerPace: 10,
                playerPrecision: 10,
                team: 2
            },
            {
                name: "Schneider",
                tricotcolor: "#f5b342",
                number: 21,
                playerPace: 10,
                playerPrecision: 10,
                team: 2
            },
            {
                name: "Günter",
                tricotcolor: "#f5b342",
                number: 4,
                playerPace: 10,
                playerPrecision: 10,
                team: 2
            },
            {
                name: "Fischer",
                tricotcolor: "#f5b342",
                number: 19,
                playerPace: 10,
                playerPrecision: 10,
                team: 2
            },
            {
                name: "Weber",
                tricotcolor: "#f5b342",
                number: 2,
                playerPace: 10,
                playerPrecision: 10,
                team: 2
            },
            {
                name: "Meyer",
                tricotcolor: "#f5b342",
                number: 12,
                playerPace: 10,
                playerPrecision: 10,
                team: 2
            },
            {
                name: "Wagner",
                tricotcolor: "#f5b342",
                number: 5,
                playerPace: 10,
                playerPrecision: 10,
                team: 2
            },
            {
                name: "Schulz",
                tricotcolor: "#f5b342",
                number: 18,
                playerPace: 10,
                playerPrecision: 10,
                team: 2
            },
            {
                name: "Braun",
                tricotcolor: "#f5b342",
                number: 14,
                playerPace: 10,
                playerPrecision: 10,
                team: 2
            },
            {
                name: "Koch",
                tricotcolor: "#f5b342",
                number: 10,
                playerPace: 10,
                playerPrecision: 10,
                team: 2
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
            let player = new Fußball_Simulation.Player((startPositionArrayTeam1[i]), playerVelocity, playerSkills[i].tricotcolor, playerSkills[i].name, playerSkills[i].number, playerSkills[i].playerPrecision, playerSkills[i].playerPace, playerSkills[i].team);
            player.draw();
            //console.log("Player" + i + "is drawn");
            playerArray.push(player);
        }
        for (let j = 0; j < startPositionArrayTeam2.length; j++) {
            let player = new Fußball_Simulation.Player((startPositionArrayTeam2[j]), playerVelocity, playerSkills[j + 11].tricotcolor, playerSkills[j + 11].name, playerSkills[j + 11].number, playerSkills[j + 11].playerPrecision, playerSkills[j + 11].playerPace, playerSkills[j + 11].team);
            player.draw();
            //console.log("Player" + j + "is drawn");
            playerArray.push(player);
        }
    }
    function createBall() {
        let ballPosition = new Fußball_Simulation.Vector(window.innerWidth * 0.5, window.innerHeight * 0.5);
        let ballVelocity = new Fußball_Simulation.Vector(0, 0);
        let color = "red";
        let ball = new Fußball_Simulation.Ball(ballPosition, ballVelocity, color);
        ball.draw();
        ballArray.push(ball);
    }
    function createBackground() {
        Fußball_Simulation.crc2.beginPath();
        Fußball_Simulation.crc2.save();
        Fußball_Simulation.crc2.moveTo(0, 0);
        Fußball_Simulation.crc2.translate(0, 0);
        Fußball_Simulation.crc2.rect(0, 0, window.innerWidth, window.innerHeight);
        Fußball_Simulation.crc2.strokeStyle = "white";
        Fußball_Simulation.crc2.lineWidth = 3;
        Fußball_Simulation.crc2.fillStyle = "white";
        Fußball_Simulation.crc2.fill();
        Fußball_Simulation.crc2.stroke();
        Fußball_Simulation.crc2.restore();
        Fußball_Simulation.crc2.closePath();
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
    } // ceateField
    // Quelle: https://stackoverflow.com/questions/61574962/how-to-add-event-listenerclick-to-a-canvas-object
    function initialize() {
        Fußball_Simulation.canvas.addEventListener("mousedown", function (evt) {
            console.log("1111111111111 eventlistener in initialize");
            let x = evt.clientX;
            let y = evt.clientY;
            let playerClicked = null;
            for (let player of playerArray) {
                if (player.checkClick(x, y) == true) {
                    playerClicked = player;
                }
            }
            if (playerClicked) {
                // A player has been clicked on
                formStatusV();
                showForm(playerClicked);
            }
            else {
                formStatusH();
            }
        }); // eventlistener
    } // initilize
    function showForm(_player) {
        console.log("!! showform wurde gestartet mit " + _player.name);
        //playerArray.splice(playerArray.indexOf(_player, 1));
        let name = document.querySelector("#PlayerName");
        name.innerHTML = _player.name;
        let number = document.querySelector("#PlayerNumber");
        number.innerHTML = _player.number.toString();
        let precision = document.querySelector("#precision");
        precision.innerHTML = "precision: " + _player.precision.toString();
        let pace = document.querySelector("#pace");
        pace.innerHTML = "pace: " + _player.pace.toString();
        let tricotcolor = document.querySelector("#tricotcolor");
        tricotcolor.innerHTML = "tricotcolor: " + _player.tricotcolor.toString();
        let i;
        let y;
        let j;
        if (_player.team == 1) {
            i = 0;
            j = 12;
            y = 0;
        }
        else {
            i = 0;
            j = 23;
            y = 10;
        }
        while (y < j) {
            let dropdown = document.getElementById("player" + i);
            dropdown.value = playerArray[y].name;
            dropdown.innerHTML = playerArray[y].name;
            i++;
            y++;
        }
        let precisionOfPlayerMin = document.getElementById("PrecisionSliderMin");
        precisionOfPlayerMin.value = (_player.minPrecision.toString());
        let precisionOfPlayerMax = document.getElementById("PrecisionSliderMax");
        precisionOfPlayerMax.value = (_player.maxPrecision.toString());
        let paceOfPlayerMin = document.getElementById("PaceSliderMin");
        paceOfPlayerMin.value = (_player.minPace.toString());
        let paceOfPlayerMax = document.getElementById("PaceSliderMax");
        paceOfPlayerMax.value = (_player.maxPace.toString());
        let tricotcolorOfPlayer = document.getElementById("tricotcolor");
        tricotcolorOfPlayer.value = (_player.tricotcolor.toString());
        for (let player of playerArray) {
            if (player.name == _player.name) {
                playerToChange.push(_player);
                //console.log("!!! " + _player + " wurde in das Array gepusht");
                if (playerToChange.length > 1) {
                    playerToChange.splice(0, 1);
                    //console.log("!!!! " + playerToChange[0] + " wurde aus dem Array gespliced");
                } // if
            } // if
        } // for
        let dropdown = document.getElementById("selectPlayer");
        dropdown.addEventListener("change", function () {
            console.log("clicked on dropdown?!");
            for (let player of playerArray) {
                let i = 0;
                let playerEntry = document.getElementById("player" + i);
                if (playerEntry?.innerHTML == player.name) {
                    showForm(player);
                }
                i++;
            }
        });
    } // showForm
    function formchange() {
        //console.log("--- Reading new data from form");
        let formData = new FormData(document.forms[0]);
        let player = playerToChange[0];
        player.minPrecision = parseInt(formData.get("PrecisionSliderMin")?.toString());
        player.maxPrecision = parseInt(formData.get("PrecisionSliderMax")?.toString());
        player.precision = Math.round(Math.random() * (player.maxPrecision - player.minPrecision) + player.minPrecision);
        let precision = document.getElementById("precision");
        precision.innerHTML = "precision: " + player.precision;
        player.minPace = parseInt(formData.get("PaceSliderMin")?.toString());
        player.maxPace = parseInt(formData.get("PaceSliderMax")?.toString());
        player.pace = Math.round(Math.random() * (player.maxPace - player.minPace) + player.minPace);
        let pace = document.getElementById("pace");
        pace.innerHTML = "pace: " + player.pace;
        player.tricotcolor = formData.get("tricotcolor")?.toString();
    } // formchange
})(Fußball_Simulation || (Fußball_Simulation = {})); // namespace
//# sourceMappingURL=Script.js.map