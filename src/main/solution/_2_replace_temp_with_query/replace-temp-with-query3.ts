export class ReplaceTempWithQuery3 {
  private name: string;
  private amounts: Array<number>;

  constructor(name: string, amounts: Array<number>) {
    this.name = name;
    this.amounts = amounts;
  }

  printOwing() {
    console.log("name : " + this.name);
    console.log("amount1 : " + this.getOutstandingMultipliedBy(1));
    console.log("amount2 : " + this.getOutstandingMultipliedBy(2));
    console.log("amount3 : " + this.getOutstandingMultipliedBy(3));
    console.log("amount4 : " + this.getOutstanding4());
  }

  getOutstandingMultipliedBy(multiplier: number) {
    return this.amounts.reduce((a: number, b: number) => a + b * multiplier, 0);
  }


  getOutstanding4() {
    return [1, 2, 3].reduce((a, b) => a + this.getOutstandingMultipliedBy(b), 0)
  }
}
