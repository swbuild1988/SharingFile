/**
 * 工厂模式
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
var Operation3 = /** @class */ (function () {
    function Operation3() {
    }
    return Operation3;
}());
var OperationAdd3 = /** @class */ (function (_super) {
    __extends(OperationAdd3, _super);
    function OperationAdd3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    OperationAdd3.prototype.getResult = function () {
        return this.a + this.b;
    };
    return OperationAdd3;
}(Operation3));
var OperationSub3 = /** @class */ (function (_super) {
    __extends(OperationSub3, _super);
    function OperationSub3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    OperationSub3.prototype.getResult = function () {
        return this.a - this.b;
    };
    return OperationSub3;
}(Operation3));
var OperationMul3 = /** @class */ (function (_super) {
    __extends(OperationMul3, _super);
    function OperationMul3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    OperationMul3.prototype.getResult = function () {
        return this.a * this.b;
    };
    return OperationMul3;
}(Operation3));
var OperationDiv3 = /** @class */ (function (_super) {
    __extends(OperationDiv3, _super);
    function OperationDiv3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    OperationDiv3.prototype.getResult = function () {
        return this.a / this.b;
    };
    return OperationDiv3;
}(Operation3));
var FactoryAdd3 = /** @class */ (function () {
    function FactoryAdd3() {
    }
    FactoryAdd3.prototype.createOperation3 = function () {
        return new OperationAdd3();
    };
    return FactoryAdd3;
}());
var FactorySub3 = /** @class */ (function () {
    function FactorySub3() {
    }
    FactorySub3.prototype.createOperation3 = function () {
        return new OperationSub3();
    };
    return FactorySub3;
}());
var FactoryMul3 = /** @class */ (function () {
    function FactoryMul3() {
    }
    FactoryMul3.prototype.createOperation3 = function () {
        return new OperationMul3();
    };
    return FactoryMul3;
}());
var FactoryDiv3 = /** @class */ (function () {
    function FactoryDiv3() {
    }
    FactoryDiv3.prototype.createOperation3 = function () {
        return new OperationDiv3();
    };
    return FactoryDiv3;
}());
var operFactory3 = new FactorySub3();
var oper3 = operFactory3.createOperation3();
oper3.a = 20;
oper3.b = 3;
document.body.innerHTML += "工厂模式：" + "<br>";
document.body.innerHTML += oper3.getResult().toString() + "<br>";
