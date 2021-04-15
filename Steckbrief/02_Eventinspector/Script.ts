window.addEventListener("load", handleLoad);

// Button from HTML
var button: HTMLElement = document.querySelector("button")!;

function handleLoad(_event: Event): void {

    document.addEventListener("mousemove", setInfoBox);

    document.addEventListener("click", logInfo);
    document.addEventListener("keyup", logInfo);

    document.addEventListener("riseup", ConsoleOutput);

    button.addEventListener("click", RiseEvent);

}

function setInfoBox(_event: MouseEvent): void {
    let x: number = _event.pageX;
    let y: number = _event.pageY;

    var span: HTMLElement = <HTMLElement> document.querySelector("span");

    let position: HTMLElement = span;

    position.style.top = (y + 20) + "px";
    position.style.left = (x + 20) + "px";

    position.textContent = "x-Koordinate = " + x + "y-Koordinate = " + y
                           + _event.target;


}

function logInfo (_event: Event): void {
    console.log(_event.target);
    console.log(_event.type);
    console.log(_event.currentTarget);
    console.log(_event);
}


// Custom Event
var buttonClickEvent: CustomEvent = new CustomEvent("riseup", {
    detail: null
});

function RiseEvent(_event: Event): void {
    document.dispatchEvent(buttonClickEvent);
}

// Function with output
function ConsoleOutput(_event: Event): void {
    console.log(_event);
   }


