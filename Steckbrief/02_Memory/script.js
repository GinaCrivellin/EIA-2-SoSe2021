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
        radio1Value: "Times New Roman"
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
        /*
        var radio2Value: FormDataEntryValue = formData.get("Radio2")!;
        settings.radio2Value = radio2Value.toString();
        var radio3Value: FormDataEntryValue = formData.get("Radio3")!;
        settings.radio3Value = radio3Value.toString();
        */
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
    let bord = document.createElement("div");
    bord.id = "bord";
    bord.classList.add("bord");
    document.body.appendChild(bord);
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
        },
        {
            back: "pink",
            front: "J"
        },
        {
            back: "pink",
            front: "K"
        },
        {
            back: "pink",
            front: "L"
        },
        {
            back: "pink",
            front: "M"
        },
        {
            back: "pink",
            front: "N"
        },
        {
            back: "pink",
            front: "O"
        },
        {
            back: "pink",
            front: "P"
        },
        {
            back: "pink",
            front: "Q"
        },
        {
            back: "pink",
            front: "R"
        },
        {
            back: "pink",
            front: "S"
        },
        {
            back: "pink",
            front: "T"
        },
        {
            back: "pink",
            front: "U"
        },
        {
            back: "pink",
            front: "V"
        },
        {
            back: "pink",
            front: "W"
        },
        {
            back: "pink",
            front: "X"
        },
        {
            back: "pink",
            front: "Y"
        },
        {
            back: "pink",
            front: "Z"
        }
    ];
    var cardRange = [];
    for (let i = 0; i < cardNumber; i++) {
        cardRange.push(cards[i]);
        cardRange.push(cards[i]);
    }
    shuffle(cardRange);
    for (let i = 0; i < cardRange.length; i++) {
        createCard(cardRange[i], settings.sliderValue, settings.backgroundValue, settings.cardValue, settings.fontValue, settings.radio1Value);
    }
}
let clickedCards = [];
var allCardsOnField = [];
let clickable = true;
function createCard(_card, _cardSize, _backgroundColor, _cardColor, _fontColor, _fontType) {
    let bord = document.getElementById("bord");
    bord.style.backgroundColor = _backgroundColor;
    let front = document.createElement("div");
    front.classList.add("front");
    front.innerHTML = _card.front;
    front.style.color = _fontColor;
    front.style.fontFamily = _fontType;
    front.style.width = _cardSize + "px";
    front.style.height = _cardSize + "px";
    bord.appendChild(front);
    let back = document.createElement("div");
    backColor.classList.add("back");
    back.style.backgroundColor = _cardColor;
    back.style.width = _cardSize + "px";
    back.style.height = _cardSize + "px";
    bord.appendChild(back);
    allCardsOnField.push({
        front: front,
        back: back
    });
    let card = {
        front: front,
        back: back
    };
    allCardsOnField.push(card);
    back.addEventListener("click", function () {
        console.log("Eventlistener");
        if (clickable == false) {
            return;
        }
        back.style.display = "none";
        front.style.display = "block";
        clickedCards.push(card);
        if (clickedCards.length == 1) {
            return;
        }
        var card1 = clickedCards[0];
        var card2 = clickedCards[1];
        if (clickedCards.length == 2) {
            clickable = false;
            var areCardsEqual = isEqual(clickedCards[0], clickedCards[1]);
            console.log(areCardsEqual);
            if (areCardsEqual == true) {
                setTimeout(function () {
                    card1.front.style.display = "none";
                    card2.front.style.display = "none";
                    card1.back.style.display = "none";
                    card2.back.style.display = "none";
                    allCardsOnField.splice(allCardsOnField.indexOf(card1), 1);
                    allCardsOnField.splice(allCardsOnField.indexOf(card2), 1);
                    clickable = true;
                }, 2000);
            }
            if (areCardsEqual == false) {
                setTimeout(function () {
                    card1.back.style.display = "block";
                    card2.back.style.display = "block";
                    card1.front.style.display = "none";
                    card2.front.style.display = "none";
                    clickable = true;
                }, 2000);
            }
            clickedCards = [];
        }
    });
}
function isEqual(first, second) {
    return first.front.innerHTML === second.front.innerHTML;
}
//# sourceMappingURL=script.js.map