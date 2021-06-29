namespace Fußball_Simulation {

    interface StartPositions {
        Stürmer: {
            links: Vector
            rechts: Vector
        };
        Mittelfeld: {
            links: Vector;
            rechts: Vector;
            mitte: Vector
            mitteHinten: Vector;
        };
        Abwehr: {
            außenLinks: Vector;
            außenRechts: Vector;
            innenLinks: Vector;
            innenRechts: Vector;
        };
        Tor: Vector;
    }

    export class Player extends Human {
        public name: string;
        public number: number;
        public precision: number;
        public pace: number;

        constructor(_position: Vector, _velocity: Vector, _radius: Vector, _tricotcolor: string, _name: string, _number: number, _precision: number, _pace: number) {
            super(_position, _velocity, _radius, _tricotcolor);
            this.name = _name;
            this.number = _number;
            this.precision = _precision;

        }

        draw(): void {

            let startPositions: StartPositions = 
                {
                Stürmer: {
                    links: new Vector(window.innerWidth * 0.5, window.innerHeight * 0.2),
                    rechts: new Vector(window.innerWidth * 0.5, window.innerHeight * 0.8)
                },
                Mittelfeld: {
                    links: new Vector(window.innerWidth * 0.5, window.innerHeight * 0.2),
                    rechts: new Vector(window.innerWidth * 0.5, window.innerHeight * 0.8),
                    mitte: new Vector(window.innerWidth * 0.5, window.innerHeight * 0.2),
                    mitteHinten: new Vector(window.innerWidth * 0.5, window.innerHeight * 0.8)
                },
                Abwehr: {
                    außenLinks: new Vector(window.innerWidth * 0.4, window.innerHeight * 0.3),
                    außenRechts: new Vector(window.innerWidth * 0.5, window.innerHeight * 0.8),
                    innenLinks: new Vector(window.innerWidth * 0.5, window.innerHeight * 0.2),
                    innenRechts: new Vector(window.innerWidth * 0.5, window.innerHeight * 0.8)
                },
                Tor: new Vector(window.innerWidth * 0.5, window.innerHeight * 0.2)
                };

            this.position = startPositions.Abwehr.außenLinks;

            console.log("position changed");
            super.draw();
        }

        move(_timeslice: number): void {
            super.move(_timeslice);
        }
    }
}