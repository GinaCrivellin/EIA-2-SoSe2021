namespace Fußball_Simulation {
    window.addEventListener("load", handleload);

    export let canvas: HTMLCanvasElement;
    export let crc2: CanvasRenderingContext2D;

    let canvasWidth: number = window.innerWidth;
    let canvasHeight: number = window.innerHeight;

    let ballArray: Ball[] = [];

    interface StartPositions {
        Stürmer: {
            links: Vector
            rechts: Vector
        };
        Mittelfeld: {
            links: Vector;
            rechts: Vector;
            mitte: Vector
            mitteHinten: Vector;
        };
        Abwehr: {
            außenLinks: Vector;
            außenRechts: Vector;
            innenLinks: Vector;
            innenRechts: Vector;
        };
        Tor: Vector;
    }

    var background: HTMLImageElement = new Image();
    background.src = "Assets/field2.jpg";

    function handleload(): void {

        console.log("in handle");
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

        window.addEventListener("click", moveBall);

        function moveBall(_event: MouseEvent): void {

            console.log("got Event");
            let xPos: number = _event.clientX; 
            let yPos: number = _event.clientY; 
            let ballPosition: Vector = new Vector (xPos, yPos);
    
            ballArray[0].klickPath(1 / 10, ballPosition);
        }

        
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

        const startPositions: StartPositions = {
            Stürmer: {
                links: new Vector(window.innerWidth * 0.5, window.innerHeight * 0.2),
                rechts: new Vector(window.innerWidth * 0.5, window.innerHeight * 0.8)
            },
            Mittelfeld: {
                links: new Vector(window.innerWidth * 0.5, window.innerHeight * 0.2),
                rechts: new Vector(window.innerWidth * 0.5, window.innerHeight * 0.8),
                mitte: new Vector(window.innerWidth * 0.5, window.innerHeight * 0.2),
                mitteHinten: new Vector(window.innerWidth * 0.5, window.innerHeight * 0.8)
            },
            Abwehr: {
                außenLinks: new Vector(window.innerWidth * 0.4, window.innerHeight * 0.3),
                außenRechts: new Vector(window.innerWidth * 0.5, window.innerHeight * 0.8),
                innenLinks: new Vector(window.innerWidth * 0.5, window.innerHeight * 0.2),
                innenRechts: new Vector(window.innerWidth * 0.5, window.innerHeight * 0.8)
            },
            Tor: new Vector(window.innerWidth * 0.5, window.innerHeight * 0.2)
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
}