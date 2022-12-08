import { Gamma } from "./gamma";

export class ReplaceMethodWithMethodObject3 {
    private delta: number;

    constructor(delta: number) {
        this.delta = delta;
    }

    gamma(inputVal: number, quantity: number, yearToDate: number) {
        return new Gamma(this, inputVal, quantity, yearToDate).compute();
    }

    getDelta() {
        return this.delta;
    }
}

