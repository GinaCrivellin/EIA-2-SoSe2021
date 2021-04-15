"use strict";
window.addEventListener("load", handleLoad);
function handleLoad(_event) {
    document.addEventListener("mousemove", setInfoBox);
    document.addEventListener("click", logInfo);
    document.addEventListener("keyup", logInfo);
}
function setInfoBox(_event) {
    let x = _event.pageX;
    let y = _event.pageY;
    var span = document.querySelector("span");
    let position = span;
    position.style.top = (y + 20) + "px";
    position.style.left = (x + 20) + "px";
    position.textContent = "x-Koordinate = " + x + "y-Koordinate = " + y
        + _event.target;
}
function logInfo(_event) {
    console.log(_event.target);
    console.log(_event.type);
    console.log(_event.currentTarget);
    console.log(_event);
}
// Button from HTML
var button = document.querySelector("button");
// Custom Event
var buttonClickEvent = new CustomEvent("riseup", {
    detail: null
});
// Listener
button.addEventListener("riseup", ConsoleOutput);
// Function with output
function ConsoleOutput(_event) {
    console.log(_event);
}
// Body as target
document.body.dispatchEvent(buttonClickEvent);
//# sourceMappingURL=Script.js.map