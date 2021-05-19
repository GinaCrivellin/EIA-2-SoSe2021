"use strict";
var OldMacDonaldsFarm;
(function (OldMacDonaldsFarm) {
    class Animal {
        constructor(_name, _food, _sound) {
            this.name = _name;
            this.food = _food;
            this.sound = _sound;
        }
        sing() {
            console.log("I am a " + this.name + " and i make " + this.sound);
            console.log("Old Mac Donald had a farm E-I-E-I-O And on his farm he had some " + this.name + "s E-I-E-I- With a " + this.sound + "-" + this.sound + " here and a " + this.sound + "-" + this.sound + " there Here a " + this.sound + " , there a " + this.sound + " Everywhere a " + this.sound);
        }
        eat(_resources, _amount) {
            console.log("the " + this.food + " resources are at " + (_resources[this.food] - _amount));
        }
    }
    OldMacDonaldsFarm.Animal = Animal;
})(OldMacDonaldsFarm || (OldMacDonaldsFarm = {}));
//# sourceMappingURL=Animal.js.map