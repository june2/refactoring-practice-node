export class ReplaceTempWithQuery2 {
  private quantity: number;
  private itemPrice: number;

  constructor(quantity: number, itemPrice: number) {
    this.quantity = quantity;
    this.itemPrice = itemPrice;
  }

  //TODO : 임시변수에 값이 여러번 대입되는 케이스
  //메소드설명 : 임시변수에 값이 두 번 할당되는 케이스를 만든 것
  getPrice() {
    let basePrice = this.quantity * this.itemPrice; // basePrice에 첫번째 대입

    let discountFactor: number;
    if (basePrice > 1000) {
      discountFactor = 0.95;
    } else {
      discountFactor = 0.98;
    }

    basePrice = this.itemPrice * 2; // basePrice에 두번째 대입

    return basePrice * discountFactor;
  }
}
