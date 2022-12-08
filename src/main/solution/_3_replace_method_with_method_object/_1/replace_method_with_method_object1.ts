import { MethodObject } from "./MethodObject";

export class ReplaceMethodWithMethodObject1 {
    private six: number = 6;

    manyTempVariablesExist(seven: number): void {
        new MethodObject(this, seven).manyTempVariablesExist();
    }

    getSix(): number {
        return this.six;
    }
}
