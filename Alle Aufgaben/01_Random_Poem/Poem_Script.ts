namespace Poemwords {
    export var Subjekte: string [] = ["Captain America ", "Iron Man ", "Thor ", "Hulk ", "Hawkeye ", "Black Widow "]
    export var Prädikate: string [] = ["bekämpft ", "rettet ", "baut ", "zerstört ", "redet über ", "trainiert "]
    export var Objekte: string [] = ["Thanos", "Ultron", "New York", "die Welt", "Shield", "die Guardians"]
}

for ( var index = Poemwords.Subjekte.length; index >= 1; index-- ) {
    console.log(index);

    var Satz = getVerse(Poemwords.Subjekte, Poemwords.Prädikate, Poemwords.Objekte);

    console.log(Satz)
}

function getVerse (_Subjekte: string[], _Prädikate:string[], _Objekte:string[]): string {

    var SubjektRandomNumber :number = Math.floor(Math.random() * _Subjekte.length)
    var PrädikatRandomNumber :number = Math.floor(Math.random() * _Prädikate.length)
    var ObjektRandomNumber :number = Math.floor(Math.random() * _Objekte.length)

    var ResultTemp = _Subjekte[SubjektRandomNumber] + _Prädikate[PrädikatRandomNumber] + _Objekte[ObjektRandomNumber];

    _Subjekte.splice(SubjektRandomNumber,1);
    _Prädikate.splice(PrädikatRandomNumber,1);
    _Objekte.splice(ObjektRandomNumber,1);

    return ResultTemp;
}
