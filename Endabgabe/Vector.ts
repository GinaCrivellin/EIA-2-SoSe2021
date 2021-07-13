namespace Fußball_Simulation {

    export function toRadians(_deg: number): number {
        return _deg / 180 * Math.PI;
    }

    export function randInterval(_a: number, _b: number): number {
        return Math.random() * (_b - _a) + _a;
    }

    export class Vector {
        public X: number;
        public Y: number;

        constructor(_X: number, _Y: number) {
            this.X = _X;
            this.Y = _Y;
        }

        public static getDifference(_v1: Vector, _v2: Vector): Vector {
            let difference: Vector = new Vector(_v1.X - _v2.X, _v1.Y - _v2.Y);
            return difference;
        }

        public static dot(_a: Vector, _b: Vector): number {
            return _a.X * _b.X + _a.Y * _b.Y;
        }

        public scale (_factor: number): void {
            this.X *= _factor;
            this.Y *= _factor;
        }

        public add(_added: Vector): void {
            this.X += _added.X;
            this.Y += _added.Y;
        }

        public length(): number {
            let normal: number = Math.sqrt(this.X * this.X + this.Y * this.Y);
            return normal;
        }

        public normalize(): Vector {
            const length: number = this.length();
            
            return new Vector(this.X / length, this.Y / length);

        }
    }
}