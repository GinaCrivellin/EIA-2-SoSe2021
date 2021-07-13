namespace Fußball_Simulation {

    export class LineJudge extends Human {

        constructor(_position: Vector, _velocity: Vector, _tricotcolor: string) {
            super(_position, _velocity, _tricotcolor);
        }

        move(_timeslice: number): void {
            super.move(_timeslice);
        }
    }
}