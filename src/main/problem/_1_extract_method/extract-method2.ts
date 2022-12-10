export class ExtractMethod1 {
    private name: string;
    private amounts: Array<number>;

    constructor(name: string, amounts: Array<number>) {
        this.name = name;
        this.amounts = amounts;
    }

    // IDE의 기능을 사용하지 않고 시도해보기
    public printOwing() {
        // A - 지역 변수 없는 경우
        console.log(`*************************`);
        console.log(`***** Customer Owes *****`);
        console.log(`*************************`);

        // B - 지역 변수에 다른 값을 여러 번 대입하는 경우
        let outstanding = 0.0;
        for (let amount of this.amounts) {
            outstanding += amount;
        }

        // C - 지역 변수가 포함되어 있는 경우
        console.log("name : " + this.name);
        console.log("amount : " + outstanding);
    }

}