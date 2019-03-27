/**
 * 简单工厂改进抽象工厂模式
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
var HoneyWell5 = /** @class */ (function () {
    function HoneyWell5() {
    }
    return HoneyWell5;
}());
var HoneyWellOnvif5 = /** @class */ (function (_super) {
    __extends(HoneyWellOnvif5, _super);
    function HoneyWellOnvif5() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HoneyWellOnvif5.prototype.move = function () {
        return "HoneyWell Onvif Move";
    };
    HoneyWellOnvif5.prototype.zoomin = function () {
        return "HoneyWell Onvif zoomin";
    };
    HoneyWellOnvif5.prototype.zoomout = function () {
        return "HoneyWell Onvif zoomout";
    };
    return HoneyWellOnvif5;
}(HoneyWell5));
var HoneyWellH5Stream5 = /** @class */ (function () {
    function HoneyWellH5Stream5() {
    }
    HoneyWellH5Stream5.prototype.move = function () {
        return "HoneyWell H5Stream Move";
    };
    HoneyWellH5Stream5.prototype.zoomin = function () {
        return "HoneyWell H5Stream zoomin";
    };
    HoneyWellH5Stream5.prototype.zoomout = function () {
        return "HoneyWell H5Stream zoomout";
    };
    return HoneyWellH5Stream5;
}());
var HaiKang5 = /** @class */ (function () {
    function HaiKang5() {
    }
    return HaiKang5;
}());
var HaiKangOnvif5 = /** @class */ (function (_super) {
    __extends(HaiKangOnvif5, _super);
    function HaiKangOnvif5() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HaiKangOnvif5.prototype.move = function () {
        return "HaiKang Onvif Move";
    };
    HaiKangOnvif5.prototype.zoomin = function () {
        return "HaiKang Onvif zoomin";
    };
    HaiKangOnvif5.prototype.zoomout = function () {
        return "HaiKang Onvif zoomout";
    };
    return HaiKangOnvif5;
}(HaiKang5));
var HaiKangH5Stream5 = /** @class */ (function () {
    function HaiKangH5Stream5() {
    }
    HaiKangH5Stream5.prototype.move = function () {
        return "HaiKang H5Stream Move";
    };
    HaiKangH5Stream5.prototype.zoomin = function () {
        return "HaiKang H5Stream zoomin";
    };
    HaiKangH5Stream5.prototype.zoomout = function () {
        return "HaiKang H5Stream zoomout";
    };
    return HaiKangH5Stream5;
}());
var CameraAccess = /** @class */ (function () {
    function CameraAccess() {
    }
    CameraAccess.createHoneyWell = function () {
        var honeywell = null;
        switch (CameraAccess.runType) {
            case "onvif":
                honeywell = new HoneyWellOnvif5();
                break;
            case "h5stream":
                honeywell = new HoneyWellH5Stream5();
                break;
        }
        return honeywell;
    };
    CameraAccess.createHaiKang = function () {
        var haikang;
        switch (CameraAccess.runType) {
            case "onvif":
                haikang = new HaiKangOnvif5();
                break;
            case "h5stream":
                haikang = new HaiKangH5Stream5();
                break;
        }
        return haikang;
    };
    CameraAccess.runType = "h5stream";
    return CameraAccess;
}());
var camera5 = CameraAccess.createHoneyWell();
document.body.innerHTML += "简单工厂改造抽象工厂模式：" + "<br>";
document.body.innerHTML += camera5.move() + "<br>";
document.body.innerHTML += camera5.zoomout() + "<br>";
