window.addEventListener("load", handleLoad);

function handleLoad(_event: Event): void {

    document.addEventListener("mousemove", setInfoBox);

    document.addEventListener("click", logInfo);
    document.addEventListener("keyup", logInfo);

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