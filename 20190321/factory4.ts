/**
 * 抽象工厂模式
 */

abstract class HoneyWell4 {
  constructor() {}

  abstract move(): string;
  abstract zoomin(): string;
  abstract zoomout(): string;
}

class HoneyWellOnvif4 extends HoneyWell4 {
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

class HoneyWellH5Stream4 implements HoneyWell4 {
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

abstract class HaiKang4 {
  constructor() {}

  abstract zoomin(): string;
  abstract zoomout(): string;
}

class HaiKangOnvif4 implements HaiKang4 {
  zoomin(): string {
    return "HaiKang Onvif zoomin";
  }
  zoomout(): string {
    return "HaiKang Onvif zoomout";
  }
}

class HaiKangH5Stream4 implements HaiKang4 {
  zoomin(): string {
    return "HaiKang H5Stream zoomin";
  }
  zoomout(): string {
    return "HaiKang H5Stream zoomout";
  }
}

interface IFactory4 {
  createHoneyWell(): HoneyWell4;
  createHaiKang(): HaiKang4;
}

class FactoryOnvif4 implements IFactory4 {
  createHoneyWell(): HoneyWell4 {
    return new HoneyWellOnvif4();
  }
  createHaiKang(): HaiKang4 {
    throw new HaiKangOnvif4();
  }
}

class FactoryH5Stream4 implements IFactory4 {
  createHoneyWell(): HoneyWell4 {
    return new HoneyWellH5Stream4();
  }
  createHaiKang(): HaiKang4 {
    return new HaiKangH5Stream4();
  }
}

let factory4 = new FactoryH5Stream4();
let haiKang4 = factory4.createHaiKang();

document.body.innerHTML += "抽象工厂模式：" + "<br>";
document.body.innerHTML += haiKang4.move() + "<br>";
document.body.innerHTML += haiKang4.zoomout() + "<br>";
