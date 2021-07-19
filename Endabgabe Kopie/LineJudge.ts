namespace Fußball_Simulation {

    export class LineJudge extends Human {

        height: number;

        constructor(_position: Vector, _velocity: Vector, _tricotcolor: string, _lineJudgeHeight: number) {
            super(_position, _velocity, _tricotcolor);

            this.height = _lineJudgeHeight;
        }

        public move(_timeslice: number): void {
            super.move(_timeslice);

            this.position.X = getBall().position.X;
            this.position.Y = this.height;
        }
    }
}