namespace Fußball_Simulation {
    window.addEventListener("load", handleload);

    export let canvas: HTMLCanvasElement;
    export let crc2: CanvasRenderingContext2D;

    export let gameStatus: boolean;

    let scoreTeam1: number = 0;
    let scoreTeam2: number = 0;


    let canvasWidth: number = window.innerWidth;
    let canvasHeight: number = window.innerHeight;

    let playerArray: Player[] = [];
    let playerToChange: Player[] = [];

    let ballArray: Ball[] = [];

    export function getBall(): Ball {
        return ballArray[0];
    }

    export function pauseGame(): void {
        console.log("game was paused");
        gameStatus = true;
    }

    export function resumeGame(): void {
        gameStatus = false;

        window.addEventListener("click", firstBallMove);
        console.log("game was resumed");
    }

    export function formStatusV(): void {
        let form: HTMLElement = document.querySelector("#FormBox")!;
        form.style.visibility = "visible";

        pauseGame();
    }

    export function formStatusH(): void {
        let form: HTMLElement = document.querySelector("#FormBox")!;
        form.style.visibility = "hidden";

        resumeGame();
    }

    function resetGame(): void {
        playerArray = [];

        ballArray = [];

        createPlayer();

        createBall();
    }

    function handleload(): void {

        window.addEventListener("click", firstBallMove);

        formStatusH();

        resumeGame();

        let form: HTMLElement = <HTMLElement> document.querySelector("#FormBox");
        form.addEventListener("change", formchange);

        console.log("in handle");
        canvas = document.querySelector("canvas")!;
        canvas.id = "CanvasID";
        canvas.width = canvasWidth;
        canvas.height = canvasHeight;

        crc2 = canvas.getContext("2d")!;

        let scoreTeam1: number = 0;
        let scoreTeam2: number = 0;

        let score: HTMLElement = document.getElementById("score")!;
        score.innerHTML = "current score: " + scoreTeam1 + " | " + scoreTeam2;

        createBackground();

        createField();

        createPlayer();

        createBall();

        window.setInterval(update, 20);

        initialize();
    }

    function update(): void {

        //crc2.drawImage(background, window.innerWidth * 0.15, window.innerHeight * 0.07, canvasWidth - 400, canvasHeight - 100); 

        if (gameStatus == false) {
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

                let score: HTMLElement = document.getElementById("score")!;
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

                let score: HTMLElement = document.getElementById("score")!;
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

    export function moveBall(_newDir: Vector): void {
    
        ballArray[0].setVelocity(_newDir);
    }

    function firstBallMove(_evt: MouseEvent): void {
        let dir: Vector = Vector.getDifference(new Vector(_evt.x, _evt.y), getBall().position);
        dir = dir.normalize();
        dir.scale(50);
        moveBall(dir);

        window.removeEventListener("click", firstBallMove);
    }

    function createPlayer(): void {

        let playerVelocity: Vector = new Vector(0, 0);

        interface PlayerSkills {
            name: string;
            tricotcolor: string;
            number: number;
            playerPace: number;
            playerPrecision: number;
            team: number;
        }

        let playerSkills: PlayerSkills[] = [

            {
                name:  "Immobile",
                tricotcolor: "#0A36AF",
                number: 17,
                playerPace: 10,
                playerPrecision: 0,
                team: 1  
            },

            {
                name:  "Chiellini",
                tricotcolor: "#0A36AF",
                number: 3,
                playerPace: 10,
                playerPrecision: 10,
                team: 1    
            },

            {
                name:  "Donnarumma",
                tricotcolor: "#0A36AF",
                number: 21,
                playerPace: 10,
                playerPrecision: 10,
                team: 1   
            },

            {
                name:  "Spinazzola",
                tricotcolor: "#0A36AF",
                number: 4,
                playerPace: 10,
                playerPrecision: 10,
                team: 1    
            },

            {
                name:  "Bonucci",
                tricotcolor: "#0A36AF",
                number: 19,
                playerPace: 10,
                playerPrecision: 10,
                team: 1    
            },

            {
                name:  "Di Lorenzo",
                tricotcolor: "#0A36AF",
                number: 2,
                playerPace: 10,
                playerPrecision: 10,
                team: 1    
            },

            {
                name:  "Pessina",
                tricotcolor: "#0A36AF",
                number: 12,
                playerPace: 10,
                playerPrecision: 10,
                team: 1    
            },

            {
                name:  "Locatelli",
                tricotcolor: "#0A36AF",
                number: 5,
                playerPace: 10,
                playerPrecision: 10,
                team: 1    
            },

            {
                name:  "Barella",
                tricotcolor: "#0A36AF",
                number: 18,
                playerPace: 10,
                playerPrecision: 10,
                team: 1    
            },

            {
                name:  "Chiesa",
                tricotcolor: "#0A36AF",
                number: 14,
                playerPace: 10,
                playerPrecision: 10,
                team: 1    
            },

            {
                name:  "Insigne",
                tricotcolor: "#0A36AF",
                number: 10,
                playerPace: 10,
                playerPrecision: 10,
                team: 1    
            },

            //

            {
                name:  "Müller",
                tricotcolor: "#f5b342",
                number: 17,
                playerPace: 10,
                playerPrecision: 10,
                team: 2   
            },

            {
                name:  "Schmidt",
                tricotcolor: "#f5b342",
                number: 3,
                playerPace: 10,
                playerPrecision: 10,
                team: 2    
            },

            {
                name:  "Schneider",
                tricotcolor: "#f5b342",
                number: 21,
                playerPace: 10,
                playerPrecision: 10,
                team: 2    
            },

            {
                name:  "Günter",
                tricotcolor: "#f5b342",
                number: 4,
                playerPace: 10,
                playerPrecision: 10,
                team: 2  
            },

            {
                name:  "Fischer",
                tricotcolor: "#f5b342",
                number: 19,
                playerPace: 10,
                playerPrecision: 10,
                team: 2   
            },

            {
                name:  "Weber",
                tricotcolor: "#f5b342",
                number: 2,
                playerPace: 10,
                playerPrecision: 10,
                team: 2    
            },

            {
                name:  "Meyer",
                tricotcolor: "#f5b342",
                number: 12,
                playerPace: 10,
                playerPrecision: 10,
                team: 2   
            },

            {
                name:  "Wagner",
                tricotcolor: "#f5b342",
                number: 5,
                playerPace: 10,
                playerPrecision: 10,
                team: 2   
            },

            {
                name:  "Schulz",
                tricotcolor: "#f5b342",
                number: 18,
                playerPace: 10,
                playerPrecision: 10,
                team: 2   
            },

            {
                name:  "Braun",
                tricotcolor: "#f5b342",
                number: 14,
                playerPace: 10,
                playerPrecision: 10,
                team: 2   
            },

            {
                name:  "Koch",
                tricotcolor: "#f5b342",
                number: 10,
                playerPace: 10,
                playerPrecision: 10,
                team: 2   
            }
        ];

        let startPositionArrayTeam1: Vector[] = 
        [
            new Vector(window.innerWidth * 0.47, window.innerHeight * 0.3),
            new Vector(window.innerWidth * 0.47, window.innerHeight * 0.7),
            
            new Vector(window.innerWidth * 0.35, window.innerHeight * 0.25),
            new Vector(window.innerWidth * 0.35, window.innerHeight * 0.75),
            new Vector(window.innerWidth * 0.4, window.innerHeight * 0.5),
            new Vector(window.innerWidth * 0.3, window.innerHeight * 0.5), 
            
            new Vector(window.innerWidth * 0.2, window.innerHeight * 0.23),
            new Vector(window.innerWidth * 0.2, window.innerHeight * 0.77),
            new Vector(window.innerWidth * 0.25, window.innerHeight * 0.35),
            new Vector(window.innerWidth * 0.25, window.innerHeight * 0.65),

            new Vector(window.innerWidth * 0.15, window.innerHeight * 0.5)
        ];

        let startPositionArrayTeam2: Vector[] = 
        [
            new Vector(window.innerWidth * 0.53, window.innerHeight * 0.3),
            new Vector(window.innerWidth * 0.53, window.innerHeight * 0.7),
            
            new Vector(window.innerWidth * 0.65, window.innerHeight * 0.25),
            new Vector(window.innerWidth * 0.65, window.innerHeight * 0.75),
            new Vector(window.innerWidth * 0.6, window.innerHeight * 0.5),
            new Vector(window.innerWidth * 0.7, window.innerHeight * 0.5), 
            
            new Vector(window.innerWidth * 0.8, window.innerHeight * 0.23),
            new Vector(window.innerWidth * 0.8, window.innerHeight * 0.77),
            new Vector(window.innerWidth * 0.75, window.innerHeight * 0.35),
            new Vector(window.innerWidth * 0.75, window.innerHeight * 0.65),

            new Vector(window.innerWidth * 0.85, window.innerHeight * 0.5)
        ];

        //console.log(startPositionArray[0][0]);

        for (let i: number = 0; i < startPositionArrayTeam1.length; i++) {

            let player: Player = new Player((startPositionArrayTeam1[i]), playerVelocity, playerSkills[i].tricotcolor, playerSkills[i].name, playerSkills[i].number, playerSkills[i].playerPrecision, playerSkills[i].playerPace, playerSkills[i].team);
            player.draw();
            //console.log("Player" + i + "is drawn");
            playerArray.push(player);
        }

        for (let j: number = 0; j < startPositionArrayTeam2.length; j++) {

            let player: Player = new Player((startPositionArrayTeam2[j]), playerVelocity, playerSkills[j + 11].tricotcolor, playerSkills[j + 11].name, playerSkills[j + 11].number, playerSkills[j + 11].playerPrecision, playerSkills[j + 11].playerPace, playerSkills[j + 11].team);
            player.draw();
            //console.log("Player" + j + "is drawn");
            playerArray.push(player);
        }

    }

    function createBall(): void {

        let ballPosition: Vector = new Vector(window.innerWidth * 0.5, window.innerHeight * 0.5);
        let ballVelocity: Vector = new Vector(0, 0);
        let color: string = "red";

        let ball: Ball = new Ball(ballPosition, ballVelocity, color);

        ball.draw();

        ballArray.push(ball);

    }

    function createBackground(): void {
        
        crc2.beginPath();

        crc2.save();

        crc2.moveTo(0, 0);
        crc2.translate(0, 0);
        crc2.rect(0, 0, window.innerWidth, window.innerHeight);

        crc2.strokeStyle = "white";
        crc2.lineWidth = 3;
        crc2.fillStyle = "white";
        crc2.fill();

        crc2.stroke();

        crc2.restore();

        crc2.closePath();
    }

    function createField(): void {

        crc2.beginPath();

        // Feld außen grün
        crc2.save();

        crc2.moveTo(window.innerWidth * 0.1, window.innerHeight * 0.1);
        crc2.translate(window.innerWidth * 0.1, window.innerHeight * 0.1);
        crc2.rect(0, 0, window.innerWidth * 0.8, window.innerHeight * 0.8);

        crc2.strokeStyle = "white";
        crc2.lineWidth = 3;
        crc2.fillStyle = "green";
        crc2.fill();

        crc2.stroke();

        crc2.restore();

        // Feldlinie außen groß
        crc2.save();

        crc2.moveTo(window.innerWidth * 0.125, window.innerHeight * 0.15);
        crc2.translate(window.innerWidth * 0.125, window.innerHeight * 0.15);
        crc2.rect(0, 0, window.innerWidth * 0.75, window.innerHeight * 0.7);

        crc2.strokeStyle = "white";
        crc2.lineWidth = 3;

        crc2.stroke();

        crc2.restore();


        // Tor groß
        crc2.save();

        crc2.moveTo(window.innerWidth * 0.125, window.innerHeight * 0.255);
        crc2.translate(window.innerWidth * 0.125, window.innerHeight * 0.25);
        crc2.rect(0, 0, window.innerWidth * 0.12, window.innerHeight * 0.5);

        crc2.strokeStyle = "white";
        crc2.lineWidth = 3;

        crc2.stroke();

        crc2.restore();

        // Tor klein
        crc2.save();

        crc2.moveTo(window.innerWidth * 0.125, window.innerHeight * 0.35);
        crc2.translate(window.innerWidth * 0.125, window.innerHeight * 0.35);
        crc2.rect(0, 0, window.innerWidth * 0.05, window.innerHeight * 0.3);

        crc2.strokeStyle = "white";
        crc2.lineWidth = 3;

        crc2.stroke();

        crc2.restore();

        // Tor rechts groß
        crc2.save();

        crc2.moveTo(window.innerWidth * 0.875, window.innerHeight * 0.255);
        crc2.translate(window.innerWidth * 0.875, window.innerHeight * 0.255);
        crc2.rect(0, 0, - window.innerWidth * 0.12, window.innerHeight * 0.5);

        crc2.strokeStyle = "white";
        crc2.lineWidth = 3;

        crc2.stroke();

        crc2.restore();

        // Tor rechts klein
        crc2.save();

        crc2.moveTo(window.innerWidth * 0.875, window.innerHeight * 0.35);
        crc2.translate(window.innerWidth * 0.875, window.innerHeight * 0.35);
        crc2.rect(0, 0, - window.innerWidth * 0.05, window.innerHeight * 0.3);

        crc2.strokeStyle = "white";
        crc2.lineWidth = 3;

        crc2.stroke();

        crc2.restore();

        // Mittellinie
        crc2.save();

        crc2.moveTo(window.innerWidth * 0.5, window.innerHeight * 0.1);
        crc2.translate(window.innerWidth * 0.5, window.innerHeight * 0.1);
        crc2.lineTo(0, window.innerHeight * 0.8);

        crc2.strokeStyle = "white";
        crc2.lineWidth = 3;

        crc2.stroke();

        crc2.restore();

        crc2.closePath();

        // MITTELKREIS
        crc2.beginPath();

        crc2.save();

        //crc2.moveTo(window.innerWidth * 0.5, window.innerHeight * 0.5);
        //crc2.translate(window.innerWidth * 0.5, window.innerHeight * 0.5);
        crc2.arc(window.innerWidth * 0.5, window.innerHeight * 0.5, 50, 0, 2 * Math.PI);

        crc2.strokeStyle = "white";
        crc2.lineWidth = 3;

        crc2.stroke();

        crc2.restore();

        crc2.closePath();
    }// ceateField

    // Quelle: https://stackoverflow.com/questions/61574962/how-to-add-event-listenerclick-to-a-canvas-object
    function initialize(): void {

        canvas.addEventListener("mousedown", function(evt: MouseEvent): void {

            console.log("1111111111111 eventlistener in initialize");

            let x: number = evt.clientX;
            let y: number = evt.clientY;

            let playerClicked: Player | null = null;
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
    }// initilize

    function showForm(_player: Player): void {

        console.log("!! showform wurde gestartet mit " + _player.name);

        //playerArray.splice(playerArray.indexOf(_player, 1));

        let name: HTMLElement = document.querySelector("#PlayerName")!;
        name.innerHTML = _player.name;
        let number: HTMLElement = document.querySelector("#PlayerNumber")!;
        number.innerHTML = _player.number.toString();
        let precision: HTMLElement = document.querySelector("#precision")!;
        precision.innerHTML = "precision: " + _player.precision.toString();
        let pace: HTMLElement = document.querySelector("#pace")!;
        pace.innerHTML = "pace: " + _player.pace.toString();
        let tricotcolor: HTMLElement = document.querySelector("#tricotcolor")!;
        tricotcolor.innerHTML = "tricotcolor: " + _player.tricotcolor.toString();

        let i: number;
        let y: number;
        let j: number;
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
            let dropdown: HTMLInputElement = <HTMLInputElement>document.getElementById("player" + i)!;
            dropdown.value = playerArray[y].name;
            dropdown.innerHTML = playerArray[y].name;
            i++;
            y++;
        }



        let precisionOfPlayerMin: HTMLInputElement = <HTMLInputElement>document.getElementById("PrecisionSliderMin");
        precisionOfPlayerMin.value = (_player.minPrecision.toString());

        let precisionOfPlayerMax: HTMLInputElement = <HTMLInputElement>document.getElementById("PrecisionSliderMax");
        precisionOfPlayerMax.value = (_player.maxPrecision.toString());

        let paceOfPlayerMin: HTMLInputElement = <HTMLInputElement>document.getElementById("PaceSliderMin");
        paceOfPlayerMin.value = (_player.minPace.toString());

        let paceOfPlayerMax: HTMLInputElement = <HTMLInputElement>document.getElementById("PaceSliderMax");
        paceOfPlayerMax.value = (_player.maxPace.toString());

        let tricotcolorOfPlayer: HTMLInputElement = <HTMLInputElement>document.getElementById("tricotcolor");
        tricotcolorOfPlayer.value = (_player.tricotcolor.toString());

        for (let player of playerArray) {
            if (player.name == _player.name) {
                playerToChange.push(_player);

                //console.log("!!! " + _player + " wurde in das Array gepusht");

                if (playerToChange.length > 1) {
                    playerToChange.splice(0, 1);
                    //console.log("!!!! " + playerToChange[0] + " wurde aus dem Array gespliced");
                }// if
            }// if
        }// for

        let dropdown: HTMLElement = document.getElementById("selectPlayer")!;

        dropdown.addEventListener ("change", function (): void {

            console.log("clicked on dropdown?!");
            
            for (let player of playerArray) {
                let i: number = 0;
                let playerEntry: HTMLElement = document.getElementById("player" + i)!;

                if ( playerEntry?.innerHTML == player.name) {
                    showForm(player);
                }

                i++;
            }
        });
    }// showForm

    function formchange(): void {
        //console.log("--- Reading new data from form");
        let formData: FormData = new FormData(document.forms[0]);

        let player: Player = playerToChange[0];

        player.minPrecision = parseInt(formData.get("PrecisionSliderMin")?.toString()!);
        player.maxPrecision = parseInt(formData.get("PrecisionSliderMax")?.toString()!);
        player.precision = Math.round(Math.random() * (player.maxPrecision - player.minPrecision) + player.minPrecision);
        
        let precision: HTMLElement = document.getElementById("precision")!;
        precision.innerHTML = "precision: " + player.precision;

        player.minPace = parseInt(formData.get("PaceSliderMin")?.toString()!);
        player.maxPace = parseInt(formData.get("PaceSliderMax")?.toString()!);
        player.pace = Math.round(Math.random() * (player.maxPace - player.minPace) + player.minPace);
        
        let pace: HTMLElement = document.getElementById("pace")!;
        pace.innerHTML = "pace: " + player.pace;

        player.tricotcolor = formData.get("tricotcolor")?.toString()!;
    }// formchange
}// namespace