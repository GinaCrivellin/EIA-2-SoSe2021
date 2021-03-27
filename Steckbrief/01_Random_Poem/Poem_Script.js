"use strict";
var Poemwords;
(function (Poemwords) {
    Poemwords.Subjekte = ["Captain America ", "Iron Man ", "Thor ", "Hulk ", "Hawkeye ", "Black Widow "];
    Poemwords.Prädikate = ["bekämpft ", "rettet ", "baut ", "zerstört ", "redet über ", "trainiert "];
    Poemwords.Objekte = ["Thanos", "Ultron", "New York", "die Welt", "Shield", "die Guardians"];
})(Poemwords || (Poemwords = {}));
for (var index = Poemwords.Subjekte.length; index >= 1; index--) {
    console.log(index);
    var Satz = getVerse(Poemwords.Subjekte, Poemwords.Prädikate, Poemwords.Objekte);
    console.log(Satz);
}
function getVerse(_Subjekte, _Prädikate, _Objekte) {
    var SubjektRandomNumber = Math.floor(Math.random() * _Subjekte.length);
    var PrädikatRandomNumber = Math.floor(Math.random() * _Prädikate.length);
    var ObjektRandomNumber = Math.floor(Math.random() * _Objekte.length);
    var ResultTemp = _Subjekte[SubjektRandomNumber] + _Prädikate[PrädikatRandomNumber] + _Objekte[ObjektRandomNumber];
    _Subjekte.splice(SubjektRandomNumber, 1);
    _Prädikate.splice(PrädikatRandomNumber, 1);
    _Objekte.splice(ObjektRandomNumber, 1);
    return ResultTemp;
}
//# sourceMappingURL=Poem_Script.js.map