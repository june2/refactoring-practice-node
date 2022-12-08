import test from "node:test";
import { strict as assert } from "node:assert";
import sinon from 'sinon';
import { ReplaceMethodWithMethodObject1 } from "../../../main/solution/_3_replace_method_with_method_object/_1/replace_method_with_method_object1";

let spy = sinon.spy(console, 'log');

test("계산 결과값 데이터를 출력한다", () => {
    //given    
    const seven = 7;
    const replaceMethodWithMethodObject1 = new ReplaceMethodWithMethodObject1()
    //when
    replaceMethodWithMethodObject1.manyTempVariablesExist(seven);
    //then
    assert.strictEqual(spy.calledWith('one = 1'), true);
    assert.strictEqual(spy.calledWith('two = 2'), true);
    assert.strictEqual(spy.calledWith('three = 3'), true);
    assert.strictEqual(spy.calledWith('four = 4'), true);
    assert.strictEqual(spy.calledWith('five = 5'), true);
    assert.strictEqual(spy.calledWith('six = 6'), true);
    assert.strictEqual(spy.calledWith('seven = 7'), true);
    assert.strictEqual(spy.calledWith('sum = 28'), true);
    assert.strictEqual(spy.calledWith('average = 4'), true);
    assert.strictEqual(spy.calledWith('variation = 28'), true);
});

