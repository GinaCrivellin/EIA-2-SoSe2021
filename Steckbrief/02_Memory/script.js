"use strict";
window.addEventListener("load", handleLoad);
console.log("Heyyyy");
var stepper = document.getElementById("stepper");
var slider = document.getElementById("slider");
var backgroundColor = document.getElementById("backgroundColor");
var backColor = document.getElementById("cardColor");
var fontColor = document.getElementById("fontColor");
var radioButton1 = document.getElementById("radio1");
var radioButton2 = document.getElementById("radio2");
var radioButton3 = document.getElementById("radio3");
var button = document.getElementById("startButton");
var formElement = document.getElementById("formElement");
function handleLoad() {
    console.log("Hey");
    button.addEventListener("click", startGame);
}
function shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        let x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
    return a;
}
function getSettings() {
    let formData = new FormData(document.forms[0]);
    let settings = {
        stepperValue: 5,
        sliderValue: 10,
        backgroundValue: "pink",
        cardValue: "yellow",
        fontValue: "black",
        radio1Value: "Times New Roman",
        radio2Value: "Verdana",
        radio3Value: "Courier New"
    };
    for (let entry of formData) {
        console.log(entry);
        console.log(formData.get("Stepper"));
        console.log(formData.get("Slider"));
        var stepperValue = formData.get("Stepper");
        settings.stepperValue = parseInt(stepperValue.toString());
        var sliderValue = formData.get("Slider");
        settings.sliderValue = parseInt(sliderValue.toString());
        var backgroundValue = formData.get("background");
        settings.backgroundValue = backgroundValue.toString();
        var cardValue = formData.get("cardback");
        settings.cardValue = cardValue.toString();
        var fontValue = formData.get("fontcolor");
        settings.fontValue = fontValue.toString();
        var radio1Value = formData.get("Radio1");
        settings.radio1Value = radio1Value.toString();
        var radio2Value = formData.get("Radio2");
        settings.radio2Value = radio2Value.toString();
        var radio3Value = formData.get("Radio3");
        settings.radio3Value = radio3Value.toString();
    }
    return settings;
}
function startGame() {
    console.log("hallo");
    formElement.style.visibility = "hidden";
    var settings = getSettings();
    var cardNumber = settings.stepperValue;
    var gameStartDate = new Date;
    var min1 = gameStartDate.getMinutes();
    var cards = [
        {
            back: "pink",
            front: "A"
        },
        {
            back: "pink",
            front: "B"
        },
        {
            back: "pink",
            front: "C"
        },
        {
            back: "pink",
            front: "D"
        },
        {
            back: "pink",
            front: "E"
        },
        {
            back: "pink",
            front: "F"
        },
        {
            back: "pink",
            front: "G"
        },
        {
            back: "pink",
            front: "H"
        },
        {
            back: "pink",
            front: "I"
        }
    ];
    var cardRange = [];
    //var cardsOnField: CardInterface [] = [];
    for (let i = 0; i < cardNumber; i++) {
        cardRange.push(cards[i]);
        cardRange.push(cards[i]);
    }
    /*
    for (let i: number = 0; i < cardRange.length; i++){
        let card1: CardInterface = cardRange[i];
        let card2: CardInterface = cardRange[i];

        cardsOnField.push(card1);
        cardsOnField.push(card2);
        cardRange.splice(cards[1], 1);
    }
    */
    shuffle(cardRange);
    function createCard(_card, _cardSize, _backgroundColor, _cardColor, _fontColor, _fontType) {
        let bord = document.createElement("div");
        bord.style.backgroundColor = _backgroundColor;
        document.body.appendChild(bord);
        let back = document.createElement("div");
        back.style.backgroundColor = _cardColor;
        bord.appendChild(back);
        let front = document.createElement("div");
        front.innerHTML = _card.front;
        front.style.color = _fontColor;
        front.style.fontFamily = _fontType;
        bord.appendChild(front);
    }
    for (let i = 0; i < cardRange.length; i++) {
        createCard(cardRange[i], settings.sliderValue, settings.backgroundValue, settings.cardValue, settings.fontValue, settings.radio1Value);
    }
}
//# sourceMappingURL=script.js.map