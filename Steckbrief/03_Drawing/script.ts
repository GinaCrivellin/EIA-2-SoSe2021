namespace Cnavas {
    window.addEventListener("load", handleload);
    let crc2: CanvasRenderingContext2D;

    let randomX: number = Math.floor(Math.random() * 500);
    let randomY: number = Math.floor(Math.random() * 500);


    function handleload (): void {

        let canvas: HTMLCanvasElement = document.querySelector("canvas")!;
        let crc2: CanvasRenderingContext2D = canvas.getContext("2d")!;

        canvas.width  = 600;
        canvas.height = 600;

        createTriangle();


        for (let i: number = 1; i < 6 ; i++) {
        crc2.save();
        crc2.translate(randomX, randomY);
        crc2.rotate(53 * Math.PI / 180);
        crc2.translate(-randomX, -randomY);
        createTriangle();
        }

        /*
        createCurve();
        
        crc2.save();
        crc2.translate(0, 0);
        crc2.rotate(20 * Math.PI / 180);
        createCurve();

        crc2.restore();

        crc2.save();
        crc2.translate(0, 0);
        crc2.rotate(40 * Math.PI / 180);
        createCurve();

        crc2.restore();

        crc2.save();
        crc2.translate(0, 0);
        crc2.rotate(60 * Math.PI / 180);
        createCurve();

        crc2.restore();

        crc2.translate(0, 0);
        crc2.rotate(80 * Math.PI / 180);
        createCurve();
        */


    }

    function createCurve (): void {
        let canvas: HTMLCanvasElement = document.querySelector("canvas")!;
        let crc2: CanvasRenderingContext2D = canvas.getContext("2d")!;

        let randomX: number = Math.floor(Math.random() * 200);
        let randomY: number = Math.floor(Math.random() * 300);

        crc2.beginPath();
        crc2.moveTo(300, 300);
        crc2.bezierCurveTo(20, 200, 200, 100, randomY, 20);
        crc2.closePath();

        crc2.stroke();
    }

    function createTriangle (): void {
        let canvas: HTMLCanvasElement = document.querySelector("canvas")!;
        let crc2: CanvasRenderingContext2D = canvas.getContext("2d")!;


        crc2.beginPath();
        crc2.moveTo(randomX, randomY);
        crc2.lineTo(randomX - 50, randomY + 100);
        crc2.lineTo(randomX + 50, randomY + 100);
        crc2.closePath();

        crc2.stroke();

    }
}
