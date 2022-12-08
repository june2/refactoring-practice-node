import { ReplaceMethodWithMethodObject3 } from "./replace_method_with_method_object3";

export class Gamma {
    private account: ReplaceMethodWithMethodObject3;
    private yearToDate: number;
    private importantValue1: number;
    private importantValue2: number;
    private importantValue3: number;

    constructor(account: ReplaceMethodWithMethodObject3, inputVal: number, quantity: number, yearToDate: number) {
        this.account = account;
        this.yearToDate = yearToDate;
        this.importantValue1 = (inputVal * quantity) + this.account.getDelta();
        this.importantValue2 = (inputVal * yearToDate) + 100;
        this.importantValue3 = this.importantThing() * 7;
    }

    compute(): number {
        return this.importantValue3 - 2 * this.importantValue1;
    }

    importantThing(): number {
        if ((this.yearToDate - this.importantValue1) > 100) {
            this.importantValue2 -= 20;
        }
        return this.importantValue2;
    }
}