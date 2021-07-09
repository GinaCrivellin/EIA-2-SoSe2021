"use strict";
var Fußball_Simulation;
(function (Fußball_Simulation) {
    let PlayerState;
    (function (PlayerState) {
        PlayerState[PlayerState["ToBall"] = 0] = "ToBall";
        PlayerState[PlayerState["GotBall"] = 1] = "GotBall";
        PlayerState[PlayerState["ShootBall"] = 2] = "ShootBall";
        PlayerState[PlayerState["Stop"] = 3] = "Stop";
    })(PlayerState = Fußball_Simulation.PlayerState || (Fußball_Simulation.PlayerState = {}));
    class Player extends Fußball_Simulation.Human {
        constructor(_position, _velocity, _radius, _tricotcolor, _name, _number, _precision, _pace) {
            super(_position, _velocity, _radius, _tricotcolor);
            this.state = PlayerState.Stop;
            this.minPace = 0;
            this.maxPace = 0;
            this.minPrecision = 0;
            this.maxPrecision = 0;
            this.name = _name;
            this.number = _number;
            this.precision = _precision;
            this.pace = _pace;
        }
        changeState() {
            this.state = PlayerState.Stop;
        }
        changePace(_newPace) {
            this.pace = _newPace;
        }
        changePrecision(_newPrecision) {
            this.precision = _newPrecision;
        }
        setVelocity(vel) {
            this.velocity = vel;
        }
        draw() {
            super.draw();
        }
        move(_timeslice) {
            super.move(_timeslice);
        }
        checkClick(_x, _y) {
            let eventData = new Fußball_Simulation.Vector(_x, _y);
            let difference = Fußball_Simulation.Vector.getDifference(this.position, eventData);
            let length = difference.length();
            if (length < 40) {
                return true;
            }
        }
        update() {
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
            let checkForRadius = Fußball_Simulation.Vector.getDifference(Fußball_Simulation.getBall().position, this.position);
            const dist = checkForRadius.length();
            const detectionRadius = 60;
            const arriveRadius = 10;
            switch (this.state) {
                case PlayerState.Stop:
                    this.setVelocity(new Fußball_Simulation.Vector(0, 0));
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
                        Fußball_Simulation.pauseGame();
                    }
                    else if (dist > detectionRadius) {
                        this.state = PlayerState.Stop;
                    }
                    break;
                case PlayerState.GotBall:
                    this.setVelocity(new Fußball_Simulation.Vector(0, 0));
                    Fußball_Simulation.getBall().setVelocity(new Fußball_Simulation.Vector(0, 0));
                    window.addEventListener("click", function tempListener(event) {
                        Fußball_Simulation.moveBall(event);
                        Fußball_Simulation.resumeGame();
                        this.setTimeout(() => {
                            changeState();
                        }, 3000);
                        window.removeEventListener("click", tempListener);
                    });
                    break;
            }
        }
    }
    Fußball_Simulation.Player = Player;
})(Fußball_Simulation || (Fußball_Simulation = {}));
//# sourceMappingURL=Player.js.map