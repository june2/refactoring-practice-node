import { MethodObject } from "./methid_object";

export class ReplaceMethodWithMethodObject2 {
    private name: string;
    private amounts: Array<number>;

    constructor(name: string, amounts: Array<number>) {
        this.name = name;
        this.amounts = amounts;
    }

    getName() {
        return this.name;
    }

    getAmounts() {
        return this.amounts;
    }

    printOwing(input1: number, input2: number, input3: number) {
        const methodObject = new MethodObject(this, input1, input2, input3);
        methodObject.printOwing();
    }

}
