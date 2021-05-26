namespace OldMacDonaldsFarm {

    window.addEventListener("load", handleload);

    export interface FoodResources {
        [key: string]: number;
        grass: number;
        carrots: number;
        apples: number;
        seeds: number;
        dogfood: number;
    }

    let foodResources: FoodResources = {
    grass: 100, 
    carrots: 40,
    apples: 60,
    seeds: 130,
    dogfood: 80
    };

    function handleload(): void {

        let animalKinds: string [][] = [["cow", "grass", "muhh"], ["sheep", "carrots", "bähh"], ["pig", "apples", "oink"], ["chicken", "seeds", "bwak"], ["dog", "dogfood", "wuff"]];

        for (let i: number = 0; i < animalKinds.length; i++) {

            let t: Animal = new Animal(animalKinds[i][0], animalKinds[i][1], animalKinds[i][2]);

            t.sing();

            let amount: number = Math.random() * ((30 - 5) + 5);

            t.eat(foodResources, amount);

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
}

