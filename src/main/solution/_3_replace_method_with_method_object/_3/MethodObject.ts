import { ReplaceMethodWithMethodObject1 } from "./replace_method_with_method_object3";

export class MethodObject {
    private replaceMethodWithMethodObject1: ReplaceMethodWithMethodObject1;

    private one: number = 1;
    private two: number = 2;
    private three: number = 3;
    private four: number = 4;
    private five: number = 5;
    private seven: number;

    constructor(replaceMethodWithMethodObject1: ReplaceMethodWithMethodObject1, seven: number) {
        this.replaceMethodWithMethodObject1 = replaceMethodWithMethodObject1;
        this.seven = seven;
    }

    manyTempVariablesExist(): void {
        this.printNumber();
        this.printCalculationResult();
    }

    private printCalculationResult(): void {
        console.log("sum = " + this.getSum());
        console.log("average = " + this.getAverage());
        console.log("variation = " + this.getVariation());
    }

    private getVariation(): number {
        return (Math.pow(this.one - this.getAverage(), 2) + Math.pow(this.two - this.getAverage(), 2) + Math.pow(this.three - this.getAverage(), 2) +
            Math.pow(this.four - this.getAverage(), 2) + Math.pow(this.five - this.getAverage(), 2) + Math.pow(this.replaceMethodWithMethodObject1.getSix() - this.getAverage(), 2) +
            Math.pow(this.seven - this.getAverage(), 2))
    }

    private getAverage(): number {
        return this.getSum() / 7;
    }

    private getSum(): number {
        return this.one + this.two + this.three + this.four + this.five + this.replaceMethodWithMethodObject1.getSix() + this.seven;
    }

    private printNumber(): void {
        console.log("one = " + this.one);
        console.log("two = " + this.two);
        console.log("three = " + this.three);
        console.log("four = " + this.four);
        console.log("five = " + this.five);
        console.log("six = " + this.replaceMethodWithMethodObject1.getSix());
        console.log("seven = " + this.seven);
    }
}
