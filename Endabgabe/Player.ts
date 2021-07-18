namespace Fußball_Simulation {

    export enum PlayerState {
        ToBall,
        GotBall,
        ShootBall,
        Stop
    }

    export class Player extends Human {

        public name: string;
        public number: number;
        public precision: number;
        public pace: number;
        public team: number;

        public minPace: number = 0;
        public maxPace: number = 0;
        public minPrecision: number = 0;
        public maxPrecision: number = 0;

        private startPos: Vector;
        private state: PlayerState = PlayerState.Stop;

        constructor(_position: Vector, _velocity: Vector, _tricotcolor: string, _name: string, _number: number, _precision: number, _pace: number, _team: number) {
            super(_position, _velocity, _tricotcolor);
            this.startPos = _position;
            this.name = _name;
            this.number = _number;
            this.precision = _precision;
            this.pace = _pace;
            this.team = _team;
        }

        public checkClick(_x: number, _y: number): boolean {
            let eventData: Vector = new Vector(_x, _y);

            let difference: Vector = Vector.getDifference(this.position, eventData);
            
            let length: number = difference.length();

            if (length < 40) {
                return true;
            }
            else {
                return false;
            }
        }

        public update(): void {

            let checkForRadius: Vector = Vector.getDifference(getBall().position, this.position);
            const dist: number = checkForRadius.length();

            const detectionRadius: number = 80;
            const arriveRadius: number = 10;

            switch (this.state) {

                case PlayerState.Stop:
                    let difference: Vector = Vector.getDifference(this.startPos, this.position);

                    if (difference.X === 0 && difference.Y === 0) {
                        this.velocity = new Vector(0, 0);
                    }

                    else {
                        let norm: Vector = difference.normalize();
                        norm.scale(this.pace);

                        this.velocity = norm;
                    }
                    
                    
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
                    }
                    else if (dist > detectionRadius) {
                        this.state = PlayerState.Stop;
                    }

                    break;

                case PlayerState.GotBall:
                    break;
            }
        }

        public changePace(_newPace: number): void {
            this.pace = _newPace;
        }

        public changePrecision(_newPrecision: number): void {
            this.precision = _newPrecision;
        }

        private changeState(): void {
            this.state = PlayerState.Stop;
            console.log("!state was changed!");
        }

        private changeStateToGotBall(): void {
            pauseGame();

            this.setVelocity(new Vector(0, 0));
            getBall().setVelocity(new Vector(0, 0));

            let self: this = this;

            window.addEventListener("click", function tempListener(_event: MouseEvent): void {

                let rect: DOMRect = (<HTMLCanvasElement>_event.target).getBoundingClientRect();
                let xPos: number = _event.clientX - rect.left; 
                let yPos: number = _event.clientY - rect.top; 
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
                moveBall(goTo);

                resumeGame();
        
                setTimeout(() => {
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