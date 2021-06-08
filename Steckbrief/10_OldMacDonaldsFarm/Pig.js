"use strict";
var L10_OldMacDonaldsFarm;
(function (L10_OldMacDonaldsFarm) {
    class Pig extends L10_OldMacDonaldsFarm.Animal {
        constructor(_name, _food) {
            super(_name, _food);
            this.sound = "oink";
            this.action = "been diging in mud for 5 hours";
        }
        sing() {
            console.log("I am a " + this.name + " and i make " + this.sound);
            console.log("Old Mac Donald had a farm E-I-E-I-O And on his farm he had some " + this.name + "s E-I-E-I- With a " + this.sound + "-" + this.sound + " here and a " + this.sound + "-" + this.sound + " there Here a " + this.sound + " , there a " + this.sound + " Everywhere a " + this.sound);
        }
        doSpecialAction() {
            console.log("Because i am a " + this.name + " i have " + this.action + " today");
        }
    }
    L10_OldMacDonaldsFarm.Pig = Pig;
})(L10_OldMacDonaldsFarm || (L10_OldMacDonaldsFarm = {}));
//# sourceMappingURL=Pig.js.map