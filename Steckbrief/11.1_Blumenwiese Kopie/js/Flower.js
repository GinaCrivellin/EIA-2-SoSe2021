"use strict";
var L11_1_Blumenwiese;
(function (L11_1_Blumenwiese) {
    class Flower {
        constructor(_position, _stemColor, _leaveColor, _fillHeight) {
            this.position = _position;
            this.stemColor = _stemColor;
            this.leaveColor = _leaveColor;
            this.fillHeight = _fillHeight;
            this.nectarBar = new L11_1_Blumenwiese.Nectar(new L11_1_Blumenwiese.Vector(_position.X, _position.Y));
        }
    }
    L11_1_Blumenwiese.Flower = Flower;
})(L11_1_Blumenwiese || (L11_1_Blumenwiese = {}));
//# sourceMappingURL=Flower.js.map