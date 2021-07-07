namespace Fußball_Simulation {

    export class Player extends Human {
        public name: string;
        public number: number;
        public precision: number;
        public pace: number;

        constructor(_position: Vector, _velocity: Vector, _radius: Vector, _tricotcolor: string, _name: string, _number: number, _precision: number, _pace: number) {
            super(_position, _velocity, _radius, _tricotcolor);
            this.name = _name;
            this.number = _number;
            this.precision = _precision;

        }

        draw(): void {

            console.log("position changed");
            super.draw();
        }

        move(_timeslice: number): void {
            super.move(_timeslice);
        }
    }
}