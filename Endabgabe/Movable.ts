namespace Fußball_Simulation {

    export abstract class Movable {
        public position: Vector;
        public velocity: Vector;

        constructor(_position: Vector, _velocity: Vector) {
            this.velocity = _velocity;
            this.position = _position;
        }

        abstract draw(): void;

        public move(_timeslice: number): void {
            let offset: Vector = new Vector(this.velocity.X, this.velocity.Y);
                
            offset.scale(_timeslice);
            this.position.add(offset);
        }

        public setVelocity(vel: Vector): void {
            this.velocity = vel;
            console.log("new velocity was set");
        }


    }
}