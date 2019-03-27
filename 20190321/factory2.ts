/**
 * 简单工厂模式
 */

abstract class Operation2 {
  public a: number;
  public b: number;
  constructor() {}

  abstract getResult(): number;
}

class OperationAdd2 extends Operation2 {
  getResult() {
    return this.a + this.b;
  }
}
class OperationSub2 extends Operation2 {
  getResult() {
    return this.a - this.b;
  }
}
class OperationMul2 extends Operation2 {
  getResult() {
    return this.a * this.b;
  }
}
class OperationDiv2 extends Operation2 {
  getResult() {
    return this.a / this.b;
  }
}
class OperationJie2 extends Operation2 {
  getResult() {
    return this.a ^ this.b;
  }
}

class OperationFactory2 {
  static createOperation(operate: string): Operation2 {
    let oper: Operation2;
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
  }
}

let oper2 = OperationFactory2.createOperation("*");
oper2.a = 2;
oper2.b = 4;

document.body.innerHTML += "简单工厂模式：" + "<br>";
document.body.innerHTML += oper2.getResult().toString() + "<br>";
