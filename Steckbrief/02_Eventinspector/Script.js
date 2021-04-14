"use strict";
window.addEventListener("load", handleLoad);
function handleLoad(_event) {
    document.body.addEventListener("mousemove", setInfoBox);
    document.addEventListener("click", logInfo);
    document.addEventListener("keyup", logInfo);
}
function setInfoBox(_event) {
    let x = _event.clientX;
    let y = _event.clientY;
    var span = document.querySelector("span");
    let position = span;
    position.style.top = y + "px";
    position.style.left = x + "px";
    position.textContent = "x-Koordinate = " + x + "y-Koordinate = " + y
        + _event.target;
}
function logInfo(_event) {
    console.log(_event.target);
    console.log(_event.type);
    console.log(_event.currentTarget);
    console.log(_event);
}
//# sourceMappingURL=Script.js.map