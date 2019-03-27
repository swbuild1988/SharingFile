/**
 * 简单工厂改进抽象工厂模式
 */

abstract class HoneyWell5 {
  abstract move(): string;
  abstract zoomin(): string;
  abstract zoomout(): string;
}

class HoneyWellOnvif5 extends HoneyWell5 {
  move(): string {
    return "HoneyWell Onvif Move";
  }
  zoomin(): string {
    return "HoneyWell Onvif zoomin";
  }
  zoomout(): string {
    return "HoneyWell Onvif zoomout";
  }
}

class HoneyWellH5Stream5 implements HoneyWell5 {
  move(): string {
    return "HoneyWell H5Stream Move";
  }
  zoomin(): string {
    return "HoneyWell H5Stream zoomin";
  }
  zoomout(): string {
    return "HoneyWell H5Stream zoomout";
  }
}

abstract class HaiKang5 {
  abstract move(): string;
  abstract zoomin(): string;
  abstract zoomout(): string;
}

class HaiKangOnvif5 extends HaiKang5 {
  move(): string {
    return "HaiKang Onvif Move";
  }
  zoomin(): string {
    return "HaiKang Onvif zoomin";
  }
  zoomout(): string {
    return "HaiKang Onvif zoomout";
  }
}

class HaiKangH5Stream5 implements HaiKang5 {
  move(): string {
    return "HaiKang H5Stream Move";
  }
  zoomin(): string {
    return "HaiKang H5Stream zoomin";
  }
  zoomout(): string {
    return "HaiKang H5Stream zoomout";
  }
}

class CameraAccess {
  constructor() {}

  public static runType = "h5stream";

  public static createHoneyWell(): HoneyWell5 {
    let honeywell = null;

    switch (CameraAccess.runType) {
      case "onvif":
        honeywell = new HoneyWellOnvif5();
        break;

      case "h5stream":
        honeywell = new HoneyWellH5Stream5();
        break;
    }

    return honeywell;
  }

  public static createHaiKang(): HaiKang5 {
    let haikang: HaiKang5;

    switch (CameraAccess.runType) {
      case "onvif":
        haikang = new HaiKangOnvif5();
        break;

      case "h5stream":
        haikang = new HaiKangH5Stream5();
        break;
    }

    return haikang;
  }
}

let camera5 = CameraAccess.createHoneyWell();

document.body.innerHTML += "简单工厂改造抽象工厂模式：" + "<br>";
document.body.innerHTML += camera5.move() + "<br>";
document.body.innerHTML += camera5.zoomout() + "<br>";
