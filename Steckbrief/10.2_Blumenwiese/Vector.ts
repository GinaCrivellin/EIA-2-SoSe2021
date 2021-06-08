namespace L10_2_Blumenwiese {

    export class Vector {
        X: number;
        Y: number;

        constructor(_X: number, _Y: number) {
            this.X = _X;
            this.Y = _Y;
        }

        scale (_factor: number): void {
            this.X *= _factor;
            this.Y *= _factor;
        }

        add(_added: Vector): void {
            this.X += _added.X;
            this.Y += _added.Y;
        }
    }
}