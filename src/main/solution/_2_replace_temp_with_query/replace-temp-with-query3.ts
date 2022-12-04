export class ReplaceTempWithQuery3 {
  private name: string;
  private amounts: Array<number>;

  constructor(name: string, amounts: Array<number>) {
    this.name = name;
    this.amounts = amounts;
  }

  //TODO: 메소드 추출할 때 지역변수가 두 개 이상일 경우 연습문제
  // 1. printOwing메소드에 대해 테스트 케이스 작성
  // 2. outstanding1 ~ 4 까지 변수의 최종값에 대한 질의함수 만들기
  // 3. 2에서 만든 질의함수를 사용하여 임시변수(지역변수)를 제거
  // 4. 표준출력문만 남겨보기
  getPrice() {
    let outstanding1: number = 0.0;
    let outstanding2: number = 0.0;
    let outstanding3: number = 0.0;
    let outstanding4: number = 0.0;

    this.amounts.forEach(amount => {
      outstanding1 += amount;
      outstanding2 += amount * 2;
      outstanding3 += amount * 3;
    })
    outstanding4 += outstanding1 + outstanding2 + outstanding3;

    console.log("name : " + name);
    console.log("amount1 : " + outstanding1);
    console.log("amount2 : " + outstanding2);
    console.log("amount3 : " + outstanding3);
    console.log("amount4 : " + outstanding4);
  }
}
