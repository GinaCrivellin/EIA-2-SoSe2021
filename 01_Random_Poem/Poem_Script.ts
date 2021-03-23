namespace Poemwords {
    var Subjekte: string [] = ["Captain America ", "Iron Man ", "Thor ", "Hulk ", "Hawkeye ", "Black Widow "]
    var Prädikate: string [] = ["bekämpft ", "rettet ", "baut ", "zerstört ", "redet über ", "trainiert "]
    var Objekte: string [] = ["Thanos", "Ultron", "New York", "die Welt", "Shield", "die Guardians"]

    var Poem1: String = "";

    var PoemNumbers :number = Math.floor(Math.random() * Subjekte.length)

    console.log(PoemNumbers);

    for ( var index = Subjekte.length; index >= 1; index-- ) {
        console.log(index);

        var SubjektRandomNumber :number = Math.floor(Math.random() * Subjekte.length)
        var PrädikatRandomNumber :number = Math.floor(Math.random() * Prädikate.length)
        var ObjektRandomNumber :number = Math.floor(Math.random() * Objekte.length)

        Poem1 = Subjekte[SubjektRandomNumber] + Prädikate[PrädikatRandomNumber] + Objekte[ObjektRandomNumber];
        console.log(Poem1);

        Subjekte.splice(SubjektRandomNumber);
        Prädikate.splice(SubjektRandomNumber);
        Objekte.splice(SubjektRandomNumber);

        var Satz = getVerse(Subjekte, Prädikate, Objekte);
    }

    function getVerse (_Subjekte: string[], _Prädikate:string[], _Objekte:string[]): string {
        return _Subjekte[SubjektRandomNumber] + _Prädikate[PrädikatRandomNumber] + _Objekte[ObjektRandomNumber];
    }

}