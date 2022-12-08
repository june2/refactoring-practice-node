export class ReplaceMethodWithMethodObject1 {
    private six: number = 6;

    manyTempVariablesExist(seven: number): void {
        const one: number = 1;
        const two: number = 2;
        const three: number = 3;
        const four: number = 4;
        const five: number = 5;

        console.log("one = " + one);
        console.log("two = " + two);
        console.log("three = " + three);
        console.log("four = " + four);
        console.log("five = " + five);
        console.log("six = " + this.six);
        console.log("seven = " + seven);

        const sum = one + two + three + four + five + this.six + seven;
        const average = sum / 7;
        const variation = (Math.pow(one - average, 2) + Math.pow(two - average, 2) + Math.pow(three - average, 2) +
            Math.pow(four - average, 2) + Math.pow(five - average, 2) + Math.pow(this.six - average, 2) +
            Math.pow(seven - average, 2));

        console.log("sum = " + sum);
        console.log("average = " + average);
        console.log("variation = " + variation);
    }
}
