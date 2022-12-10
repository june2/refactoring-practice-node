import test from "node:test";
import { strict as assert } from "node:assert";
import sinon from 'sinon';
import { ExtractMethod1 } from "../../../main/solution/_1_extract_method/extract-method1";

let spy = sinon.spy(console, 'log');

test("이름과 금액값 리스트를 입력으로 받을 경우 올바른 출력 확인", () => {
  //given  
  const extractMethod1 = new ExtractMethod1("Sonny", [1000.0, 2000.0, 3000.0]);
  //when
  extractMethod1.printOwing();
  //then   
  assert.strictEqual(spy.calledWith('*************************'), true);
  assert.strictEqual(spy.calledWith('***** Customer Owes *****'), true);
  assert.strictEqual(spy.calledWith('*************************'), true);
  assert.strictEqual(spy.calledWith("name : Sonny"), true);
  assert.strictEqual(spy.calledWith("amount : 6000"), true);
});

