namespace Fußball_Simulation {

    export class Referee extends Human {

        moveRange: number = 20;


        constructor(_position: Vector, _velocity: Vector, _tricotcolor: string) {
            super(_position, _velocity, _tricotcolor);

            this.velocity = _velocity;
        }

        public move(_timeslice: number): void {

            let moveRange: number = 70;

            this.position.X = getBall().position.X;
            this.position.Y = getBall().position.Y - moveRange;

            if (getBall().position.X < window.innerWidth * 0.5) {
                this.position.X = getBall().position.X + moveRange;
            }

            if (getBall().position.X > window.innerWidth * 0.5) {
                this.position.X = getBall().position.X - moveRange;
            }
    
            super.move(_timeslice);
        }
    }
}