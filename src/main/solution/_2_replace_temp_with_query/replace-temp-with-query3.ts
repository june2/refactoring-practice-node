export class ReplaceTempWithQuery3 {
  private name: string;
  private amounts: Array<number>;

  constructor(name: string, amounts: Array<number>) {
    this.name = name;
    this.amounts = amounts;
  }

  printOwing() {
    console.log("name : " + this.name);
    console.log("amount1 : " + this.getOutstanding1());
    console.log("amount2 : " + this.getOutstanding2());
    console.log("amount3 : " + this.getOutstanding3());
    console.log("amount4 : " + this.getOutstanding4());
  }

  getOutstanding1(): number {
    return this.amounts.reduce((a, b) => a + b);
  }

  getOutstanding2() {
    let result = 0.0;
    this.amounts.forEach(amount => {
      result += amount * 2;
    })
    return result;
  }

  getOutstanding3() {
    let result = 0.0;
    this.amounts.forEach(amount => {
      result += amount * 3;
    })
    return result;
  }

  getOutstanding4() {
    return this.getOutstanding1() + this.getOutstanding2() + this.getOutstanding3();
  }
}
