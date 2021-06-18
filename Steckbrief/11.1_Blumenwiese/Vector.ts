namespace L11_1_Blumenwiese {

    export class Vector {
        public X: number;
        public Y: number;

        constructor(_X: number, _Y: number) {
            this.X = _X;
            this.Y = _Y;
        }

        static getScale(_n0: number): Vector {
        let scaledVector: Vector = new Vector(_n0, _n0);
        return scaledVector;
        }

        public scale (_factor: number): void {
            this.X *= _factor;
            this.Y *= _factor;
        }


        public add(_added: Vector): void {
            this.X += _added.X;
            this.Y += _added.Y;
        }
    }
}