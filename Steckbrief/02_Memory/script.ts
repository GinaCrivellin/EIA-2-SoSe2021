window.addEventListener("load", handleLoad);

console.log("Heyyyy");

var stepper: HTMLElement = document.getElementById("stepper")!;
var slider: HTMLElement = document.getElementById("slider")!;

var backgroundColor: HTMLElement = document.getElementById("backgroundColor")!;
var backColor: HTMLElement = document.getElementById("cardColor")!;
var fontColor: HTMLElement = document.getElementById("fontColor")!;

var radioButton1: HTMLElement = document.getElementById("radio1")!;
var radioButton2: HTMLElement = document.getElementById("radio2")!;
var radioButton3: HTMLElement = document.getElementById("radio3")!;

var button: HTMLElement = document.getElementById("startButton")!;

var formElement: any = document.getElementById("formElement");

function handleLoad(): void {
    console.log("Hey");
    
    button.addEventListener("click", startGame);
}

interface GameSettings {
    stepperValue: number;
    sliderValue: number;

    backgroundValue: string;
    cardValue: string;
    fontValue: string;

    radio1Value: string;
    radio2Value: string;
    radio3Value: string;

}

function shuffle<T>(a: T[]): T[] {
    for (let i: number = a.length - 1; i > 0; i--) {
        let j: number = Math.floor(Math.random() * (i + 1));
        let x: T = a[i];
        a[i] = a[j];
        a[j] = x;
    }
    return a;
}

function getSettings(): GameSettings {
    let formData: FormData = new FormData(document.forms[0]);
    let settings: GameSettings = {
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
        var stepperValue: FormDataEntryValue = formData.get("Stepper")!;
        settings.stepperValue = parseInt(stepperValue.toString());
       
        var sliderValue: FormDataEntryValue = formData.get("Slider")!;
        settings.sliderValue = parseInt(sliderValue.toString());
        
        var backgroundValue: FormDataEntryValue = formData.get("background")!;
        settings.backgroundValue = backgroundValue.toString();
        var cardValue: FormDataEntryValue = formData.get("cardback")!;
        settings.cardValue = cardValue.toString();
        var fontValue: FormDataEntryValue = formData.get("fontcolor")!;
        settings.fontValue = fontValue.toString();

        var radio1Value: FormDataEntryValue = formData.get("Radio1")!;
        settings.radio1Value = radio1Value.toString();
        var radio2Value: FormDataEntryValue = formData.get("Radio2")!;
        settings.radio2Value = radio2Value.toString();
        var radio3Value: FormDataEntryValue = formData.get("Radio3")!;
        settings.radio3Value = radio3Value.toString();
    }

    return settings;
}

function startGame(): void {

    console.log("hallo");

    formElement.style.visibility = "hidden";
    
    var settings: GameSettings = getSettings();

    var cardNumber: number = settings.stepperValue;

    var gameStartDate: Date = new Date;
    var min1: number = gameStartDate.getMinutes();

    interface CardInterface {
        back: string;
        front: string;
    }

    var cards: CardInterface [] = [
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

    var cardRange: CardInterface [] = [];
    //var cardsOnField: CardInterface [] = [];

    for (let i: number = 0; i < cardNumber; i++) {
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

    function createCard (_card: CardInterface, _cardSize: Number, _backgroundColor: string, _cardColor: string, _fontColor: string, _fontType: string): void {
        let bord: HTMLElement = document.createElement("div");
        bord.style.backgroundColor = _backgroundColor;
        document.body.appendChild(bord);

        let back: HTMLElement = document.createElement("div");
        back.style.backgroundColor = _cardColor;
        bord.appendChild(back);

        let front: HTMLElement = document.createElement("div");
        front.innerHTML = _card.front;
        front.style.color = _fontColor;
        front.style.fontFamily = _fontType;
        bord.appendChild(front);

    }

    for (let i: number = 0; i < cardRange.length; i++) {
        createCard(cardRange[i], settings.sliderValue, settings.backgroundValue, settings.cardValue, settings.fontValue, settings.radio1Value);
    }

}