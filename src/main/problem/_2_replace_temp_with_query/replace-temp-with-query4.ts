export class ReplaceTempWithQuery4 {
  private quantity: number;
  private itemPrice: number;

  constructor(quantity: number, itemPrice: number) {
    this.quantity = quantity;
    this.itemPrice = itemPrice;
  }

  //TODO: 부수효과(side effect) 발생부분 분리하기
  //참고 : https://en.wikipedia.org/wiki/Pure_function
  //메소드설명 : 부수효과 발생 케이스를 만든 것
  getPrice() {
    this.quantity++;
    this.itemPrice -= 100;
    let basePrice = this.quantity * this.itemPrice;

    let discountFactor: number;
    if (basePrice > 1000) {
      discountFactor = 0.95;
    } else {
      discountFactor = 0.98;
    }

    return basePrice * discountFactor;
  }
}
