namespace Fußball_Simulation {

    export abstract class Movable {
        public position: Vector;
        public velocity: Vector;
        public radius: Vector;

        constructor(_position: Vector, _velocity: Vector, _radius: Vector) {
            this.velocity = _velocity;
            this.position = _position;
            this.radius = _radius;
        }

        abstract draw(): void;

        abstract move(_timeslice: number): void;


    }
}