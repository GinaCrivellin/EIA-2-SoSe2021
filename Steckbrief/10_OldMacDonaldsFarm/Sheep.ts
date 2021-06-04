namespace L10_OldMacDonaldsFarm {

    export class Sheep extends Animal {
        sound: string = "Bäähh";
        action: string = "given whool for 2 sweaters"

        constructor(_name: string, _food: string) {
            super(_name, _food);
        }

        sing(): void {
            console.log("I am a " + this.name + " and i make "  + this.sound);
            console.log("Old Mac Donald had a farm E-I-E-I-O And on his farm he had some " + this.name + "s E-I-E-I- With a " + this.sound + "-" + this.sound + " here and a " + this.sound + "-" + this.sound + " there Here a " + this.sound + " , there a " + this.sound + " Everywhere a " + this.sound);
        }

        doSpecialAction(): void {
            console.log("Because i am a " + this.name + " i have " + this.action + " today");
        }
    }
}