/**
 * 抽象工厂模式
 */
var HoneyWellOnvif4 = /** @class */ (function () {
    function HoneyWellOnvif4() {
    }
    HoneyWellOnvif4.prototype.move = function () {
        return "HoneyWell Onvif Move";
    };
    HoneyWellOnvif4.prototype.zoomin = function () {
        return "HoneyWell Onvif zoomin";
    };
    HoneyWellOnvif4.prototype.zoomout = function () {
        return "HoneyWell Onvif zoomout";
    };
    return HoneyWellOnvif4;
}());
var HoneyWellH5Stream4 = /** @class */ (function () {
    function HoneyWellH5Stream4() {
    }
    HoneyWellH5Stream4.prototype.move = function () {
        return "HoneyWell H5Stream Move";
    };
    HoneyWellH5Stream4.prototype.zoomin = function () {
        return "HoneyWell H5Stream zoomin";
    };
    HoneyWellH5Stream4.prototype.zoomout = function () {
        return "HoneyWell H5Stream zoomout";
    };
    return HoneyWellH5Stream4;
}());
var HaiKang4 = /** @class */ (function () {
    function HaiKang4() {
    }
    return HaiKang4;
}());
var HaiKangOnvif4 = /** @class */ (function () {
    function HaiKangOnvif4() {
    }
    HaiKangOnvif4.prototype.move = function () {
        return "HaiKang Onvif Move";
    };
    HaiKangOnvif4.prototype.zoomin = function () {
        return "HaiKang Onvif zoomin";
    };
    HaiKangOnvif4.prototype.zoomout = function () {
        return "HaiKang Onvif zoomout";
    };
    return HaiKangOnvif4;
}());
var HaiKangH5Stream4 = /** @class */ (function () {
    function HaiKangH5Stream4() {
    }
    HaiKangH5Stream4.prototype.move = function () {
        return "HaiKang H5Stream Move";
    };
    HaiKangH5Stream4.prototype.zoomin = function () {
        return "HaiKang H5Stream zoomin";
    };
    HaiKangH5Stream4.prototype.zoomout = function () {
        return "HaiKang H5Stream zoomout";
    };
    return HaiKangH5Stream4;
}());
var FactoryOnvif4 = /** @class */ (function () {
    function FactoryOnvif4() {
    }
    FactoryOnvif4.prototype.createHoneyWell = function () {
        return new HoneyWellOnvif4();
    };
    FactoryOnvif4.prototype.createHaiKang = function () {
        throw new HaiKangOnvif4();
    };
    return FactoryOnvif4;
}());
var FactoryH5Stream4 = /** @class */ (function () {
    function FactoryH5Stream4() {
    }
    FactoryH5Stream4.prototype.createHoneyWell = function () {
        return new HoneyWellH5Stream4();
    };
    FactoryH5Stream4.prototype.createHaiKang = function () {
        return new HaiKangH5Stream4();
    };
    return FactoryH5Stream4;
}());
var factory4 = new FactoryH5Stream4();
var haiKang4 = factory4.createHaiKang();
document.body.innerHTML += "抽象工厂模式：" + "<br>";
document.body.innerHTML += haiKang4.move() + "<br>";
document.body.innerHTML += haiKang4.zoomout() + "<br>";
