"use strict";
var L10_OldMacDonaldsFarm;
(function (L10_OldMacDonaldsFarm) {
    window.addEventListener("load", handleload);
    let foodResources = {
        grass: 100,
        carrots: 40,
        apples: 60,
        seeds: 130,
        dogfood: 80
    };
    let animalArray = [];
    function handleload() {
        let cow = new L10_OldMacDonaldsFarm.Cow("cow", "grass");
        animalArray.push(cow);
        let sheep = new L10_OldMacDonaldsFarm.Sheep("sheep", "carrots");
        animalArray.push(sheep);
        for (let animal of animalArray) {
            animal.sing();
            let amount = Math.random() * ((30 - 5) + 5);
            animal.eat(foodResources, amount);
            animal.doSpecialAction();
        }
        /*

        var amount: number = Math.random() * ((30 - 5) + 5);

        //

        var cow: Animal = new Animal("cow", "grass", "muuuh");

        cow.sing();

        cow.eat(foodResources, amount);

        //

        var sheep: Animal = new Animal("sheep", "carrots", "bähhh");

        sheep.sing();

        sheep.eat(foodResources, amount);

        //

        var pig: Animal = new Animal("pig", "apples", "oink");

        pig.sing();

        pig.eat(foodResources, amount);

        //

        var chicken: Animal = new Animal("chicken", "seeds", "bwack");

        chicken.sing();

        chicken.eat(foodResources, amount);

        //

        var dog: Animal = new Animal("dog", "dogfood", "wuff");

        dog.sing();

        dog.eat(foodResources, amount);

        */
    }
})(L10_OldMacDonaldsFarm || (L10_OldMacDonaldsFarm = {}));
//# sourceMappingURL=script.js.map