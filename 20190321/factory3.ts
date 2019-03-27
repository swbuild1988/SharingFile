/**
 * 工厂模式
 */

abstract class Operation3 {
  public a: number;
  public b: number;
  constructor() {}

  abstract getResult(): number;
}

class OperationAdd3 extends Operation3 {
  getResult() {
    return this.a + this.b;
  }
}
class OperationSub3 extends Operation3 {
  getResult() {
    return this.a - this.b;
  }
}
class OperationMul3 extends Operation3 {
  getResult() {
    return this.a * this.b;
  }
}
class OperationDiv3 extends Operation3 {
  getResult() {
    return this.a / this.b;
  }
}

interface IFactory3 {
  createOperation3(): Operation3;
}

class FactoryAdd3 implements IFactory3 {
  createOperation3() {
    return new OperationAdd3();
  }
}

class FactorySub3 implements IFactory3 {
  createOperation3() {
    return new OperationSub3();
  }
}

class FactoryMul3 implements IFactory3 {
  createOperation3() {
    return new OperationMul3();
  }
}

class FactoryDiv3 implements IFactory3 {
  createOperation3() {
    return new OperationDiv3();
  }
}

let operFactory3 = new FactorySub3();
let oper3 = operFactory3.createOperation3();
oper3.a = 20;
oper3.b = 3;

document.body.innerHTML += "工厂模式：" + "<br>";
document.body.innerHTML += oper3.getResult().toString() + "<br>";
