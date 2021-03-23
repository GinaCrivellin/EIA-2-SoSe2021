"use strict";
var Poemwords;
(function (Poemwords) {
    var Subjekte = ["Captain America ", "Iron Man ", "Thor ", "Hulk ", "Hawkeye ", "Black Widow "];
    var Prädikate = ["bekämpft ", "rettet ", "baut ", "zerstört ", "redet über ", "trainiert "];
    var Objekte = ["Thanos", "Ultron", "New York", "die Welt", "Shield", "die Guardians"];
    var Poem1 = "";
    var PoemNumbers = Math.floor(Math.random() * Subjekte.length);
    console.log(PoemNumbers);
    for (var index = Subjekte.length; index >= 1; index--) {
        console.log(index);
        var SubjektRandomNumber = Math.floor(Math.random() * Subjekte.length);
        var PrädikatRandomNumber = Math.floor(Math.random() * Prädikate.length);
        var ObjektRandomNumber = Math.floor(Math.random() * Objekte.length);
        Poem1 = Subjekte[SubjektRandomNumber] + Prädikate[PrädikatRandomNumber] + Objekte[ObjektRandomNumber];
        console.log(Poem1);
        Subjekte.splice(SubjektRandomNumber);
        Prädikate.splice(SubjektRandomNumber);
        Objekte.splice(SubjektRandomNumber);
        var Satz = getVerse(Subjekte, Prädikate, Objekte);
    }
    function getVerse(_Subjekte, _Prädikate, _Objekte) {
        return _Subjekte[SubjektRandomNumber] + _Prädikate[PrädikatRandomNumber] + _Objekte[ObjektRandomNumber];
    }
})(Poemwords || (Poemwords = {}));
//# sourceMappingURL=Poem_Script.js.map