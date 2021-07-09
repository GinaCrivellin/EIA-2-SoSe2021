namespace Fußball_Simulation {

    export enum PlayerState {
        ToBall,
        GotBall,
        ShootBall,
        Stop
    }

    export class Player extends Human {

        public state: PlayerState = PlayerState.Stop;

        public name: string;
        public number: number;
        public precision: number;
        public pace: number;

        public minPace: number = 0;
        public maxPace: number = 0;
        public minPrecision: number = 0;
        public maxPrecision: number = 0;

        constructor(_position: Vector, _velocity: Vector, _radius: Vector, _tricotcolor: string, _name: string, _number: number, _precision: number, _pace: number) {
            super(_position, _velocity, _radius, _tricotcolor);
            this.name = _name;
            this.number = _number;
            this.precision = _precision;
            this.pace = _pace;
        }

        changeState(): void {
            this.state = PlayerState.Stop;
        }

        changePace(_newPace: number): void {
            this.pace = _newPace;
        }

        changePrecision(_newPrecision: number): void {
            this.precision = _newPrecision;
        }

        setVelocity(vel: Vector): void {
            this.velocity = vel;
        }

        draw(): void {
            super.draw();
        }

        move(_timeslice: number): void {
            super.move(_timeslice);
        }

        checkClick(_x: number, _y: number): boolean {
            let eventData: Vector = new Vector(_x, _y);

            let difference: Vector = Vector.getDifference(this.position, eventData);
            
            let length: number = difference.length();

            if (length < 40) {
            return true;
            }
        }

        update(): void {

            /*
            let checkForRadius: Vector = Vector.getDifference(getBall().position, this.position);
            
            if (checkForRadius.length() < 60) {

                checkForRadius = checkForRadius.normalize();

                checkForRadius.scale(this.pace);

                console.log("< 60");

                console.log("Velocity set to ball");

                this.setVelocity(checkForRadius);

            }
            if (checkForRadius.length() > 60) {
                
                this.setVelocity(new Vector(0, 0));
            }

            if (checkForRadius.length() < 20) {
                
                this.setVelocity(new Vector(0, 0));
            }

            */

            let checkForRadius: Vector = Vector.getDifference(getBall().position, this.position);
            const dist: number = checkForRadius.length();

            const detectionRadius: number = 60;
            const arriveRadius: number = 10;

            switch (this.state) {

                case PlayerState.Stop:
                    this.setVelocity(new Vector(0, 0));
                    if (dist < detectionRadius) {
                        this.state = PlayerState.ToBall;
                    }
    
                    break;
    
                case PlayerState.ToBall:
                    checkForRadius = checkForRadius.normalize();
                    checkForRadius.scale(this.pace);
                    this.setVelocity(checkForRadius);

                    if (dist <= arriveRadius) {
                        this.state = PlayerState.GotBall;
                        pauseGame();
                    }
                    else if (dist > detectionRadius) {
                        this.state = PlayerState.Stop;
                    }
                    break;

                case PlayerState.GotBall:
                    
                    this.setVelocity(new Vector(0, 0));

                    getBall().setVelocity(new Vector(0, 0));

                    window.addEventListener("click", function tempListener(event: MouseEvent): void {
                        moveBall(event);

                        resumeGame();
                
                        this.setTimeout(() => {
                            changeState();
                        },              3000);
                        
                        window.removeEventListener("click", tempListener);
                    });

                    break;


            }
        }
    }
}