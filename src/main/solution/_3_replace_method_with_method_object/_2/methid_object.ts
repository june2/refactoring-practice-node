import { ReplaceMethodWithMethodObject2 } from "./replace_method_with_method_object2";

export class MethodObject {
    private source: ReplaceMethodWithMethodObject2;
    private input1: number;
    private input2: number;
    private input3: number;

    constructor(source: ReplaceMethodWithMethodObject2, input1: number, input2: number, input3: number) {
        this.source = source;
        this.input1 = input1;
        this.input2 = input2;
        this.input3 = input3;
    }

    printOwing(): void {
        console.log("name : " + this.source.getName());
        console.log("amount1 : " + this.getOutstanding1());
        console.log("amount2 : " + this.getOutstanding2());
        console.log("amount3 : " + this.getOutstanding3());
        console.log("amount4 : " + this.getOutstanding4());
    }

    getOutstanding4(): number {
        return this.getOutstanding1() + this.getOutstanding2() + this.getOutstanding3();
    }

    getOutstanding1(): number {
        let result = 0.0;
        this.source.getAmounts().forEach(amount => {
            result += this.input1 + amount;
        })
        return result;
    }

    getOutstanding2() {
        let result = 0.0;
        this.source.getAmounts().forEach(amount => {
            result += this.input2 + amount * 2;
        })
        return result;
    }

    getOutstanding3() {
        let result = 0.0;
        this.source.getAmounts().forEach(amount => {
            result += this.input3 + amount * 3;
        })
        return result;
    }
}
