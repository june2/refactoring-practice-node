import test from "node:test";
import { strict as assert } from "node:assert";
import sinon from 'sinon';
import { ReplaceTempWithQuery3 } from "../../../main/solution/_2_replace_temp_with_query/replace-temp-with-query3";

let spy = sinon.spy(console, 'log');

test("이름과 금액값 리스트를 입력으로 받을 경우 올바른 출력 확인", () => {
    //given  
    const replaceTempWithQuery3 = new ReplaceTempWithQuery3("Sonny", [1000.0, 2000.0, 3000.0]);
    //when
    replaceTempWithQuery3.printOwing();
    //then       
    assert.strictEqual(spy.calledWith("name : Sonny"), true);
    assert.strictEqual(spy.calledWith("amount1 : 6000"), true);
    assert.strictEqual(spy.calledWith("amount2 : 12000"), true);
    assert.strictEqual(spy.calledWith("amount3 : 18000"), true);
    assert.strictEqual(spy.calledWith("amount4 : 36000"), true);
});
