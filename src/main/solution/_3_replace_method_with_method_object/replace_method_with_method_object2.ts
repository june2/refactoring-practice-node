export class ReplaceMethodWithMethodObject2 {
    private name: string;
    private amounts: Array<number>;

    constructor(name: string, amounts: Array<number>) {
        this.name = name;
        this.amounts = amounts;
    }


    //TODO: 다음의 메소드를 메소드 객체로 전환하기(1판 - Replace Method with Method Object, 2판 - Replace Function with Command)
    // 1. printOwing 메소드에 대한 테스트 코드 작성
    // 2. 메소드의 이름을 따서 새로운 클래스(MethodObject) 생성
    // 3. 새롭게 생성한 클래스에, ReplaceMethodWithMethodObject2 객체를 담을 final 변수를 선언
    // 4. 아래의 printOwing함수에서 사용되는 임시변수와 인자에 사용되는 모든 변수를 새롭게 만든 MethodObject 클래스에 선언
    //    - (선택) printOwing함수에서 사용되는 임시변수를 Replace Temp with Query를 사용하여 제거 가능
    // 5. MethodObject 클래스에 MethodObject(ReplaceMethodWithMethodObject2 source, double input1, double input2, double input3)와 같이
    //    printOwing 메소드의 인자들과, ReplaceMethodWithMethodObject2를 참조할 수 있는 생성자 만들기
    // 6. 새롭게 만든 MethodObject 클래스에 printOwing 메소드를 만들고 아래 메소드 코드를 복사하고 붙여넣기
    // 7. 새롭게 만든 MethodObject 클래스에 printOwing 인자를 비롯, 메소드내 불필요한 변수는 제거하고, 클래스 필드를 사용하도록 수정
    //    - ReplaceMethodWithMethodObject2의 필드를 접근할 수 있는 getter 생성
    // 8. 아래의 printOwing 메소드에서는 새로운 클래스의 객체의 compute메소드를 호출하도록 변경
    printOwing(input1: number, input2: number, input3: number) {
        let outstanding1: number = 0.0;
        let outstanding2: number = 0.0;
        let outstanding3: number = 0.0;
        let outstanding4: number = 0.0;

        this.amounts.forEach(amount => {
            outstanding1 += input1 + amount;
            outstanding2 += input2 + amount * 2;
            outstanding3 += input3 + amount * 3;
        })
        outstanding4 += outstanding1 + outstanding2 + outstanding3;

        console.log("name : " + name);
        console.log("amount1 : " + outstanding1);
        console.log("amount2 : " + outstanding2);
        console.log("amount3 : " + outstanding3);
        console.log("amount4 : " + outstanding4);
    }

}
