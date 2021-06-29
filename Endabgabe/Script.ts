namespace Fußball_Simulation {
    window.addEventListener("load", handleload);

    window.addEventListener("click", moveBall);

    export let canvas: HTMLCanvasElement;
    export let crc2: CanvasRenderingContext2D;

    let canvasWidth: number = window.innerWidth;
    let canvasHeight: number = window.innerHeight;

    let ballArray: Ball[] = [];

    var background: HTMLImageElement = new Image();
    background.src = "Assets/field2.jpg";

    function handleload(): void {
        canvas = document.querySelector("canvas")!;
        canvas.id = "CanvasID";
        canvas.width = canvasWidth;
        canvas.height = canvasHeight;

        // Quelle: https://stackoverflow.com/questions/14012768/html5-canvas-background-image
        var background: HTMLImageElement = new Image();
        background.src = "Assets/field2.jpg";
        background.onload = function(): void {
            crc2.drawImage(background, window.innerWidth * 0.15, window.innerHeight * 0.065, canvasWidth - 400, canvasHeight - 100);  
        };

        crc2 = canvas.getContext("2d")!;

        window.setInterval(update, 20);
    }

    function update(): void {

        console.log("in update");

        crc2.drawImage(background, window.innerWidth * 0.15, window.innerHeight * 0.07, canvasWidth - 400, canvasHeight - 100); 
        
        createPlayer();

        createBall();

        
    }

    function createPlayer(): void {

        let playerPosition: Vector = new Vector(100, 100);
        let playerVelocity: Vector = new Vector(0, 0);
        let playerRadius: Vector = new Vector(10, 10);
        let tricotcolor: string = "#0A36AF";
        let name: string = "Immobile";
        let number: number = 17;
        let playerpace: number = 10;
        let playerPrecision: number = 10;


        let player: Player = new Player(playerPosition, playerVelocity, playerRadius, tricotcolor, name, number, playerPrecision, playerpace);

        player.draw();
    }

    function createBall(): void {

        let ballPosition: Vector = new Vector(100, 100);
        let ballVelocity: Vector = new Vector(0, 0);
        let ballRadius: Vector = new Vector(10, 10);
        let color: string = "red";

        let ball: Ball = new Ball(ballPosition, ballVelocity, ballRadius, color);

        ballArray.push(ball);

        ball.draw();
    }

    function moveBall(_event: MouseEvent): void {

        console.log("got Event");
        let xPos: number = _event.clientX; 
        let yPos: number = _event.clientY; 
        let ballPosition: Vector = new Vector (xPos, yPos);

        ballArray[0].klickPath(1 / 10, ballPosition);
    }
}