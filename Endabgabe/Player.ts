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
        public team: number;

        public minPace: number = 0;
        public maxPace: number = 0;
        public minPrecision: number = 0;
        public maxPrecision: number = 0;

        constructor(_position: Vector, _velocity: Vector, _tricotcolor: string, _name: string, _number: number, _precision: number, _pace: number, _team: number) {
            super(_position, _velocity, _tricotcolor);
            this.name = _name;
            this.number = _number;
            this.precision = _precision;
            this.pace = _pace;
            this.team = _team;
        }

        changeState(): void {
            this.state = PlayerState.Stop;
            console.log("!state was changed!");
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

        public move(_timeslice: number): void {
            super.move(_timeslice);
        }

        checkClick(_x: number, _y: number): boolean {

            console.log("1111111 in checkklick");
            let eventData: Vector = new Vector(_x, _y);

            let difference: Vector = Vector.getDifference(this.position, eventData);
            
            let length: number = difference.length();

            if (length < 20) {
                console.log("1111111 player checkclick is true");
                return true;
            }

            else {
                console.log("1111111 player checkclick is false");
                return false;
            }
        }

        update(): void {

            let checkForRadius: Vector = Vector.getDifference(getBall().position, this.position);
            const dist: number = checkForRadius.length();

            const detectionRadius: number = 80;
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
                        this.changeStateToGotBall();
                        console.log("!playerState was changed to GotBall!");
                    }
                    else if (dist > detectionRadius) {
                        this.state = PlayerState.Stop;
                    }

                    break;

                case PlayerState.GotBall:
                    console.log("!playerState is in GotBall!");
                    break;
            }
        }

        private changeStateToGotBall(): void {
            pauseGame();

            this.setVelocity(new Vector(0, 0));
            getBall().setVelocity(new Vector(0, 0));

            let self: this = this;

            window.addEventListener("click", function tempListener(_event: MouseEvent): void {

                console.log("!eventlistener was clicked");

                let xPos: number = _event.clientX; 
                let yPos: number = _event.clientY; 
                let mousePosition: Vector = new Vector (xPos, yPos);

                let goTo: Vector = Vector.getDifference(mousePosition, getBall().position);
                goTo = goTo.normalize();

                // Rotate the ball's direction randomly
                let angle: number = randInterval(-self.precision, self.precision); // If precision is an angle
                angle = toRadians(angle);
                let a: Vector = new Vector(Math.cos(angle), -Math.sin(angle)); // first row of matrix
                let b: Vector = new Vector(Math.sin(angle), Math.cos(angle));  // second row of matrix

                goTo = new Vector(
                    Vector.dot(a, goTo),
                    Vector.dot(b, goTo)
                );

                goTo.scale(50);

                console.log("als gescalter Vecktor ist das: " + goTo);
                moveBall(goTo);

                resumeGame();
        
                setTimeout(() => {
                    console.log("!timeout was set!");
                    self.changeState();
                },         3000);
                
                window.removeEventListener("click", tempListener);
            });

            let posession: HTMLElement = document.getElementById("posession")!;
            posession.innerHTML = "currently in ball-posession: " + this.name;

            this.state = PlayerState.GotBall;
        }
    }
} // namespace