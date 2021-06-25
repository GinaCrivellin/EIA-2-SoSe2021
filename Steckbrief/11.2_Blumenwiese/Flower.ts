namespace L11_1_Blumenwiese {

    export abstract class Flower {
        public position: Vector;
        public stemColor: string;
        public leaveColor: string;
        public fillHeight: number;

        public nectarBar: Nectar;


        constructor(_position: Vector, _stemColor: string, _leaveColor: string, _fillHeight: number) {
            this.position = _position;
            this.stemColor = _stemColor;
            this.leaveColor = _leaveColor;
            this.fillHeight = _fillHeight;
            this.nectarBar = new Nectar(new Vector (_position.X, _position.Y));
        }

        public abstract draw(): void;

    }
}