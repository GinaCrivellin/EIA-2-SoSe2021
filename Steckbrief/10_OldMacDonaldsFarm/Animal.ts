namespace L10_OldMacDonaldsFarm {

    export class Animal {
        name: string;
        food: string;

        constructor(_name: string, _food: string) {
            this.name = _name;
            this.food = _food;
        }

        sing(): void {
            console.log("I am a " + this.name);
        }

        eat(_resources: FoodResources, _amount: number): void {
            console.log("the " + this.food + " resources are at " + (_resources[this.food] - _amount));
        }

        doSpecialAction(): void {
            console.log("Im only the Class, so i dont have a special action");
        }

    }
    
}

