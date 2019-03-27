class Operation1 {
  public static getResult(a: number, b: number, operate: string): number {
    let res = 0;
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
      case "^":
        res = a ^ b;
        break;
    }
    return res;
  }
}

document.body.innerHTML += "最初版:" + "<br>";
document.body.innerHTML += Operation1.getResult(1, 3, "+").toString() + "<br>";
