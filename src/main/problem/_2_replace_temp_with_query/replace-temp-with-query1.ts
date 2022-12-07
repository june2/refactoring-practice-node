export class ReplaceTempWithQuery1 {
  private quantity: number;
  private itemPrice: number;

  constructor(quantity: number, itemPrice: number) {
    this.quantity = quantity;
    this.itemPrice = itemPrice;
  }

  //TODO : 다음 getPrice 메소드 내부를 Replace Temp with Query(임시 변수를 질의 함수로 바꾸기)를 이용 리팩토링 해보세요.
  //메소드설명 : 수량과 가격을 곱한 금액을 기준으로 할인율을 반영한 값을 반환
  getPrice() {
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
