export class ReplaceTempWithQuery2 {
  private quantity: number;
  private itemPrice: number;

  constructor(quantity: number, itemPrice: number) {
    this.quantity = quantity;
    this.itemPrice = itemPrice;
  }

  //TODO : 임시변수에 값이 여러번 대입되는 케이스
  // 1. getPrice메소드에 대해 테스트 케이스 작성
  // 2. 임시변수에 값이 여러 번 대입되는 경우 Split Temporary Variable을 먼저 시도한다.
  // 3. Split Temporary Variable(변수쪼개기)는 또다른 임시변수를 선언하는 것
  // 4. 임시변수에 값이 여러번 대입되면 코드를 읽는 이에게 커다른 혼란을 주기 때문에 Split Temporary Variable를 시도함
  getPrice() {
    let basePrice = this.quantity * this.itemPrice;

    let discountFactor: number;
    if (basePrice > 1000) {
      discountFactor = 0.95;
    } else {
      discountFactor = 0.98;
    }

    basePrice = this.itemPrice * 2;

    return basePrice * discountFactor;
  }
}
