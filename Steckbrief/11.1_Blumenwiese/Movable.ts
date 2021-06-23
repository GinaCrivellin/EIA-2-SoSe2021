namespace L11_1_Blumenwiese {

    export abstract class Movable {

        public position: Vector;
        public velocity: Vector;

        constructor(_position: Vector) {
            this.position = _position;

        }

        public abstract draw(): void;

        //public abstract update(): void;

        public move(_timeslice: number): void {
            let offset: Vector = new Vector(this.velocity.X, this.velocity.Y);

            offset.scale(_timeslice);
            this.position.add(offset);
                
            if (this.position.X < window.innerWidth) {
                this.position.X += window.innerWidth;
            }
        
            if (this.position.X > window.innerWidth) {
                this.position.X -= window.innerWidth;
            }

            if (this.position.Y < window.innerHeight) {
                this.position.Y += window.innerHeight;
            }
        
            if (this.position.Y > window.innerHeight) {
                this.position.Y -= window.innerHeight;
            }



        }

    }

}