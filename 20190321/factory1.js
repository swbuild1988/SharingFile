var Operation1 = /** @class */ (function () {
    function Operation1() {
    }
    Operation1.getResult = function (a, b, operate) {
        var res = 0;
        switch (operate) {
            case "+":
                res = a + b;
                break;
            case "-":
                res = a - b;
                break;
            case "*":
                res = a * b;
                break;
            case "/":
                res = a / b;
                break;
        }
        return res;
    };
    return Operation1;
}());
document.body.innerHTML += "最初版:" + "<br>";
document.body.innerHTML += Operation1.getResult(1, 3, "+").toString() + "<br>";
