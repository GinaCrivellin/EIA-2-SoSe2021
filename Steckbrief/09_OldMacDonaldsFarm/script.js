"use strict";
var OldMacDonaldsFarm;
(function (OldMacDonaldsFarm) {
    window.addEventListener("load", handleload);
    var foodResources = {
        grass: 100,
        carrots: 40,
        apples: 60,
        seeds: 130,
        dogfood: 80
    };
    function handleload() {
        var amount = Math.random() * ((30 - 5) + 5);
        //
        var cow = new OldMacDonaldsFarm.Animal("cow", "grass", "muuuh");
        cow.sing();
        cow.eat(foodResources, amount);
        //
        var sheep = new OldMacDonaldsFarm.Animal("sheep", "carrots", "bähhh");
        sheep.sing();
        sheep.eat(foodResources, amount);
        //
        var pig = new OldMacDonaldsFarm.Animal("pig", "apples", "oink");
        pig.sing();
        pig.eat(foodResources, amount);
        //
        var chicken = new OldMacDonaldsFarm.Animal("chicken", "seeds", "bwack");
        chicken.sing();
        chicken.eat(foodResources, amount);
        //
        var dog = new OldMacDonaldsFarm.Animal("dog", "dogfood", "wuff");
        dog.sing();
        dog.eat(foodResources, amount);
    }
})(OldMacDonaldsFarm || (OldMacDonaldsFarm = {}));
//# sourceMappingURL=script.js.map