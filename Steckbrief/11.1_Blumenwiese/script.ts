namespace L11_1_Blumenwiese {
    window.addEventListener("load", handleload);

    window.addEventListener("click", createBee);

    export let canvas: HTMLCanvasElement;
    export let crc2: CanvasRenderingContext2D;

    let horizon: number;

    export let flowerArray: Flower [] = [];
    export let occupiedFlowers: Flower [] = [];

    let stepArray: number [] = [];
    let heightArray: number [] = [];

    let starArray: Vector [] = [];

    let xCloudArray: number [] = [];
    let yCloudArray: number [] = [];

    let movableArray: Movable [] = [];

    


    function handleload (): void {
        canvas = document.querySelector("canvas")!;
        canvas.id = "CanvasID";
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        canvas.style.backgroundColor = "#4c6273";

        crc2 = canvas.getContext("2d")!;

        horizon = window.innerHeight * 0.6;

        createStarPosition();

        for (var i: number = 0; i < 15; i++) {

            drawStar(starArray[0].X, starArray[0].Y, 5, 10, 15);

        }

        createMountianSteps(50, 150, 100, 250);
        drawMountians(horizon, window.innerHeight * 0.4, 200, "#414447", "#a3adb5");
        drawMountians(horizon, window.innerHeight * 0.5, 200, "#5b6166", "#b7c1c9");

        drawMoon(window.innerWidth * 0.1, window.innerHeight * 0.1, 30, "rgb(255, 192, 92)", "rgb(255, 215, 105, 0.5)");
        
        drawGrass(horizon, "#3ba356", "#4f8f4f", "#376142");

        createTulip();

        createFlower();

        let cloudSize: Vector = new Vector (250, 70);
        createCloudxy(20, cloudSize);
        createCloud();

        window.setInterval(update, 20);
    }

    //
    //
    //
    //

    function update (): void {
        crc2.fillStyle = "#4c6273";
        crc2.fillRect(0, 0, window.innerWidth, window.innerHeight);

        for (var i: number = 0; i < 10; i++) {
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
            if (movable instanceof Bee) {
            movable.move(1 / 0.2);
            }
            if (movable instanceof Cloud) {
            movable.move(1 / 40);   
            }
        }

        drawMoon(window.innerWidth * 0.1, window.innerHeight * 0.1, 30, "rgb(255, 192, 92)", "rgb(255, 215, 105, 0.5)");

        drawBeeStock();

    }

    //
    //
    //
    //

    function createTulip(): void {
        for (let i: number = 0; i < 10; i++) {

            let randomXOnGrass: number = Math.random() * window.innerWidth;
            let randomYOnGrass: number = Math.random() * (window.innerHeight * 0.6 - window.innerHeight) + window.innerHeight;
    
            let flowerPosition2: Vector = new Vector (randomXOnGrass, randomYOnGrass);
    
            let tulip: Tulip = new Tulip (flowerPosition2, "#355233", "pink", 0);
    
            tulip.draw();

            flowerArray.push(tulip);
            occupiedFlowers.push(tulip);
    
        }
    }

    function createFlower(): void {
        for (let i: number = 0; i < 10; i++) {
            let randomXOnGrass: number = Math.random() * window.innerWidth;
            let randomYOnGrass: number = Math.random() * (window.innerHeight * 0.6 - window.innerHeight) + window.innerHeight;
            let flowerPosition: Vector = new Vector (randomXOnGrass, randomYOnGrass);

            let flowerLeft: Daisy = new Daisy(flowerPosition, "#355233", "orange", 10, 0);

            flowerLeft.draw();

            flowerArray.push(flowerLeft);
            occupiedFlowers.push(flowerLeft);
        }

        for (let i: number = 0; i < 10; i++) {
            let randomXOnGrass: number = Math.random() * window.innerWidth;
            let randomYOnGrass: number = Math.random() * (window.innerHeight * 0.6 - window.innerHeight) + window.innerHeight;
            let flowerPosition: Vector = new Vector (randomXOnGrass, randomYOnGrass);

            let flowerRight: Daisy = new Daisy(flowerPosition, "#355233", "#ffe357", -10, 0);

            flowerRight.draw();

            flowerArray.push(flowerRight);
            occupiedFlowers.push(flowerRight);
        }
    }

    function createBee(_event: MouseEvent): void {

        let xPos: number = _event.clientX; 
        let yPos: number = _event.clientY; 
        let beePosition: Vector = new Vector (xPos, yPos);
            
        let bee: Bee = new Bee(beePosition);

        bee.draw();

        movableArray.push(bee);

    }


    function createCloudxy (_particleNumber: number, _size: Vector): void {
        for (let i: number = 0; i < _particleNumber; i++) {
            let x: number = (Math.random() - 0.5) * _size.X;
            let y: number = - (Math.random() * _size.Y);

            xCloudArray.push(x);
            yCloudArray.push(y);
        }
    }

    function createCloud(): void {
        console.log("cloud function");
        let randomXClouds1: number = Math.random() * ((window.innerWidth * 0.7 - window.innerWidth * 0.5) + window.innerWidth * 0.5);
        let randomYClouds1: number = Math.random() * (window.innerHeight * 0.4 - window.innerHeight * 0.1) + window.innerHeight * 0.1;

        let randomXClouds2: number = Math.random() * ((window.innerWidth * 0.4 - window.innerWidth * 0.3) + window.innerWidth * 0.3);
        let randomYClouds2: number = Math.random() * (window.innerHeight * 0.6 - window.innerHeight * 0.4) + window.innerHeight * 0.4;

        let cloud1Position: Vector = new Vector (randomXClouds1, randomYClouds1);
        let cloud1Position2: Vector = new Vector (randomXClouds2, randomYClouds2);

        let velocityClouds1: Vector = new Vector (10, 0);
        let velocityClouds2: Vector = new Vector (-20, 0);

        for (let i: number = 0; i < 20; i++) {
            let cloud1: Cloud = new Cloud (cloud1Position, velocityClouds1, xCloudArray[i], yCloudArray[i]);
            let cloud2: Cloud = new Cloud (cloud1Position2, velocityClouds2, xCloudArray[i], yCloudArray[i]);
            
            cloud1.draw();
            cloud2.draw();
            console.log("gemalt");

            movableArray.push(cloud1);
            movableArray.push(cloud2);
        }


    }

    function drawGrass (_horizon: number, _color1: string, _color2: string, _color3: string): void {

        crc2.beginPath();
        crc2.moveTo(0, _horizon);
        crc2.lineTo(window.innerWidth, _horizon);
        crc2.lineTo(window.innerWidth, window.innerHeight);
        crc2.lineTo(0, window.innerHeight);
        crc2.lineTo(0, _horizon);

        crc2.strokeStyle = "rgba(1, 1, 1, 0)";

        let gradient: CanvasGradient = crc2.createLinearGradient(0, 0, 0, crc2.canvas.height);
        gradient.addColorStop(0, _color1);
        gradient.addColorStop(0.5, _color2);
        gradient.addColorStop(1, _color3);
        crc2.fillStyle = gradient;
        crc2.fill();

        crc2.closePath();

        crc2.stroke();
    }

    //inspired by Jirka

    function createMountianSteps(_stepMin: number, _stepMax: number, _heightMin: number, _heightMax: number): void {
        let x: number = 0;
        let y: number = 0;
        
        do {
            x += _stepMin + Math.random() * (_stepMax - _stepMin);
            y -= _heightMin - Math.random() * (_heightMax - _heightMin);

            stepArray.push(x);
            heightArray.push(y);

        } while (x < crc2.canvas.width);
        
    }

    function drawMountians (_horizon: number, _height: number, _heightMax: number, _colorLow: string, _colorHigh: string): void {

        crc2.save();

        crc2.beginPath();
        crc2.moveTo(0, _horizon);
        crc2.lineTo(0, _height);
        crc2.translate(0, _height);

        for (let i: number = 0; i < stepArray.length; i++) {
            crc2.lineTo(stepArray[i], heightArray[i]);
        }

        crc2.lineTo(window.innerWidth, _horizon);
        crc2.closePath();

        let gradient: CanvasGradient = crc2.createLinearGradient(0, 0, 0, - _heightMax);
        gradient.addColorStop(0, _colorLow);
        gradient.addColorStop(0.9, _colorHigh);

        crc2.fillStyle = gradient;
        crc2.fill();

        crc2.restore();

    }

    function drawMoon (_X: number, _Y: number, _radius: number, _color1: string, _color2: string): void {

        let gradient: CanvasGradient = crc2.createRadialGradient(0, 0, 0, 0, 0, 30);

        crc2.save();

        crc2.beginPath();
        crc2.moveTo(_X, _Y);
        crc2.translate(_X, _Y);
        crc2.arc(0, 0, _radius, 0, 2 * Math.PI);

        gradient.addColorStop(0, _color1);
        gradient.addColorStop(1, _color2);

        crc2.fillStyle = gradient;
        crc2.fill();
        crc2.strokeStyle = "rgba(1, 1, 1, 0)";

        crc2.stroke();

        crc2.restore();
    }

    // https://stackoverflow.com/questions/25837158/how-to-draw-a-star-by-using-canvas-html5

    function createStarPosition(): void {

        for (let i: number = 0; i < 10; i++) {
        let randomX: number = Math.random() * (window.innerWidth);
        let randomY: number = Math.random() * ((horizon - window.innerHeight * 0.3 ) + window.innerHeight * 0.1);

        starArray.push(new Vector(randomX, randomY));
        }
    }

    function drawStar (_cx: any, cy: any,spikes: any, outerRadius: any, innerRadius: any): void { 
        var rot: number = Math.PI / 2 * 3;
        var x: number = _cx;
        var y: number = cy;
        var step: number = Math.PI / spikes;

        crc2.save();
  
        crc2.beginPath();
        crc2.moveTo(_cx, cy - outerRadius);
        for (var i: number = 0; i < spikes; i++) {
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

    function drawBeeStock(): void {

        crc2.save();

        crc2.beginPath();
        crc2.moveTo(window.innerWidth * 0.8, window.innerHeight * 0.8);
        crc2.translate(window.innerWidth * 0.8, window.innerHeight * 0.8);

        crc2.ellipse(0, 0, 15, 30, 300, 0, 2 * Math.PI);
        crc2.stroke();

        crc2.ellipse(0, 10, 15, 35, 300, 0, 2 * Math.PI);
        crc2.stroke();
        
        crc2.ellipse(0, 20, 15, 40, 300, 0, 2 * Math.PI);
        crc2.stroke();

        crc2.ellipse(0, 30, 15, 44, 300, 0, 2 * Math.PI);
        crc2.stroke();

        crc2.shadowColor = "#243323";
        crc2.shadowOffsetX = 10;
        crc2.shadowOffsetY = 10;
        crc2.shadowBlur = 20;

        let gradient: CanvasGradient = crc2.createLinearGradient(0, 0, 15, 0);
        gradient.addColorStop(0, "#e0c270");
        gradient.addColorStop(0.9, "#c49e35");

        crc2.fillStyle = gradient;
        crc2.fill();


        crc2.stroke();

        crc2.closePath();

        crc2.restore();
    }
}