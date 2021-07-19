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
        constructor(_position, _velocity, _tricotcolor, _name, _number, _precision, _pace, _team) {
            super(_position, _velocity, _tricotcolor);
            this.minPace = 0;
            this.maxPace = 0;
            this.minPrecision = 0;
            this.maxPrecision = 0;
            this.state = PlayerState.Stop;
            this.startPos = new Fußball_Simulation.Vector(_position.X, _position.Y);
            this.name = _name;
            this.number = _number;
            this.precision = _precision;
            this.pace = _pace;
            this.team = _team;
        }
        checkClick(_x, _y) {
            let eventData = new Fußball_Simulation.Vector(_x, _y);
            let difference = Fußball_Simulation.Vector.getDifference(this.position, eventData);
            let length = difference.length();
            if (length < 40) {
                return true;
            }
            else {
                return false;
            }
        }
        update() {
            let checkForRadius = Fußball_Simulation.Vector.getDifference(Fußball_Simulation.getBall().position, this.position);
            const dist = checkForRadius.length();
            const detectionRadius = 90;
            const arriveRadius = 20;
            switch (this.state) {
                case PlayerState.Stop:
                    // Move to start position if not already there
                    const difference = Fußball_Simulation.Vector.getDifference(this.startPos, this.position);
                    if (difference.length() === 0) {
                        this.setVelocity(new Fußball_Simulation.Vector(0, 0));
                    }
                    else {
                        let norm = difference.normalize();
                        norm.scale(this.pace);
                        this.setVelocity(norm);
                    }
                    // Wait for ball to come into detection radius
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
        changePace(_newPace) {
            this.pace = _newPace;
        }
        changePrecision(_newPrecision) {
            this.precision = _newPrecision;
        }
        changeStateToStop() {
            this.state = PlayerState.Stop;
        }
        changeStateToGotBall() {
            Fußball_Simulation.pauseGame();
            this.setVelocity(new Fußball_Simulation.Vector(0, 0));
            Fußball_Simulation.getBall().setVelocity(new Fußball_Simulation.Vector(0, 0));
            let self = this;
            window.addEventListener("click", function tempListener(_event) {
                let rect = _event.target.getBoundingClientRect();
                let xPos = _event.clientX - rect.left;
                let yPos = _event.clientY - rect.top;
                let mousePosition = new Fußball_Simulation.Vector(xPos, yPos);
                let goTo = Fußball_Simulation.Vector.getDifference(mousePosition, Fußball_Simulation.getBall().position);
                goTo = goTo.normalize();
                // Rotate the ball's direction randomly
                let angle = Fußball_Simulation.randInterval(-self.precision, self.precision); // If precision is an angle
                angle = Fußball_Simulation.toRadians(angle);
                let a = new Fußball_Simulation.Vector(Math.cos(angle), -Math.sin(angle)); // first row of matrix
                let b = new Fußball_Simulation.Vector(Math.sin(angle), Math.cos(angle)); // second row of matrix
                goTo = new Fußball_Simulation.Vector(Fußball_Simulation.Vector.dot(a, goTo), Fußball_Simulation.Vector.dot(b, goTo));
                goTo.scale(50);
                Fußball_Simulation.moveBall(goTo);
                Fußball_Simulation.resumeGame();
                setTimeout(() => {
                    self.changeStateToStop();
                }, 3000);
                window.removeEventListener("click", tempListener);
            });
            let posession = document.getElementById("posession");
            posession.innerHTML = "currently in ball-posession: " + this.name;
            this.state = PlayerState.GotBall;
        }
    }
    Fußball_Simulation.Player = Player;
})(Fußball_Simulation || (Fußball_Simulation = {})); // namespace
//# sourceMappingURL=Player.js.map