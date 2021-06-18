namespace L11_1_Blumenwiese {

    export abstract class Movable {

        public position: Vector;
        public velocity: Vector;

        constructor(_position: Vector, _velocity: Vector) {
            this.position = _position;
            this.velocity = _velocity;

        }

        public abstract draw(): void;

        public move(_timeslice: number, _movePattern: boolean): void {
            let offset: Vector = new Vector(this.velocity.X, this.velocity.Y);

            offset.scale(_timeslice);
            this.position.add(offset);

            /*
            let offset2: Vector = new Vector(this.velocity.X, this.velocity.Y);

            offset2 = Vector.getScale(_timeslice);
            this.position.add(offset2);
            */

            if (_movePattern == false) {
                
                if (this.position.X < window.innerWidth) {
                    this.position.X += window.innerWidth;
                }
        
                if (this.position.X > window.innerWidth) {
                    this.position.X -= window.innerWidth;
                }
            }

            if (_movePattern == true) {

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

                if (this.position.X < window.innerWidth / 2) {
                this.velocity.Y = 20;
                }

                if (this.position.X > window.innerWidth / 2) {
                this.velocity.Y = -10;
                }

            }

        }

    }

}