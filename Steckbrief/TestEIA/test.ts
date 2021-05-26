namespace Blumenwiese {
    window.addEventListener("load", handleload);

    let canvas: HTMLCanvasElement;
    export let crc2: CanvasRenderingContext2D;
    let horizon: number;

    let cloudArray: Cloud [] = [];
    let cloudSize: Vector = new Vector (250, 70);
    let xCloudArray: number [] = [];
    let yCloudArray: number [] = [];


    function handleload (): void {
        canvas = document.querySelector("canvas")!;
        canvas.id = "CanvasID";
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        canvas.style.backgroundColor = "#4c6273";

        crc2 = canvas.getContext("2d")!;

        horizon = window.innerHeight * 0.6;

        createCloudxy(20, cloudSize);

        createCloud();


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

        console.log("im at strat of createCloud");
        let randomXClouds1: number = Math.random() * (window.innerWidth * 0.3);
        let randomYClouds1: number = Math.random() * (window.innerHeight * 0.3);

        let randomXClouds2: number = Math.random() * (window.innerWidth * 0.9 - window.innerWidth * 0.4) + window.innerWidth * 0.4;
        let randomYClouds2: number = Math.random() * (window.innerHeight * 0.5 - window.innerHeight * 0.1) + window.innerHeight * 0.1;

        let cloud1Position1: Vector = new Vector (randomXClouds1, randomYClouds1);
        let cloud1Position2: Vector = new Vector (randomXClouds2, randomYClouds2);

        let cloudSize: Vector = new Vector (250, 70);

        let velocityClouds: Vector = new Vector (20, 5);

        let cloud1: Cloud = new Cloud (cloud1Position1, cloudSize, velocityClouds, xCloudArray[0], yCloudArray[0]);
        let cloud2: Cloud = new Cloud (cloud1Position2, cloudSize, velocityClouds, xCloudArray[0], yCloudArray[0]);


        cloud1.draw();
        cloud2.draw();
        console.log("drawn")

        cloudArray.push(cloud1);
        cloudArray.push(cloud2);

    }

}