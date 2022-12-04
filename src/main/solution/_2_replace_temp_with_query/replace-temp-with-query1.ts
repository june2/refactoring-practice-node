export class ReplaceTempWithQuery1 {
  private quantity: number;
  private itemPrice: number;

  constructor(quantity: number, itemPrice: number) {
    this.quantity = quantity;
    this.itemPrice = itemPrice;
  }

  //TODO: 다음 getPrice 메소드 내부를 Replace Temp with Query(임시 변수를 질의 함수로 바꾸기) - 큰 범위에서 보면 메소드 추출
  // 1. getPrice메소드에 대해 테스트 케이스 작성
  // 2. Extract Method 를 이용하여 아래 메소드를 2개의 메소드로 구성되도록 리팩토링
  // 3. Extract Method 절차가 기억나지 않으면 _1_extract_method의 ExtractMethod 클래스의 TODO를 참고
  getPrice() {
    return this.getBasePrice() * this.getDiscountFactor();
  }

  getDiscountFactor(): number {
    return (this.getBasePrice() > 1000) ? 0.95 : 0.98;
  }

  getBasePrice(): number {
    return this.quantity * this.itemPrice;
  }
}
