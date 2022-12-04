import test from "node:test";
import { strict as assert } from "node:assert";
import sinon from 'sinon';
import { ReplaceMethodWithMethodObject2 } from "../../../main/solution/_3_replace_method_with_method_object/_2/replace_method_with_method_object2";

let spy = sinon.spy(console, 'log');

test("Sonny라는 이름과 금액데이터를 입력받았을 때, 금액에 맞는 데이터를 출력한다", () => {
    //given  
    const replaceMethodWithMethodObject = new ReplaceMethodWithMethodObject2("Sonny", [1000.0, 2000.0, 3000.0]);
    //when
    const input1 = 10000;
    const input2 = 20000;
    const input3 = 30000;
    replaceMethodWithMethodObject.printOwing(input1, input2, input3);
    //then       
    assert.strictEqual(spy.calledWith("name : Sonny"), true);
    assert.strictEqual(spy.calledWith("amount1 : 36000"), true);
    assert.strictEqual(spy.calledWith("amount2 : 72000"), true);
    assert.strictEqual(spy.calledWith("amount3 : 108000"), true);
    assert.strictEqual(spy.calledWith("amount4 : 216000"), true);
});
