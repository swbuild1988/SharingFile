/**
 * 简单工厂模式
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Operation2 = /** @class */ (function () {
    function Operation2() {
    }
    return Operation2;
}());
var OperationAdd2 = /** @class */ (function (_super) {
    __extends(OperationAdd2, _super);
    function OperationAdd2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    OperationAdd2.prototype.getResult = function () {
        return this.a + this.b;
    };
    return OperationAdd2;
}(Operation2));
var OperationSub2 = /** @class */ (function (_super) {
    __extends(OperationSub2, _super);
    function OperationSub2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    OperationSub2.prototype.getResult = function () {
        return this.a - this.b;
    };
    return OperationSub2;
}(Operation2));
var OperationMul2 = /** @class */ (function (_super) {
    __extends(OperationMul2, _super);
    function OperationMul2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    OperationMul2.prototype.getResult = function () {
        return this.a * this.b;
    };
    return OperationMul2;
}(Operation2));
var OperationDiv2 = /** @class */ (function (_super) {
    __extends(OperationDiv2, _super);
    function OperationDiv2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    OperationDiv2.prototype.getResult = function () {
        return this.a / this.b;
    };
    return OperationDiv2;
}(Operation2));
var OperationFactory2 = /** @class */ (function () {
    function OperationFactory2() {
    }
    OperationFactory2.createOperation = function (operate) {
        var oper;
        switch (operate) {
            case "+":
                oper = new OperationAdd2();
                break;
            case "-":
                oper = new OperationSub2();
                break;
            case "*":
                oper = new OperationMul2();
                break;
            case "/":
                oper = new OperationDiv2();
                break;
        }
        return oper;
    };
    return OperationFactory2;
}());
var oper2 = OperationFactory2.createOperation("*");
oper2.a = 2;
oper2.b = 4;
document.body.innerHTML += "简单工厂模式：" + "<br>";
document.body.innerHTML += oper2.getResult().toString() + "<br>";
