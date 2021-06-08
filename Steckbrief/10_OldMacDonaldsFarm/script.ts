namespace L10_OldMacDonaldsFarm {

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

    let animalArray: Animal[] = [];

    function handleload(): void {

        let cow: Cow = new Cow("cow", "grass");
        animalArray.push(cow);

        let sheep: Sheep = new Sheep("sheep", "carrots");
        animalArray.push(sheep);

        let pig: Pig = new Pig("pig", "apples");
        animalArray.push(pig);

        let chicken: Chicken = new Chicken("chicken", "seeds");
        animalArray.push(chicken);

        let dog: Dog = new Dog("dog", "dogfood");
        animalArray.push(dog);


        for (let animal of animalArray) {

            animal.sing();

            let amount: number = Math.random() * ((30 - 5) + 5);

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
}

