export class ReplaceMethodWithMethodObject2 {
    private name: string;
    private amounts: Array<number>;

    constructor(name: string, amounts: Array<number>) {
        this.name = name;
        this.amounts = amounts;
    }


    //TODO: 다음의 메소드를 메소드 객체로 전환하기(1판 - Replace Method with Method Object, 2판 - Replace Function with Command)
    //메소드설명 : 지역변수가 여러개 존재하고 변경되는 케이스를 만든 것 (ReplaceTempWithQuery3 과 동일)
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

        console.log("name : " + this.name);
        console.log("amount1 : " + outstanding1);
        console.log("amount2 : " + outstanding2);
        console.log("amount3 : " + outstanding3);
        console.log("amount4 : " + outstanding4);
    }

}
