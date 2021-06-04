"use strict";
var L10_OldMacDonaldsFarm;
(function (L10_OldMacDonaldsFarm) {
    class Animal {
        constructor(_name, _food) {
            this.name = _name;
            this.food = _food;
        }
        sing() {
            console.log("I am a " + this.name);
        }
        eat(_resources, _amount) {
            console.log("the " + this.food + " resources are at " + (_resources[this.food] - _amount));
        }
        doSpecialAction() {
            console.log("Im only the Class, so i dont have a special action");
        }
    }
    L10_OldMacDonaldsFarm.Animal = Animal;
})(L10_OldMacDonaldsFarm || (L10_OldMacDonaldsFarm = {}));
//# sourceMappingURL=Animal.js.map