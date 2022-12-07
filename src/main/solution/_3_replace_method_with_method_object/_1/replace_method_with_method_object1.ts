export class ReplaceMethodWithMethodObject1 {
    private delta: number;

    constructor(delta: number) {
        this.delta = delta;
    }

    //TODO: 다음의 메소드를 메소드 객체로 전환하기(1판 - Replace Method with Method Object, 2판 - Replace Function with Command)
	//메소드설명 : 메소드에 인자, 지역변수가 여러개 존재하고, 지역변수가 변경되는 경우를 만든 것
    gamma(inputVal: number, quantity: number, yearToDate: number) {
        let importantValue1: number = (inputVal * quantity) + this.getDelta();
        let importantValue2: number = (inputVal * yearToDate) + 100;
        if ((yearToDate - importantValue1) > 100) {
            importantValue2 -= 20;
        }

        let importantValue3 = importantValue2 * 7;

        return importantValue3 - 2 * importantValue1;
    }

    getDelta() {
        return this.delta;
    }
}
